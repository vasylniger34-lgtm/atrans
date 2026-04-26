import React from 'react';
import { motion } from 'framer-motion';
import TruckIcon from './TruckIcon';
import './Loader.css';

export default function Loader({ theme, isAnimating }) {
  if (!isAnimating) return null;

  return (
    <div className={`loader-container loader-${theme}`}>
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
             <TruckIcon className="truck-svg" />
             <div className="speed-lines"></div>
           </motion.div>
           
           <div className="loader-text">
             <h2>A-TRANS</h2>
             <p>PREMIUM AUTO LOGISTICS</p>
           </div>
         </div>
      </motion.div>
    </div>
  );
}
