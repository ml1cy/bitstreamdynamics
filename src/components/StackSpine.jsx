import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LAYERS, PROJECTS, TEAMS, slug, spansAll } from "../data/course.js";

// The home page's spine: the seven layers top to bottom on a rail. As you scroll, the signal
// fills the rail and the layer at the middle of the screen lights up.
export function StackSpine() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(LAYERS[0].n);

  useEffect(() => {
    const wrap = wrapRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      const rect = wrap.getBoundingClientRect();
      setProgress(reduce ? 1 : Math.min(1, Math.max(0, (mid - rect.top) / rect.height)));
      let current = LAYERS[0].n;
      for (const row of wrap.querySelectorAll("[data-layer]")) {
        if (row.getBoundingClientRect().top < mid) current = Number(row.dataset.layer);
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="stack" ref={wrapRef}>
      <div className="stack__rail" aria-hidden="true">
        <span className="stack__fill" style={{ transform: `scaleY(${progress})` }} />
      </div>
      <ol className="stack__layers">
        {LAYERS.map((layer) => {
          const projects = PROJECTS.filter((p) => !spansAll(p) && p.layers.includes(layer.n));
          const teams = TEAMS.filter((t) => !spansAll(t) && t.layers.includes(layer.n));
          return (
            <li
              key={layer.n}
              data-layer={layer.n}
              className={`stack__layer${active === layer.n ? " is-active" : ""}`}
            >
              <span className="stack__marker data">L{layer.n}</span>
              <div className="stack__main">
                <h3 className="h2">{layer.name}</h3>
                <p className="body-lg">{layer.does}</p>
                <p className="stack__class">
                  <strong>In class.</strong> {layer.inClass}
                </p>
              </div>
              <dl className="stack__aside">
                <div>
                  <dt className="label">You&rsquo;ll see</dt>
                  <dd>{layer.examples.join(", ")}</dd>
                </div>
                {projects.length > 0 && (
                  <div>
                    <dt className="label">Projects</dt>
                    <dd className="stack__links">
                      {projects.map((p) => (
                        <Link key={p.name} to={`/projects#${slug(p.name)}`}>
                          {p.name}
                        </Link>
                      ))}
                    </dd>
                  </div>
                )}
                {teams.length > 0 && (
                  <div>
                    <dt className="label">Teams</dt>
                    <dd className="stack__links">
                      {teams.map((t) => (
                        <Link key={t.name} to={`/directory#${slug(t.name)}`}>
                          {t.name}
                        </Link>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
