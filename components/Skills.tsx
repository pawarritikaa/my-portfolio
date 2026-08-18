export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <div className="eyebrow">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>My Toolkit</span>
        </div>
        <h2>Languages & frameworks I work with</h2>
      </div>

      <div className="skills-grid">
        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-pills">
            <span className="skill-pill">Java</span>
            <span className="skill-pill">C++</span>
            <span className="skill-pill">TypeScript</span>
            <span className="skill-pill">JavaScript</span>
          </div>
        </div>

        {/* Web Development */}
        <div className="skill-card">
          <h3>Web Development</h3>
          <div className="skill-pills">
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">CSS</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Express.js</span>
          </div>
        </div>

        {/* Databases & Mobile */}
        <div className="skill-card">
          <h3>Databases & Mobile</h3>
          <div className="skill-pills">
            <span className="skill-pill">MongoDB</span>
            <span className="skill-pill">SQL</span>
            <span className="skill-pill">React Native</span>
            <span className="skill-pill">Firebase</span>
          </div>
        </div>

        {/* Core Foundations */}
        <div className="skill-card">
          <h3>Core Foundations</h3>
          <div className="skill-pills">
            <span className="skill-pill">Data Structures</span>
            <span className="skill-pill">Algorithms</span>
            <span className="skill-pill">OOP</span>
            <span className="skill-pill">DBMS</span>
            <span className="skill-pill">REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
