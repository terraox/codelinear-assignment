import './EfficientBanking.css';

const EfficientBanking = () => {
  return (
    <section className="efficient-banking-section">
      <div className="efficient-banking-container">
        <div className="efficient-banking-row">
          {/* Left Column: Visual Mockup */}
          <div className="efficient-banking-visual">
            <div className="dashboard-image-wrapper-efficient">
              <img 
                src="/section-3.png" 
                alt="CKYC Dashboard Mockup" 
                className="dashboard-image-efficient" 
              />
            </div>
          </div>

          {/* Right Column: Content Frame */}
          <div className="efficient-banking-content">
            <h2 className="efficient-banking-title">
              Run a more efficient, flexible, and digitally<br />connected corebanking system
            </h2>
            
            <h3 className="efficient-banking-subtitle">What you will get:</h3>

            <div className="features-columns">
              {/* Left Column */}
              <div className="features-column">
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Customer-On Boarding</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Managing deposits and<br />withdrawals</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Transaction management</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Interest Calculation</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">
                    Payments processing (cash,<br />cheques, mandates, NEFT,<br />RTGS etc)
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="features-column">
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">CRM Activities</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Configuring New Banking<br />Products</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">Loan disbursal and Loan<br />management</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#0088FF"/>
                    <path d="M8.5 12.5L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="feature-text">
                    Establishing criteria for<br />minimum balances, interest<br />rates, number of withdrawals<br />allowed and so on.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Efficient Banking Inner CTA */}
        <div className="efficient-inner-cta">
          <img src="/CB7.png" alt="" className="efficient-cta-watermark-img" aria-hidden="true" />
          
          <div className="efficient-cta-content">
            <h2 className="efficient-cta-title">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="efficient-cta-description">
              CB7 helps your financial institution improve the client experience,<br />
              automate and optimize procedures, simplify banking operations
            </p>
          </div>
          
          <div className="efficient-cta-actions">
            <button className="btn-contact-us-efficient">CONTACT US</button>
            <button className="btn-request-demo-efficient-cta">REQUEST DEMO</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EfficientBanking;
