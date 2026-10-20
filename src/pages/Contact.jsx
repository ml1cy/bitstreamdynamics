import { Reveal } from "../components/Reveal.jsx";
import { TwistedPairArt } from "../components/Art.jsx";

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <h1 className="page-head-enter">Contact</h1>
        <p className="page-head-enter page-head-enter-2">
          No sales line &mdash; just a class that keeps a network running.
        </p>
      </header>

      <Reveal as={TwistedPairArt} className="contact-art" delay={160} />

      <section className="rows">
        <Reveal as="a" className="rows-row rows-link" href="https://www.kresa.org" target="_blank" rel="noreferrer">
          Kalamazoo RESA, Career &amp; Technical Education
        </Reveal>
        <Reveal as="div" className="rows-row" delay={70}>
          Kalamazoo, Michigan
        </Reveal>
        <Reveal as="div" className="rows-row" delay={140}>
          Questions about the class? Start at kresa.org and ask for Computer
          Networking.
        </Reveal>
        <Reveal
          as="a"
          className="rows-row rows-greeting"
          href="https://www.kresa.org"
          target="_blank"
          rel="noreferrer"
          delay={210}
        >
          Say hello
          <span className="rows-arrow" aria-hidden="true">
            &rarr;
          </span>
        </Reveal>
      </section>
    </>
  );
}
