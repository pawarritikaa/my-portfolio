export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="cert-header">
        <div className="cert-eyebrow">
          <div className="dot"></div>
          <span>Credentials</span>
        </div>
        <h2>Certifications & verified achievements</h2>
      </div>

      <div className="cert-row">
        <div className="cert-card">
          <div className="cert-icon">🏆</div>
          <div className="cert-meta">
            <h3>Problem Solving</h3>
            <p>Issued by HackerRank</p>
            <div className="cert-verify">Verify ↗</div>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-icon">🏆</div>
          <div className="cert-meta">
            <h3>Java Programming Basic</h3>
            <p>Issued by HackerRank</p>
            <div className="cert-verify">Verify ↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}
