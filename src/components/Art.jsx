import { forwardRef } from "react";

// Flat, code-drawn graphics used in place of photography (none exists yet).
// Each draws a real object from the subject: a patch panel, a cable's twisted pairs.

export const PatchPanelArt = forwardRef(function PatchPanelArt({ className }, ref) {
  const ports = Array.from({ length: 24 });
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 520 400"
      role="img"
      aria-label="Illustration of a patch panel wired with network cables"
    >
      <rect x="20" y="40" width="480" height="104" rx="4" fill="var(--surface)" />
      {ports.map((_, i) => {
        const col = i % 12;
        const row = Math.floor(i / 12);
        const x = 44 + col * 37.5;
        const y = 64 + row * 44;
        return <rect key={i} x={x} y={y} width="24" height="18" rx="2" fill="var(--bg)" />;
      })}
      {ports.map((_, i) => {
        const col = i % 12;
        const row = Math.floor(i / 12);
        const x = 56 + col * 37.5;
        const y = row === 0 ? 82 : 126;
        const hue = i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--field-1)" : "var(--muted)";
        const sway = ((i * 37) % 60) - 30;
        return (
          <path
            key={i}
            d={`M${x} ${y} C ${x + sway} ${y + 90}, ${x - sway} ${y + 180}, ${x + sway / 2} 360`}
            fill="none"
            stroke={hue}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
});

export const TwistedPairArt = forwardRef(function TwistedPairArt({ className }, ref) {
  // The four twisted pairs of a Cat6 cable (TIA/EIA-568 colour code), used as a masked motif.
  const pairs = [
    { id: "p1", a: "#f1f1ef", b: "var(--accent)", angle: 0 },
    { id: "p2", a: "#f1f1ef", b: "#d98a5f", angle: 90 },
    { id: "p3", a: "#f1f1ef", b: "var(--field-1)", angle: 180 },
    { id: "p4", a: "#f1f1ef", b: "#6f8f9e", angle: 270 },
  ];
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Illustration of a cable's four twisted wire pairs"
    >
      <defs>
        <clipPath id="pairMask">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
      </defs>
      <g clipPath="url(#pairMask)">
        <rect width="400" height="400" fill="var(--surface)" />
        {pairs.map((p) => (
          <g key={p.id} transform={`rotate(${p.angle} 200 200)`}>
            <circle cx="200" cy="120" r="46" fill={p.b} opacity="0.9" />
            <circle cx="200" cy="120" r="46" fill="none" stroke={p.a} strokeWidth="10" strokeDasharray="14 10" />
          </g>
        ))}
        <circle cx="200" cy="200" r="30" fill="var(--bg)" />
      </g>
    </svg>
  );
});
