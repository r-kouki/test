import React from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  product: {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition"
            >
              <X size={24} />
            </button>
          </div>
          
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Real-time data synchronization</li>
                <li>Cloud-based solution</li>
                <li>24/7 technical support</li>
                <li>Regular updates and improvements</li>
                <li>Custom integration options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Pricing</h3>
              <p className="text-3xl font-bold text-blue-600">{product.price}</p>
              <p className="text-gray-600 mt-2">Includes 1 year of support and updates</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="mailto:contact@datasoft.com?subject=Product%20Inquiry"
                className="flex-1 px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
              >
                Contact Sales
              </a>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://calendly.com', '_blank');
                }}
                className="flex-1 px-6 py-3 border border-gray-300 text-center rounded-lg hover:bg-gray-50 transition"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;