import './CloudBanking.css';

const CloudBanking = () => {
  return (
    <section className="cloud-banking-section">
      <div className="cloud-banking-container">
        {/* Background Watermark Text "CB7" */}
        <div className="bg-watermark-text" aria-hidden="true">
          <span>C</span>
          <span>B</span>
          <span>7</span>
        </div>

        {/* Top Row: Content & Visual */}
        <div className="cloud-banking-row">
          {/* Left Column: Content Frame */}
          <div className="cloud-banking-content">
            <div className="cloud-banking-text-frame">
              <h2 className="cloud-banking-title">
                A complete cloud-based<br />core banking.
              </h2>
              <p className="cloud-banking-description">
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <div className="cloud-banking-actions">
              <button className="btn-request-demo-cloud">REQUEST DEMO</button>
              <a href="#learn-more" className="btn-learn-more-cloud">
                LEARN MORE
                <svg 
                  className="learn-more-arrow" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 6H11M11 6L6 1M11 6L6 11" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: CSS Laptop Mockup */}
          <div className="cloud-banking-visual">
            <div className="laptop-wrapper">
              <div className="laptop-screen">
                <img 
                  src="/dashboard-1.png" 
                  alt="AML Dashboard Mockup" 
                  className="dashboard-image" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CloudBanking;
