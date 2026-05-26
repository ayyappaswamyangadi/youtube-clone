"use strict";

/* ═══════════════════════════════════════════
   youtube-api.js  —  YouTube Data API v3 helpers
   ═══════════════════════════════════════════ */

// ─── DURATION PARSER ──────────────────────────────────────────────────────
function parseDuration(iso) {
  if (!iso || iso === "P0D") return "0:00";
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "0:00";
  const h = parseInt(m[1] || 0);
  const min = parseInt(m[2] || 0);
  const sec = parseInt(m[3] || 0);
  const ss = String(sec).padStart(2, "0");
  if (h > 0) return `${h}:${String(min).padStart(2, "0")}:${ss}`;
  return `${min}:${ss}`;
}

// ─── VIEW COUNT FORMATTER ─────────────────────────────────────────────────
function formatViews(n) {
  const num = parseInt(n || 0);
  if (isNaN(num)) return "0";
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return String(num);
}

// ─── RELATIVE TIME ────────────────────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const s = diff / 1000;
  if (s < 60) return "just now";
  const m = s / 60;
  if (m < 60)
    return `${Math.floor(m)} minute${Math.floor(m) !== 1 ? "s" : ""} ago`;
  const h = m / 60;
  if (h < 24)
    return `${Math.floor(h)} hour${Math.floor(h) !== 1 ? "s" : ""} ago`;
  const d = h / 24;
  if (d < 7) return `${Math.floor(d)} day${Math.floor(d) !== 1 ? "s" : ""} ago`;
  const w = d / 7;
  if (w < 4)
    return `${Math.floor(w)} week${Math.floor(w) !== 1 ? "s" : ""} ago`;
  const mo = d / 30;
  if (mo < 12)
    return `${Math.floor(mo)} month${Math.floor(mo) !== 1 ? "s" : ""} ago`;
  const y = d / 365;
  return `${Math.floor(y)} year${Math.floor(y) !== 1 ? "s" : ""} ago`;
}

