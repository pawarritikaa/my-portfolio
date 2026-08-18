export default function About() {
  return (
    <section id="about" className="about">
      {/* Left side */}
      <div className="about-left">
        <div className="eyebrow">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>About Me</span>
        </div>
        <h2>Rooted in computer science & clean engineering</h2>
        <p>
          I am a B.Tech Computer Science and Engineering graduate from Bhopal,
          motivated by solving hard problems through code. My approach couples
          structured system design with efficient implementation, seeking always
          to continuously level up my technical capability.
        </p>
      </div>

      {/* Right side */}
      <div className="about-right">
        <h3>Education</h3>
        <div className="education-card">
          <div className="flex justify-between items-center">
            <h4>Bansal Institute of Science and Technology</h4>
            <span className="year">2022 – 2026</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Bachelor of Technology in Computer Science & Engineering
            </p>
            <p>Bhopal, MP, India</p>
          </div>
          <span className="gpa-badge">CGPA: 7.82</span>
        </div>
      </div>
    </section>
  );
}
