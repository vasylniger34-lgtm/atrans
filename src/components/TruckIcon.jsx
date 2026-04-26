import React from 'react';

export default function TruckIcon({ className }) {
  return (
    <svg 
      viewBox="0 0 500 220" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', color: 'currentColor' }}
    >
      {/* --- TRUCK CHASSIS / BED --- */}
      {/* Angled Platform Bed */}
      <path 
        d="M 33 205 L 350 160 L 350 195 L 33 218 Z" 
        fill="currentColor" 
      />
      
      {/* --- CABIN (Right Side) --- */}
      {/* Main Cabin Body */}
      <path 
        d="M 465 210 L 350 210 L 350 100 L 400 100 C 430 100 455 125 465 155 L 465 210 Z" 
        fill="currentColor" 
      />
      {/* Side Windows */}
      <path 
        d="M 435 150 L 360 150 L 360 115 L 400 115 C 415 115 428 125 435 150 Z" 
        fill="var(--bg-color)" 
        opacity="0.8" 
      />
      {/* Signal Light on top */}
      <rect x="390" y="88" width="30" height="12" rx="4" fill="currentColor" />
      {/* Front Light */}
      <circle cx="452" cy="175" r="8" fill="var(--bg-color)" opacity="0.6" />

      {/* --- TRUCK WHEELS --- */}
      <circle cx="180" cy="208" r="22" fill="currentColor" />
      <circle cx="180" cy="208" r="8" fill="var(--bg-color)" />
      
      <circle cx="420" cy="208" r="22" fill="currentColor" />
      <circle cx="420" cy="208" r="8" fill="var(--bg-color)" />

      {/* --- CAR ON BED (Angled Sedan) --- */}
      <g transform="translate(45, 140) rotate(-7)">
        {/* Car Body */}
        <path 
          d="M 0 60 C 0 50 10 40 40 40 L 80 15 C 100 0 150 0 180 15 L 230 40 C 245 45 250 55 250 65 L 250 80 L 0 80 Z" 
          fill="currentColor" 
        />
        {/* Car Windows */}
        <path 
          d="M 60 40 C 70 25 100 20 120 20 L 160 20 C 180 20 200 30 210 40 Z" 
          fill="var(--bg-color)" 
          opacity="0.6" 
        />
        {/* Car Wheels */}
        <circle cx="50" cy="80" r="20" fill="currentColor" />
        <circle cx="50" cy="80" r="8" fill="var(--bg-color)" />
        <circle cx="205" cy="80" r="20" fill="currentColor" />
        <circle cx="205" cy="80" r="8" fill="var(--bg-color)" />
      </g>
    </svg>
  );
}
