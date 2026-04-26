import React from 'react';
import { Palette } from 'lucide-react';
import './ThemeSwitcher.css';

export default function ThemeSwitcher({ currentTheme, onChangeTheme }) {
  const themes = [
    { id: 'heavy', name: 'Heavy Duty (Dark Navy)' },
    { id: 'trusty', name: 'Trusty Route (Light Blue)' },
  ];

  return (
    <div className="theme-switcher glass">
      <div className="switcher-header">
        <Palette size={18} />
        <span>Дизайн Інтерфейсу</span>
      </div>
      <div className="switcher-buttons">
        {themes.map((t) => (
          <button
            key={t.id}
            className={`switch-btn ${currentTheme === t.id ? 'active' : ''}`}
            onClick={() => onChangeTheme(t.id)}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}
