export default function Footer() {
  return (
   <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <h4>GET IN TOUCH</h4>
      <h2>Let's build something beautiful together</h2>
      <p>
        I am looking for full-stack, backend, or mobile engineering roles where I can contribute to shipping scalable user features. Drop me a line anytime.
      </p>

      <div className="contact-links">
        <a href="mailto:ritika.0112cs221107@gmail.com">ritika.0112cs221107@gmail.com</a>
        
        <a href="https://linkedin.com/in/ritika-pawar-613993294" target="_blank">linkedin.com/in/ritika-pawar-613993294</a>
      </div>
    </div>

    <form className="contact-form">
      <label>Your Name</label>
      <input type="text" placeholder="Ritika Pawar" />

      <label>Email Address</label>
      <input type="email" placeholder="your@email.com" />

      <label>Message</label>
      <textarea placeholder="Hi Ritika, love your work. Let's schedule a call." />

      <button type="submit">Send Message</button>
    </form>
  </div>

  <div className="footer-base">
    <span>© 2026 Ritika Pawar. All rights reserved.</span>
    <span>Handcrafted in Bhopal, India</span>
  </div>
</footer>

  );
}
