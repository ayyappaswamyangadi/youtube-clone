"use strict";

/* ──────────────── DATA ──────────────── */

const VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "iPhone 17 Pro Max Review — It Finally Changed Everything",
    channel: "MKBHDs",
    avatar: "https://picsum.photos/seed/mkbhd/36/36",
    subs: "18.2M",
    views: "4.2M views",
    age: "3 days ago",
    duration: "18:42",
    cat: "tech",
    progress: 35,
    verified: true,
    desc: "The iPhone 17 Pro Max is here and it changes everything we knew about smartphone photography. In this deep dive, I cover the new titanium design, A19 Bionic chip, and the revolutionary 5x periscope zoom system.\n\nChapters:\n0:00 Intro\n2:10 Design & Build Quality\n5:30 Display\n8:00 Camera System\n12:40 Performance\n15:00 Battery Life\n17:00 Final Verdict",
    tags: ["#iPhone17", "#Apple", "#TechReview"],
  },
  {
    id: "aircAruvnKk",
    title: "Neural Networks Explained — Visual Guide for 2026",
    channel: "3Blue1Brown",
    avatar: "https://picsum.photos/seed/3b1b/36/36",
    subs: "5.9M",
    views: "2.1M views",
    age: "1 week ago",
    duration: "21:14",
    cat: "coding",
    verified: true,
    desc: "A deep visual exploration of how neural networks learn — from single neurons to transformers. This video uses intuitive animations to explain backpropagation, gradient descent, and modern architectures.",
    tags: ["#ML", "#AI", "#NeuralNetworks"],
  },
  {
    id: "HyTbggiohhc",
    title: "I Survived 100 Days in Antarctica with No Equipment",
    channel: "MrBeast",
    avatar: "https://picsum.photos/seed/mrbeast/36/36",
    subs: "320M",
    views: "89M views",
    age: "5 days ago",
    duration: "25:30",
    cat: "comedy",
    progress: 72,
    verified: true,
    desc: "In this video I literally tried to survive 100 days in the coldest place on Earth. What happened was absolutely insane.",
    tags: ["#MrBeast", "#Challenge", "#100Days"],
  },
  {
    id: "kosggg7z3GQ",
    title: "Beautiful Solo Acoustic Guitar — 1 Hour Relaxing Music",
    channel: "Relax Tunes",
    avatar: "https://picsum.photos/seed/relax/36/36",
    subs: "2.4M",
    views: "12M views",
    age: "2 weeks ago",
    duration: "1:02:14",
    cat: "music",
    verified: false,
    desc: "One hour of soothing acoustic guitar music perfect for studying, relaxing, or sleeping.",
    tags: ["#AcousticGuitar", "#RelaxingMusic", "#Study"],
  },
  {
    id: "ysz5S6PUM-U",
    title: "World Cup 2026 Final Highlights — Epic Final 90 Minutes",
    channel: "FIFA Official",
    avatar: "https://picsum.photos/seed/fifa/36/36",
    subs: "14M",
    views: "55M views",
    age: "2 weeks ago",
    duration: "45:00",
    cat: "sports",
    verified: true,
    desc: "Full highlights of the 2026 FIFA World Cup Final. An incredible match that will go down in history.",
    tags: ["#WorldCup2026", "#FIFA", "#Football"],
  },
  {
    id: "TXZTzZXTFDI",
    title: "My Tokyo Trip Cost Less Than You Think — Full Budget Breakdown",
    channel: "Lost LeBlanc",
    avatar: "https://picsum.photos/seed/travel/36/36",
    subs: "1.8M",
    views: "3.6M views",
    age: "4 days ago",
    duration: "14:28",
    cat: "travel",
    verified: true,
    desc: "Full breakdown of my 10-day Japan trip including flights, hotels, food, and activities. Spoiler: it was way cheaper than I expected!",
    tags: ["#Tokyo", "#Japan", "#BudgetTravel"],
  },
  {
    id: "rfscVS0vtbw",
    title: "React 19 — Every New Feature Explained in 12 Minutes",
    channel: "Fireship",
    avatar: "https://picsum.photos/seed/fireship/36/36",
    subs: "2.5M",
    views: "1.9M views",
    age: "6 days ago",
    duration: "12:07",
    cat: "coding",
    verified: true,
    desc: "React 19 ships with the most dramatic changes since hooks. Server Components, the new compiler, Actions, and much more. Let's break it all down.",
    tags: ["#React19", "#JavaScript", "#WebDev"],
  },
  {
    id: "LnJwH_PZXnM",
    title: "Cooking 10 Meals That Will Last a Whole Week — Meal Prep",
    channel: "Joshua Weissman",
    avatar: "https://picsum.photos/seed/cook/36/36",
    subs: "8.1M",
    views: "7.2M views",
    age: "3 days ago",
    duration: "22:15",
    cat: "cooking",
    verified: true,
    desc: "The ultimate meal prep guide. 10 delicious, healthy meals you can make in one Sunday afternoon for the whole week.",
    tags: ["#MealPrep", "#Cooking", "#HealthyEating"],
  },
  {
    id: "5C-s4JrymKM",
    title: "Lex Fridman Podcast #450 — Sam Altman on AGI Timeline",
    channel: "Lex Fridman",
    avatar: "https://picsum.photos/seed/lex/36/36",
    subs: "4.2M",
    views: "8.9M views",
    age: "1 day ago",
    duration: "3:12:44",
    cat: "podcasts",
    verified: true,
    desc: "Sam Altman returns to discuss the latest developments at OpenAI, his personal views on AGI timelines, and what happens to humanity afterward.",
    tags: ["#LexFridman", "#SamAltman", "#AGI"],
  },
  {
    id: "__7eE3OEWg0",
    title: "Street Fashion Week Highlights — New York 2026",
    channel: "Hypebeast",
    avatar: "https://picsum.photos/seed/fashion/36/36",
    subs: "3.4M",
    views: "1.1M views",
    age: "5 days ago",
    duration: "8:32",
    cat: "fashion",
    verified: true,
    desc: "The best streetwear looks from New York Fashion Week 2026 — what people are actually wearing outside the shows.",
    tags: ["#StreetFashion", "#NYFW", "#Streetwear"],
  },
  {
    id: "i6eDymQpqoE",
    title: "Breaking News: Major Earthquake Hits Pacific Rim — Live Updates",
    channel: "CNN International",
    avatar: "https://picsum.photos/seed/cnn/36/36",
    subs: "9.8M",
    views: "14M views",
    age: "2 hours ago",
    duration: "LIVE",
    cat: "news",
    verified: true,
    isLive: true,
    desc: "Live coverage of the 7.8 magnitude earthquake that struck the Pacific Rim region. Stay tuned for updates.",
    tags: ["#BreakingNews", "#Earthquake", "#CNN"],
  },
  {
    id: "HVnsRBv5Dog",
    title: "Elden Ring Shadow of the Erdtree — Every Secret Revealed",
    channel: "VaatiVidya",
    avatar: "https://picsum.photos/seed/vaati/36/36",
    subs: "2.1M",
    views: "6.4M views",
    age: "1 week ago",
    duration: "35:22",
    cat: "gaming",
    verified: true,
    desc: "The complete lore breakdown of Elden Ring's massive DLC. Every secret NPC quest, hidden boss, and story beat explained.",
    tags: ["#EldenRing", "#Soulsborne", "#GameLore"],
  },
  {
    id: "eVTXPUF4Oz4",
    title: "Black Hole Photographed for the First Time — What It Means",
    channel: "Veritasium",
    avatar: "https://picsum.photos/seed/veritasium/36/36",
    subs: "17M",
    views: "22M views",
    age: "3 weeks ago",
    duration: "16:45",
    cat: "science",
    verified: true,
    desc: "Scientists have captured the first ever direct image of a black hole. I sat down with the lead researcher to explain exactly what we are seeing.",
    tags: ["#BlackHole", "#Physics", "#Science"],
  },
  {
    id: "9jK-NcRmVcw",
    title: "Building a SaaS in 24 Hours — Full Process Documented",
    channel: "Theo - t3.gg",
    avatar: "https://picsum.photos/seed/theo/36/36",
    subs: "520K",
    views: "890K views",
    age: "2 days ago",
    duration: "28:44",
    cat: "coding",
    verified: true,
    desc: "I tried to build and ship a complete SaaS product in just 24 hours. Full stack React, Next.js, Stripe, and Prisma. Here is what happened.",
    tags: ["#SaaS", "#BuildInPublic", "#NextJS"],
  },
  {
    id: "fHY8EHbRK3A",
    title: "Fastest Electric Cars of 2026 — 0-100 Drag Race",
    channel: "carwow",
    avatar: "https://picsum.photos/seed/carwow/36/36",
    subs: "11M",
    views: "18M views",
    age: "4 days ago",
    duration: "10:14",
    cat: "autos",
    verified: true,
    desc: "We lined up the top 5 fastest production EVs of 2026 for a drag race. The results will absolutely shock you.",
    tags: ["#ElectricCar", "#DragRace", "#EV"],
  },
  {
    id: "4yVF98cFAfE",
    title: "Attack on Titan Final Season — Complete Breakdown",
    channel: "AnimeUproar",
    avatar: "https://picsum.photos/seed/anime/36/36",
    subs: "1.3M",
    views: "3.4M views",
    age: "6 days ago",
    duration: "44:10",
    cat: "anime",
    verified: false,
    desc: "The complete analysis and ending explanation of Attack on Titan. Warning: MASSIVE spoilers throughout.",
    tags: ["#AttackOnTitan", "#Anime", "#AoT"],
  },
  {
    id: "tXL4I2cX6v8",
    title: "How to Lose 10kg Without Going to the Gym",
    channel: "Jeff Nippard",
    avatar: "https://picsum.photos/seed/jeff/36/36",
    subs: "4.9M",
    views: "9.1M views",
    age: "1 week ago",
    duration: "15:02",
    cat: "fitness",
    verified: true,
    desc: "Science-backed strategies for losing weight without ever setting foot in a gym. NEAT, diet composition, and daily habits explained.",
    tags: ["#WeightLoss", "#Fitness", "#Health"],
  },
  {
    id: "UGsD_NMoUwM",
    title: "India vs Australia — T20 World Cup 2026 Full Match",
    channel: "Star Sports",
    avatar: "https://picsum.photos/seed/star/36/36",
    subs: "22M",
    views: "41M views",
    age: "2 days ago",
    duration: "3:45:00",
    cat: "sports",
    verified: true,
    isLive: false,
    desc: "Full match replay of the T20 World Cup 2026 clash between India and Australia.",
    tags: ["#Cricket", "#T20WorldCup", "#India"],
  },
];

