# Big Green T's — Deployment Guide

## Prerequisites

Install Node.js (v18 or newer) from https://nodejs.org

---

## Local Development

```bash
# 1. Navigate to the project folder
cd "Big Green T's Website"

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Open http://localhost:3000 to view the site.

---

## Build for Production (local check)

```bash
npm run build
npm run start
```

---

## Deploy to Vercel (Recommended)

Vercel is the simplest and fastest way to deploy a Next.js site. It's free for personal/small projects.

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Set project name: big-green-ts (or whatever you prefer)
# - Framework: Next.js (auto-detected)
# - Root directory: ./ (leave as default)
```

Your site will be live at a `.vercel.app` URL immediately.

### Option B — Vercel Dashboard (drag & drop)

1. Go to https://vercel.com and sign in (or create a free account)
2. Click "Add New Project"
3. Import from GitHub, or use the Vercel CLI to push

### Connect a Custom Domain

1. In the Vercel dashboard, open your project
2. Go to Settings → Domains
3. Add your domain (e.g., `biggreents.com`)
4. Update your domain registrar's DNS to point to Vercel's nameservers

---

## Before Going Live — Update Placeholders

The following items need to be replaced with real information:

| Location | Placeholder | Replace with |
|---|---|---|
| `components/Footer.tsx` | `(603) 555-1234` | Real phone number |
| `components/Footer.tsx` | `info@biggreents.com` | Real email address |
| `app/contact/page.tsx` | `(603) 555-1234` | Real phone number |
| `app/contact/page.tsx` | `info@biggreents.com` | Real email address |
| `app/contact/page.tsx` | `form action="#"` | Real form endpoint (e.g., Formspree, Netlify Forms) |

---

## Contact Form

The contact form is built in HTML but does not currently have a backend. Options:

- **Formspree** (easiest, free tier): https://formspree.io — replace `action="#"` with your Formspree endpoint
- **Netlify Forms**: Works automatically if hosted on Netlify
- **Custom API route**: Add `app/api/contact/route.ts` and wire up an email provider (SendGrid, Resend, etc.)
