# bitstream components

Plain HTML + the `bs-` classes in `assets/bitstream.css`. Icons are inline Lucide SVG paths. Copy the markup, change the content.

## NavBar

Top bar for the website and portal: horizontal logo, up to six section links, then sign-in and the one primary action.

**Markup:** `nav.bs-nav` › `img.bs-nav__logo` (horizontal logo, dark-ground file in the dark theme, light-ground file in light) › `.bs-nav__links` with `a` items (`aria-current="page"` on the active one; it gets the `signal-soft` ground and a `signal` underline) › ghost “Sign in” › primary small button. Always link **Status** from the nav: customers look for it first when something breaks. Under 768px collapse links into a menu button; keep the logo and the primary action visible.

```html
<style>.lg-l{display:none}[data-theme="light"] .lg-d{display:none}[data-theme="light"] .lg-l{display:block}</style>
<nav class="bs-nav"><img class="bs-nav__logo lg-d" src="/logos/bitstream-logo-horizontal-transparent-dark-bg.svg" alt="bitstream"><img class="bs-nav__logo lg-l" src="/logos/bitstream-logo-horizontal-transparent-light-bg.svg" alt="bitstream">
<div class="bs-nav__links"><a href="#" aria-current="page">Internet</a><a href="#">Managed IT</a><a href="#">Business</a><a href="#">Status</a><a href="#">Support</a></div>
<a class="bs-btn bs-btn--ghost bs-btn--sm" href="#">Sign in</a><a class="bs-btn bs-btn--primary bs-btn--sm" href="#">Check availability</a></nav>
```

## Button

Buttons start an action; one `bs-btn--primary` per view, for the thing the page is for. Verb first, sentence case, no exclamation marks: “Check availability”, “Restart router”.

**Markup:** `<button class="bs-btn bs-btn--primary">Label</button>`. Variants: `--primary` (`signal` fill, `on-signal` text), `--secondary` (`line-strong` border, `ink` text), `--ghost` (`signal-ink` text, for tertiary links inside cards), `--danger` (`danger-fill`, `on-status` text; only for cancelling service, deleting devices, wiping data). Add `--sm` for 32px dense rows in tables and toolbars; default height is 44px so it is a safe touch target.

- A trailing arrow icon means “go somewhere”; no icon means “do it here”.
- Danger actions always open a confirm step that repeats the consequence (“Your internet will stop on Nov 30”).
- Never put two primary buttons side by side; demote one to secondary.

```html
<div class="bs-pad bs-stack">
<div class="bs-row"><button class="bs-btn bs-btn--primary">Check availability <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button><button class="bs-btn bs-btn--secondary">Talk to a tech</button><button class="bs-btn bs-btn--ghost">View plans</button><button class="bs-btn bs-btn--danger">Cancel service</button></div>
<div class="bs-row"><button class="bs-btn bs-btn--primary bs-btn--sm">Restart router</button><button class="bs-btn bs-btn--secondary bs-btn--sm">Download invoice</button><button class="bs-btn bs-btn--primary bs-btn--sm" disabled>Submitting…</button></div>
</div>
```

## StatusPill

A one-glance state for a service, circuit, device or site. Always icon + word + colour, never colour alone, because status is what customers read during an outage and many people can't tell green from red.

**Markup:** `<span class="bs-status bs-status--up"><svg…check/>Operational</span>`. States and their fixed words and icons:

| class | token | word | icon |
| --- | --- | --- | --- |
| `--up` | `status-up` | Operational / Online | check |
| `--degraded` | `status-degraded` | Degraded / Slow | triangle-alert |
| `--down` | `status-down` | Outage / Offline | x |
| `--maint` | `status-maint` | Maintenance / Scheduled | wrench |

You may append a short qualifier after a middle dot (“Online · 3 days”). Don't invent new states; map them to these four.