const SHORTS_DATA = [
  {
    id: "sh1",
    title: "This trick makes coffee 10x better ☕",
    views: "12M views",
    duration: "0:45",
    thumb: `https://picsum.photos/seed/sh1/300/533`,
  },
  {
    id: "sh2",
    title: "Building entire PC in 60 seconds ⚡",
    views: "8.4M views",
    duration: "0:58",
    thumb: `https://picsum.photos/seed/sh2/300/533`,
  },
  {
    id: "sh3",
    title: "The scariest bug I've ever seen 🐛",
    views: "5.1M views",
    duration: "0:30",
    thumb: `https://picsum.photos/seed/sh3/300/533`,
  },
  {
    id: "sh4",
    title: "Perfect ramen in 3 minutes 🍜",
    views: "22M views",
    duration: "0:55",
    thumb: `https://picsum.photos/seed/sh4/300/533`,
  },
  {
    id: "sh5",
    title: "Optical illusion breaks your brain 🤯",
    views: "47M views",
    duration: "0:14",
    thumb: `https://picsum.photos/seed/sh5/300/533`,
  },
  {
    id: "sh6",
    title: "Dog learned to open the fridge 🐶",
    views: "91M views",
    duration: "0:23",
    thumb: `https://picsum.photos/seed/sh6/300/533`,
  },
  {
    id: "sh7",
    title: "Coding a game in 30 seconds 💻",
    views: "6.2M views",
    duration: "0:28",
    thumb: `https://picsum.photos/seed/sh7/300/533`,
  },
  {
    id: "sh8",
    title: "Marathon world record attempt 🏃",
    views: "14M views",
    duration: "0:52",
    thumb: `https://picsum.photos/seed/sh8/300/533`,
  },
];

