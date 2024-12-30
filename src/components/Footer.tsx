import React from 'react';
import { Package2, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Footer = () => {
  const { language } = useApp();

  const footerSections = {
    products: {
      title: {
        en: 'Products',
        fr: 'Produits'
      },
      items: [
        {
          en: 'DSPAYE - Payroll Software',
          fr: 'DSPAYE - Logiciel de Paie'
        },
        {
          en: 'DSCOMPTA - Accounting',
          fr: 'DSCOMPTA - Comptabilité'
        },
        {
          en: 'Tax Declaration',
          fr: 'Liasse Fiscale'
        }
      ]
    },
    support: {
      title: {
        en: 'Support',
        fr: 'Assistance'
      },
      items: [
        {
          en: 'Technical Support',
          fr: 'Support Technique'
        },
        {
          en: 'Training',
          fr: 'Formation'
        },
        {
          en: 'Updates',
          fr: 'Mises à jour'
        }
      ]
    },
    contact: {
      title: {
        en: 'Contact',
        fr: 'Contact'
      },
      items: [
        {
          icon: <Phone className="w-4 h-4" />,
          text: '+216 98 40 01 88'
        },
        {
          icon: <Mail className="w-4 h-4" />,
          text: 'koukimontassar@gmail.com'
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: 'Rue Molière 4000, Sousse'
        }
      ]
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Kouki Softwares</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {language === 'en'
                ? 'Professional software solutions for businesses in Tunisia'
                : 'Solutions logicielles professionnelles pour les entreprises en Tunisie'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerSections.products.title[language]}
            </h3>
            <ul className="space-y-2">
              {footerSections.products.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {item[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerSections.support.title[language]}
            </h3>
            <ul className="space-y-2">
              {footerSections.support.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {item[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {footerSections.contact.title[language]}
            </h3>
            <ul className="space-y-2">
              {footerSections.contact.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kouki Softwares. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;