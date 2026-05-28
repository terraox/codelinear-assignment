import './Insights.css';

const Insights = () => {
  return (
    <section className="insights-section">
      {/* Background Radial Glow Effect behind the text */}
      <div className="insights-bg-glow" aria-hidden="true"></div>

      <div className="insights-container">
        {/* Left Column: Heading and Tag Button */}
        <div className="insights-left">
          <h2 className="insights-title">
            Get yourself up-to-speed on<br />
            all the things happening in<br />
            fintech
          </h2>
          <button className="btn-insights-tag">INSIGHTS</button>
        </div>

        {/* Right Column: Article Grid */}
        <div className="insights-right">
          
          {/* Top Featured Card (Wide layout) */}
          <div className="article-card featured-card">
            <div className="featured-card-visual">
              <img 
                src="/tile.png" 
                alt="Fintech decorative geometric pattern" 
                className="featured-card-img" 
              />
            </div>
            
            <div className="featured-card-content">
              <div className="featured-card-body">
                <span className="article-category">GETTING STARTED</span>
                <h3 className="article-title">
                  How to transition from a<br />
                  traditional to a digital<br />
                  bank
                </h3>
                <div className="article-metadata">
                  <span className="article-author">David Grohl</span>
                  <span className="article-date">17/08/24</span>
                </div>
              </div>
              <div className="card-footer-lines">
                <div className="card-line"></div>
                <div className="card-line"></div>
              </div>
            </div>
          </div>

          {/* Bottom Grid containing two standard cards side-by-side */}
          <div className="insights-bottom-grid">
            
            {/* Bottom Card 1 */}
            <div className="article-card standard-card">
              <div className="standard-card-body">
                <span className="article-category">GETTING STARTED</span>
                <h3 className="article-title">
                  How to transition<br />
                  from a traditional to a<br />
                  digital bank
                </h3>
                <div className="article-metadata">
                  <span className="article-author">David Grohl</span>
                  <span className="article-date">17/08/24</span>
                </div>
              </div>
              <div className="card-footer-lines">
                <div className="card-line"></div>
                <div className="card-line"></div>
              </div>
            </div>

            {/* Bottom Card 2 */}
            <div className="article-card standard-card">
              <div className="standard-card-body">
                <span className="article-category">GETTING STARTED</span>
                <h3 className="article-title">
                  How to transition<br />
                  from a traditional to a<br />
                  digital bank
                </h3>
                <div className="article-metadata">
                  <span className="article-author">David Grohl</span>
                  <span className="article-date">17/08/24</span>
                </div>
              </div>
              <div className="card-footer-lines">
                <div className="card-line"></div>
                <div className="card-line"></div>
              </div>
            </div>

          </div>

          {/* Read All Insights Text Link */}
          <div className="insights-link-row">
            <a href="#insights" className="btn-read-all-insights">
              READ ALL INSIGHTS <span className="arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Insights;