const SUGGESTIONS = [
  "react tutorial 2026",
  "javascript crash course",
  "machine learning beginners",
  "cooking pasta perfectly",
  "world cup 2026 highlights",
  "relaxing music study",
  "mrbeast latest video",
  "iphone 17 pro review",
];

const COMMENTS_DATA = [
  {
    avatar: "https://picsum.photos/seed/c1/36/36",
    name: "@TechEnthusiast_Dev",
    time: "2 days ago",
    text: "This is honestly the best tech review I've watched this year. The depth and detail is unmatched. 🔥",
    likes: "4.2K",
  },
  {
    avatar: "https://picsum.photos/seed/c2/36/36",
    name: "@Sarah_Creates",
    time: "1 day ago",
    text: "The camera comparison at 8:00 is 🤯 I never realized how much the computational photography has improved.",
    likes: "1.8K",
  },
  {
    avatar: "https://picsum.photos/seed/c3/36/36",
    name: "@CodeWithKunal",
    time: "3 hours ago",
    text: "Just ordered mine after watching this. No regrets. Thanks for the honest breakdown!",
    likes: "934",
  },
  {
    avatar: "https://picsum.photos/seed/c4/36/36",
    name: "@PhilosophyBro99",
    time: "5 hours ago",
    text: "The way you explain complex topics in such an accessible way is a rare talent. Keep it up!",
    likes: "622",
  },
  {
    avatar: "https://picsum.photos/seed/c5/36/36",
    name: "@TravelDiariesIndia",
    time: "18 hours ago",
    text: "Been waiting for this video for so long. Didn't disappoint. Subscribed!",
    likes: "411",
  },
];

/* ──────────────── DEFAULT HOME QUERY ──────────────── */
const DEFAULT_HOME_QUERY = "kannada new songs";

/* ──────────────── STATE ──────────────── */
let sidebarState = "expanded"; // 'expanded' | 'mini' | 'hidden'
let activeChip = "all";
let currentVideoId = null;
let currentShortIdx = 0;
let ctxTargetCard = null;
let isDark = false;

/* ──────────────── API STATE ──────────────── */
let videos = []; // current video list shown in grid
let shortsData = []; // current shorts list shown in shelf
let nextPageToken = null; // for infinite scroll / load more
let currentCategory = ""; // active videoCategoryId (empty = all)
let currentQuery = ""; // active search query
let isApiLoading = false; // prevent duplicate requests

/* ──────────────── ELEMENTS ──────────────── */
const $ = (id) => document.getElementById(id);
const hamburgerBtn = $("hamburger-btn");
const sidebar = $("sidebar");
const sidebarMini = $("sidebar-mini");
const sidebarDrawer = $("sidebar-drawer");
const sidebarOverlay = $("sidebar-overlay");
const mainContent = $("main-content");
const themeToggle = $("theme-toggle");
const themeIcon = $("theme-icon");
const searchInput = $("search-input");
const searchSubmit = $("search-submit-btn");
const searchSuggestions = $("search-suggestions");
const videoGrid = $("video-grid");
const shortsRow = $("shorts-row");
const chipsScroll = $("chips-scroll");
const chipsLeft = $("chips-left");
const chipsRight = $("chips-right");
const notifBtn = $("notif-btn");
const notifPanel = $("notif-panel");
const avatarBtn = $("avatar-btn");
const accountMenu = $("account-menu");
const ctxMenu = $("ctx-menu");
const videoModalOverlay = $("video-modal-overlay");
const modalIframe = $("modal-iframe");
const modalCloseBtn = $("modal-close-btn");
const upNextList = $("up-next-list");
const commentsList = $("comments-list");
const descToggle = $("description-toggle");
const descFull = $("description-full");
const modalSubBtn = $("modal-sub-btn");
const shortsViewerOverlay = $("shorts-viewer-overlay");
const shortsStack = $("shorts-stack");
const shortsClose = $("shorts-close");
const shortsPrev = $("shorts-prev");
const shortsNext = $("shorts-next");

