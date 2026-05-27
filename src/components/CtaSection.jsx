import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-outer-container">
        <div className="cta-card">


          {/* Background Watermark Image "N7" */}
          <img 
            src="/N7.png" 
            alt="" 
            className="cta-watermark-img" 
            aria-hidden="true" 
          />

          {/* Left: Text Content */}
          <div className="cta-content">
            <h2 className="cta-title">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="cta-description">
              N7 helps your financial institution improve the client experience,
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
