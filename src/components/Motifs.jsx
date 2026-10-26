import { useId } from "react";

// Brand motifs from the bitstream system: a faint flat-topped hex grid (brand-cyan at 6%)
// and the pulse divider (one blip per line, at most one per screen).

const R = 28;
const HH = (R * Math.sqrt(3)) / 2;

function hexPoints(cx, cy) {
  return [
    [cx + R, cy],
    [cx + R / 2, cy + HH],
    [cx - R / 2, cy + HH],
    [cx - R, cy],
    [cx - R / 2, cy - HH],
    [cx + R / 2, cy - HH],
  ]
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
}

// One tile of a flat-topped tiling; the off-tile hexes complete the ones cut at the edges.
const TILE_CENTERS = [
  [R, HH],
  [2.5 * R, 0],
  [2.5 * R, 2 * HH],
  [-0.5 * R, 0],
  [-0.5 * R, 2 * HH],
];

export function HexGrid({ className }) {
  const id = useId();
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={3 * R} height={2 * HH} patternUnits="userSpaceOnUse">
          {TILE_CENTERS.map(([cx, cy]) => (
            <polygon key={`${cx}-${cy}`} points={hexPoints(cx, cy)} />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function PulseDivider({ className = "" }) {
  return (
    <svg
      className={`bs-pulse ${className}`.trim()}
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline points="0,20 262,20 270,15 278,24 286,6 294,36 302,16 310,22 318,20 600,20" />
    </svg>
  );
}
