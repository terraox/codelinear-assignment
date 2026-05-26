import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Column: Text Content & Actions */}
        <div className="hero-content">
          <div className="hero-text-frame">
            <h1 className="hero-title">
              The new foundation<br />of modern banking
            </h1>
            <p className="hero-description">
              We drive innovation and growth, provide seamless<br />
              customer experience and operational excellence
            </p>
          </div>
          
          <div className="hero-actions-row">
            <button className="btn-request-demo-hero">REQUEST DEMO</button>
            <button className="btn-contact-us-hero">CONTACT US</button>
          </div>
          
          <div className="hero-trusted-by">
            <p className="trusted-title">Trusted By:</p>
            <div className="trusted-logos-container">
              <img 
                src="/company-names.png" 
                alt="Trusted Companies Logos" 
                className="trusted-logos-img" 
              />
            </div>
          </div>
        </div>
        
        {/* Right Column: Floating Visual Collage */}
        <div className="hero-visual">
          <div className="glow-background"></div>
          
          <div className="collage-wrapper">
            {/* Left overlay (Recent Activity) */}
            <img 
              src="/girl-1.1-left.png" 
              alt="Recent Activity Dashboard Overlay" 
              className="overlay-card overlay-left" 
            />
            
            {/* Base girl image */}
            <img 
              src="/girl-1.1.png" 
              alt="Professional Woman Banking App" 
              className="base-image" 
            />
            
            {/* Right overlay (Toni Kroos profile & Balance) */}
            <img 
              src="/girl-1.1-right.png" 
              alt="Toni Kroos Balance Dashboard Overlay" 
              className="overlay-card overlay-right" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
