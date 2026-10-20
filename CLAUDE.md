# CLAUDE.md

Context for AI agents (Claude or otherwise) working in this repo.

## What this is

Website for a high school Computer Networking class at Kalamazoo KRESA CTE.
"Bitstream Dynamics" is the class's fictional business name for the project
— there is no real business behind it. The site is meant to hold general
class info, not act as a storefront.

## Current state

React + Vite app (`src/App.jsx`, `src/main.jsx`), deployed as a Cloudflare
Worker with static assets via the
[Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/)
(`wrangler.jsonc`). Cloudflare's Workers Builds runs `npm run build` then
`npx wrangler deploy`.

## Conventions

- Content lives in `src/App.jsx` and related components — edit there rather
  than the built `index.html`.
- Run `npm run dev` for local development, `npm run build` before deploying.
- `vite`, `@cloudflare/vite-plugin`, and `wrangler` all need to stay on
  compatible major versions (the Cloudflare plugin currently requires
  Vite 6+) — if bumping one, check the others still work together.
- Keep the framework usage lightweight — this is a class site, not a
  product, so avoid adding heavy dependencies or infra beyond what's needed
  for basic content and layout.
