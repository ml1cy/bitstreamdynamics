import { Link } from "react-router-dom";
import { OsiAccordion } from "../components/OsiAccordion.jsx";
import { PatchPanelArt, TwistedPairArt } from "../components/Art.jsx";
import { Reveal } from "../components/Reveal.jsx";

const SKILLS = [
  { name: "TCP/IP & OSI", tag: "fundamentals" },
  { name: "Structured Cabling", tag: "hardware" },
  { name: "Routing & Switching", tag: "basics" },
  { name: "Network Security", tag: "fundamentals" },
  { name: "Packet Tracer", tag: "labs" },
  { name: "CompTIA Network+", tag: "certification" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1 className="hero-head">
          <span className="hero-line hero-line-1">Built on</span>
          <span className="hero-line hero-line-2">bitstreams</span>
        </h1>

        <p className="hero-sub">
          A fictional network-operations company run by the Computer
          Networking class at Kalamazoo KRESA CTE. Real curriculum, played
          as a company.
        </p>

        <PatchPanelArt className="hero-art" />

        <p className="hero-fact">Computer Networking &middot; KRESA CTE</p>
      </header>

      <section id="about" className="panel">
        <div className="panel-copy">
          <Reveal as="h2" className="panel-head">
            No real product. Real network.
          </Reveal>
          <div className="panel-blocks">
            <Reveal as="div" className="panel-block" delay={80}>
              <h3>The premise</h3>
              <p>
                Bitstream Dynamics isn&rsquo;t a business. It&rsquo;s the
                name our Computer Networking class put on this site.
                Kalamazoo KRESA CTE runs the class; we run the site like the
                network-ops company the name sounds like.
              </p>
            </Reveal>
            <Reveal as="div" className="panel-block" delay={150}>
              <h3>What&rsquo;s real</h3>
              <p>
                The curriculum below is what the class actually covers:
                cabling, routing and switching, security fundamentals,
                Packet Tracer labs, and a path toward CompTIA Network+.
              </p>
            </Reveal>
            <Reveal as={Link} className="btn" to="/projects" delay={220}>
              See the projects
            </Reveal>
          </div>
        </div>
        <Reveal as={TwistedPairArt} className="panel-art" delay={120} />
      </section>

      <section id="curriculum" className="strip">
        <div className="strip-intro">
          <Reveal as="h2" delay={0}>
            The OSI stack, as we teach it
          </Reveal>
          <Reveal as="p" delay={80}>
            Seven layers move a bit from a cable to a web page. Pick a layer
            to see what it does and where it shows up in class.
          </Reveal>
        </div>
        <Reveal delay={160}>
          <OsiAccordion />
        </Reveal>
      </section>

      <section id="skills" className="poster">
        {SKILLS.map((skill, i) => (
          <Reveal as="div" className="poster-item" key={skill.name} delay={i * 60}>
            <span className="poster-name">{skill.name}</span>
            <span className="poster-tag">{skill.tag}</span>
          </Reveal>
        ))}
      </section>

      <section className="cta-band">
        <div>
          <Reveal as="h2">See who&rsquo;s on the network</Reveal>
          <Reveal as="p" delay={80}>
            The teams, the projects, and how to reach the class.
          </Reveal>
          <Reveal as="div" className="cta-band-links" delay={160}>
            <Link className="btn" to="/directory">
              Open the directory
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </Reveal>
        </div>
        <Reveal as={PatchPanelArt} className="cta-band-art" delay={120} />
      </section>
    </>
  );
}
