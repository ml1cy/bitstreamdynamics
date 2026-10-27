# CLAUDE.md

Context for AI agents (Claude or otherwise) working in this repo.

## What this is

Website for a high school Computer Networking class at Kalamazoo KRESA CTE.
"bitstream dynamics" is the class's fictional business name for the project —
there is no real business behind it. The site is meant to hold general class
info, not act as a storefront. Write the name lowercase, per the design
system's voice rules.

## Current state

React + Vite app with client-side routing: pages in `src/pages/` (Home,
Directory, Projects, Contact), shared layout in `src/components/Layout.jsx`.
Deployed as a Cloudflare Worker with static assets via the
[Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/)
(`wrangler.jsonc`, SPA fallback on). Cloudflare's Workers Builds runs
`npm run build` then `npx wrangler deploy`.

## Conventions

- Edit page content in `src/pages/` and layout in `src/components/`, not the
  built `index.html`.
- Run `npm run dev` for local development, `npm run build` before deploying.
- `vite`, `@cloudflare/vite-plugin`, and `wrangler` all need to stay on
  compatible major versions (the Cloudflare plugin currently requires
  Vite 6+) — if bumping one, check the others still work together.
- Keep the framework usage lightweight — this is a class site, not a
  product, so avoid adding heavy dependencies or infra beyond what's needed
  for basic content and layout.
- The repo, npm package and Worker are still named `bitstreamdynamics`. Leave
  those identifiers alone: the Worker name must match the Cloudflare dashboard.

## Design system

This project uses the bitstream design system. For any UI, styling or
user-facing copy, use the `bitstream-design` skill
(`.claude/skills/bitstream-design/`): read its SKILL.md first, use its tokens
and `bs-` component classes, and follow its voice rules. Never hard-code brand
colors or redraw the logo.

- `public/tokens.css` and `public/bitstream.css` are the system's files,
  loaded unmodified from `index.html`. Put site styles in `src/index.css`,
  using tokens only.
- Logos used by the site are copied into `public/logos/`; the full set is in
  the skill's `assets/logos/`.
- The logo files say "bitstream" only. `SiteLogo` in `Layout.jsx` sets
  "dynamics" beside the unmodified logo in the wordmark's typeface; use it
  wherever the logo appears instead of editing the SVGs. The OG image still
  reads "bitstream" until a full lockup is made.

Layouts are built from the class's own material, not stock page patterns:
the OSI stack as the home page's spine (`StackSpine`, `StackDiagram`), the
teams as a network topology, projects with a layer-coverage strip, and contact
as a `whois` record. All of them read from `src/data/course.js`. Don't fall back
to generic sections (icon-card feature grids, labels above headings,
call-to-action cards, fade-in-everything scrolling); give new content a form
that comes from networking.

Exceptions for a class site (the system was built for a real ISP/MSP):

- No Status page, service plans or prices, support tickets, or metric tiles.
  There is no real service to report on, and inventing uptime, prices or
  tickets would misrepresent a class project as a business.
- Keep the footer line saying this is a class project, not a business.
