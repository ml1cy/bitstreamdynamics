# bitstream tokens

Use the CSS variable, never the hex, in UI code. Values: dark (default) / light.

## Color

| token | dark | light | use |
|---|---|---|---|
| `--brand-navy` | `#000138` | `#000138` | The navy of the logo. Brand moments only: logo grounds, hero bands, social art. Not a UI surface in the light theme. |
| `--brand-cyan` | `#5CE1E6` | `#5CE1E6` | The cyan of the logo ring, 'bit' and the pulse line. Logo, illustrations and the pulse motif only; for UI fills use `signal`. |
| `--surface-000` | `#000138` | `#F4F7FC` | Page background. |
| `--surface-100` | `#06104F` | `#FFFFFF` | Raised surfaces: cards, panels, nav bar, plan cards. |
| `--surface-200` | `#0E1B66` | `#E8EEF8` | Inset surfaces: inputs, table header rows, hover on rows. |
| `--signal-soft` | `#0A2D63` | `#DDF6F7` | Selected row, active nav item and info-banner ground. Pairs with `ink` text. |
| `--line` | `#1F2D7A` | `#D3DBEA` | Hairline dividers between rows and sections. Decorative only; never the only boundary of a control. |
| `--line-strong` | `#6E7BC0` | `#7681A6` | Borders of inputs, secondary buttons and checkboxes (3:1 on surface-000/100/200). |
| `--ink` | `#FFFFFF` | `#000138` | Primary text and headings on surface-000, surface-100, surface-200 and signal-soft. |
| `--ink-muted` | `#B4BCE4` | `#3D4573` | Secondary text: descriptions, table cells, captions. On surface-000/100/200. |
| `--ink-subtle` | `#8C96CC` | `#5A628A` | Tertiary text: timestamps, placeholders, helper text. On surface-000/100 (and 200 in dark). |
| `--signal` | `#5CE1E6` | `#1BB8BE` | Primary action fills, the pulse line, progress and selected indicators. Text on it is `on-signal`. |
| `--signal-hover` | `#8EEBEE` | `#169EA3` | Hover/pressed state of `signal` fills. |
| `--on-signal` | `#000138` | `#000138` | Text and icons on `signal` and `signal-hover` fills. |
| `--signal-ink` | `#5CE1E6` | `#0A6E73` | Links and accent text (speeds, inline highlights) on surface-000/100/200. |
| `--focus-ring` | `#5CE1E6` | `#0A6E73` | Keyboard focus: 2px solid ring with a 2px gap in the page colour. ≥3:1 on every surface. |
| `--status-up` | `#3DDC97` | `#0E7146` | Operational / online. Always paired with a label and the up-dot or check icon. |
| `--status-degraded` | `#FFC24B` | `#8A5300` | Degraded performance / partial. Always paired with a label and the triangle icon. |
| `--status-down` | `#FF7A8A` | `#B3213B` | Outage / offline / errors and destructive actions. Always paired with a label and the cross icon. |
| `--status-maint` | `#AEB8FF` | `#4150C4` | Scheduled maintenance / informational. Always paired with a label and the wrench or clock icon. |
| `--on-status` | `#000138` | `#FFFFFF` | Text on a solid status fill (status-up/degraded/down/maint as a button or chip fill). |
| `--danger-fill` | `{status-down}` | `{status-down}` | Destructive button fill; alias of status-down. Text on it is `on-status`. |

## Type styles (classes in tokens.css)

| class | family | size/line | weight | use |
|---|---|---|---|---|
| `.display-xl` | display | 56px/60px | 500 | One hero headline per page. Poppins, sentence case. |
| `.display` | display | 40px/46px | 500 | Section heroes, plan page titles. |
| `.h1` | display | 32px/40px | 500 | Page titles in the customer portal. |
| `.h2` | display | 24px/32px | 500 | Section headings, card group titles. |
| `.h3` | display | 18px/26px | 500 | Card titles, plan names, dialog titles. |
| `.body-lg` | sans | 18px/28px | 400 | Marketing lead paragraphs. |
| `.body` | sans | 16px/24px | 400 | Default body copy, portal and site. |
| `.label` | sans | 14px/20px | 500 | Buttons, form labels, nav items, table headers. |
| `.small` | sans | 14px/20px | 400 | Helper text, table cells, secondary lines. |
| `.overline` | sans | 12px/16px | 600 | Eyebrows above headings and metric labels. Uppercase, set with CSS text-transform. |
| `.metric` | mono | 32px/36px | 500 | Big numbers: uptime, speeds, latency in metric tiles and plan cards. |
| `.data` | mono | 14px/20px | 400 | Ticket IDs, IP and MAC addresses, serials, timestamps, command output. |

## Spacing

| token | value | use |
|---|---|---|
| `--space-1` | `4px` | Icon-to-label gap, status dot gap. |
| `--space-2` | `8px` | Gaps inside controls; between a label and its field. |
| `--space-3` | `12px` | Button vertical padding (×2 = 44px targets with label line height); chip padding. |
| `--space-4` | `16px` | Default card padding on mobile; gaps between form fields; row padding. |
| `--space-5` | `24px` | Card padding on desktop; gutters in grids. |
| `--space-6` | `32px` | Between cards and groups. |
| `--space-7` | `48px` | Between page sections in the portal. |
| `--space-8` | `64px` | Marketing section padding (mobile). |
| `--space-9` | `96px` | Marketing section padding (desktop). |

## Radius

| token | value | use |
|---|---|---|
| `--radius-sm` | `4px` | Chips, badges, checkboxes, table cells. |
| `--radius-md` | `8px` | Buttons, inputs, alert banners, metric tiles. |
| `--radius-lg` | `14px` | Cards, plan cards, dialogs. |
| `--radius-pill` | `999px` | Status pills and the status dot only. |

## Shadow

| token | value | use |
|---|---|---|
| `--elevation-1` | `dark: 0 0 0 1px #1F2D7A / light: 0 1px 2px rgba(0, 1, 56, 0.06), 0 4px 16px rgba(0, 1, 56, 0.06)` | Cards and plan cards at rest. |
| `--elevation-2` | `dark: 0 0 0 1px #2E3E96, 0 12px 32px rgba(0, 0, 20, 0.6) / light: 0 2px 4px rgba(0, 1, 56, 0.08), 0 16px 40px rgba(0, 1, 56, 0.12)` | Menus, dialogs, a featured plan card. |

## Stroke

| token | value | use |
|---|---|---|
| `--stroke-pulse` | `2px` | The pulse line divider and chart lines. |
| `--stroke-icon` | `2px` | Icon stroke at 24px (Lucide default); 1.75px at 16px. |
