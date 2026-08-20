import React, { useState, useEffect, useRef } from 'react';
import { DESTINATIONS, WEIGHT_CATEGORIES, UKRAINE_DESTINATIONS, calculatePrice } from '../data';
import { Calculator, MapPin, Scale, PhoneForwarded, Globe, Navigation, ChevronDown, Phone } from 'lucide-react';
import { motion, animate, AnimatePresence } from 'framer-motion';
import './HeroCalculator.css';

function AnimatedPrice({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isCounting, setIsCounting] = useState(false);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (prevValueRef.current === value) {
      setDisplayValue(value);
      return;
    }

    const startVal = prevValueRef.current;
    prevValueRef.current = value;
    setIsCounting(true);

    const controls = animate(startVal, value, {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
      onComplete: () => {
        setIsCounting(false);
      }
    });

    return () => controls.stop();
  }, [value]);

  return (
    <motion.strong 
      animate={{ scale: isCounting ? [1, 1.08, 1] : 1 }}
      transition={{ duration: 0.4 }}
      className={`animated-price-value ${isCounting ? 'counting' : ''}`}
    >
      {displayValue > 0 ? `≈ €${displayValue}` : '---'}
    </motion.strong>
  );
}

export default function HeroCalculator() {
  const [countryId, setCountryId] = useState(DESTINATIONS[0].countryId);
  const [groupId, setGroupId] = useState(DESTINATIONS[0].groups[0].id);
  const [weightId, setWeightId] = useState(WEIGHT_CATEGORIES[0].id);
  const [ukraineCityId, setUkraineCityId] = useState(UKRAINE_DESTINATIONS[0].id);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const activeCountry = DESTINATIONS.find(c => c.countryId === countryId);

  // Update groupId when country changes
  useEffect(() => {
    if (activeCountry && !activeCountry.groups.find(g => g.id === groupId)) {
      setGroupId(activeCountry.groups[0].id);
    }
  }, [countryId, activeCountry, groupId]);

  const price = calculatePrice(countryId, groupId, weightId, ukraineCityId);

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
          <div className="hero-logo-wrapper">
            <img src="/logo_round.png" alt="A-TRANS" className="hero-logo-img" />
          </div>
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
              <label><MapPin size={16}/> Місто доставки в Україні:</label>
              <select value={ukraineCityId} onChange={(e) => setUkraineCityId(e.target.value)}>
                {UKRAINE_DESTINATIONS.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="calc-footer">
            <div className="price-display">
              Орієнтовна вартість:
              <AnimatedPrice value={price} />
            </div>
            <div className="phone-dropdown-wrapper">
              <button 
                type="button"
                className={`cta-button primary ${showPhonePopup ? 'active' : ''}`}
                onClick={() => setShowPhonePopup(!showPhonePopup)}
              >
                <PhoneForwarded size={18} /> Зателефонувати
                <ChevronDown size={16} className={`phone-chevron ${showPhonePopup ? 'open' : ''}`} />
              </button>

              <AnimatePresence>
                {showPhonePopup && (
                  <motion.div 
                    className="phone-popup glass"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <span className="phone-popup-title">Оберіть номер для дзвінка:</span>
                    <a 
                      href="tel:+380634872745" 
                      className="phone-option-btn"
                      onClick={() => {
                        if (window.trackContactClick) window.trackContactClick('phone');
                        setShowPhonePopup(false);
                      }}
                    >
                      <Phone size={16} />
                      <span>+380 63 487 27 45</span>
                    </a>
                    <a 
                      href="tel:+380968132137" 
                      className="phone-option-btn"
                      onClick={() => {
                        if (window.trackContactClick) window.trackContactClick('phone');
                        setShowPhonePopup(false);
                      }}
                    >
                      <Phone size={16} />
                      <span>+380 96 813 21 37</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="calc-messengers">
            <span className="messengers-label">Наші месенджери:</span>
            <div className="messengers-grid">
              <a 
                href="https://t.me/+380634872745" 
                target="_blank" 
                rel="noreferrer" 
                className="messenger-btn telegram"
                onClick={() => window.trackContactClick && window.trackContactClick('telegram')}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 4-1.74 6.68-2.89 8.04-3.46 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.17.14.12.18.28.2.4.02.07.02.21 0 .34z"/>
                </svg>
                <span>Telegram</span>
              </a>

              <a 
                href="viber://chat?number=%2B380634872745" 
                target="_blank" 
                rel="noreferrer" 
                className="messenger-btn viber"
                onClick={() => window.trackContactClick && window.trackContactClick('viber')}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M21.5 12.7c-.1-.7-.3-1.4-.7-2-.4-.6-1-1.1-1.6-1.5-.7-.4-1.4-.6-2.1-.7-.3 0-.5.2-.5.5s.2.5.5.5c.6.1 1.2.3 1.8.6.5.3 1 .8 1.3 1.3.3.5.5 1.1.6 1.8 0 .3.3.5.5.5.3 0 .5-.2.5-.5zM17.5 11.8c-.1-.4-.2-.8-.4-1.1-.2-.3-.5-.6-.9-.8-.3-.2-.7-.3-1.1-.4-.3 0-.5.2-.5.5s.2.5.5.5c.3.1.5.2.7.3.2.2.4.4.5.7.1.2.2.4.3.7 0 .3.2.5.5.5.3 0 .4-.2.4-.4zm-2.9-1.9c-.3 0-.5.2-.5.5s.2.5.5.5c0 0 .1 0 .1 0 .3 0 .5-.2.5-.5s-.3-.5-.6-.5zm5.1 4.5c-.3-.2-.6-.4-.9-.6-.4-.2-.7-.4-1.1-.3-.4.1-.7.4-.9.7-.2.3-.5.7-.8 1-.2.2-.4.3-.7.1-.6-.3-1.3-.7-1.9-1.1-.7-.5-1.3-1.2-1.8-1.9-.2-.3-.1-.5.1-.7.3-.3.6-.6.9-.9.3-.3.5-.6.6-1 0-.4-.2-.8-.4-1.1-.2-.3-.4-.7-.6-.9-.3-.4-.6-.4-1-.4s-.7.2-1 .4c-.4.4-.7.8-.9 1.3-.3.9-.2 1.8.2 2.7.5 1.3 1.3 2.5 2.3 3.6 1.1 1 2.3 1.9 3.6 2.4.9.4 1.8.6 2.7.3.5-.2.9-.5 1.3-.9.3-.3.4-.7.4-1 0-.5-.1-.8-.5-1.1zM12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.6C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
                </svg>
                <span>Viber</span>
              </a>

              <a 
                href="https://wa.me/380634872745" 
                target="_blank" 
                rel="noreferrer" 
                className="messenger-btn whatsapp"
                onClick={() => window.trackContactClick && window.trackContactClick('whatsapp')}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
