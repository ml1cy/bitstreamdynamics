import { Reveal } from "../components/Reveal.jsx";

const TEAMS = [
  {
    team: "Network Operations",
    does: "Keeps traffic moving: routing, switching, and the day-to-day of running a network.",
    seats: ["Lead: name pending", "Rotating shift: name pending"],
  },
  {
    team: "Infrastructure & Cabling",
    does: "Runs and terminates the physical layer: Cat6, punch-downs, patch panels.",
    seats: ["Lead: name pending", "Rotating shift: name pending"],
  },
  {
    team: "Security Desk",
    does: "Network security fundamentals: the threats, the defenses, the habits.",
    seats: ["Lead: name pending"],
  },
  {
    team: "Certification Lab",
    does: "Packet Tracer builds and CompTIA Network+ exam prep.",
    seats: ["Lead: name pending", "Rotating shift: name pending"],
  },
];

export default function Directory() {
  return (
    <>
      <header className="page-head">
        <h1 className="page-head-enter">Directory</h1>
        <p className="page-head-enter page-head-enter-2">
          Bitstream Dynamics, organized like the network-ops company it&rsquo;s
          named after. These are the class&rsquo;s real teams; the names are
          still being filled in by the instructor.
        </p>
      </header>

      <div className="directory">
        {TEAMS.map((t, i) => (
          <div className="directory-team" key={t.team}>
            <Reveal as="h2" delay={i * 90}>
              {t.team}
            </Reveal>
            <div>
              <Reveal as="p" className="directory-does" delay={i * 90 + 70}>
                {t.does}
              </Reveal>
              <Reveal as="ul" className="directory-seats" delay={i * 90 + 140}>
                {t.seats.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
