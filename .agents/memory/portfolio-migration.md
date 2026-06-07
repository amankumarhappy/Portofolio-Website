---
name: Portfolio Next.js → React+Vite migration
description: Patterns and gotchas from migrating Aman Kumar Happy's Next.js portfolio to the Replit pnpm_workspace react-vite stack
---

# Portfolio Migration Notes

## CSS
- globals.css was Tailwind v3 (`@tailwind base/components/utilities`) — replaced with `@import "tailwindcss"` for v4
- Both `globals.css` and `index.css` are imported in main.tsx (globals has all custom classes; index.css has the v4 @import)

## Next.js removals
- `"use client"` directives: harmless in Vite, left in place
- `next/image`: replaced with plain `<img>` tags (use `style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}` for fill-mode images)
- `next/link`: replaced with `<a>` tags
- `src/app/layout.tsx` still has `next/font/google` import but is unused (App.tsx is the entrypoint)

## Three.js / WebGL
- WebGL cannot create a context in the Replit preview iframe sandbox — this is expected, not a bug
- Fixed with a React ErrorBoundary in HeroScene.tsx that renders null on error
- Disabled `server.hmr.overlay: false` in vite.config.ts to suppress the runtime error overlay in dev

## Vite config
- `server.fs.strict: false` — needed since assets may be resolved outside artifact root
- `server.hmr.overlay: false` — suppresses WebGL crash overlay in dev preview
