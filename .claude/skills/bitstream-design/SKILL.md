---
name: bitstream-design
description: bitstream brand design system (MSP / ISP). Use whenever building or styling any bitstream UI, website, customer portal, status page, email or marketing page, or writing bitstream product copy, so it uses the brand's tokens, components, logo files and voice.
---

# bitstream design system

bitstream is a managed service provider and internet provider (fiber, fixed wireless, managed IT). The look comes from the logo: a flat-topped **hex** (infrastructure) holding a **signal** line, and the **pulse** heartbeat under the wordmark (monitored, always on). Calm, technical, dependable. Dark-first.

## Before you build

1. Read `reference/brand.md` (principles, voice, color, type, motifs, logo rules).
2. Read `reference/components.md` and copy the markup of the component you need.
3. Look up exact values in `reference/tokens.md`. Open `examples/gallery.html` in a browser to see everything in both themes.

## Setting up a project

Copy into the project's static/public folder and load in this order:

```html
<link rel="stylesheet" href="/tokens.css">       <!-- assets/tokens.css -->
<link rel="stylesheet" href="/bitstream.css">    <!-- assets/bitstream.css: components + Google Fonts import -->
<link rel="icon" href="/favicon.svg">
<html data-theme="dark">  <!-- default; "light" for documents/invoices -->
```

- Tailwind projects: add `assets/tailwind.preset.js` as a preset and still load `tokens.css` globally. Utilities become `bg-surface-100`, `text-ink-muted`, `text-signal-ink`, `font-display`, `text-h1`, `rounded-md`, `shadow-elevation-1`, `p-bs-5`.
- React / other frameworks: keep the `bs-` class names (`className="bs-btn bs-btn--primary"`) or wrap them in components; don't re-implement the styles with new values.
- Logos are in `assets/logos/` (SVG, outlined). Copy them; never retype or redraw the logo.

## Hard rules

- Colors only through tokens (`var(--signal)`, etc.). No raw hex in UI code except `brand-navy` `#000138` / `brand-cyan` `#5CE1E6` in logo or social art.
- `signal` is the single accent: one primary button per view; text on it is `--on-signal` (navy), never white. Links and accent text use `--signal-ink`.
- Network/service state uses only `status-up | status-degraded | status-down | status-maint`, always with a word and its icon (check / triangle-alert / x / wrench). Never color alone.
- Fonts: Poppins (`--font-display`) for headings only; IBM Plex Sans (`--font-sans`) for body and UI; IBM Plex Mono (`--font-mono`) for speeds, uptime, IPs, MACs, ticket IDs and timestamps.
- 4px spacing grid (`--space-1`..`--space-9`); radii `--radius-sm/md/lg`, `--radius-pill` only for status pills and dots.
- Every interactive element keeps the focus ring (2px `--focus-ring`, 2px offset). Controls are ≥44px tall except `bs-btn--sm` in dense tables.
- Icons: Lucide outline, 2px stroke, round joins, `currentColor`. No emoji anywhere.
- No gradients in UI, no glowing padlocks / binary rain / stock hacker imagery, no colored left-border cards.
- Always link a **Status** page from navigation.

## Voice (for any copy you write)

- "We" to "you", plain and specific. Lead with the fact, then the action: "Outage in Westside. Crews are on site; service back by 1:00 PM."
- Sentence case everywhere. Brand name always lowercase: **bitstream**.
- Numbers over adjectives: "942 Mbps", "99.98% uptime (30 days)". Speeds with thousands separators, local times with AM/PM.
- No exclamation marks, no "blazing / lightning-fast / seamless / cutting-edge", no "we apologize for any inconvenience".
- Errors say how to fix it: "Account numbers are 8 digits after BS-, like BS-00421987."

## Files

| path | what |
|---|---|
| `assets/tokens.css` | CSS variables (dark default + light theme) and type-style classes (`.display-xl` … `.data`) |
| `assets/tokens.json` | same tokens as data, with usage notes |
| `assets/bitstream.css` | component classes (`bs-btn`, `bs-status`, `bs-board`, `bs-alert`, `bs-metric`, `bs-plan`, `bs-field`, `bs-table`, `bs-nav`, `bs-pulse`, `bs-hex`) |
| `assets/tailwind.preset.js` | Tailwind preset mapped to the tokens |
| `assets/logos/` | logo, icon and wordmark SVGs, favicon set, OG image |
| `reference/brand.md` | full brand book |
| `reference/tokens.md` | every token with values and usage |
| `reference/components.md` | guidelines + copyable markup for all 11 components |
| `examples/gallery.html` | live gallery, theme toggle |
