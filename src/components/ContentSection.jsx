import React from 'react';
import { Route, ShieldCheck, Clock, FileCheck } from 'lucide-react';
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
      <section className="routes-section" id="routes">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Наші регулярні рейси</h2>
          <p>Щотижневі відправлення з найбільших хабів Європи.</p>
        </motion.div>
        
        <div className="routes-grid">
          {routes.map((r, i) => (
            <motion.div 
              className="route-card glass" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="route-icon">{r.icon}</div>
              <div className="route-info">
                <h4>{r.from} — Україна</h4>
                <span>{r.active ? 'Активні рейси' : 'Під запит'}</span>
              </div>
              <a href="#home" className="route-btn">Отримати тариф</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="benefits-section" id="services">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Коли деталі створюють успіх</h2>
          <p>Чому тисячі клієнтів обирають саме A-TRANS для перевезення власних авто.</p>
        </motion.div>

        <div className="benefits-grid">
          {[
            { icon: ShieldCheck, title: "Повне страхування", desc: "Безпека без компромісів. Всі авто застраховані під час транзиту." },
            { icon: FileCheck, title: "Фіксована ціна", desc: "Жодних сюрпризів. Вартість закріплюється у договорі перед відправкою." },
            { icon: Route, title: "Митне оформлення", desc: "Усі документи «Під ключ», мінімізація часу перебування на кордоні." },
            { icon: Clock, title: "Цілодобова підтримка", desc: "Завжди на зв'язку. Інформуємо про статус вашого авто в реальному часі." }
          ].map((benefit, i) => (
            <motion.div 
              className="benefit-card glass" 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <benefit.icon size={40} className="b-icon" />
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