/* ──────────────── INIT ──────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderSkeletons();
  // Load home page with Kannada new songs on first visit
  currentQuery = DEFAULT_HOME_QUERY;
  loadSearchResults(DEFAULT_HOME_QUERY); // initial home feed
  loadShorts(); // fetch real shorts from YouTube API

  initSidebar();
  initChips();
  initSearch();
  initTheme();
  initNavbar();
  initModalClose();
  initCtxMenu();
  initShortsViewer();
  injectDrawerNav();
  updateChipScrollBtns();
  initInfiniteScroll(); // load more on scroll
});

/* ──────────────── API LOADERS ──────────────── */

async function loadHomeVideos(pageToken = "", categoryId = "") {
  if (isApiLoading) return;
  isApiLoading = true;
  try {
    const { items, nextPageToken: npt } = await fetchHomeVideos(
      pageToken,
      categoryId,
    );
    if (pageToken) {
      // Append more cards without re-rendering the whole grid
      videos = [...videos, ...items];
      appendVideoCards(items);
    } else {
      videos = items;
      renderVideos(videos);
    }
    nextPageToken = npt;
  } catch (err) {
    console.warn("YouTube API error (home):", err.message);
    // Fall back to static data on first load
    if (!pageToken && !videos.length) {
      videos = [...VIDEOS];
      renderVideos(videos);
    }
  } finally {
    isApiLoading = false;
    removeLoadMoreSpinner();
  }
}

async function loadShorts() {
  try {
    const { items } = await fetchShorts();
    if (items.length) {
      shortsData = items;
      renderShorts();
    } else {
      // fallback to static
      shortsData = [...SHORTS_DATA];
      renderShorts();
    }
  } catch (err) {
    console.warn("YouTube API error (shorts):", err.message);
    shortsData = [...SHORTS_DATA];
    renderShorts();
  }
}

/* ──────────────── INFINITE SCROLL ──────────────── */

function initInfiniteScroll() {
  // Create a sentinel element after the video grid
  const sentinel = document.createElement("div");
  sentinel.id = "scroll-sentinel";
  sentinel.style.cssText = "height:1px;width:100%;";
  videoGrid.after(sentinel);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && nextPageToken && !isApiLoading) {
        showLoadMoreSpinner();
        if (currentQuery) {
          loadSearchResults(currentQuery, nextPageToken, true);
        } else {
          loadHomeVideos(nextPageToken, currentCategory);
        }
      }
    },
    { rootMargin: "200px" },
  );
  observer.observe(sentinel);
}

function showLoadMoreSpinner() {
  let spinner = document.getElementById("load-more-spinner");
  if (!spinner) {
    spinner = document.createElement("div");
    spinner.id = "load-more-spinner";
    spinner.innerHTML = `
      <div style="display:flex;justify-content:center;padding:32px 0;gap:8px">
        ${[1, 2, 3].map(() => `<div style="width:8px;height:8px;border-radius:50%;background:var(--text3);animation:ytPulse 1s infinite alternate"></div>`).join("")}
      </div>`;
    const style = document.createElement("style");
    style.textContent = `@keyframes ytPulse{from{opacity:.3;transform:scale(.8)}to{opacity:1;transform:scale(1)}}`;
    document.head.appendChild(style);
    document.getElementById("scroll-sentinel")?.after(spinner);
  }
}

function removeLoadMoreSpinner() {
  document.getElementById("load-more-spinner")?.remove();
}

/** Append new video cards without full re-render */
function appendVideoCards(list) {
  const startIdx = videos.length - list.length;
  list.forEach((v, i) => {
    const div = document.createElement("div");
    div.innerHTML = videoCard(v, startIdx + i);
    const card = div.firstElementChild;
    videoGrid.appendChild(card);
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-menu-btn")) return;
      openVideoModal(v);
    });
    card.querySelector(".card-menu-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      showCtxMenu(e, card);
    });
  });
}

async function loadSearchResults(query, pageToken = "", append = false) {
  if (isApiLoading) return;
  isApiLoading = true;
  try {
    const { items, nextPageToken: npt } = await searchVideos(query, pageToken);
    if (append) {
      videos = [...videos, ...items];
      appendVideoCards(items);
    } else {
      videos = items;
      renderVideos(videos);
    }
    nextPageToken = npt;
  } catch (err) {
    console.warn("YouTube API error (search):", err.message);
    if (!append) {
      const fallback = VIDEOS.filter(
        (v) =>
          v.title.toLowerCase().includes(query.toLowerCase()) ||
          v.channel.toLowerCase().includes(query.toLowerCase()),
      );
      // If no local match (e.g. default Kannada query), show all static videos
      videos = fallback.length ? fallback : [...VIDEOS];
      renderVideos(videos);
    }
  } finally {
    isApiLoading = false;
    removeLoadMoreSpinner();
  }
}

