import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  const { language } = useApp();

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8 hover:underline"
        >
          <ArrowLeft size={20} />
          {language === 'en' ? 'Back to Products' : 'Retour aux Produits'}
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title[language]}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title[language]}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {product.description[language]}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Features' : 'Fonctionnalités'}
              </h2>
              <ul className="space-y-3">
                {product.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {product.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  {language === 'en' ? '/month' : '/mois'}
                </span>
              </div>
              
              <button
                onClick={() => window.location.href = 'mailto:contact@datasoft.com'}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition"
              >
                {language === 'en' ? 'Contact Sales' : 'Contacter Commercial'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;