import React, { useState } from 'react';
import { Package2, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  onContactClick: () => void;
  onHomeClick: () => void;
}

const menuItems = [
  { id: 'home', label: { en: 'Home', fr: 'Accueil' } },
  { id: 'products', label: { en: 'Products', fr: 'Produits' } },
  { id: 'pricing', label: { en: 'Pricing', fr: 'Tarifs' } },
  { id: 'downloads', label: { en: 'Downloads', fr: 'Téléchargements' } },
  { id: 'support', label: { en: 'Support', fr: 'Assistance' } }
];

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, currentPage, setCurrentPage } = useApp();

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={onHomeClick}
            className="flex items-center gap-2 text-blue-600"
          >
            <Package2 className="h-8 w-8" />
            <span className="text-xl font-bold">Kouki Softwares</span>
          </button>

          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-gray-600 hover:text-blue-600 transition ${
                  currentPage === item.id ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.label[language]}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {language === 'en' ? 'Contact Us' : 'Nous Contacter'}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Menu burger pour mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
              >
                {item.label[language]}
              </button>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {language === 'en' ? 'Contact Us' : 'Nous Contacter'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;