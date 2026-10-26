import { Icon } from "../components/Icon.jsx";

const RECORD = [
  ["Organization", "Kalamazoo RESA, Career and Technical Education"],
  ["Program", "Computer Networking"],
  ["Location", "Kalamazoo, Michigan"],
  [
    "Web",
    <a key="web" href="https://www.kresa.org" target="_blank" rel="noreferrer">
      kresa.org
    </a>,
  ],
  ["Status", "class project, not a business"],
];

export default function Contact() {
  return (
    <>
      <header className="page-head container">
        <h1 className="display-xl page-enter">Contact</h1>
        <p className="body-lg page-enter page-enter-2">
          No sales line, just a class that keeps a network running.
        </p>
      </header>

      <section className="section section--tight container contact">
        <div className="whois">
          <p className="data whois__cmd">
            <span aria-hidden="true">$ </span>whois bitstreamdynamics
          </p>
          <dl className="whois__record data">
            {RECORD.map(([key, value]) => (
              <div key={key}>
                <dt>{key}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contact__ask">
          <h2 className="h2">Ask about the class</h2>
          <p>
            Questions about enrolling or what the course covers go to Kalamazoo
            RESA. Start at kresa.org and ask for Computer Networking.
          </p>
          <a
            className="bs-btn bs-btn--secondary"
            href="https://www.kresa.org"
            target="_blank"
            rel="noreferrer"
          >
            Visit kresa.org
            <Icon name="external-link" />
          </a>
        </div>
      </section>
    </>
  );
}
