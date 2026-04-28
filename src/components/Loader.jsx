import React from 'react';
import { motion } from 'framer-motion';
import LogoBadge from './LogoBadge';
import './Loader.css';

export default function Loader({ isAnimating }) {
  if (!isAnimating) return null;

  return (
    <div className="loader-container">
      <motion.div
        className="curtain"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 3.5 }}
      >
         <div className="truck-wrapper">
           <motion.div 
             className="animated-truck"
             initial={{ x: '-120vw' }}
             animate={{ x: '120vw' }}
             transition={{ duration: 4, ease: 'easeInOut' }}
           >
             <img src="/truck-new.png" alt="Auto Transporter" className="truck-svg" />
             <div className="speed-lines"></div>
           </motion.div>
           
           <div className="loader-text">
              <motion.div
                className="loader-logo-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              >
                <LogoBadge size={280} />
              </motion.div>
           </div>
         </div>
      </motion.div>
    </div>
  );
}
