# bitstream brand book

bitstream is a managed service provider and internet provider: business and home fiber and fixed wireless, plus managed IT (monitoring, security, backup, help desk). The design language comes from the logo: a **hex** (structure, infrastructure, the network node) holding a **signal** (the live line we keep running), and the **pulse** under the wordmark (monitored, always on). Everything should feel calm, technical and dependable: the brand people trust because nothing breaks, and when it does, they hear about it first.

## Principles

1. **Status first.** Customers come to us when something is wrong. Network status, outages and ticket state are always one click away and always written in plain words.
2. **Numbers, not adjectives.** Show the measured speed, the uptime with its window, the time crews arrived. “942 Mbps” beats “blazing fast”.
3. **Calm under load.** Dark navy grounds, one bright signal colour, lots of space. No alarm-red pages; red is a small, labelled state.
4. **Built from the hex.** Hexagons, a 4px grid, crisp 2px strokes. Shapes are precise, never bubbly.

## Voice and copy

- We are a local team of technicians. Write as **we** to **you**: “We're fixing it”, “Your router restarted”.
- Plain, specific, short. Lead with the fact, then the action: “Outage in Westside. Crews are on site; service back by 1:00 PM.”
- Sentence case for everything: headings, buttons, nav (“Check availability”, not “Check Availability”). Product names keep their casing: Fiber 300, Fiber 1 Gig, Business Managed.
- The brand name is always lowercase **bitstream**, one word, even at the start of a sentence. The two-colour “bit/stream” split belongs to the logo only; in copy the name is plain text.
- No exclamation marks, no emoji, no “blazing”, “lightning-fast”, “seamless”, “cutting-edge”, no “we apologize for any inconvenience”.
- Technical terms are fine where the customer needs them (static IP, VLAN, SLA) but explain them once in plain words on marketing pages.
- Times are local with AM/PM; speeds in Mbps/Gbps with thousands separators; uptime to two decimals.

Examples:
- Hero: “Internet that just stays on.” / “Managed IT for offices that would rather not think about IT.”
- Button: “Check availability”, “Talk to a tech”, “Restart router”.
- Error: “We couldn't find that address. Try the street number and name only, like 412 Elm St.”

## Color

The brand is **dark-first**: `dark` is the default theme (site, portal, social); `light` is for documents, invoices, long reading and customers who prefer it.

- Grounds: `surface-000` for the page, `surface-100` for cards and the nav, `surface-200` for inputs and table headers. Selected or active things sit on `signal-soft`.
- Text: `ink` for headings and body, `ink-muted` for secondary lines, `ink-subtle` for timestamps and placeholders. Each token's note lists the grounds it passes 4.5:1 on, in both themes.
- **Signal** is the only accent. `signal` fills primary buttons, the pulse line and progress; text on it is always `on-signal` (navy), never white. Links and accent text use `signal-ink`. Spend signal sparingly: one primary action, one highlight per view.
- `brand-navy` and `brand-cyan` are the exact logo colours (#000138, #5CE1E6) for logo grounds, social art and print. They are the dark theme's `surface-000` and `signal`.
- Network status uses exactly four tokens: `status-up`, `status-degraded`, `status-down`, `status-maint`, always with a word and an icon (see StatusPill). Destructive buttons use `danger-fill`.
- No gradients in UI. The only allowed one is the soft radial glow of `surface-200` behind the logo in hero and social art.

## Typography

Three families, each with a job:

- **Poppins** (`display` family) for headings: `display-xl`, `display`, `h1`–`h3`, weight 500. It matches the wordmark. Never use it for body text or numbers.
- **IBM Plex Sans** (`sans`) for everything people read and click: `body-lg`, `body`, `label`, `small`, `overline` (uppercase via CSS, letter-spaced).
- **IBM Plex Mono** (`mono`) for data: `metric` for big numbers (speeds, uptime, latency) and `data` for ticket IDs, IPs, MACs, serials, timestamps in status meta lines. Numbers that a customer compares are always mono so digits line up.

All three are on Google Fonts (`components/bundle.css` imports them). Line length 60–75 characters for body text. Headings never end with a period.

## Space, shape and depth

- 4px base grid: `space-1` (4) … `space-9` (96). Card padding `space-5` desktop / `space-4` mobile; `space-6` between cards; `space-7` between portal sections; `space-8`/`space-9` for marketing sections.
- Radii are small and precise: `radius-sm` chips, `radius-md` buttons/inputs/tiles, `radius-lg` cards. `radius-pill` is reserved for status pills and dots.
- Depth: in `dark`, surfaces step up in lightness and `elevation-1` is a 1px hairline; in `light`, one soft navy-tinted shadow. `elevation-2` for menus, dialogs and the featured plan.
- Interactive controls have a 44px minimum height (`bs-btn--sm` is 32px, for dense tables only).
- Keyboard focus: a solid 2px `focus-ring` with a 2px offset, on every interactive element. Never remove it.

## Motifs

- **Hex**: the frame of the logo. Use it for feature icons (FeatureHex), avatar crops of team photos, and faint background grids in hero and social art (hex outlines in `brand-cyan` at 6% opacity). Flat-topped orientation, as in the logo. Never fill a whole page with solid hexes or use them as bullets.
- **Pulse**: the heartbeat line under the wordmark. Use it as a section divider (PulseDivider), as the shape of sparklines, and as a baseline under hero art. One blip per line.
- **Signal bars**: the 90-day uptime strip on the status page (StatusBoard) is a brand asset; reuse it in marketing as proof.

## Imagery

- Real photos of the real team, vans, racks and customers' offices, shot in natural light. Cool white balance to sit on navy. No stock “hacker in a hoodie”, glowing padlocks, binary rain or globes with network lines.
- When there's no photo, use the hex grid and pulse line on `brand-navy`, never AI-generated scenes.
- Diagrams (network maps, service tiers) use 2px `signal` lines and `surface-100` boxes with `radius-md`.

## Iconography

- **Lucide** icons (lucide.dev), outline, `stroke-icon` (2px at 24px, 1.75px at 16px), round caps and joins, which match the logo's waveform. Colour follows the text it sits with (`currentColor`), except status icons, which take their status token.
- Fixed meanings: check = operational/included, triangle-alert = degraded, x = outage, wrench = maintenance, arrow-right = navigates, shield-check = security, wifi = internet, server = managed infrastructure, headphones = support.
- No emoji anywhere in product or marketing UI.

## Logo

Use the files in the **Logos** asset group, never retyped or redrawn. Stacked logo for square spaces and social, horizontal logo for nav bars and documents, icon alone for favicons and app icons. Keep clear space of half the hex's height on every side; minimum width 96px (horizontal) or 24px (icon). On white use the light-ground files (darker teal `#1BB8BE` for “bit” and the waveform); never place the cyan logo on white or on photos without a navy plate.

## Building with this system (see SKILL.md)

Components are plain HTML with the classes in `components/bundle.css` (prefix `bs-`), driven by the CSS variables in `tokens.css`. Set `data-theme="dark"` (default) or `data-theme="light"` on `<html>`. Read each component's README for markup; copy the markup from its preview.