// ─── BASE FETCH ───────────────────────────────────────────────────────────
async function ytFetch(endpoint, params) {
  params.set("key", YT_CONFIG.API_KEY);
  const url = `${YT_CONFIG.BASE_URL}/${endpoint}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── HOME / POPULAR VIDEOS ────────────────────────────────────────────────
async function fetchHomeVideos(pageToken = "", categoryId = "") {
  const p = new URLSearchParams({
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    regionCode: YT_CONFIG.REGION,
    maxResults: "24",
  });
  if (pageToken) p.set("pageToken", pageToken);
  if (categoryId) p.set("videoCategoryId", categoryId);
  const data = await ytFetch("videos", p);
  return {
    items: (data.items || []).map(mapVideoItem),
    nextPageToken: data.nextPageToken || null,
  };
}

// ─── SHORTS ───────────────────────────────────────────────────────────────
async function fetchShorts(pageToken = "") {
  // search.list to get short-duration videos (<=60s)
  const p = new URLSearchParams({
    part: "snippet",
    type: "video",
    videoDuration: "short",
    maxResults: "10",
    order: "viewCount",
    regionCode: YT_CONFIG.REGION,
  });
  if (pageToken) p.set("pageToken", pageToken);
  const data = await ytFetch("search", p);
  if (!data.items?.length) return { items: [], nextPageToken: null };

  // Fetch view counts via videos.list
  const ids = data.items.map((i) => i.id.videoId).join(",");
  const details = await ytFetch(
    "videos",
    new URLSearchParams({ part: "statistics", id: ids, maxResults: "10" }),
  );
  const statsMap = {};
  (details.items || []).forEach((v) => {
    statsMap[v.id] = v.statistics;
  });

  return {
    items: data.items.map((item) =>
      mapShortItem(item, statsMap[item.id.videoId]),
    ),
    nextPageToken: data.nextPageToken || null,
  };
}

// ─── SEARCH ───────────────────────────────────────────────────────────────
async function searchVideos(query, pageToken = "") {
  const p = new URLSearchParams({
    part: "snippet",
    q: query,
    type: "video",
    maxResults: "20",
  });
  if (pageToken) p.set("pageToken", pageToken);
  const data = await ytFetch("search", p);
  if (!data.items?.length) return { items: [], nextPageToken: null };

  // Enrich with contentDetails + statistics
  const ids = data.items.map((i) => i.id.videoId).join(",");
  const details = await ytFetch(
    "videos",
    new URLSearchParams({
      part: "contentDetails,statistics",
      id: ids,
      maxResults: "20",
    }),
  );
  const detailsMap = {};
  (details.items || []).forEach((v) => {
    detailsMap[v.id] = v;
  });

  return {
    items: data.items.map((item) =>
      mapSearchItem(item, detailsMap[item.id.videoId]),
    ),
    nextPageToken: data.nextPageToken || null,
  };
}

// ─── SEARCH SUGGESTIONS ───────────────────────────────────────────────────
// Returns an array of { text, videoId } for the dropdown
async function fetchSuggestions(query) {
  const p = new URLSearchParams({
    part: "snippet",
    q: query,
    type: "video",
    maxResults: "6",
  });
  const data = await ytFetch("search", p);
  return (data.items || []).map((item) => ({
    text: item.snippet.title,
    videoId: item.id.videoId,
  }));
}

// ─── DATA MAPPERS ─────────────────────────────────────────────────────────

/** Maps a videos.list item (chart=mostPopular) → our card format */
function mapVideoItem(item) {
  const id = item.id;
  const s = item.snippet || {};
  const cd = item.contentDetails || {};
  const st = item.statistics || {};
  const isLive = s.liveBroadcastContent === "live";
  return {
    id,
    title: s.title || "",
    channel: s.channelTitle || "",
    channelId: s.channelId || "",
    avatar: `https://picsum.photos/seed/${s.channelId || id}/36/36`,
    subs: "",
    views: formatViews(st.viewCount) + " views",
    viewCount: parseInt(st.viewCount || 0),
    likes: formatViews(st.likeCount),
    likeCount: parseInt(st.likeCount || 0),
    comments: st.commentCount || "0",
    age: timeAgo(s.publishedAt),
    duration: isLive ? "LIVE" : parseDuration(cd.duration || "PT0S"),
    isLive,
    cat: "all",
    verified: false,
    // Use real YouTube thumbnail
    thumb: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    desc: s.description || "",
    tags: [],
    _fromApi: true,
  };
}

/** Maps a search.list item + optional videos.list details → our card format */
function mapSearchItem(item, details) {
  const id = item.id.videoId;
  const s = item.snippet || {};
  const cd = details?.contentDetails || {};
  const st = details?.statistics || {};
  const isLive = s.liveBroadcastContent === "live";
  return {
    id,
    title: s.title || "",
    channel: s.channelTitle || "",
    channelId: s.channelId || "",
    avatar: `https://picsum.photos/seed/${s.channelId || id}/36/36`,
    subs: "",
    views: formatViews(st.viewCount) + " views",
    viewCount: parseInt(st.viewCount || 0),
    likes: formatViews(st.likeCount),
    likeCount: parseInt(st.likeCount || 0),
    comments: st.commentCount || "0",
    age: timeAgo(s.publishedAt),
    duration: isLive ? "LIVE" : parseDuration(cd.duration || "PT0S"),
    isLive,
    cat: "all",
    verified: false,
    thumb: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    desc: s.description || "",
    tags: [],
    _fromApi: true,
  };
}

/** Maps a search.list item (short) + optional statistics → shorts shelf format */
function mapShortItem(item, stats) {
  const id = item.id.videoId;
  const s = item.snippet || {};
  const st = stats || {};
  return {
    id,
    title: s.title || "",
    views: formatViews(st.viewCount) + " views",
    duration: "< 1 min",
    thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    _fromApi: true,
  };
}

// ─── CATEGORY ID MAP ──────────────────────────────────────────────────────
// Maps our chip/sidebar filter names → YouTube videoCategoryId
const YT_CATEGORY_IDS = {
  music: "10",
  gaming: "20",
  sports: "17",
  news: "25",
  science: "28",
  comedy: "23",
  travel: "19",
  autos: "2",
  movies: "1",
  fitness: "26",
  fashion: "26",
  coding: "28",
  tech: "28",
  podcasts: "22",
  anime: "1",
  live: "25",
};