/* ──────────────── SKELETON ──────────────── */
function renderSkeletons() {
  videoGrid.innerHTML = Array(12)
    .fill(0)
    .map(
      () => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-thumb"></div>
      <div class="card-info">
        <div class="skeleton skeleton-avatar"></div>
        <div style="flex:1">
          <div class="skeleton skeleton-line w80"></div>
          <div class="skeleton skeleton-line w60"></div>
          <div class="skeleton skeleton-line w60"></div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ──────────────── RENDER VIDEOS ──────────────── */
function renderVideos(list) {
  if (!list.length) {
    videoGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text2)">
      <span class="material-icons-round" style="font-size:64px;display:block;margin-bottom:16px">search</span>
      <h2 style="font-size:20px;margin-bottom:8px">No results found</h2>
      <p>Try different keywords or remove search filters</p>
    </div>`;
    return;
  }
  videoGrid.innerHTML = list.map((v, i) => videoCard(v, i)).join("");

  // Attach card events
  videoGrid.querySelectorAll(".video-card").forEach((card, i) => {
    const v = list[i];
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-menu-btn")) return;
      openVideoModal(v);
    });
    card.querySelector(".card-menu-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      showCtxMenu(e, card);
    });
  });
}

function videoCard(v, i) {
  const thumb = v.thumb || `https://picsum.photos/seed/${v.id}/480/270`;
  const chAvatar = v.avatar || `https://picsum.photos/seed/${v.channel}/36/36`;
  const isLiveBadge = v.isLive
    ? `<span class="card-duration live-badge">● LIVE</span>`
    : `<span class="card-duration">${v.duration}</span>`;
  const progressBar = v.progress
    ? `<div class="card-progress-bar" style="width:${v.progress}%"></div>`
    : "";
  const verifiedIcon = v.verified
    ? `<span class="material-icons-round verified-badge" style="font-size:13px">check_circle</span>`
    : "";
  const newBadge = i < 3 ? `<span class="card-badge new-badge">New</span>` : "";

  return `
    <div class="video-card">
      <div class="card-thumb-wrap">
        <img class="card-thumb" src="${thumb}" alt="${v.title}" loading="lazy" />
        ${isLiveBadge}
        ${progressBar}
        ${newBadge}
        <div class="card-hover-actions">
          <button class="card-hover-action-btn" title="Watch later"><span class="material-icons-round">watch_later</span></button>
          <button class="card-hover-action-btn" title="Add to playlist"><span class="material-icons-round">playlist_add</span></button>
        </div>
      </div>
      <div class="card-info">
        <img class="card-channel-avatar" src="${chAvatar}" alt="${v.channel}" loading="lazy" />
        <div class="card-details">
          <div class="card-title">${v.title}</div>
          <div class="card-channel-name">${v.channel} ${verifiedIcon}</div>
          <div class="card-meta">${v.views} · ${v.age}</div>
        </div>
        <button class="card-menu-btn" aria-label="More options">
          <span class="material-icons-round">more_vert</span>
        </button>
      </div>
    </div>
  `;
}

/* ──────────────── RENDER SHORTS ──────────────── */
function renderShorts() {
  shortsRow.innerHTML = shortsData
    .map(
      (s, i) => `
    <div class="short-card" data-idx="${i}">
      <div class="short-card-thumb-wrap">
        <img class="short-card-thumb" src="${s.thumb}" alt="${s.title}" loading="lazy" />
        <div class="short-card-overlay">
          <div class="short-card-title">${s.title}</div>
          <div class="short-card-views">${s.views}</div>
        </div>
        <span class="short-card-duration">${s.duration}</span>
      </div>
    </div>
  `,
    )
    .join("");

  shortsRow.querySelectorAll(".short-card").forEach((card) => {
    card.addEventListener("click", () => {
      currentShortIdx = parseInt(card.dataset.idx);
      openShortsViewer(currentShortIdx);
    });
  });
}

// Keep SHORTS_DATA reference working for the viewer (updated dynamically)
function getShortsData() {
  return shortsData.length ? shortsData : SHORTS_DATA;
}

/* ──────────────── SIDEBAR ──────────────── */
function initSidebar() {
  hamburgerBtn.addEventListener("click", toggleSidebar);
  sidebarOverlay.addEventListener("click", closeDrawer);
  $("drawer-close-btn").addEventListener("click", closeDrawer);

  // Sidebar item active state
  document
    .querySelectorAll(".sidebar-item[data-filter], .mini-item[data-filter]")
    .forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = item.dataset.filter;
        filterByCategory(filter);
        setActiveSidebarItem(filter);
      });
    });
}

function toggleSidebar() {
  // On mobile: toggle drawer
  if (window.innerWidth <= 792) {
    toggleDrawer();
    return;
  }
  if (sidebarState === "expanded") {
    sidebarState = "mini";
    sidebar.classList.add("sidebar-hidden");
    sidebarMini.classList.remove("hidden");
    mainContent.classList.add("main-mini");
    mainContent.classList.remove("main-full");
  } else if (sidebarState === "mini") {
    sidebarState = "expanded";
    sidebar.classList.remove("sidebar-hidden");
    sidebarMini.classList.add("hidden");
    mainContent.classList.remove("main-mini");
  }
}

