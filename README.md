# Aman Kumar Happy — Portfolio

Personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

**Live:** [amankumarhappy.vercel.app](https://amankumarhappy.vercel.app) · [amankumarhappy.netlify.app](https://amankumarhappy.netlify.app)

---

## Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **3D / Canvas:** Three.js via React Three Fiber
- **Language:** TypeScript
- **Package manager:** pnpm (monorepo)

## Project Structure

```
artifacts/
  portfolio/          ← Web portfolio (deployed to Vercel & Netlify)
    src/
      components/     ← UI sections (Hero, About, Skills, Projects, …)
      app/            ← Root app + page layout
    public/           ← Static assets (images, resume, favicon)
```

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm --filter @workspace/portfolio run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

### Vercel
Configured via `vercel.json` at the repo root. Push to `main` → auto-deploys.

### Netlify
Configured via `netlify.toml` at the repo root. Push to `main` → auto-deploys.

Both services run:
```
pnpm --filter @workspace/portfolio run build
```
Output: `artifacts/portfolio/dist/public/`

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, tagline, flip-card photo |
| **About** | Who I am, quick stats |
| **Skills** | Technical stack grouped by category |
| **Projects** | Featured builds with links |
| **Journey** | Education & experience timeline |
| **Beyond Code** | Interests outside tech |
| **Contact** | Email + social links |

---

Built by [Aman Kumar Happy](https://github.com/amankumarhappy)
