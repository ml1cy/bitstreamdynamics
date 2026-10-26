import { Link } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import { HexGrid, PulseDivider } from "../components/Motifs.jsx";
import { StackDiagram } from "../components/StackDiagram.jsx";
import { StackSpine } from "../components/StackSpine.jsx";

export default function Home() {
  return (
    <>
      <header className="hero">
        <HexGrid className="hex-grid" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 className="display-xl page-enter">From the browser to the cable</h1>
            <p className="body-lg hero__lead page-enter page-enter-2">
              bitstream is the practice network-operations company of the
              Computer Networking class at Kalamazoo KRESA CTE. The company is
              pretend; the curriculum is real, all seven layers of it.
            </p>
            <div className="bs-row hero__actions page-enter page-enter-3">
              <a className="bs-btn bs-btn--secondary" href="#stack">
                See the seven layers
              </a>
              <Link className="bs-btn bs-btn--ghost" to="/directory">
                Meet the teams
                <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
          <StackDiagram />
        </div>
      </header>

      <section id="stack" className="section container">
        <div className="section__intro">
          <h2 className="display">Seven layers, top to bottom</h2>
          <p className="body-lg">
            A request leaves your browser at layer 7 and reaches the cable at
            layer 1. Here&rsquo;s what each layer does, and where it shows up
            in class.
          </p>
        </div>
        <StackSpine />
      </section>

      <section className="section container closing">
        <PulseDivider />
        <div className="closing__inner">
          <h2 className="display">Layer 1 is the part you can hold</h2>
          <div className="closing__text">
            <p className="body-lg">
              Much of the stack gets built in Cisco Packet Tracer, a network
              simulator. Layer 1 is the cable, the jacks and the patch panel,
              and the class does that part by hand. CompTIA Network+ is the
              exam that covers all seven.
            </p>
            <div className="bs-row">
              <Link className="bs-btn bs-btn--secondary" to="/projects">
                See the projects
                <Icon name="arrow-right" />
              </Link>
              <Link className="bs-btn bs-btn--ghost" to="/directory">
                Meet the teams
                <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
