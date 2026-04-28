import React, { useState, useEffect } from 'react';
import { DESTINATIONS, WEIGHT_CATEGORIES, calculatePrice } from '../data';
import { Calculator, MapPin, Scale, PhoneForwarded, Globe, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroCalculator.css';

export default function HeroCalculator() {
  const [countryId, setCountryId] = useState(DESTINATIONS[0].countryId);
  const [groupId, setGroupId] = useState(DESTINATIONS[0].groups[0].id);
  const [weightId, setWeightId] = useState(WEIGHT_CATEGORIES[0].id);

  const activeCountry = DESTINATIONS.find(c => c.countryId === countryId);

  // Update groupId when country changes
  useEffect(() => {
    if (activeCountry && !activeCountry.groups.find(g => g.id === groupId)) {
      setGroupId(activeCountry.groups[0].id);
    }
  }, [countryId, activeCountry, groupId]);

  const price = calculatePrice(countryId, groupId, weightId);

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-accent"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge">Доставка авто з Європи</div>
          <h1>Доставка авто з Європи <br/><span>до України</span></h1>
          <p>
            Надійна команда, яка цінує ваш час та гроші. Отримайте повний спектр логістичних послуг з фіксованою ціною у договорі.
          </p>
          <ul className="hero-benefits">
            <li>✔ Будь-яка форма оплати</li>
            <li>✔ Офіційний договір та страхування</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="calculator-wrapper glass"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="calc-header">
            <Calculator size={22} className="calc-icon" />
            <div>
              <h3>Розрахувати тариф</h3>
              <span className="subtitle">Орієнтовна вартість перевезення в Україну</span>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group full-width">
              <label><Scale size={16}/> Оберіть вагу автомобіля:</label>
              <select value={weightId} onChange={(e) => setWeightId(e.target.value)}>
                {WEIGHT_CATEGORIES.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><Globe size={16}/> Країна відправлення:</label>
              <select value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                {DESTINATIONS.map(c => <option key={c.countryId} value={c.countryId}>{c.countryName}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><Navigation size={16}/> Найближче місто відправки:</label>
              <select value={groupId} onChange={(e) => setGroupId(e.target.value)}>
                {activeCountry?.groups.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label><MapPin size={16}/> Місто доставки:</label>
              <select disabled>
                <option>Україна, Львів</option>
              </select>
            </div>
          </div>

          <div className="calc-footer">
            <div className="price-display">
              Орієнтовна вартість:
              <strong>{price > 0 ? `≈ €${price}` : '---'}</strong>
            </div>
            <a href="tel:+380634872745" className="cta-button primary">
              <PhoneForwarded size={18} /> Зателефонувати
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
