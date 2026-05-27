import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-outer-container">
        <div className="cta-card">
          {/* Background Watermark Text "CB7" spanning the card */}
          <div className="cta-watermark" aria-hidden="true">
            <span>C</span>
            <span>B</span>
            <span>7</span>
          </div>

          {/* Left: Text Content */}
          <div className="cta-content">
            <h2 className="cta-title">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="cta-description">
              CB7 helps your financial institution improve the client experience,<br />
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="cta-actions">
            <button className="btn-contact-us">CONTACT US</button>
            <button className="btn-request-demo-cta">REQUEST DEMO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
