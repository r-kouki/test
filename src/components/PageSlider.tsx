import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const pages = [
  { id: 'home', fr: 'Accueil', en: 'Home' },
  { id: 'products', fr: 'Produits', en: 'Products' },
  { id: 'pricing', fr: 'Tarifs', en: 'Pricing' },
  { id: 'downloads', fr: 'Téléchargements', en: 'Downloads' },
  { id: 'support', fr: 'Assistance', en: 'Support' },
  { id: 'contact', fr: 'Contact', en: 'Contact' }
];

const PageSlider = () => {
  const { language, currentPage, setCurrentPage } = useApp();

  if (currentPage.startsWith('product-')) {
    return null;
  }

  const currentIndex = pages.findIndex(p => p.id === currentPage);

  const goToNextPage = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentPage(pages[nextIndex].id);
  };

  const goToPreviousPage = () => {
    const previousIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    setCurrentPage(pages[previousIndex].id);
  };

  return (
    <div className="fixed top-20 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-40 py-2 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={goToPreviousPage}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <span className="text-lg font-semibold">
          {pages[currentIndex][language]}
        </span>
        
        <button
          onClick={goToNextPage}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PageSlider; 