function toggleDrawer() {
  const isOpen = !sidebarDrawer.classList.contains("hidden");
  if (isOpen) closeDrawer();
  else {
    sidebarDrawer.classList.remove("hidden");
    sidebarOverlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
}

function closeDrawer() {
  sidebarDrawer.classList.add("hidden");
  sidebarOverlay.classList.remove("visible");
  document.body.style.overflow = "";
}

function injectDrawerNav() {
  const drawerNav = sidebarDrawer.querySelector(".drawer-nav");
  const fullNav = sidebar.querySelector(".sidebar-full");
  if (fullNav && drawerNav) {
    drawerNav.innerHTML = fullNav.innerHTML;
    drawerNav.querySelectorAll(".sidebar-item[data-filter]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        filterByCategory(item.dataset.filter);
        closeDrawer();
      });
    });
  }
}

function setActiveSidebarItem(filter) {
  document
    .querySelectorAll(".sidebar-item, .mini-item")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(`[data-filter="${filter}"]`)
    .forEach((el) => el.classList.add("active"));
}

/* ──────────────── CHIPS ──────────────── */
function initChips() {
  chipsScroll.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chipsScroll
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeChip = chip.dataset.cat;
      filterByChip(activeChip);
    });
  });
  chipsLeft.addEventListener("click", () => {
    chipsScroll.scrollLeft -= 200;
    setTimeout(updateChipScrollBtns, 200);
  });
  chipsRight.addEventListener("click", () => {
    chipsScroll.scrollLeft += 200;
    setTimeout(updateChipScrollBtns, 200);
  });
  chipsScroll.addEventListener("scroll", updateChipScrollBtns);
}

function updateChipScrollBtns() {
  chipsLeft.classList.toggle("hidden", chipsScroll.scrollLeft <= 0);
  chipsRight.classList.toggle(
    "hidden",
    chipsScroll.scrollLeft + chipsScroll.clientWidth >=
      chipsScroll.scrollWidth - 4,
  );
}

function filterByChip(cat) {
  if (cat === "all") {
    currentQuery = DEFAULT_HOME_QUERY;
    currentCategory = "";
    nextPageToken = null;
    renderSkeletons();
    loadSearchResults(DEFAULT_HOME_QUERY);
    return;
  }
  currentQuery = "";
  if (cat === "shorts") {
    // Show full shorts section
    document
      .getElementById("shorts-shelf")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  // Use YouTube category ID if available, otherwise search by keyword
  const catId = YT_CATEGORY_IDS[cat] || "";
  currentCategory = catId;
  nextPageToken = null;
  renderSkeletons();
  if (catId) {
    loadHomeVideos("", catId);
  } else {
    // Search by keyword for unmapped categories
    loadSearchResultsByChip(cat);
  }
}

async function loadSearchResultsByChip(keyword) {
  if (isApiLoading) return;
  isApiLoading = true;
  try {
    const { items, nextPageToken: npt } = await searchVideos(keyword);
    videos = items;
    renderVideos(videos);
    nextPageToken = npt;
  } catch (err) {
    console.warn("YouTube API error (chip):", err.message);
    videos = VIDEOS.filter((v) => v.cat === keyword);
    renderVideos(videos);
  } finally {
    isApiLoading = false;
  }
}

function filterByCategory(filter) {
  // Map sidebar filter names to chip cats
  const map = {
    home: "all",
    shorts: "shorts",
    subscriptions: "all",
    trending: "all",
    music: "music",
    movies: "movies",
    live: "news",
    gaming: "gaming",
    news: "news",
    sports: "sports",
    podcasts: "podcasts",
    courses: "coding",
    fashion: "fashion",
    shopping: "fashion",
  };
  const cat = map[filter] || "all";
  // Activate matching chip
  chipsScroll
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("active"));
  const matchChip = chipsScroll.querySelector(`[data-cat="${cat}"]`);
  if (matchChip) matchChip.classList.add("active");
  filterByChip(cat);
}

/* ──────────────── SEARCH ──────────────── */
function initSearch() {
  let suggestTimer;

  searchInput.addEventListener("input", () => {
    clearTimeout(suggestTimer);
    const q = searchInput.value.trim();
    if (!q) {
      hideSuggestions();
      return;
    }
    // Debounce: 500ms for API suggestions
    suggestTimer = setTimeout(() => showSuggestions(q), 500);
  });

  searchInput.addEventListener("focus", () => {
    const q = searchInput.value.trim();
    if (q.length >= 2) showSuggestions(q);
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(suggestTimer);
      doSearch();
      hideSuggestions();
    }
    if (e.key === "Escape") {
      hideSuggestions();
      searchInput.blur();
    }
    // Arrow key navigation in suggestions
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      navigateSuggestions(e.key === "ArrowDown" ? 1 : -1);
    }
  });

  searchSubmit.addEventListener("click", () => {
    doSearch();
    hideSuggestions();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-center")) hideSuggestions();
  });

  // / shortcut to focus search
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !e.target.matches("input,textarea")) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

