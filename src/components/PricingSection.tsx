import React from 'react';
import { Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface PricingPlan {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  price: string;
  monthly?: string;
  features: {
    en: string[];
    fr: string[];
  };
  type: 'free' | 'pro' | 'enterprise';
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'dspaye-basic',
    name: {
      en: "DSPAYE Basic",
      fr: "DSPAYE Basic"
    },
    price: "Gratuite",
    features: {
      en: [
        "2 Files",
        "1 Employee per file",
        "Basic features",
        "No assistance"
      ],
      fr: [
        "2 Dossiers",
        "1 Employé par dossier",
        "Fonctionnalités de base",
        "Sans assistance"
      ]
    },
    type: 'free'
  },
  {
    id: 'dspaye-pro',
    name: {
      en: "DSPAYE Pro",
      fr: "DSPAYE Pro"
    },
    price: "2600 DT",
    monthly: "260 DT/mois",
    features: {
      en: [
        "Unlimited files",
        "Unlimited employees",
        "All features",
        "1 year assistance",
        "Automatic updates"
      ],
      fr: [
        "Dossiers illimités",
        "Employés illimités",
        "Toutes les fonctionnalités",
        "Assistance 1 année",
        "Mises à jour automatiques"
      ]
    },
    type: 'pro'
  },
  {
    id: 'dspaye-enterprise',
    name: {
      en: "DSPAYE Enterprise",
      fr: "DSPAYE Entreprises"
    },
    price: "7200 DT",
    monthly: "720 DT/mois",
    features: {
      en: [
        "Multi-user access",
        "Network installation",
        "Premium support",
        "Custom features",
        "Priority assistance"
      ],
      fr: [
        "Accès multi-utilisateurs",
        "Installation réseau",
        "Support premium",
        "Fonctionnalités personnalisées",
        "Assistance prioritaire"
      ]
    },
    type: 'enterprise'
  }
];

const PricingSection = () => {
  const { language } = useApp();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {language === 'en' ? 'Our Pricing Plans' : 'Nos Forfaits'}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Choose the perfect plan for your business needs'
            : 'Choisissez le forfait parfait pour vos besoins professionnels'}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                plan.type === 'pro' ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.type === 'pro' && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {language === 'en' ? 'Most Popular' : 'Plus Populaire'}
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name[language]}</h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.monthly && (
                  <span className="text-gray-500 ml-2">
                    {language === 'en' ? 'or' : 'ou'} {plan.monthly}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 ${
                  plan.type === 'free'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {language === 'en' ? 'Get Started' : 'Commencer'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          {language === 'en' 
            ? 'All prices are subject to 19% VAT'
            : 'Tous les prix sont soumis à une TVA de 19%'}
        </p>
      </div>
    </section>
  );
};

export default PricingSection; 