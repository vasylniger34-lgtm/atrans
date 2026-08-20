import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  PhoneForwarded, 
  MapPin, 
  Truck, 
  ShoppingBag, 
  Search, 
  Headphones, 
  Percent, 
  Award, 
  DollarSign 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './ContentSection.css';

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <motion.div 
        className="section-header center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="official-badge">
          <Award size={16} /> Офіційний та ліцензований перевізник
        </div>
        <h2>Послуги A-TRANS</h2>
        <p>Міжнародна логістика авто з Європи, купівля з аукціонів та попутні перевезення по Україні.</p>
      </motion.div>

      {/* Featured Auction VIP Service */}
      <motion.div 
        className="featured-service-card glass"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="featured-badge">Окрема важлива послуга</div>
        <div className="featured-content">
          <div className="featured-info">
            <div className="featured-title-row">
              <ShoppingBag className="featured-icon" />
              <div>
                <h3>Купівля авто під ключ з європейських аукціонів</h3>
                <span className="auction-platforms">Auto 1, Copart, BCA, CarTV, Ayvens, Autobid та інші</span>
              </div>
            </div>
            <p>
              Організовуємо повний цикл купівлі автомобіля на європейських аукціонах.
              Ви отримуєте перевірене авто з прозорою історією та повною доставкою під ключ.
            </p>
          </div>
          <div className="featured-highlight">
            <div className="savings-badge">
              <Percent size={26} />
              <div>
                <strong>Економія від 15%</strong>
                <span>від ринкової вартості в Україні</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card glass">
          <Truck className="service-icon" />
          <h3>Доставка авто з Європи</h3>
          <p>Доставка автовозами та евакуаторами. Будуємо грамотну попутну логістику для забезпечення найвигідніших та поміркованих цін.</p>
        </div>

        <div className="service-card glass">
          <Truck className="service-icon" />
          <h3>Попутні перевезення по Україні</h3>
          <p>Швидка та бюджетна доставка автомобілів між містами України попутними евакуаторами без переплати за порожній пробіг.</p>
        </div>

        <div className="service-card glass">
          <Search className="service-icon" />
          <h3>Допомога в підборі та купівлі</h3>
          <p>Професійний пошук та підбір автомобіля під ваші параметри й бюджет на ринках Євросоюзу.</p>
        </div>

        <div className="service-card glass">
          <FileCheck className="service-icon" />
          <h3>Передкупівельний огляд авто</h3>
          <p>Детальна передкупівельна діагностика технічного стану, кузова, комплектації та документів на місці.</p>
        </div>

        <div className="service-card glass">
          <ShieldCheck className="service-icon" />
          <h3>Допомога в митному оформленні</h3>
          <p>Повний супровід та допомога з брокерськими послугами для швидкого та легального розмитнення.</p>
        </div>

        <div className="service-card glass">
          <Headphones className="service-icon" />
          <h3>Супровід та підтримка 24/7</h3>
          <p>Персональний менеджер цілодобово на зв'язку. Інформуємо про кожен етап від покупки до передачі ключів.</p>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Чому обирають A-TRANS?</h2>
        <p>Офіційний ліцензований перевізник із розумною попутною логістикою.</p>
      </motion.div>
      
      <div className="about-content glass">
        <div className="about-text">
          <ul className="about-list">
            <li>
              <DollarSign className="a-icon" />
              <div>
                <h4>Помірні та прийнятні ціни</h4>
                <p>Основна перевага, за яку нас обирають! Ми будуємо логістику так, щоб завантаження відбувалось попутно, що знижує підсумкову вартість доставки.</p>
              </div>
            </li>
            <li>
              <Award className="a-icon" />
              <div>
                <h4>Офіційний та ліцензований перевізник</h4>
                <p>Офіційна ліцензія на міжнародні перевезення, страхування вантажу та прозорий договір з фіксованою ціною.</p>
              </div>
            </li>
            <li>
              <Percent className="a-icon" />
              <div>
                <h4>Вигода від 15% на аукціонах</h4>
                <p>Викуп авто під ключ з майданчиків Auto 1, Copart, BCA, CarTV, Ayvens, Autobid з економією від 15% від цін в Україні.</p>
              </div>
            </li>
            <li>
              <Headphones className="a-icon" />
              <div>
                <h4>24/7 На зв'язку</h4>
                <p>Наші менеджери цілодобово інформують про місцезнаходження вашого авто та готові відповісти на будь-які питання.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-image">
           <img src="/iveco.png" alt="A-TRANS Доставка авто з Європи автовозом" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
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
              <span>Телефони:</span>
              <a href="tel:+380634872745" onClick={() => window.trackContactClick && window.trackContactClick('phone')}>+380 63 487 27 45</a>
              <a href="tel:+380968132137" style={{ display: 'block', marginTop: '4px' }} onClick={() => window.trackContactClick && window.trackContactClick('phone')}>+380 96 813 21 37</a>
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
          <h3>Ми в соцмережах та месенджерах</h3>
          <div className="social-grid">
            <a href="https://www.instagram.com/a_trans__" target="_blank" rel="noreferrer" className="social-btn instagram" onClick={() => window.trackContactClick && window.trackContactClick('instagram')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a href="https://www.tiktok.com/@atrans4" target="_blank" rel="noreferrer" className="social-btn tiktok" onClick={() => window.trackContactClick && window.trackContactClick('tiktok')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.12V9.32a6.31 6.31 0 00-.82-.05A6.34 6.34 0 003.15 15.6a6.34 6.34 0 0010.83 4.47V10.7a8.28 8.28 0 005.21 1.83V9.08a4.83 4.83 0 01-3.6-2.39z"/>
              </svg>
              <span>TikTok</span>
            </a>

            <a href="https://t.me/+380634872745" target="_blank" rel="noreferrer" className="social-btn telegram" onClick={() => window.trackContactClick && window.trackContactClick('telegram')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 4-1.74 6.68-2.89 8.04-3.46 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.17.14.12.18.28.2.4.02.07.02.21 0 .34z"/>
              </svg>
              <span>Telegram</span>
            </a>

            <a href="viber://chat?number=%2B380634872745" target="_blank" rel="noreferrer" className="social-btn viber" onClick={() => window.trackContactClick && window.trackContactClick('viber')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M21.5 12.7c-.1-.7-.3-1.4-.7-2-.4-.6-1-1.1-1.6-1.5-.7-.4-1.4-.6-2.1-.7-.3 0-.5.2-.5.5s.2.5.5.5c.6.1 1.2.3 1.8.6.5.3 1 .8 1.3 1.3.3.5.5 1.1.6 1.8 0 .3.3.5.5.5.3 0 .5-.2.5-.5zM17.5 11.8c-.1-.4-.2-.8-.4-1.1-.2-.3-.5-.6-.9-.8-.3-.2-.7-.3-1.1-.4-.3 0-.5.2-.5.5s.2.5.5.5c.3.1.5.2.7.3.2.2.4.4.5.7.1.2.2.4.3.7 0 .3.2.5.5.5.3 0 .4-.2.4-.4zm-2.9-1.9c-.3 0-.5.2-.5.5s.2.5.5.5c0 0 .1 0 .1 0 .3 0 .5-.2.5-.5s-.3-.5-.6-.5zm5.1 4.5c-.3-.2-.6-.4-.9-.6-.4-.2-.7-.4-1.1-.3-.4.1-.7.4-.9.7-.2.3-.5.7-.8 1-.2.2-.4.3-.7.1-.6-.3-1.3-.7-1.9-1.1-.7-.5-1.3-1.2-1.8-1.9-.2-.3-.1-.5.1-.7.3-.3.6-.6.9-.9.3-.3.5-.6.6-1 0-.4-.2-.8-.4-1.1-.2-.3-.4-.7-.6-.9-.3-.4-.6-.4-1-.4s-.7.2-1 .4c-.4.4-.7.8-.9 1.3-.3.9-.2 1.8.2 2.7.5 1.3 1.3 2.5 2.3 3.6 1.1 1 2.3 1.9 3.6 2.4.9.4 1.8.6 2.7.3.5-.2.9-.5 1.3-.9.3-.3.4-.7.4-1 0-.5-.1-.8-.5-1.1zM12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.6C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
              </svg>
              <span>Viber</span>
            </a>

            <a href="https://wa.me/380634872745" target="_blank" rel="noreferrer" className="social-btn whatsapp" onClick={() => window.trackContactClick && window.trackContactClick('whatsapp')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContentSection() {
  return (
    <div className="content-wrapper">
      <AboutSection />
      <ContactsSection />
    </div>
  );
}
