import { PROJECTS, formatLayers, slug } from "../data/course.js";

const STACK = [1, 2, 3, 4, 5, 6, 7];

// Which layers a project works in, drawn like the brand's signal-bar strip.
function LayerStrip({ layers }) {
  const label = formatLayers(layers);
  return (
    <div className="layer-strip" role="img" aria-label={`OSI layers ${label}`}>
      <p className="data layer-strip__summary" aria-hidden="true">
        {label}
      </p>
      <div className="layer-strip__cells" aria-hidden="true">
        {STACK.map((n) => (
          <span key={n} className={layers.includes(n) ? "is-on" : undefined} />
        ))}
      </div>
      <div className="layer-strip__labels data" aria-hidden="true">
        {STACK.map((n) => (
          <span key={n}>L{n}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <header className="page-head container">
        <h1 className="display-xl page-enter">Projects</h1>
        <p className="body-lg page-enter page-enter-2">
          What the curriculum turns into on the bench, and which of the seven
          layers each one works in.
        </p>
      </header>

      <section className="section section--tight container">
        <ol className="project-list">
          {PROJECTS.map((p) => (
            <li key={p.name} id={slug(p.name)} className="project-row">
              <div className="project-row__main">
                <h2 className="h2">{p.name}</h2>
                <p>{p.detail}</p>
                <p className="small project-row__unit">Unit: {p.unit}</p>
              </div>
              <LayerStrip layers={p.layers} />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