```html
<div class="bs-pad bs-row"><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Operational</span><span class="bs-status bs-status--degraded"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>Degraded</span><span class="bs-status bs-status--down"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>Outage</span><span class="bs-status bs-status--maint"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>Maintenance</span><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Online · 3 days</span></div>
```

## StatusBoard

The public and portal network-status panel: a header with the overall state, then one row per service with a mono meta line and a `StatusPill`.

**Markup:** `section.bs-board` › `.bs-board__head` (title in `h3` style + overall pill) › `.bs-board__row` × n (name, `.bs-board__meta`, optional `.bs-bars` uptime history, pill). Each `.bs-bars i` is one day: plain = up, `.d` degraded, `.x` outage; show 30–90 days and label it in the meta line.

- Overall state is the worst row's state.
- Meta lines are facts with numbers and times (“Since 08:42 · 12 sites affected”), set in `data`.
- Order rows by customer impact, not alphabetically.

```html
<div class="bs-pad"><section class="bs-board">
<div class="bs-board__head"><h3 class="bs-board__title">Network status</h3><span class="bs-status bs-status--degraded"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>Partial degradation</span></div>
<div class="bs-board__row"><div><div class="bs-board__name">Fiber backbone</div><div class="bs-board__meta">45 days · 99.99% uptime</div></div><div class="bs-bars" aria-label="uptime history"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="d"></i><i class="d"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="d"></i><i class="x"></i><i></i><i></i><i></i></div><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Operational</span></div>
<div class="bs-board__row"><div><div class="bs-board__name">Fixed wireless · North sector</div><div class="bs-board__meta">Since 08:42 · 12 sites affected</div></div><span class="bs-status bs-status--degraded"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>Degraded</span></div>
<div class="bs-board__row"><div><div class="bs-board__name">Managed backup</div><div class="bs-board__meta">Next window Sun 02:00–04:00</div></div><span class="bs-status bs-status--maint"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>Scheduled</span></div>
<div class="bs-board__row"><div><div class="bs-board__name">Support phone line</div><div class="bs-board__meta">Avg. answer 38s</div></div><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Operational</span></div>
</section></div>
```

## AlertBanner

Page-level notices about service: outages, degradations, planned maintenance and resolutions. Sits at the top of the portal or above the fold on the site.

**Markup:** `div.bs-alert.bs-alert--{down|degraded|info|up}` › icon svg › `.bs-alert__body` › `p.bs-alert__title` + `p.bs-alert__text`. Use `role="alert"` for `--down` only.

Write every alert as: **what happened, what we're doing, when it'll be fixed, what it costs you** (usually nothing). Plain words, local times, no “we apologize for any inconvenience”. Update the same banner rather than stacking new ones; when resolved, switch to `--up` with “Resolved at 12:41 PM” for 24 hours, then remove it.

```html
<div class="bs-pad bs-stack">
<div class="bs-alert bs-alert--down" role="alert"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg><div class="bs-alert__body"><p class="bs-alert__title">Outage in Westside area</p><p class="bs-alert__text">A fiber line was cut by construction at 9:14 AM. Crews are on site; we expect service back by 1:00 PM. You won't be billed for today.</p></div></div>
<div class="bs-alert bs-alert--degraded"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><div class="bs-alert__body"><p class="bs-alert__title">Slower speeds this evening</p><p class="bs-alert__text">Peak traffic on one upstream link. We're adding capacity tonight.</p></div></div>
<div class="bs-alert bs-alert--info"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div class="bs-alert__body"><p class="bs-alert__title">Planned maintenance Sunday 2–4 AM</p><p class="bs-alert__text">Internet may drop for up to 10 minutes. No action needed.</p></div></div>
</div>
```

## MetricTile

One number that matters, with its unit and context: uptime, speed, latency, open tickets, devices protected. Used on the portal dashboard and in marketing proof bands.

**Markup:** `.bs-metrics` grid › `.bs-metric` › `p.bs-metric__label` (overline) › `p.bs-metric__value` (`metric`, mono) with the unit in `<small>` › either `.bs-metric__delta` text, a `StatusPill`, or an `svg.bs-spark` polyline (drawn in `signal`, stroke `stroke-pulse`; the pulse-blip shape is welcome).

