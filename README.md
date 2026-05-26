# YouTube Clone

A pixel-perfect YouTube UI clone built with vanilla HTML, CSS, and JavaScript — powered by the **YouTube Data API v3**.

## 🔴 Live Demo

👉 **[https://ayyappaswamyangadi.github.io/youtube-clone/](https://ayyappaswamyangadi.github.io/youtube-clone/)**

---

## ✨ Features

- **Real YouTube videos** — fetched live via YouTube Data API v3
- **Default home feed** — loads *Kannada new songs* on first visit
- **Search** — full keyword search with autocomplete suggestions
- **Category chips & sidebar filters** — Music, Gaming, News, Trending, and more
- **Infinite scroll** — auto-loads more videos as you scroll
- **Video modal player** — embedded YouTube player with likes, comments, "Up Next" sidebar
- **Shorts shelf** — horizontal shorts row with a full-screen viewer
- **Dark / Light theme** — persisted in `localStorage`
- **Responsive layout** — works on desktop, tablet, and mobile
- **Skeleton loading** — smooth placeholder cards while data loads

## 🛠 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Markup     | HTML5                             |
| Styling    | CSS3 (custom properties, grid)    |
| Logic      | Vanilla JavaScript (ES2022)       |
| API        | YouTube Data API v3               |
| Icons      | Google Material Icons Round       |
| Fonts      | Google Fonts — Roboto             |

## 🚀 Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/ayyappaswamyangadi/youtube-clone.git
   cd youtube-clone
   ```

2. Add your YouTube Data API key in `config.js`  
   ```js
   const YT_CONFIG = {
     API_KEY: "YOUR_API_KEY_HERE",
     BASE_URL: "https://www.googleapis.com/youtube/v3",
     REGION: "IN",
   };
   ```

3. Open `index.html` in a browser (or serve with any static server).

## 📁 Project Structure

```
youtube-clone/
├── index.html        # Main markup
├── index.css         # All styles
├── index.js          # App logic, rendering, event handling
├── youtube-api.js    # YouTube Data API v3 helpers & data mappers
├── config.js         # API key & base config
└── assets/           # Favicon and static assets
```

## 📄 License

MIT — feel free to fork and build on it.
