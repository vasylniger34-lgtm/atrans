import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-area">
          <span className="logo-text">A-TRANS</span>
        </div>
        
        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Головна</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Послуги</a>
          <a href="#routes" onClick={() => setMobileMenuOpen(false)}>Маршрути</a>
          <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>Контакти</a>
          <div className="mobile-phones">
            <a href="tel:+380634872745" className="phone-button">
              <Phone size={16} /> <span>+380 63 487 27 45</span>
            </a>
            <a href="tel:+380974041808" className="phone-button outline">
              <Phone size={16} /> <span>+380 97 404 18 08</span>
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <div className="phone-group desktop-phones">
            <a href="tel:+380634872745" className="phone-button">
              <Phone size={16} /> <span className="phone-text">+380 63 487 27 45</span>
            </a>
            <a href="tel:+380974041808" className="phone-button outline">
              <Phone size={16} /> <span className="phone-text">+380 97 404 18 08</span>
            </a>
          </div>
          
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
