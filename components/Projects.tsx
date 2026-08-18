export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header text-center">
        <div className="eyebrow justify-center mb-2">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>Featured Works</span>
        </div>
        <h2>Selected projects built by me</h2>
      </div>

      <div className="projects-grid">
        {/* Flatfinder */}
        <div className="project-card">
          <h3>Flatfinder</h3>
          <p>
            A complete full-stack web application designed for listing,
            discovering, and seamlessly managing rental flats with deep routing logic and form validation.
          </p>
          <div className="project-tags">
            <span className="project-tag">MongoDB</span>
            <span className="project-tag">Express.js</span>
            <span className="project-tag">EJS</span>
            <span className="project-tag">Node.js</span>
          </div>
        </div>

        {/* Task Tracker */}
        <div className="project-card">
          <h3>Task Tracker</h3>
          <p>
            Dynamic responsive task management web interface optimizing daily organization with CRUD utilities synced with database pipelines.
          </p>
          <div className="project-tags">
            <span className="project-tag">JavaScript</span>
            <span className="project-tag">MongoDB</span>
            <span className="project-tag">Express.js</span>
            <span className="project-tag">HTML/CSS</span>
          </div>
        </div>

        {/* Lost & Found Mobile */}
        <div className="project-card">
          <h3>Lost & Found Mobile</h3>
          <p>
            A modern mobile utility centered around real-time location mapping, tracking, and recovery of lost goods.
          </p>
          <div className="project-tags">
            <span className="project-tag">React Native</span>
            <span className="project-tag">TypeScript</span>
            <span className="project-tag">Firebase</span>
            <span className="project-tag">Location Services</span>
          </div>
        </div>

        {/* Resume Builder */}
        <div className="project-card">
          <h3>Resume Builder & ATS Checker</h3>
          <p>
            Specialized engineering resource analyzing uploaded resume formats against industry-standard ATS parsers.
          </p>
          <div className="project-tags">
            <span className="project-tag">Node.js</span>
            <span className="project-tag">Full Stack</span>
            <span className="project-tag">PDF Parsing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
