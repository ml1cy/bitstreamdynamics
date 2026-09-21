const topics = [
  "Network fundamentals (TCP/IP, OSI model)",
  "Structured cabling and hardware",
  "Routing and switching basics",
  "Network security fundamentals",
  "Cisco Packet Tracer labs",
  "Industry certifications (CompTIA Network+)",
];

function App() {
  return (
    <>
      <header className="hero">
        <h1>Bitstream Dynamics</h1>
        <p className="tagline">Kalamazoo KRESA CTE &mdash; Computer Networking</p>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#topics">Class Info</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="card">
          <h2>About</h2>
          <p>
            Bitstream Dynamics is the fictional business name for our
            Computer Networking class project at Kalamazoo KRESA CTE. There's
            no real business behind it &mdash; this site is our class's home
            base for general info, updated as the course progresses.
          </p>
        </section>

        <section id="topics" className="card">
          <h2>What We're Learning</h2>
          <ul>
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>
            Questions about the class? Reach out through Kalamazoo KRESA CTE.
          </p>
        </section>
      </main>

      <footer>&copy; 2026 Bitstream Dynamics</footer>
    </>
  );
}

export default App;
