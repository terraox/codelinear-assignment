import { useState } from 'react';
import './CaseStudies.css';

const ZoomerrLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0088FF" />
    <path d="M13 7L8 13H12L11 17L16 11H12L13 7Z" fill="white" />
  </svg>
);

const FintechLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0088FF" />
    <path d="M12 6L17 11L12 16L7 11L12 6Z" fill="white" />
  </svg>
);

const PayWorldLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0088FF" />
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
    <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="1.5" />
  </svg>
);

const SafeVaultLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0088FF" />
    <path d="M12 7L7 9V13C7 16 10 18 12 18C14 18 17 16 17 13V9L12 7Z" fill="white" />
  </svg>
);

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Set to index 1 (second slide) by default as shown in the screenshot

  const slides = [
    {
      id: 1,
      category: 'GETTING STARTED',
      title: 'How to build a seamless onboarding experience',
      client: 'Fintech Corp',
      logo: <FintechLogo />
    },
    {
      id: 2,
      category: 'GETTING STARTED',
      title: 'How we help brand reach out to more people',
      client: 'Zoomerr',
      logo: <ZoomerrLogo />
    },
    {
      id: 3,
      category: 'CASE STUDY',
      title: 'Transforming traditional banking into cloud-first systems',
      client: 'PayWorld',
      logo: <PayWorldLogo />
    },
    {
      id: 4,
      category: 'SECURITY',
      title: 'Implementing zero-trust architecture for financial apps',
      client: 'SafeVault',
      logo: <SafeVaultLogo />
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="case-studies-section" id="resources">
      <div className="case-studies-container">
        <h2 className="case-studies-header-title">Our Case Studies</h2>

        {/* Horizontal Case Study Card */}
        <div className="case-study-card">
          {/* Left Side: Visual Tile Pattern (always shows /tile.png) */}
          <div className="case-study-visual">
            <img 
              src="/tile.png" 
              alt="Case study decorative pattern tile" 
              className="case-study-visual-img" 
            />
          </div>

          {/* Right Side: Content Block */}
          <div className="case-study-content">
            <div className="case-study-body">
              <span className="case-study-category">{currentSlide.category}</span>
              <h3 className="case-study-title">{currentSlide.title}</h3>
              <div className="case-study-client">
                <span className="client-logo">{currentSlide.logo}</span>
                <span className="client-name">{currentSlide.client}</span>
              </div>
            </div>

            {/* Stretch Parallel Lines matching Insights section */}
            <div className="card-footer-lines">
              <div className="card-line"></div>
              <div className="card-line"></div>
            </div>
          </div>
        </div>

        {/* Slider Controls Row */}
        <div className="slider-controls-row">
          <div className="slider-controls-center">
                       {/* Left Chevron Button */}
            <button 
              className="btn-slider-arrow" 
              onClick={handlePrev} 
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Progress Indicators */}
            <div className="slider-progress-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`progress-indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Chevron Button */}
            <button 
              className="btn-slider-arrow" 
              onClick={handleNext} 
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* View All link aligned to the far right on desktop */}
          <a href="#case-studies" className="btn-view-all-case-studies">
            VIEW ALL <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