- Real, measured numbers only, with their window (“30 days”, “2 min ago”). Never round 99.95% up to 100%.
- Units are always shown and lowercase-correct: Mbps, Gbps, ms, %.

```html
<div class="bs-pad bs-metrics">
<div class="bs-metric"><p class="bs-metric__label">Uptime · 30 days</p><p class="bs-metric__value">99.98<small>%</small></p><div class="bs-metric__delta"><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>On target</span></div></div>
<div class="bs-metric"><p class="bs-metric__label">Download</p><p class="bs-metric__value">942<small>Mbps</small></p><svg class="bs-spark" viewBox="0 0 120 28" preserveAspectRatio="none"><polyline points="0,14 20,12 34,15 44,14 50,4 56,24 62,10 68,14 90,13 120,12"/></svg></div>
<div class="bs-metric"><p class="bs-metric__label">Latency</p><p class="bs-metric__value">11<small>ms</small></p><div class="bs-metric__delta">to Chicago IX · 2 min ago</div></div>
<div class="bs-metric"><p class="bs-metric__label">Open tickets</p><p class="bs-metric__value">3</p><div class="bs-metric__delta">1 waiting on you</div></div>
</div>
```

## PlanCard

An internet or managed-service plan on the pricing page. Speed is the hero, then price, then three to five plain benefits.

**Markup:** `.bs-plans` grid › `article.bs-plan` (add `--featured` to one card at most, with a `span.bs-plan__tag`) › `h3.bs-plan__name` › `p.bs-plan__speed` (mono, `signal-ink`, unit in `<span>`) › `p.bs-plan__price` (unit “/mo” in `<span>`) › `ul` of benefits with check icons › one `Button` (primary on the featured card only).

- Speeds as numbers with thousands separators (“1,000 Mbps”), not “1 Gig” in the speed line; the name can say Gig.
- Prices are all-in monthly; put fees and contract terms in a line under the grid, never in small print inside the card.
- Benefits start with the thing (“No data caps”), not adjectives.

```html
<div class="bs-pad" style="padding-top:28px"><div class="bs-plans">
<article class="bs-plan"><h3 class="bs-plan__name">Fiber 300</h3><p class="bs-plan__speed">300<span>Mbps</span></p><p class="bs-plan__price">$55<span> /mo</span></p><ul><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Symmetrical upload</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>No data caps</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Wi-Fi 6 router included</li></ul><button class="bs-btn bs-btn--secondary">Choose Fiber 300</button></article>
<article class="bs-plan bs-plan--featured"><span class="bs-plan__tag">Most picked</span><h3 class="bs-plan__name">Fiber 1 Gig</h3><p class="bs-plan__speed">1,000<span>Mbps</span></p><p class="bs-plan__price">$75<span> /mo</span></p><ul><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Everything in Fiber 300</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Whole-home mesh</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Same-day support visits</li></ul><button class="bs-btn bs-btn--primary">Choose Fiber 1 Gig</button></article>
<article class="bs-plan"><h3 class="bs-plan__name">Business Managed</h3><p class="bs-plan__speed">2,000<span>Mbps</span></p><p class="bs-plan__price">$189<span> /mo</span></p><ul><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Static IP block (/29)</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>24/7 monitoring &amp; 4-hr SLA</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Managed firewall</li></ul><button class="bs-btn bs-btn--secondary">Talk to sales</button></article>
</div></div>
```

## FeatureHex

A service or benefit with its icon in the hex frame from the logo. Used in rows of three or four on marketing pages.

**Markup:** `div.bs-feature` › `div.bs-hex > span > svg` (one Lucide icon, `signal-ink` stroke; the outer hex is `signal`, the inner `surface-100`, echoing the logo ring) › `h4` (Poppins, `h3` style) › `p` (one or two sentences, `ink-muted`). The hex is the only place icons get a frame; elsewhere icons sit bare.

