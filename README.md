# ₹999 Website Landing Page

Plain HTML/CSS/JS — no build step needed. Works with Vercel's static hosting out of the box.

## Deploy on Vercel (subdomain of arkoseinfosoft.in)

1. Unzip this folder and push it to a new GitHub repo (or a folder inside your existing `arkoseinfosoft` repo).
2. In Vercel: **Add New → Project → Import** that repo. Framework preset: **Other** (no build command needed).
3. After deploy, go to **Project → Settings → Domains → Add**, and enter e.g. `999.arkoseinfosoft.in`.
4. Add the CNAME record Vercel gives you in your DNS provider for `arkoseinfosoft.in`.

## Editing

- Everything lives in `index.html` (styles + script inline, no dependencies except Google Fonts).
- Countdown timer resets daily at midnight automatically — no manual resetting needed.
- Demo cards are placeholder content — swap the `demos` array text and link to your real 5 live demo URLs once ready.
- Swap the `#` CTA links to your WhatsApp link, e.g. `https://wa.me/91XXXXXXXXXX?text=I%20want%20the%20₹999%20website`.
