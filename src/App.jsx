import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Loader from './components/Loader';
import HeroCalculator from './components/HeroCalculator';
import ContentSection from './components/ContentSection';

function App() {
  const [isAnimating, setIsAnimating] = useState(true);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5500);
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
        <ContentSection />
      </main>
    </div>
  );
}

export default App;
