import React from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { ArrowLeft, Download, Check } from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const { language, setCurrentPage } = useApp();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="py-16 text-center">
        {language === 'en' ? 'Product not found' : 'Produit non trouvé'}
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <button
          onClick={() => setCurrentPage('products')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          {language === 'en' ? 'Back to Products' : 'Retour aux Produits'}
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.imageUrl}
              alt={product.title[language]}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title[language]}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description[language]}</p>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {language === 'en' ? 'Key Features' : 'Fonctionnalités Principales'}
              </h3>
              <ul className="space-y-3">
                {product.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="text-gray-600">
                  {language === 'en' ? 'Price:' : 'Prix:'}
                </span>
                <span className="text-3xl font-bold ml-2">{product.price}</span>
              </div>

              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                <Download size={20} />
                {language === 'en' ? 'Download Trial' : 'Télécharger l\'essai'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage; 