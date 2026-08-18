export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <div className="eyebrow">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>Industry Experience</span>
        </div>
        <h2>Professional hands-on practice</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-header">
            <div>
              <h3>Full Stack Developer Intern</h3>
              <p className="timeline-company">Conspicuous Solutions</p>
            </div>
            <div className="text-right">
              <span>Feb 2026 – Mar 2026</span>
              <p className="timeline-location">Bhopal, India</p>
            </div>
          </div>

          <p className="timeline-desc">
            Successfully completed an intensive internship designing and deploying full-stack digital solutions. Contributed directly to multiple projects including a Lost & Found mobile app, a Task Tracker web service, and a Resume Builder with ATS integration.
          </p>

          <div className="deliverables">
            <span className="deliverable">Implemented secure Firebase & Google Authentication systems</span>
            <span className="deliverable">Built structured REST APIs integrating MongoDB & Express</span>
            <span className="deliverable">Developed cross-platform mobile views using React Native & TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
