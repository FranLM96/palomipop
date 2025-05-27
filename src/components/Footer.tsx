import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3>Sobre Nosotros</h3>
          <p>En Palomipop, transformamos el simple acto de comer palomitas en una experiencia gourmet. Con ingredientes frescos y sabores innovadores, cada bocado es una celebración.</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/palomitas">Menú</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-section contact-info">
          <h3>Contáctanos</h3>
          <p>Email: info@palomipop.com</p>
          <p>Teléfono: +52 55 1234 5678</p>
          <p>Dirección: Calle Ficticia #123, Ciudad de México</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Palomipop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;