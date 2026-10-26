// The class's content in one place, so every page ties back to the same seven layers.

export const LAYERS = [
  {
    n: 7,
    name: "Application",
    does: "Where the protocols people actually use do their work.",
    examples: ["HTTP", "DNS", "DHCP", "email"],
    inClass: "Packet Tracer labs: configuring and testing the services people use.",
  },
  {
    n: 6,
    name: "Presentation",
    does: "Translates, encrypts and compresses data for the application above it.",
    examples: ["TLS", "encryption", "encoding"],
    inClass: "Network security: encryption concepts.",
  },
  {
    n: 5,
    name: "Session",
    does: "Opens, manages and closes the conversation between two hosts.",
    examples: ["sessions", "connection state"],
    inClass: "Covered inside the TCP/IP unit, alongside connection state.",
  },
  {
    n: 4,
    name: "Transport",
    does: "Splits data into segments and manages delivery with TCP or UDP.",
    examples: ["TCP", "UDP", "ports"],
    inClass: "TCP/IP fundamentals: ports, reliable versus best-effort delivery.",
  },
  {
    n: 3,
    name: "Network",
    does: "Routes packets between networks using IP addresses.",
    examples: ["IPv4", "subnets", "routers", "ACLs"],
    inClass: "Routing basics: IP addressing, subnetting, router configuration.",
  },
  {
    n: 2,
    name: "Data link",
    does: "Frames bits and delivers them to a MAC address on the local network.",
    examples: ["Ethernet", "MAC addresses", "switches", "VLANs"],
    inClass: "Switching basics: MAC addressing, collision domains, VLANs.",
  },
  {
    n: 1,
    name: "Physical",
    does: "Sends raw bits as electrical signal, light or radio over real hardware.",
    examples: ["Cat6", "fiber", "RJ45", "patch panels"],
    inClass: "Structured cabling: Cat6 runs, punch-down blocks, patch panels.",
  },
];

const ALL_LAYERS = [1, 2, 3, 4, 5, 6, 7];

export const PROJECTS = [
  {
    name: "Structured cabling build",
    unit: "Structured cabling",
    layers: [1],
    detail:
      "Terminate Cat6 runs to a patch panel and punch down jacks to spec, then certify every run.",
  },
  {
    name: "Packet Tracer network build",
    unit: "Routing and switching",
    layers: [2, 3],
    detail:
      "Design and simulate a multi-router, multi-switch topology, then troubleshoot it until traffic flows end to end.",
  },
  {
    name: "Addressing and subnetting plan",
    unit: "TCP/IP and the OSI model",
    layers: [3],
    detail:
      "Plan an IPv4 addressing scheme for a multi-department network and justify every subnet boundary.",
  },
  {
    name: "Security hardening lab",
    unit: "Network security",
    layers: [3, 4],
    detail:
      "Configure basic ACLs and access policies on a simulated network, then try to break someone else's.",
  },
  {
    name: "Network+ exam prep",
    unit: "CompTIA Network+",
    layers: ALL_LAYERS,
    detail:
      "Practice objective by objective toward the industry certification the class works up to.",
  },
];

export const TEAMS = [
  {
    name: "Infrastructure and cabling",
    layers: [1],
    does: "Runs and terminates the physical layer: Cat6, punch-downs, patch panels.",
    seats: ["Lead", "Rotating shift"],
  },
  {
    name: "Network operations",
    layers: [2, 3],
    does: "Keeps traffic moving: routing, switching, and the day-to-day of running a network.",
    seats: ["Lead", "Rotating shift"],
  },
  {
    name: "Security desk",
    layers: [3, 4, 6],
    does: "Network security fundamentals: the threats, the defenses, the habits.",
    seats: ["Lead"],
  },
  {
    name: "Certification lab",
    layers: ALL_LAYERS,
    does: "Packet Tracer builds and CompTIA Network+ exam prep.",
    seats: ["Lead", "Rotating shift"],
  },
];

// [3, 4, 6] -> "L3–L4 · L6"
export function formatLayers(layers) {
  const sorted = [...layers].sort((a, b) => a - b);
  const runs = [];
  for (const n of sorted) {
    const run = runs[runs.length - 1];
    if (run && n === run[1] + 1) run[1] = n;
    else runs.push([n, n]);
  }
  return runs.map(([a, b]) => (a === b ? `L${a}` : `L${a}–L${b}`)).join(" · ");
}

// "Security desk" -> "security-desk", used for in-page anchors across pages.
export const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Things that span the whole stack (Network+, the certification lab) are left out of per-layer lists.
export const spansAll = (item) => item.layers.length === ALL_LAYERS.length;
