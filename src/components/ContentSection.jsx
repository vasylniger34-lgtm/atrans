import React from 'react';
import { Route, ShieldCheck, Clock, FileCheck, PhoneForwarded, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContentSection.css';

export default function ContentSection() {
  const routes = [
    { from: 'Бельгія', icon: '🇧🇪', active: true },
    { from: 'Нідерланди', icon: '🇳🇱', active: true },
    { from: 'Швейцарія', icon: '🇨🇭', active: true },
    { from: 'Австрія', icon: '🇦🇹', active: true },
    { from: 'Данія', icon: '🇩🇰', active: true },
    { from: 'Польща', icon: '🇵🇱', active: true },
    { from: 'Чехія', icon: '🇨🇿', active: true },
    { from: 'Литва', icon: '🇱🇹', active: true },
  ];

  return (
    <div className="content-wrapper">
      <section className="about-section" id="about">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Про нас</h2>
          <p>Ваш надійний партнер у сфері міжнародної логістики авто.</p>
        </motion.div>
        
        <div className="about-content glass">
          <div className="about-text">
            <h3>Чому обирають A-TRANS?</h3>
            <ul className="about-list">
              <li>
                <Clock className="a-icon" />
                <div>
                  <h4>Регулярні рейси</h4>
                  <p>Ми здійснюємо регулярні щотижневі рейси з країн Євросоюзу.</p>
                </div>
              </li>
              <li>
                <FileCheck className="a-icon" />
                <div>
                  <h4>Фіксована ціна</h4>
                  <p>Фіксована узгоджена ціна без прихованих доплат та комісій.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="a-icon" />
                <div>
                  <h4>Митне оформлення</h4>
                  <p>Допомога з митним оформленням та супровід документів.</p>
                </div>
              </li>
              <li>
                <PhoneForwarded className="a-icon" />
                <div>
                  <h4>Цілодобова підтримка</h4>
                  <p>Наші менеджери на зв'язку 24/7 для вашого спокою.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-image">
             <img src="/iveco.png" alt="Logistics" />
          </div>
        </div>
      </section>

      <section className="contacts-section" id="contacts">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Контакти</h2>
          <p>Зв'яжіться з нами зручним для вас способом.</p>
        </motion.div>

        <div className="contacts-grid">
          <div className="contact-info glass">
            <div className="contact-item">
              <PhoneForwarded size={24} />
              <div>
                <span>Телефон:</span>
                <a href="tel:+380634872745">+380 63 487 27 45</a>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <span>Офіс:</span>
                <p>Україна, м. Львів</p>
              </div>
            </div>
          </div>
          
          <div className="social-links glass">
            <h3>Ми в соцмережах</h3>
            <div className="social-grid">
              <a href="#" className="social-btn instagram">Instagram</a>
              <a href="#" className="social-btn facebook">Facebook</a>
              <a href="#" className="social-btn telegram">Telegram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
