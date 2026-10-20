import { Reveal } from "../components/Reveal.jsx";

const PROJECTS = [
  {
    name: "Structured cabling build",
    unit: "Structured cabling & hardware",
    detail:
      "Terminate Cat6 runs to a patch panel and punch down jacks to spec, then certify every run.",
  },
  {
    name: "Packet Tracer network build",
    unit: "Routing & switching",
    detail:
      "Design and simulate a multi-router, multi-switch topology, then troubleshoot it until traffic flows end to end.",
  },
  {
    name: "Addressing & subnetting plan",
    unit: "TCP/IP & OSI",
    detail:
      "Plan an IPv4 addressing scheme for a multi-department network and justify every subnet boundary.",
  },
  {
    name: "Security hardening lab",
    unit: "Network security",
    detail:
      "Configure basic ACLs and access policies on a simulated network, then try to break someone else's.",
  },
  {
    name: "Network+ exam prep",
    unit: "CompTIA Network+",
    detail:
      "Practice objective-by-objective toward the industry certification the class works up to.",
  },
];

export default function Projects() {
  return (
    <>
      <header className="page-head">
        <h1 className="page-head-enter">Projects</h1>
        <p className="page-head-enter page-head-enter-2">
          What the curriculum turns into on the bench. Each project maps to a
          unit in the OSI stack on the home page.
        </p>
      </header>

      <section className="projects">
        {PROJECTS.map((p, i) => (
          <article className="project-row" key={p.name}>
            <Reveal as="span" className="project-unit" delay={i * 90}>
              {p.unit}
            </Reveal>
            <Reveal as="h2" delay={i * 90 + 60}>
              {p.name}
            </Reveal>
            <Reveal as="p" delay={i * 90 + 120}>
              {p.detail}
            </Reveal>
          </article>
        ))}
      </section>
    </>
  );
}
