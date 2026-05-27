import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header-pill">
        <div className="logo">
          <span>N7</span>
        </div>
        
        <nav className="nav-links">
          <div className="nav-item">
            <a href="#solutions">
              SOLUTIONS
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="nav-item">
            <a href="#resources">
              RESOURCES
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="nav-item">
            <a href="#about">ABOUT US</a>
          </div>
        </nav>
        
        <div className="actions">
          <button className="btn-demo">REQUEST DEMO</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
