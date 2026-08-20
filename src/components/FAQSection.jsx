import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

const FAQ_ITEMS = [
  {
    question: "Чому ваші ціни на доставку авто з Європи нижчі за ринкові?",
    answer: "Ми будуємо логістику так, щоб завантаження відбувалось попутно на регулярних рейсах. Це дозволяє уникнути оплати за порожній пробіг автовоза чи евакуатора та пропонувати помірні та прийнятні ціни для кожного клієнта."
  },
  {
    question: "Як працює купівля авто під ключ з європейських аукціонів (Auto1, Copart)?",
    answer: "Ви економите від 15% від ринкової вартості авто в Україні. Ми надаємо повний супровід: підбір, участь у торгах, перевірка історії, викуп, доставка автовозом в Україну та допомога з розмитненням."
  },
  {
    question: "Чи є у вас офіційна ліцензія та страхування вантажу?",
    answer: "Так, A-TRANS — це офіційний та ліцензований перевізник. Усі перевезення здійснюються за офіційним договором із фіксованою вартістю та повним страхуванням вашого автомобіля."
  },
  {
    question: "Як розраховується вартість доставки до міст України?",
    answer: "Базовий тариф калькулюється до м. Львів або м. Луцьк. Доставка до інших обласних центрів (Київ, Дніпро, Одеса, Харків, Вінниця, Івано-Франківськ тощо) здійснюється попутними евакуаторами за прозорою доплатою."
  },
  {
    question: "Які послуги ви надаєте, крім безпосередньо перевезення?",
    answer: "Ми надаємо комплексні послуги: допомога в підборі та купівлі авто в Європі, передкупівельний огляд та діагностика, митне оформлення (розмитнення) та цілодобовий супровід 24/7."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="faq-section" id="faq">
      {/* Inject FAQ Schema.org JSON-LD dynamically for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <motion.div 
        className="section-header center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="faq-badge">
          <HelpCircle size={16} /> Часті запитання
        </div>
        <h2>Запитання та відповіді</h2>
        <p>Відповіді на найважливіші питання про доставку авто, ціни та ліцензію.</p>
      </motion.div>

      <div className="faq-container">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div 
              key={index} 
              className={`faq-item glass ${isOpen ? 'active' : ''}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown className={`faq-arrow ${isOpen ? 'rotated' : ''}`} size={20} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
