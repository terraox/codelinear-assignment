import './DigitalBanking.css';

const TickerItem = () => (
  <div className="ticker-group">
    <span className="ticker-blue">N7</span>
    <span className="ticker-star">✴</span>
    <span className="ticker-text">Say 👋 to the new way of banking</span>
    <span className="ticker-star">✴</span>
    <span className="ticker-blue">CB7</span>
    <span className="ticker-star">✴</span>
    <span className="ticker-text">Say 👋 to the new way of banking</span>
    <span className="ticker-star">✴</span>
  </div>
);

const DigitalBanking = () => {
  return (
    <section className="digital-banking-section">
      {/* Infinite Scrolling Ticker Banner at the top boundary */}
      <div className="ticker-container" aria-hidden="true">
        <div className="ticker-content">
          <TickerItem />
          <TickerItem />
          <TickerItem />
          <TickerItem />
        </div>
      </div>

      <div className="digital-banking-container">
        {/* Giant background watermark "N7" outline */}
        <div className="digital-bg-watermark" aria-hidden="true">
          <span>N</span>
          <span>7</span>
        </div>

        {/* The 3x3 Alternating Grid */}
        <div className="digital-banking-grid">
          
          {/* ── ROW 1 ── */}
          {/* Column 1: Main Header Block */}
          <div className="grid-cell row-1-col-1">
            <div className="digital-header-block">
              <h2 className="digital-main-title">
                Digital banking<br />out-of-the-box
              </h2>
              <p className="digital-main-description">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <div className="digital-main-actions">
                <button className="btn-request-demo-digital">REQUEST DEMO</button>
                <a href="#learn-more" className="btn-learn-more-digital">
                  LEARN MORE
                  <svg className="learn-more-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Phone Mockup 1 */}
          <div className="grid-cell phone-wrapper">
            <img src="/phone-1.png" alt="Digital Banking App UI total balance screen" className="phone-mockup-img" />
          </div>

          {/* Column 3: Feature Checklist Block 1 */}
          <div className="grid-cell feature-text-block">
            <h3 className="feature-block-title">
              Fully compliant with regulatory requirement
            </h3>
            <p className="feature-block-description">
              The governance of risk management is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
            </p>
            <ul className="feature-checklist">
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Pre-integrated Security System</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Fully Compliant With Regulatory Requirement</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Digitally Connected Core</span>
              </li>
            </ul>
          </div>

          {/* ── ROW 2 ── */}
          {/* Column 1: Empty */}
          <div className="grid-cell empty-cell desktop-only"></div>

          {/* Column 2: Feature Checklist Block 2 */}
          <div className="grid-cell feature-text-block">
            <h3 className="feature-block-title">
              No legacy IT systems
            </h3>
            <p className="feature-block-description">
              Our Digital Banking solution and multi-layered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <ul className="feature-checklist">
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Adaptive & Intelligent API monetization</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Ambient User Experience</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Cloud-native With lower TCO</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Phone Mockup 2 */}
          <div className="grid-cell phone-wrapper">
            <div className="phone-device-frame">
              <img src="/phone-2.png" alt="Digital Banking App UI bar chart monthly screen" className="phone-mockup-img" />
            </div>
          </div>

          {/* ── ROW 3 ── */}
          {/* Column 1: Empty */}
          <div className="grid-cell empty-cell desktop-only"></div>

          {/* Column 2: Phone Mockup 3 */}
          <div className="grid-cell phone-wrapper">
            <img src="/phone-3.png" alt="Digital Banking App UI profile setting screen" className="phone-mockup-img phone-3-img" />
          </div>

          {/* Column 3: Feature Checklist Block 3 */}
          <div className="grid-cell feature-text-block">
            <h3 className="feature-block-title">
              No traditional branches
            </h3>
            <p className="feature-block-description">
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
            </p>
            <ul className="feature-checklist">
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Branchless & Paperless Banking</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Digital Transformation Capability</span>
              </li>
              <li>
                <span className="checklist-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#0088FF"/>
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="checklist-text">Optimized, Adoptable and Scalable</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalBanking;
