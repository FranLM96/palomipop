import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/colors.css';
import './Header.css';

// Import logo image directly with corrected relative path
import palomipopLogo from '../../public/logo.svg'; // Corrected path

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [location]);

  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="site-title">
          {/* Use imported logo variable */}
          <img src={palomipopLogo} alt="Palomipop Logo" className="site-logo" />
        </Link>
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-icon"></span>
        </button>
        <nav className={`app-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/palomitas">Menu</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;