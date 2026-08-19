import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Loader from './components/Loader';
import HeroCalculator from './components/HeroCalculator';
import ContentSection, { AboutSection, ContactsSection } from './components/ContentSection';
import WorksGallery from './components/WorksGallery';

function App() {
  const [isAnimating, setIsAnimating] = useState(true);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 8300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {isAnimating && (
          <Loader key="loader" isAnimating={isAnimating} />
        )}
      </AnimatePresence>
      
      <Header />
      <main>
        <HeroCalculator />
        <div className="content-wrapper">
          <AboutSection />
        </div>
        <WorksGallery />
        <div className="content-wrapper">
          <ContactsSection />
        </div>
      </main>
    </div>
  );
}

export default App;
