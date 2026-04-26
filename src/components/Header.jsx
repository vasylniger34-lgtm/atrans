import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
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
        </nav>

        <div className="header-actions">
          <a href="tel:+380000000000" className="phone-button">
            <Phone size={16} /> <span className="phone-text">+380 00 000 00 00</span>
          </a>
          
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
