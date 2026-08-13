# ₹999 Website — Premium Landing Page (React + TS)

A full rebuild of the original single-file `index.html` into a production
React/TypeScript/Tailwind site with Framer Motion, GSAP ScrollTrigger and
Lenis smooth scrolling. All original Hindi copy, pricing, FAQ and WhatsApp
flows are preserved — only the design and code structure changed.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (theme tokens in `src/index.css`)
- Framer Motion — entrance staggers, hover/tap micro-interactions
- GSAP + ScrollTrigger — section reveal-on-scroll (`src/components/Reveal.tsx`)
- Lenis — smooth scrolling, wired to ScrollTrigger (`src/lib/SmoothScroll.tsx`)
- lucide-react — icons

## Run locally

```
npm install
npm run dev
```

Build for production:

```
npm run build
npm run preview   # optional, serves the production build locally
```

## Getting this into GitHub without a local dev setup

Since you're working browser-only, the easiest path is **GitHub's web
uploader**, which now accepts whole folders via drag-and-drop:

1. Unzip this project on your computer (just to get a plain folder — you
   don't need to run anything).
2. On GitHub, open your repo (or create a new one) → **Add file → Upload
   files**.
3. Drag the **entire unzipped folder** onto the upload area. GitHub will
   preserve the folder structure (`src/`, `public/`, `index.html`,
   `package.json`, etc.). Do **not** upload `node_modules` or `dist` if
   your unzip tool created them — this project's `.gitignore` already
   excludes both, but the web uploader doesn't read `.gitignore`, so just
   don't drag those two folders in.
4. Commit directly to `main`.
5. In Vercel: **Add New → Project → Import** this repo. Vercel
   auto-detects Vite — no config needed. Framework preset: **Vite**,
   Build command: `npm run build`, Output directory: `dist` (these are
   the Vite defaults Vercel picks automatically).
6. After deploy, add your domain (e.g. `999.arkoseinfosoft.in`) under
   **Project → Settings → Domains**, same as before.

If you'd rather use **github.dev**: press `.` on your repo page to open
the web editor, then use its Explorer panel to create the folders and
paste file contents — but for a project this size, the drag-and-drop
upload above is much faster.

## Editing content

All copy, pricing, FAQ, demo cards, etc. live in one place:
`src/data/content.ts`. Change text there — no need to touch components.

The WhatsApp number is set once in `src/data/content.ts`
(`WHATSAPP_NUMBER`) and used everywhere via the `whatsappLink()` helper.

## Notes

- `prefers-reduced-motion` is respected: Lenis smoothing and background
  pattern animation are skipped for users who request less motion.
- The countdown timer resets automatically once its window expires — no
  manual resetting needed (uses `sessionStorage`, one countdown per
  browser tab session).
