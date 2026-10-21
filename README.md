# Prodesk IT — Corporate Brand Landing Page

A polished, responsive, production-quality corporate landing page built with **React + Vite**.

> **Note:** Statistics, project examples, and contact details are illustrative placeholders. Replace with verified company information before publishing.

---

## 🌐 Live Website

> Add your deployed URL here after deployment (e.g., `https://prodesk-it.vercel.app`)

---

## ✨ Features

- ⚡ **Vite + React** — lightning-fast dev server and optimised builds
- 🌓 **Persistent dark / light mode** — respects OS preference, saves to `localStorage`
- 📱 **Fully responsive** — tested from 320px to 1920px
- ♿ **Accessible** — semantic HTML5, skip link, `aria-expanded`, visible focus
- 🎨 **CSS custom properties** — single source of truth for the design system
- 📐 **BEM naming** — predictable, scalable stylesheet architecture
- 🏎 **Performance-first** — no unnecessary JavaScript or CSS libraries
- 🔍 **SEO-ready** — title, meta description, Open Graph, Twitter Card

---

## 🗂 Project Structure

```
prodesk-corporate-brand/
├── public/
│   ├── favicon.svg
│   └── assets/images/
│       └── hero-visual.webp          # Hero section image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Navigation + mobile menu + theme toggle
│   │   ├── Hero.jsx                  # Hero section (headline, CTAs, image)
│   │   ├── Stats.jsx                 # Statistics strip
│   │   ├── Services.jsx              # Service cards (3-column grid)
│   │   ├── About.jsx                 # About section + stats grid
│   │   ├── Work.jsx                  # Portfolio / project cards
│   │   ├── Contact.jsx               # Contact CTA + info items
│   │   └── Footer.jsx                # Footer with nav columns + copyright
│   ├── styles/
│   │   ├── variables.css             # Design tokens (colors, spacing, etc.)
│   │   ├── global.css                # Reset + base typography + utilities
│   │   ├── components.css            # BEM component styles + animations
│   │   └── responsive.css            # Media queries (all breakpoints)
│   ├── App.jsx                       # Theme orchestration + page assembly
│   └── main.jsx                      # Entry point, CSS import order
├── index.html                        # SEO metadata, Open Graph tags
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🧩 Component Overview

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Manages theme state (`useState`), syncs to DOM + localStorage (`useEffect`), assembles the page |
| `Navbar.jsx` | Sticky nav with brand, links, hamburger menu, theme toggle. Uses `useState` for menu open/close and scroll state |
| `Hero.jsx` | Above-the-fold section: eyebrow, headline, description, two CTAs, hero image with floating badge |
| `Stats.jsx` | Four-column statistics strip using `dl/dt/dd` for semantic accessibility |
| `Services.jsx` | Three service cards in a responsive CSS Grid with hover effects |
| `About.jsx` | Company narrative + 2×2 stats grid |
| `Work.jsx` | Three illustrative portfolio cards with visual placeholders |
| `Contact.jsx` | Contact CTA with `mailto:` links (no fake form) and info items |
| `Footer.jsx` | Four-column footer with brand, nav columns, social links, copyright |

---

## 🎨 Design System

### Theme Toggle

The theme system works like this:

1. **`getInitialTheme()`** runs before React renders to avoid a flash of wrong colour
2. **`useState`** holds the current theme string (`'light'` | `'dark'`)
3. **`useEffect`** writes the theme to `document.documentElement.dataset.theme` and `localStorage`
4. CSS `[data-theme="dark"]` selector in `variables.css` swaps every colour token

### CSS Architecture

- `variables.css` — All design tokens as CSS custom properties
- `global.css` — Box-sizing reset, base typography, utility classes
- `components.css` — BEM component styles and keyframe animations
- `responsive.css` — All media queries, centralised in one file

---

## ♿ Accessibility

- Skip-to-main-content link (visible on keyboard focus)
- Logical heading hierarchy (`h1` in Hero, `h2` per section, `h3` in cards)
- `aria-expanded` synced with mobile menu state
- `aria-label` on icon-only buttons
- `aria-hidden` on decorative icons and elements
- Descriptive `alt` text on all images
- Visible `:focus-visible` outline on all interactive elements
- Respects `prefers-reduced-motion: reduce`
- Semantic `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`, `<header>`

---

## 📱 Responsive Breakpoints

| Viewport | Layout Changes |
|----------|---------------|
| ≥ 1920px | Max container width 1440px |
| 1280px | Default: full desktop layout |
| ≤ 1024px | Services 2-col, Work 2-col, Footer 2-col |
| ≤ 820px | Hero stacked, About stacked, Contact stacked |
| ≤ 768px | Mobile nav (hamburger), Stats 2-col |
| ≤ 640px | All grids → 1-col, Footer → 1-col |
| ≤ 375px | Stats → 1-col, smaller padding |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📤 Deployment

### GitHub

```bash
# Initialise Git
git init
git add .
git commit -m "feat: initial Prodesk IT landing page"

# Create a repo on GitHub then push:
git remote add origin https://github.com/YOUR_USERNAME/prodesk-corporate-brand.git
git branch -M main
git push -u origin main
```

### Vercel

1. Push to GitHub (above)
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Vercel auto-detects Vite — click **Deploy**
4. Update `index.html` with the canonical URL after deployment

---

## ✅ Pre-Launch Checklist

- [ ] Replace illustrative statistics with verified company data
- [ ] Replace sample project cards with real client case studies (with permission)
- [ ] Update `mailto:` and `tel:` links with real contact details
- [ ] Replace social link `href="#"` placeholders with real URLs
- [ ] Add production domain to `og:url` meta tag
- [ ] Run Lighthouse on the deployed build and fix actual findings
- [ ] Test keyboard navigation end-to-end
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] Test dark mode on all sections

---

## 📄 License

© 2024 Prodesk IT. All rights reserved.
