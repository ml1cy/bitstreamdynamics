import { LAYERS } from "../data/course.js";

// The hero picture: the seven layers as a brand diagram (surface-100 boxes, a 2px signal line),
// with the signal drawing down from the browser to the cable once on load.
export function StackDiagram() {
  return (
    <figure className="stack-diagram">
      <p className="stack-diagram__end data">your browser</p>
      <div className="stack-diagram__body">
        <span className="stack-diagram__line" aria-hidden="true" />
        <ol className="stack-diagram__layers" aria-label="The seven OSI layers, top to bottom">
          {LAYERS.map((layer, i) => (
            <li key={layer.n} style={{ "--i": i }}>
              <span className="data">L{layer.n}</span>
              <span className="stack-diagram__name">{layer.name}</span>
              <span className="stack-diagram__eg small">{layer.examples.slice(0, 2).join(", ")}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="stack-diagram__end data">the cable</p>
    </figure>
  );
}
