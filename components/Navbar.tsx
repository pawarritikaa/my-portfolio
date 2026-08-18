export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: logo + badge */}
      <div className="flex items-center space-x-4">
        <h1 className="logo">ritika.pawar</h1>
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>OPEN TO ROLES</span>
        </div>
      </div>

      {/* Right side: nav links + contact */}
      <div className="nav-links items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="contact-btn">Contact</a>
      </div>
    </nav>
  );
}
