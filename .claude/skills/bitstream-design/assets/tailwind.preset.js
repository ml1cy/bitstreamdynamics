// bitstream Tailwind preset. Requires tokens.css loaded globally (colors are CSS variables, so themes switch automatically).
// tailwind.config.js:  presets: [require('./tailwind.preset.js')]
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "brand-navy": "var(--brand-navy)",
        "brand-cyan": "var(--brand-cyan)",
        "surface-000": "var(--surface-000)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",
        "signal-soft": "var(--signal-soft)",
        "line": "var(--line)",
        "line-strong": "var(--line-strong)",
        "ink": "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-subtle": "var(--ink-subtle)",
        "signal": "var(--signal)",
        "signal-hover": "var(--signal-hover)",
        "on-signal": "var(--on-signal)",
        "signal-ink": "var(--signal-ink)",
        "focus-ring": "var(--focus-ring)",
        "status-up": "var(--status-up)",
        "status-degraded": "var(--status-degraded)",
        "status-down": "var(--status-down)",
        "status-maint": "var(--status-maint)",
        "on-status": "var(--on-status)",
        "danger-fill": "var(--danger-fill)"
      },
      "fontFamily": {
        "display": [
          "Poppins",
          "system-ui",
          "sans-serif"
        ],
        "sans": [
          "IBM Plex Sans",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "IBM Plex Mono",
          "ui-monospace",
          "monospace"
        ]
      },
      "spacing": {
        "bs-1": "4px",
        "bs-2": "8px",
        "bs-3": "12px",
        "bs-4": "16px",
        "bs-5": "24px",
        "bs-6": "32px",
        "bs-7": "48px",
        "bs-8": "64px",
        "bs-9": "96px"
      },
      "borderRadius": {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px"
      },
      "boxShadow": {
        "elevation-1": "var(--elevation-1)",
        "elevation-2": "var(--elevation-2)"
      },
      "fontSize": {
        "display-xl": [
          "56px",
          {
            "lineHeight": "60px",
            "fontWeight": "500",
            "letterSpacing": "-0.02em"
          }
        ],
        "display": [
          "40px",
          {
            "lineHeight": "46px",
            "fontWeight": "500",
            "letterSpacing": "-0.015em"
          }
        ],
        "h1": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "500",
            "letterSpacing": "-0.01em"
          }
        ],
        "h2": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "500"
          }
        ],
        "h3": [
          "18px",
          {
            "lineHeight": "26px",
            "fontWeight": "500"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "body": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "label": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "500"
          }
        ],
        "small": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "overline": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "600",
            "letterSpacing": "0.08em"
          }
        ],
        "metric": [
          "32px",
          {
            "lineHeight": "36px",
            "fontWeight": "500"
          }
        ],
        "data": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ]
      }
    }
  }
};
