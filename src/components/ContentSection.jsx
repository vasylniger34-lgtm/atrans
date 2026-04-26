import React from 'react';
import { Route, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import './ContentSection.css';

export default function ContentSection() {
  const routes = [
    { from: 'Німеччина', icon: '🇩🇪', active: true },
    { from: 'Польща', icon: '🇵🇱', active: true },
    { from: 'Нідерланди', icon: '🇳🇱', active: true },
    { from: 'Іспанія', icon: '🇪🇸', active: true },
    { from: 'Італія', icon: '🇮🇹', active: true },
    { from: 'Франція', icon: '🇫🇷', active: true },
  ];

  return (
    <div className="content-wrapper">
      <section className="routes-section" id="routes">
        <div className="section-header">
          <h2>Наші регулярні рейси</h2>
          <p>Щотижневі відправлення з найбільших хабів Європи.</p>
        </div>
        
        <div className="routes-grid">
          {routes.map((r, i) => (
            <div className="route-card glass" key={i}>
              <div className="route-icon">{r.icon}</div>
              <div className="route-info">
                <h4>{r.from} — Україна</h4>
                <span>{r.active ? 'Активні рейси' : 'Під запит'}</span>
              </div>
              <button className="route-btn">Отримати тариф</button>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section" id="services">
        <div className="section-header center">
          <h2>Коли деталі створюють успіх</h2>
          <p>Чому тисячі клієнтів обирають саме A-TRANS для перевезення власних авто.</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card glass">
            <ShieldCheck size={40} className="b-icon" />
            <h4>Повне страхування</h4>
            <p>Безпека без компромісів. Всі авто застраховані під час транзиту.</p>
          </div>
          <div className="benefit-card glass">
            <FileCheck size={40} className="b-icon" />
            <h4>Фіксована ціна</h4>
            <p>Жодних сюрпризів. Вартість закріплюється у договорі перед відправкою.</p>
          </div>
          <div className="benefit-card glass">
            <Route size={40} className="b-icon" />
            <h4>Митне оформлення</h4>
            <p>Усі документи «Під ключ», мінімізація часу перебування на кордоні.</p>
          </div>
          <div className="benefit-card glass">
            <Clock size={40} className="b-icon" />
            <h4>Цілодобова підтримка</h4>
            <p>Завжди на зв'язку. Інформуємо про статус вашого авто в реальному часі.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
