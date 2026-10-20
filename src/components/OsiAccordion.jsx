import { useState } from "react";

const LAYERS = [
  {
    n: 1,
    name: "Physical",
    does: "Sends raw bits as electrical signal, light, or radio over real hardware.",
    inClass: "Structured cabling & hardware: Cat6 runs, punch-down blocks, patch panels.",
  },
  {
    n: 2,
    name: "Data Link",
    does: "Frames bits and addresses them to a MAC address on the local segment.",
    inClass: "Switching basics: MAC addressing, collision domains, VLANs.",
  },
  {
    n: 3,
    name: "Network",
    does: "Routes packets between networks using IP addresses.",
    inClass: "Routing basics: IP addressing, subnetting, router configuration.",
  },
  {
    n: 4,
    name: "Transport",
    does: "Breaks data into segments and manages delivery with TCP or UDP.",
    inClass: "Network fundamentals: TCP/IP, ports, reliable vs. best-effort delivery.",
  },
  {
    n: 5,
    name: "Session",
    does: "Opens, manages, and closes the conversation between two hosts.",
    inClass: "Covered inside the TCP/IP unit, alongside connection state.",
  },
  {
    n: 6,
    name: "Presentation",
    does: "Translates, encrypts, and compresses data for the application above it.",
    inClass: "Network security fundamentals: encryption concepts.",
  },
  {
    n: 7,
    name: "Application",
    does: "Where the protocols people actually use (HTTP, DNS, email) do their work.",
    inClass: "Packet Tracer labs: building and testing the protocols above.",
  },
];

export function OsiAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="osi">
      {LAYERS.map((layer, i) => {
        const isOpen = i === open;
        return (
          <button
            key={layer.n}
            type="button"
            className={`osi-panel${isOpen ? " is-open" : ""}`}
            style={{ "--tint": i }}
            onClick={() => setOpen(i)}
            aria-expanded={isOpen}
          >
            <span className="osi-panel-name">{layer.name}</span>
            {isOpen && (
              <span className="osi-panel-body">
                <span className="osi-panel-does">{layer.does}</span>
                <span className="osi-panel-class">{layer.inClass}</span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
