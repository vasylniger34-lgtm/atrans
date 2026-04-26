import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import Loader from './components/Loader';
import HeroCalculator from './components/HeroCalculator';
import ContentSection from './components/ContentSection';

function App() {
  const [theme, setTheme] = useState('heavy');
  const [isAnimating, setIsAnimating] = useState(true);

  // When theme changes, trigger animation
  const handleThemeChange = (newTheme) => {
    if (newTheme === theme) return;
    setIsAnimating(true);
    setTheme(newTheme);
    
    // Auto-hide the loader after animation duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 4500); 
  };

  // Initial load
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Update body class on theme change
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`app-container theme-${theme}`}>
      <AnimatePresence>
        {isAnimating && (
          <Loader key="loader" theme={theme} isAnimating={isAnimating} />
        )}
      </AnimatePresence>
      
      <Header />
      <main>
        <HeroCalculator />
        <ContentSection />
      </main>

      <ThemeSwitcher currentTheme={theme} onChangeTheme={handleThemeChange} />
    </div>
  );
}

export default App;
