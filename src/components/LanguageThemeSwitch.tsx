import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { useApp } from '../context/AppContext';

const LanguageThemeSwitch = () => {
  const { language, setLanguage, theme, setTheme } = useApp();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-full shadow-lg">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
        className="bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}

export default LanguageThemeSwitch;