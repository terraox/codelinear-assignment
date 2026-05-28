import './Footer.css';

const Footer = () => {
  const solutionsLinks = [
    { text: 'Core Banking CB7', href: '#core-banking' },
    { text: 'Digital Banking N7', href: '#digital-banking' },
    { text: 'Open Banking', href: '#open-banking' },
    { text: 'Loan Origination System', href: '#loan-origination' },
    { text: 'Loan Management System', href: '#loan-management' },
    { text: 'Digital Transformation', href: '#digital-transformation' }
  ];

  const n7BankingLinks = [
    { text: 'About Us', href: '#about' },
    { text: 'Solutions', href: '#solutions' },
    { text: 'Contact', href: '#contact' },
    { text: 'Company', href: '#company' },
    { text: 'Careers', href: '#careers' },
    { text: 'Insights', href: '#insights' },
    { text: 'Core Team', href: '#core-team' },
    { text: 'Brand Center', href: '#brand-center' }
  ];

  const socialsLinks = [
    { text: 'LinkedIn', href: 'https://linkedin.com' },
    { text: 'X', href: 'https://x.com' }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left Column: Brand Logo */}
        <div className="footer-brand">
          <img 
            src="/N7-footer.png" 
            alt="N7 Large Logo Brand Mark" 
            className="footer-brand-logo-img" 
          />
        </div>

        {/* Right Columns Grid */}
        <div className="footer-links-grid">
          
          {/* ── TOP ROW: Address Columns ── */}
          <div className="footer-grid-row address-row">
            
            {/* London Address */}
            <div className="footer-column address-col">
              <h4 className="footer-col-title">London</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd – CB7,<br />
                26 Main Road Sundridge,TN14 6EP,<br />
                England, United Kingdom.
              </p>
            </div>

            {/* Dubai Address */}
            <div className="footer-column address-col">
              <h4 className="footer-col-title">Dubai</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd –<br />
                CB7,Jumeirah Business, Center 5<br />
                Cluster W, Jumeirah Lakes Towers,<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* London/Pune Address */}
            <div className="footer-column address-col">
              <h4 className="footer-col-title">London</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd –<br />
                CB7,Nirmal, Anand Nagar,<br />
                Suncity Road, Pune,<br />
                Maharashtra, 411041, India
              </p>
            </div>

          </div>

          {/* ── BOTTOM ROW: Navigation Links ── */}
          <div className="footer-grid-row nav-row">
            
            {/* Solutions Links */}
            <div className="footer-column nav-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links-list">
                {solutionsLinks.map((link, i) => (
                  <li key={i} className="footer-link-item">
                    <a href={link.href} className="footer-nav-link">
                      <span className="link-text">{link.text}</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* N7 Banking Links */}
            <div className="footer-column nav-col">
              <h4 className="footer-col-title">N7 Banking</h4>
              <ul className="footer-links-list">
                {n7BankingLinks.map((link, i) => (
                  <li key={i} className="footer-link-item">
                    <a href={link.href} className="footer-nav-link">
                      <span className="link-text">{link.text}</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Links */}
            <div className="footer-column nav-col">
              <h4 className="footer-col-title">Our Socials</h4>
              <ul className="footer-links-list">
                {socialsLinks.map((link, i) => (
                  <li key={i} className="footer-link-item">
                    <a href={link.href} className="footer-nav-link" target="_blank" rel="noreferrer">
                      <span className="link-text">{link.text}</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Copyright Area */}
      <div className="footer-copyright-container">
        <p className="footer-copyright-text">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
};

export default Footer;
