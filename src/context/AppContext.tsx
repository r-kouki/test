import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider = React.memo(function AppProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>('light');
  const [currentPage, setCurrentPage] = useState('home');

  const value = React.useMemo(() => ({
    language,
    setLanguage,
    theme,
    setTheme,
    currentPage,
    setCurrentPage
  }), [language, theme, currentPage]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});

// Hook
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

// Assurez-vous que le nom du composant est défini pour un meilleur debugging
AppProvider.displayName = 'AppProvider';