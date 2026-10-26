import { TEAMS, formatLayers, slug } from "../data/course.js";

function Seats({ seats }) {
  return (
    <ul className="seats">
      {seats.map((seat) => (
        <li key={seat}>
          <span className="label">{seat}</span>
          <span className="bs-chip">Name pending</span>
        </li>
      ))}
    </ul>
  );
}

export default function Directory() {
  return (
    <>
      <header className="page-head container">
        <h1 className="display-xl page-enter">Directory</h1>
        <p className="body-lg page-enter page-enter-2">
          bitstream, wired up like the network-ops company it&rsquo;s named
          after. These are the class&rsquo;s real teams; the instructor is
          still filling in the names.
        </p>
      </header>

      <section className="section section--tight container">
        <div className="topology">
          <div className="topology__core">
            <h2 className="h2">Computer Networking class</h2>
            <p>Kalamazoo KRESA CTE. The four teams below are all part of it.</p>
            <Seats seats={["Instructor"]} />
          </div>
          <ul className="topology__nodes">
            {TEAMS.map((team) => (
              <li key={team.name} id={slug(team.name)} className="topology__node">
                <div className="topology__head">
                  <h2 className="h3">{team.name}</h2>
                  <span className="data">{formatLayers(team.layers)}</span>
                </div>
                <p>{team.does}</p>
                <Seats seats={team.seats} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
