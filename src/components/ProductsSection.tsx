import React from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { ArrowRight, Check } from 'lucide-react';

const ProductsSection = () => {
  const { language, setCurrentPage } = useApp();

  const handleProductClick = (productId: string) => {
    switch(productId) {
      case 'dspaye':
        setCurrentPage('dspaye');
        break;
      case 'dscompta':
        setCurrentPage('dscompta');
        break;
      case 'dsdeclaration':
        setCurrentPage('dsdeclaration');
        break;
      default:
        setCurrentPage('products');
    }
  };

  const getProductImage = (productId: string) => {
    switch(productId) {
      case 'dspaye':
        return '/images/dspaie.webp';
      case 'dscompta':
        return '/images/dscompta.webp';
      case 'dsdeclaration':
        return '/images/dsdeclaration.webp';
      default:
        return products.find(p => p.id === productId)?.imageUrl || '';
    }
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Our Products' : 'Nos Produits'}
            </h2>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Discover our range of professional software solutions designed for Tunisian businesses. Our products are the result of over 25 years of experience and continuous market observation.'
                : 'Découvrez notre gamme de solutions logicielles professionnelles conçues pour les entreprises tunisiennes. Nos produits sont le fruit de plus de 25 ans d\'expérience et d\'observation continue du marché.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={getProductImage(product.id)}
                    alt={product.title[language]}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = product.imageUrl; // Fallback à l'image par défaut
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{product.title[language]}</h3>
                  <p className="text-gray-600 mb-4">{product.description[language]}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features[language].slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => handleProductClick(product.id)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      {language === 'en' ? 'Learn More' : 'En savoir plus'} 
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Why Choose Us?' : 'Pourquoi Nous Choisir ?'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'en' ? 'Experience' : 'Expérience'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? '25+ years of expertise in software development'
                    : '25+ ans d\'expertise en développement logiciel'}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'en' ? 'Support' : 'Support'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Professional support and regular updates'
                    : 'Support professionnel et mises à jour régulières'}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'en' ? 'Innovation' : 'Innovation'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Continuous improvement and new features'
                    : 'Amélioration continue et nouvelles fonctionnalités'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;