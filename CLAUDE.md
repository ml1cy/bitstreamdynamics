# CLAUDE.md

Context for AI agents (Claude or otherwise) working in this repo.

## What this is

Website for a high school Computer Networking class at Kalamazoo KRESA CTE.
"Bitstream Dynamics" is the class's fictional business name for the project
— there is no real business behind it. The site is meant to hold general
class info, not act as a storefront.

## Current state

Barebones static site: a single `index.html`, no build tooling, no
framework. Deployed as a static site (Cloudflare Pages).

## Conventions

- Keep it plain HTML/CSS/JS unless there's a real reason to add a framework
  or build step — this is a class site, not a product.
- No build process currently exists. If one gets added later, update the
  README's deploy instructions to match.
- Prefer editing `index.html` directly over introducing new tooling for
  small content changes.
