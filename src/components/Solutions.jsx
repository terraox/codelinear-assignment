import './Solutions.css';

const Solutions = () => {
  const solutionsList = [
    {
      id: 'core-banking',
      title: 'Core Banking CB7',
      description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
      icon: '/2.1.png'
    },
    {
      id: 'digital-banking',
      title: 'Digital Banking N7',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      icon: '/2.2.png'
    },
    {
      id: 'open-banking',
      title: 'Open Banking',
      description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
      icon: '/2.3.png'
    },
    {
      id: 'loan-origination',
      title: 'Loan Origination System',
      badge: 'NBFC',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      icon: '/2.4.png'
    },
    {
      id: 'loan-management',
      title: 'Loan Management System',
      badge: 'NBFC',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      icon: '/2.5.png'
    }
  ];

  return (
    <section className="solutions-section">
      {/* Background corner glow */}
      <div className="glow-solutions"></div>

      <div className="solutions-container">
        {/* Left Column: Sticky Title & Button */}
        <div className="solutions-sidebar">
          <h2 className="solutions-title">
            All of our solutions are<br />
            tailor-made to your needs
          </h2>
          <button className="btn-request-demo-solutions">REQUEST DEMO</button>
        </div>

        {/* Right Column: Solutions Grid */}
        <div className="solutions-grid">
          {solutionsList.map((sol) => (
            <div key={sol.id} className="solution-card">
              <div className="solution-card-header">
                <div className="solution-icon-wrapper">
                  <img 
                    src={sol.icon} 
                    alt={`${sol.title} Logo`} 
                    className="solution-icon-img" 
                  />
                </div>
                {sol.badge && <span className="solution-badge">{sol.badge}</span>}
              </div>
              <h3 className="solution-card-title">{sol.title}</h3>
              <p className="solution-card-description">{sol.description}</p>
              <a href={`#${sol.id}`} className="solution-learn-more">
                LEARN MORE
                <svg className="learn-more-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
