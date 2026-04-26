import React, { useState } from 'react';
import { COUNTRIES, UA_CITIES, BODY_TYPES, CAR_CONDITIONS, calculateComplexPrice } from '../data';
import { Calculator, MapPin, CarFront, AlertCircle, PhoneForwarded } from 'lucide-react';
import './HeroCalculator.css';

export default function HeroCalculator() {
  const [countryId, setCountryId] = useState(COUNTRIES[0].id);
  const [cityId, setCityId] = useState(UA_CITIES[0].id);
  const [bodyId, setBodyId] = useState(BODY_TYPES[0].id);
  const [condId, setCondId] = useState(CAR_CONDITIONS[0].id);

  const price = calculateComplexPrice(countryId, cityId, bodyId, condId);

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-accent"></div>
      <div className="hero-content">
        <div className="hero-text-block">
          <div className="badge">EU → UA</div>
          <h1>Міжнародна доставка авто <br/><span>Швидко та Безпечно</span></h1>
          <p>
            Надійна команда, яка цінує ваш час та гроші. Отримайте повний спектр логістичних послуг з фіксованою ціною у договорі.
          </p>
          <ul className="hero-benefits">
            <li>✔ Повне страхування</li>
            <li>✔ Розмитнення «Під ключ»</li>
          </ul>
        </div>
        
        <div className="calculator-wrapper glass">
          <div className="calc-header">
            <Calculator size={22} className="calc-icon" />
            <div>
              <h3>Розрахувати тариф</h3>
              <span className="subtitle">Орієнтовна вартість перевезення</span>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label><MapPin size={16}/> Звідки (Європа):</label>
              <select value={countryId} onChange={(e) => setCountryId(e.target.value)}>
                {COUNTRIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><MapPin size={16}/> Куди (Україна):</label>
              <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
                {UA_CITIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><CarFront size={16}/> Тип кузова:</label>
              <select value={bodyId} onChange={(e) => setBodyId(e.target.value)}>
                {BODY_TYPES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><AlertCircle size={16}/> Стан автомобіля:</label>
              <select value={condId} onChange={(e) => setCondId(e.target.value)}>
                {CAR_CONDITIONS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>

          <div className="calc-footer">
            <div className="price-display">
              Вартість:
              <strong>€{price}</strong>
            </div>
            <button className="cta-button primary">
              <PhoneForwarded size={18} /> Отримати в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
