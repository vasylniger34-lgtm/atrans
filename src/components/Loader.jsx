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
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 9.5 }}
      >
         <div className="truck-wrapper">
           <motion.div 
             className="animated-truck"
             initial={{ x: '-120vw', y: '-50%' }}
             animate={{ x: '120vw', y: '-50%' }}
             transition={{ duration: 10.0, ease: "linear" }}
           >
             <div className="truck-graphic-container">
               <img src="/truck-animated.png" alt="A-TRANS Auto Transporter" className="truck-svg" />
               <div className="headlight-beam"></div>
               <div className="speed-lines"></div>
               <div className="gold-trail"></div>
             </div>
           </motion.div>
           
           <div className="loader-text">
              <motion.div
                className="loader-logo-badge"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              >
                <img src="/logo_round.png" alt="A-TRANS" className="loader-logo-img" />
                <div className="logo-glow-pulse"></div>
              </motion.div>
           </div>
         </div>
      </motion.div>
    </div>
  );
}