async function showSuggestions(q) {
  if (!q || q.length < 2) {
    hideSuggestions();
    return;
  }

  // Show loading state in suggestions
  searchSuggestions.innerHTML = `
    <div class="suggestion-item suggestion-loading">
      <span class="material-icons-round" style="animation:spin 1s linear infinite">refresh</span>
      <span>Searching…</span>
    </div>`;
  searchSuggestions.classList.add("visible");

  try {
    const suggestions = await fetchSuggestions(q);
    if (!suggestions.length) {
      hideSuggestions();
      return;
    }

    searchSuggestions.innerHTML = suggestions
      .map(
        (s) => `
      <div class="suggestion-item" data-query="${escapeHtml(s.text)}" data-video-id="${s.videoId}">
        <span class="material-icons-round">search</span>
        <span>${highlightMatch(escapeHtml(s.text), q)}</span>
      </div>`,
      )
      .join("");
    searchSuggestions.classList.add("visible");

    searchSuggestions.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        e.preventDefault();
        searchInput.value = item.dataset.query;
        doSearch();
        hideSuggestions();
      });
    });
  } catch {
    // Fallback to local suggestions on API error
    const filtered = SUGGESTIONS.filter((s) =>
      s.toLowerCase().includes(q.toLowerCase()),
    ).slice(0, 6);
    if (!filtered.length) {
      hideSuggestions();
      return;
    }
    searchSuggestions.innerHTML = filtered
      .map(
        (s) => `
      <div class="suggestion-item" data-query="${s}">
        <span class="material-icons-round">search</span>
        <span>${highlightMatch(s, q)}</span>
      </div>`,
      )
      .join("");
    searchSuggestions.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        e.preventDefault();
        searchInput.value = item.dataset.query;
        doSearch();
        hideSuggestions();
      });
    });
  }
}

function navigateSuggestions(dir) {
  const items = [...searchSuggestions.querySelectorAll(".suggestion-item")];
  if (!items.length) return;
  const active = searchSuggestions.querySelector(".suggestion-item.focused");
  let idx = active
    ? items.indexOf(active) + dir
    : dir === 1
      ? 0
      : items.length - 1;
  idx = Math.max(0, Math.min(items.length - 1, idx));
  items.forEach((el) => el.classList.remove("focused"));
  items[idx].classList.add("focused");
  searchInput.value = items[idx].dataset.query;
}

function hideSuggestions() {
  searchSuggestions.classList.remove("visible");
}

function highlightMatch(str, q) {
  if (!q) return str;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return str.replace(new RegExp(`(${escaped})`, "gi"), "<strong>$1</strong>");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function doSearch() {
  const q = searchInput.value.trim();
  if (!q) {
    currentQuery = DEFAULT_HOME_QUERY;
    currentCategory = "";
    nextPageToken = null;
    // Reset chips to All
    chipsScroll
      .querySelectorAll(".chip")
      .forEach((c) => c.classList.remove("active"));
    chipsScroll.querySelector('[data-cat="all"]').classList.add("active");
    renderSkeletons();
    loadSearchResults(DEFAULT_HOME_QUERY);
    return;
  }
  currentQuery = q;
  currentCategory = "";
  nextPageToken = null;
  // Reset chips to All
  chipsScroll
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("active"));
  chipsScroll.querySelector('[data-cat="all"]').classList.add("active");
  renderSkeletons();
  loadSearchResults(q);
  videoGrid.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ──────────────── THEME ──────────────── */
function initTheme() {
  // Check preference
  const saved = localStorage.getItem("yt-theme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setDark(true);
  }
  themeToggle.addEventListener("click", () => setDark(!isDark));
}

function setDark(dark) {
  isDark = dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  themeIcon.textContent = dark ? "light_mode" : "dark_mode";
  localStorage.setItem("yt-theme", dark ? "dark" : "light");
}

/* ──────────────── NAVBAR SCROLL ──────────────── */
function initNavbar() {
  const navbar = $("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });
  // Notifications
  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifPanel.classList.toggle("visible");
    accountMenu.classList.remove("visible");
  });
  // Account menu
  avatarBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle("visible");
    notifPanel.classList.remove("visible");
  });
  // Close on outside click
  document.addEventListener("click", () => {
    notifPanel.classList.remove("visible");
    accountMenu.classList.remove("visible");
  });
}

/* ──────────────── CONTEXT MENU ──────────────── */
function initCtxMenu() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#ctx-menu")) ctxMenu.classList.add("hidden");
  });
}

function showCtxMenu(e, card) {
  e.stopPropagation();
  ctxTargetCard = card;
  ctxMenu.classList.remove("hidden");
  const r = e.target.getBoundingClientRect();
  const menuW = 240,
    menuH = 280;
  let left = r.left,
    top = r.bottom + 4;
  if (left + menuW > window.innerWidth) left = window.innerWidth - menuW - 8;
  if (top + menuH > window.innerHeight) top = r.top - menuH - 4;
  ctxMenu.style.left = left + "px";
  ctxMenu.style.top = top + "px";
}

/* ──────────────── VIDEO MODAL ──────────────── */
function openVideoModal(v) {
  currentVideoId = v.id;
  modalIframe.src = `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`;
  $("modal-title").textContent = v.title;
  $("modal-views").textContent = v.views;
  $("modal-date").textContent = v.age;
  $("modal-likes").textContent = "45K";
  $("modal-ch-avatar").src =
    v.avatar || `https://picsum.photos/seed/${v.channel}/40/40`;
  $("modal-ch-name").textContent = v.channel;
  $("modal-ch-subs").textContent = (v.subs || "1.2M") + " subscribers";
  $("modal-desc-short").textContent = v.desc ? v.desc.slice(0, 120) : "";
  $("modal-desc-full").textContent = v.desc || "";
  // Tags
  $("desc-tags").innerHTML = (v.tags || [])
    .map((t) => `<a class="desc-tag" href="#">${t}</a>`)
    .join(" ");
  $("comments-count").textContent = "48,291 Comments";
  descFull.classList.add("hidden");
  renderComments();
  renderUpNext(v);
  videoModalOverlay.classList.add("visible");
  document.body.style.overflow = "hidden";
  // Subscribe toggle
  modalSubBtn.classList.remove("subscribed");
  modalSubBtn.textContent = "Subscribe";
  modalSubBtn.addEventListener("click", toggleSubscribe, { once: true });
}

