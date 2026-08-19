import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import './WorksGallery.css';

const worksList = [
  { id: 1, src: '/works/photo_2026-08-19_23-27-37.jpg', title: 'Доставка з Європи', loc: 'м. Львів' },
  { id: 2, src: '/works/photo_2026-08-19_23-28-45.jpg', title: 'Транспортування авто', loc: 'м. Київ' },
  { id: 3, src: '/works/photo_2026-08-19_23-28-49.jpg', title: 'Евакуатор автовозом', loc: 'м. Луцьк' },
  { id: 4, src: '/works/photo_2026-08-19_23-28-53.jpg', title: 'Доставка легкового авто', loc: 'м. Рівне' },
  { id: 5, src: '/works/photo_2026-08-19_23-28-56.jpg', title: 'Міжнародне перевезення', loc: 'м. Львів' },
  { id: 6, src: '/works/photo_2026-08-19_23-29-00.jpg', title: 'Безпечний автовоз', loc: 'м. Тернопіль' },
  { id: 7, src: '/works/photo_2026-08-19_23-29-03.jpg', title: 'Доставка автомобіля', loc: 'м. Івано-Франківськ' },
  { id: 8, src: '/works/photo_2026-08-19_23-29-06.jpg', title: 'Евакуація з ЄС', loc: 'м. Хмельницький' },
  { id: 9, src: '/works/photo_2026-08-19_23-29-09.jpg', title: 'Рейс з Німеччини', loc: 'м. Львів' },
];

export default function WorksGallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? worksList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === worksList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="works-section" id="works">
      <div className="works-container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="works-gold-badge">Виконані замовлення</span>
          <h2>Наші виконані роботи</h2>
          <p>Автомобілі, які ми успішно транспортували та доставили нашим клієнтам</p>
        </motion.div>

        <div className="works-grid">
          {worksList.map((item, idx) => (
            <motion.div
              key={item.id}
              className="work-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="work-img-wrapper">
                <img src={item.src} alt={item.title} className="work-img" loading="lazy" />
                <div className="work-overlay">
                  <div className="view-btn">
                    <Eye size={20} /> <span>Переглянути</span>
                  </div>
                </div>
                <div className="status-tag">
                  <CheckCircle2 size={14} /> <span>Доставили</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedIdx(null)}>
                <X size={28} />
              </button>

              <button className="nav-btn prev" onClick={handlePrev}>
                <ChevronLeft size={32} />
              </button>

              <div className="lightbox-img-wrapper">
                <img
                  src={worksList[selectedIdx].src}
                  alt="Доставлене авто"
                  className="lightbox-img"
                />
              </div>

              <button className="nav-btn next" onClick={handleNext}>
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
