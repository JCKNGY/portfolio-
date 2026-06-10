/* ───── EDIT YOUR DATA AT THE TOP ───── */

const projects = [
  {
    title: "Unity Game Project",
    description:
      "A game I'm building in Unity. Currently learning the hard way that physics engines have opinions.",
    tech: ["Unity", "C#"],
    link: "https://github.com/JCKNGY",
    status: "in progress",
  },
  {
    title: "Arch Linux Daily Driver",
    description:
      "Installed Arch on my laptop from scratch — btrfs subvolumes, systemd-boot, KDE Plasma on Wayland. Yes, I use Arch btw.",
    tech: ["Linux", "Bash"],
    link: "https://github.com/JCKNGY",
    status: "shipped",
  },
  {
    title: "Arduino Tinkering",
    description:
      "Embedded experiments with Arduino and Raspberry Pi. Blinking LEDs was just the beginning.",
    tech: ["C", "Arduino", "Raspberry Pi"],
    link: "https://github.com/JCKNGY",
    status: "ongoing",
  },
];

const stats = [
  { label: "Class", value: "Engineering" },
  { label: "Guild", value: "Liberty High School" },
  { label: "Spawn Point", value: "Frisco, TX" },
  { label: "Main Quest", value: "Build cool hardware" },
  { label: "Side Quests", value: "STEMist outreach · DECA" },
  { label: "Rare Collection", value: "Snorlax cards 💤" },
];

const skills = [
  { name: "C / C#", level: 80 },
  { name: "Python", level: 35 },
  { name: "Java", level: 70 },
  { name: "JavaScript / React", level: 30 },
  { name: "Unity", level: 70 },
  { name: "Linux", level: 85 },
  { name: "Arduino / RPi", level: 65 },
];

const interests = [
  "🎮 Counter-Strike 2",
  "🃏 Pokémon card collecting",
  "🐧 Arch Linux",
  "🛠️ PC building",
  "🕹️ Game dev",
  "📚 Teaching STEM",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <p className="hero-prompt">
          <span className="prompt-user">jack@arch</span>
          <span className="prompt-path"> ~ $</span> whoami
        </p>
        <h1 className="hero-title">
          Jack Nguyen<span className="cursor">▊</span>
        </h1>
        <p className="hero-sub">
          Computer engineering student. Game dev hobbyist. Linux enjoyer.
          Professional Snorlax card appreciator.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-solid">view projects →</a>
          <a href="#contact" className="btn-ghost">say hi</a>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2 className="section-title"># about_me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hey, I'm Jack (also go by Minh). I'm a future computer engineering
              student at Liberty High School who likes building things at every layer —
              from soldering and breadboards up to game engines and web apps.
            </p>
            <p>
              When I'm not coding, I'm probably queuing up in CS2, hunting for
              Pokémon cards, or breaking (and fixing) my Arch Linux install
              for fun. I also run outreach for STEMist Frisco, teaching STEM
              workshops to younger students.
            </p>
            <p className="about-flavor">
              Energy level: Snorlax.
            </p>
          </div>

          <div className="char-sheet">
            <div className="char-sheet-header">CHARACTER SHEET</div>
            {stats.map((s, i) => (
              <div className="stat-row" key={i}>
                <span className="stat-label">{s.label}</span>
                <span className="stat-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2 className="section-title"># projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={i}
            >
              <div className="project-top">
                <h3 className="project-title">{p.title}</h3>
                <span className={`status status-${p.status.replace(" ", "-")}`}>
                  {p.status}
                </span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tech.map((t, j) => (
                  <span className="tag" key={j}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2 className="section-title"># skill_tree</h2>
        <div className="skills-list">
          {skills.map((s, i) => (
            <div className="skill-row" key={i}>
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">// when not coding</h3>
        <div className="interests">
          {interests.map((it, i) => (
            <span className="interest-chip" key={i}>{it}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2 className="section-title"># contact</h2>
        <p className="contact-sub">
          Want to talk tech, trade Pokémon cards, or work on something
          together? My inbox is open.
        </p>
        <div className="contact-links">
          <a href="mailto:jkncpp@email.com" className="btn-solid">email me</a>
          <a
            href="https://github.com/JCKNGY"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/minh-nguyen-715991372/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            linkedin
          </a>
        </div>
      </section>
    </>
  );
}