function initModalClose() {
  modalCloseBtn.addEventListener("click", closeVideoModal);
  videoModalOverlay.addEventListener("click", (e) => {
    if (e.target === videoModalOverlay) closeVideoModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal();
      closeShortsViewer();
    }
  });
  // Description toggle
  descToggle.parentElement.addEventListener("click", () => {
    descFull.classList.toggle("hidden");
    descToggle.querySelector(".desc-expand-label").textContent =
      descFull.classList.contains("hidden") ? "...more" : " Show less";
  });
}

function closeVideoModal() {
  videoModalOverlay.classList.remove("visible");
  modalIframe.src = "";
  document.body.style.overflow = "";
}

function toggleSubscribe() {
  const subbed = modalSubBtn.classList.toggle("subscribed");
  modalSubBtn.textContent = subbed ? "Subscribed" : "Subscribe";
}

function renderComments() {
  commentsList.innerHTML = COMMENTS_DATA.map(
    (c) => `
    <div class="comment-item">
      <img class="comment-avatar" src="${c.avatar}" alt="${c.name}" />
      <div class="comment-body">
        <div class="comment-meta">${c.name} <span>${c.time}</span></div>
        <div class="comment-text">${c.text}</div>
        <div class="comment-actions">
          <button class="comment-action-btn"><span class="material-icons-round">thumb_up</span> ${c.likes}</button>
          <button class="comment-action-btn"><span class="material-icons-round">thumb_down</span></button>
          <button class="comment-action-btn">Reply</button>
        </div>
      </div>
    </div>
  `,
  ).join("");
}

function renderUpNext(current) {
  const pool = videos.length ? videos : VIDEOS;
  const others = pool.filter((v) => v.id !== current.id).slice(0, 14);
  upNextList.innerHTML = others
    .map(
      (v) => `
    <div class="up-next-card" data-id="${v.id}" data-cat="${v.cat}" data-channel="${v.channel}" data-subs="${v.subs || "1M"}" data-desc="${encodeURIComponent(v.desc || "")}">
      <div class="up-next-thumb">
        <img src="https://picsum.photos/seed/${v.id}/168/94" alt="${v.title}" loading="lazy" />
        <span class="up-next-duration">${v.isLive ? "● LIVE" : v.duration}</span>
      </div>
      <div class="up-next-info">
        <div class="up-next-title">${v.title}</div>
        <div class="up-next-channel">${v.channel}</div>
        <div class="up-next-meta">${v.views} · ${v.age}</div>
      </div>
    </div>
  `,
    )
    .join("");

  upNextList.querySelectorAll(".up-next-card").forEach((card) => {
    card.addEventListener("click", () => {
      const v2 = VIDEOS.find((v) => v.id === card.dataset.id);
      if (v2) openVideoModal(v2);
    });
  });
}

/* ──────────────── SHORTS VIEWER ──────────────── */
function initShortsViewer() {
  shortsClose.addEventListener("click", closeShortsViewer);
  shortsPrev.addEventListener("click", () => navigateShort(-1));
  shortsNext.addEventListener("click", () => navigateShort(1));

  // Touch/swipe support
  let startY = 0;
  shortsStack.addEventListener(
    "touchstart",
    (e) => {
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  shortsStack.addEventListener("touchend", (e) => {
    const diff = startY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) navigateShort(diff > 0 ? 1 : -1);
  });
}

function openShortsViewer(idx) {
  currentShortIdx = idx;
  renderShortsStack();
  shortsViewerOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeShortsViewer() {
  shortsViewerOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

function navigateShort(dir) {
  const data = getShortsData();
  const next = currentShortIdx + dir;
  if (next < 0 || next >= data.length) return;
  currentShortIdx = next;
  renderShortsStack();
}

function renderShortsStack() {
  const data = getShortsData();
  const s = data[currentShortIdx];
  shortsStack.innerHTML = `
    <div class="short-viewer-item active">
      <div class="short-viewer-video">
        <img src="${s.thumb}" alt="${s.title}" />
        <div class="short-viewer-overlay-content">
          <div class="short-viewer-title">${s.title}</div>
          <div class="short-viewer-channel">${s.views}</div>
        </div>
      </div>
    </div>
  `;
  // Action buttons
  const actions = document.createElement("div");
  actions.className = "short-viewer-actions";
  actions.innerHTML = `
    <div class="short-viewer-action"><span class="material-icons-round">thumb_up</span><span>Like</span></div>
    <div class="short-viewer-action"><span class="material-icons-round">thumb_down</span><span>Dislike</span></div>
    <div class="short-viewer-action"><span class="material-icons-round">comment</span><span>Comments</span></div>
    <div class="short-viewer-action"><span class="material-icons-round">share</span><span>Share</span></div>
    <div class="short-viewer-action"><span class="material-icons-round">more_vert</span><span>More</span></div>
  `;
  shortsStack.querySelector(".short-viewer-item").appendChild(actions);
  // Update nav button visibility
  const _sd = getShortsData();
  shortsPrev.style.opacity = currentShortIdx === 0 ? "0.3" : "1";
  shortsNext.style.opacity = currentShortIdx === _sd.length - 1 ? "0.3" : "1";
}
