import React from 'react';

export default function LogoBadge({ size = 320, className = '' }) {
  const half = size / 2;
  const r = half - 12; // inner radius for text path

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Arc path for top text */}
        <path
          id="topArc"
          d={`M ${half - r * 0.88} ${half - r * 0.1}
              A ${r * 0.9} ${r * 0.9} 0 0 1 ${half + r * 0.88} ${half - r * 0.1}`}
          fill="none"
        />
        {/* Arc path for bottom decorative text */}
        <path
          id="bottomArc"
          d={`M ${half - r * 0.7} ${half + r * 0.65}
              A ${r * 0.75} ${r * 0.75} 0 0 0 ${half + r * 0.7} ${half + r * 0.65}`}
          fill="none"
        />
      </defs>

      {/* --- Outer Circle Border --- */}
      <circle
        cx={half}
        cy={half}
        r={half - 4}
        fill="none"
        stroke="var(--accent-color, #0f4c81)"
        strokeWidth="2.5"
      />
      {/* Inner circle */}
      <circle
        cx={half}
        cy={half}
        r={half - 12}
        fill="none"
        stroke="var(--accent-color, #0f4c81)"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* --- Top Arc Text: ДОСТАВКА АВТО З ЄВРОПИ --- */}
      <text
        fill="var(--accent-color, #0f4c81)"
        fontSize="17"
        fontFamily="'Outfit', sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ДОСТАВКА АВТО З ЄВРОПИ
        </textPath>
      </text>

      {/* --- Truck Carrier Illustration (center) --- */}
      <g transform={`translate(${half - 100}, ${half - 52})`}>
        {/* Platform / bed */}
        <path
          d="M 5 75 L 140 55 L 140 72 L 5 82 Z"
          fill="var(--accent-color, #0f4c81)"
        />
        {/* Cabin */}
        <path
          d="M 185 78 L 140 78 L 140 35 L 160 35 C 175 35 183 48 185 58 Z"
          fill="var(--accent-color, #0f4c81)"
        />
        {/* Window */}
        <path
          d="M 175 55 L 147 55 L 147 42 L 160 42 C 168 42 173 46 175 55 Z"
          fill="var(--bg-color, #f5f7fa)"
          opacity="0.8"
        />
        {/* Signal light */}
        <rect x="155" y="30" width="15" height="5" rx="2" fill="var(--accent-color, #0f4c81)" />
        {/* Front light */}
        <circle cx="182" cy="65" r="3" fill="var(--bg-color, #f5f7fa)" opacity="0.6" />
        {/* Wheels */}
        <circle cx="65" cy="78" r="9" fill="var(--accent-color, #0f4c81)" />
        <circle cx="65" cy="78" r="3.5" fill="var(--bg-color, #f5f7fa)" />
        <circle cx="168" cy="78" r="9" fill="var(--accent-color, #0f4c81)" />
        <circle cx="168" cy="78" r="3.5" fill="var(--bg-color, #f5f7fa)" />

        {/* Car on bed */}
        <g transform="translate(12, 28) rotate(-5)">
          <path
            d="M 0 28 C 0 24 4 18 18 18 L 36 6 C 45 0 68 0 82 6 L 105 18 C 110 20 112 25 112 30 L 112 36 L 0 36 Z"
            fill="var(--accent-color, #0f4c81)"
          />
          <path
            d="M 27 18 C 32 10 45 8 54 8 L 72 8 C 81 8 91 12 95 18 Z"
            fill="var(--bg-color, #f5f7fa)"
            opacity="0.6"
          />
          <circle cx="22" cy="36" r="8" fill="var(--accent-color, #0f4c81)" />
          <circle cx="22" cy="36" r="3" fill="var(--bg-color, #f5f7fa)" />
          <circle cx="92" cy="36" r="8" fill="var(--accent-color, #0f4c81)" />
          <circle cx="92" cy="36" r="3" fill="var(--bg-color, #f5f7fa)" />
        </g>

        {/* Road line */}
        <line x1="0" y1="87" x2="195" y2="87" stroke="var(--border-color, #e2e8f0)" strokeWidth="1.5" />
      </g>

      {/* --- A-TRANS title --- */}
      <text
        x={half}
        y={half + 58}
        textAnchor="middle"
        fill="var(--accent-color, #0f4c81)"
        fontSize="30"
        fontFamily="'Outfit', sans-serif"
        fontWeight="800"
        letterSpacing="3"
      >
        A-TRANS
      </text>

      {/* --- Subtitle --- */}
      <text
        x={half}
        y={half + 76}
        textAnchor="middle"
        fill="var(--text-muted, #64748b)"
        fontSize="10"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        letterSpacing="2"
      >
        ЕВАКУАТОР · АВТОВОЗ
      </text>

      {/* --- Phone numbers --- */}
      <text
        x={half}
        y={half + 96}
        textAnchor="middle"
        fill="var(--text-color, #1e293b)"
        fontSize="9.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        letterSpacing="0.5"
      >
        +38 097 404 18 08
      </text>
      <text
        x={half}
        y={half + 110}
        textAnchor="middle"
        fill="var(--text-color, #1e293b)"
        fontSize="9.5"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        letterSpacing="0.5"
      >
        +38 063 987 27 45
      </text>

      {/* --- Bottom Arc Text: A-TRANS.COM.UA --- */}
      <text
        fill="var(--text-muted, #64748b)"
        fontSize="10"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          A-TRANS.COM.UA
        </textPath>
      </text>

      {/* --- Small decorative dots (separator) --- */}
      <circle cx={half - 55} cy={half - r * 0.2 + 8} r="2" fill="var(--accent-color, #0f4c81)" opacity="0.4" />
      <circle cx={half + 55} cy={half - r * 0.2 + 8} r="2" fill="var(--accent-color, #0f4c81)" opacity="0.4" />
    </svg>
  );
}