```html
<div class="bs-pad bs-row" style="gap:32px;align-items:flex-start">
<div class="bs-feature"><div class="bs-hex"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></span></div><h4>Managed security</h4><p>Firewall, patching and endpoint protection, watched by people 24/7.</p></div>
<div class="bs-feature"><div class="bs-hex"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg></span></div><h4>Business fiber</h4><p>Symmetrical speeds with a static IP and a 4-hour fix guarantee.</p></div>
<div class="bs-feature"><div class="bs-hex"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg></span></div><h4>Real local help</h4><p>Call and talk to a technician, not a phone tree.</p></div>
</div>
```

## TextField

Labelled single-line input. Labels sit above the field, always visible; placeholders show an example, never the label.

**Markup:** `div.bs-field` › `label` › `input.bs-input` (add `--mono` for IPs, MACs, account and ticket numbers) › optional `span.bs-field__help`. Error state: add `bs-field--error` to the wrapper and `aria-invalid="true"` to the input; the help line becomes the fix (“Account numbers are 8 digits…”), not “Invalid input”. Pair an input with a button in `.bs-inline` for the address check.

```html
<div class="bs-pad bs-stack">
<div class="bs-field"><label for="a">Service address</label><div class="bs-inline"><input id="a" class="bs-input" placeholder="123 Main St, Unit 4"><button class="bs-btn bs-btn--primary">Check</button></div><span class="bs-field__help">We'll show the plans available at this address.</span></div>
<div class="bs-field"><label for="b">Static IP</label><input id="b" class="bs-input bs-input--mono" value="203.0.113.42"></div>
<div class="bs-field bs-field--error"><label for="c">Account number</label><input id="c" class="bs-input bs-input--mono" value="BS-0042" aria-invalid="true"><span class="bs-field__help">Account numbers are 8 digits after “BS-”, like BS-00421987.</span></div>
</div>
```

## TicketTable

Support tickets, devices, invoices and other records in the customer portal.

**Markup:** `table.bs-table` with `thead` › `th` and `tbody` › `td`. Cell modifiers: `td.m` for IDs and addresses (mono, `signal-ink`, links to the record), `td.s` for timestamps (`ink-subtle`). Status cells use a `StatusPill` for system states and a neutral `span.bs-chip` for workflow states that need the customer (“Waiting on you”).

- Relative times under 24 h (“12 min ago”), then dates (“Oct 22”).
- Subjects are written as the problem in plain words, not as error codes.

```html
<div class="bs-pad"><table class="bs-table">
<thead><tr><th>Ticket</th><th>Subject</th><th>Status</th><th>Updated</th></tr></thead>
<tbody>
<tr><td class="m">TKT-20418</td><td>Printer offline at front desk</td><td><span class="bs-status bs-status--degraded"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>In progress</span></td><td class="s">12 min ago</td></tr>
<tr><td class="m">TKT-20411</td><td>New hire laptop setup · J. Patel</td><td><span class="bs-chip">Waiting on you</span></td><td class="s">Yesterday</td></tr>
<tr><td class="m">TKT-20397</td><td>VPN drops on hotel Wi-Fi</td><td><span class="bs-status bs-status--up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Resolved</span></td><td class="s">Oct 22</td></tr>
</tbody></table></div>
```

## PulseDivider

The heartbeat line from under the wordmark, used as a section divider and as the shape of sparklines. It says “live, monitored, always on”.

**Markup:** `svg.bs-pulse` with one `polyline`: flat, one blip (down-up-down-up, about 10% of the width), flat. Stroke `signal`, width `stroke-pulse`, round caps. One blip per divider, roughly centred or aligned to a heading. At most one divider per screen; don't animate it except as a single draw-in on the status page.

```html
<div class="bs-pad"><svg class="bs-pulse" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,20 262,20 270,15 278,24 286,6 294,36 302,16 310,22 318,20 600,20"/></svg></div>
```
