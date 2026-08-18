export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h4>Hello, I am Ritika Pawar</h4>
        <h1>Building scalable full‑stack software</h1>
        <p>
          Motivated B.Tech Computer Science graduate passionate about building robust applications. 
          Skilled in the MERN stack, mobile systems via React Native, and robust cloud integrations.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>

        {/* Contact Info */}
        <div className="hero-contact">
          <p>
            Email: <a href="mailto:ritika.0112cs221107@gmail.com">ritika.0112cs221107@gmail.com</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/ritika-pawar-613993294" target="_blank">linkedin.com/in/ritika-pawar-613993294</a>
          </p>
        </div>
      </div>

      {/* Hero Right (avatar placeholder) */}
      <div className="hero-right">
        {/* Yaha tum apna image/illustration dal sakti ho */}
        <div className="avatar-frame">
          <img src="/ritika-avatar.png" alt="Ritika Pawar" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
