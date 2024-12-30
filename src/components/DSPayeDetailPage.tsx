import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Check, Download, CreditCard, Building2, Users } from 'lucide-react';

const DSPayeDetailPage = () => {
  const { language, setCurrentPage } = useApp();

  const features = {
    basic: {
      title: { en: "DSPAYE Basic", fr: "DSPAYE Basic" },
      price: "Gratuite",
      limits: { en: "2 Files, 1 Employee per file", fr: "2 Dossiers, 1 Employé par dossier" },
      features: {
        en: ["Basic features", "No assistance", "Manual updates"],
        fr: ["Fonctionnalités de base", "Sans assistance", "Mises à jour manuelles"]
      }
    },
    pro: {
      title: { en: "DSPAYE Pro", fr: "DSPAYE Pro" },
      price: "2600 DT",
      monthly: "260 DT/mois",
      features: {
        en: [
          "Unlimited files and employees",
          "1 year assistance",
          "Automatic updates",
          "All collective agreements",
          "CNSS declarations",
          "Bank transfers"
        ],
        fr: [
          "Dossiers et employés illimités",
          "Assistance 1 année",
          "Mises à jour automatiques",
          "Toutes les conventions collectives",
          "Déclarations CNSS",
          "Virements bancaires"
        ]
      }
    },
    enterprise: {
      title: { en: "DSPAYE Enterprise", fr: "DSPAYE Entreprises" },
      price: "7200 DT",
      monthly: "720 DT/mois",
      features: {
        en: [
          "Network installation",
          "Multi-user access",
          "Premium support",
          "Custom features",
          "Priority assistance",
          "On-site training"
        ],
        fr: [
          "Installation réseau",
          "Accès multi-utilisateurs",
          "Support premium",
          "Fonctionnalités personnalisées",
          "Assistance prioritaire",
          "Formation sur site"
        ]
      }
    }
  };

  const mainFeatures = [
    {
      icon: <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'HR & Payroll Management',
        fr: 'Gestion RH et Paie'
      },
      description: {
        en: 'Complete management of employees, payslips, leaves, advances, overtime, and salary grids according to Tunisian collective agreements.',
        fr: 'Gestion complète des employés, fiches de paie, congés, avances, heures supplémentaires et grilles salariales selon les conventions collectives tunisiennes.'
      }
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Automatic Updates',
        fr: 'Mises à jour Automatiques'
      },
      description: {
        en: 'All collective agreements installed, configured and automatically updated - No knowledge required, install and play.',
        fr: 'Toutes les conventions collectives installées, paramétrées et mises à jour automatiquement - Aucune connaissance requise, installation et utilisation immédiates.'
      }
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Legal Compliance',
        fr: 'Conformité Légale'
      },
      description: {
        en: 'Compliant with LF:2025 - All declarations (CNSS, Employer) and bank transfers in full compliance.',
        fr: 'Conforme LF:2025 - Toutes les déclarations (CNSS, Employeur) et virements bancaires en toute conformité.'
      }
    }
  ];

  const detailedFeatures = {
    title: {
      en: 'Complete Ready-to-Use Solution',
      fr: 'Solution Complète Prête à l\'Emploi'
    },
    description: {
      en: 'DSPAYE is a complete ready-to-use product that offers standard modules according to current standards, legislation and updated Tunisian collective agreements.',
      fr: 'DSPAYE est un produit complet prêt à l\'emploi, qui propose des modules standards, selon les normes et législations en vigueur et des conventions collectives tunisiennes mises à jour.'
    },
    features: {
      en: [
        'Easy, Reliable, Simple and Fast',
        'Automatic updates of salary grids and allowances',
        'Complete HR management (contracts, interviews, training, career)',
        'Management of advances, loans, and leave',
        'Bank transfers and CNSS declarations',
        'No prior knowledge required - Install and play',
        'All collective agreements included and updated',
        'Adapted to your needs with assured support'
      ],
      fr: [
        'Facile, Fiable, Simple et Rapide',
        'Mise à jour automatique des grilles de salaires et indemnités',
        'Gestion RH complète (contrats, entretiens, formations, carrière)',
        'Gestion des avances, prêts et congés',
        'Virements bancaires et déclarations CNSS',
        'Aucune connaissance requise - Installation et utilisation immédiates',
        'Toutes les conventions collectives incluses et mises à jour',
        'Adapté à vos besoins avec accompagnement assuré'
      ]
    }
  };

  return (
    <div className="py-16">
      {/* En-tête avec image */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 mb-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={20} />
            {language === 'en' ? 'Back to Products' : 'Retour aux Produits'}
          </button>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  {language === 'en' ? 'Payroll Management Software' : 'Logiciel de Gestion de la Paie'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {language === 'en' 
                    ? 'Easy, Reliable, Simple and Fast - Integrates all Tunisian collective agreements with automatic updates'
                    : 'Facile, Fiable, Simple et Rapide - Intègre toutes les conventions collectives tunisiennes avec mise à jour automatique'}
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    {language === 'en' ? 'Download Trial' : 'Télécharger l\'essai'}
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                    {language === 'en' ? 'Watch Demo' : 'Voir la démo'}
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/dspaie.webp`}
                  alt="DSPAYE Interface"
                  className="rounded-xl shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
                  <span className="font-bold">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section des caractéristiques principales */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Key Features' : 'Caractéristiques Principales'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-600">
                  {feature.description[language]}
                </p>
              </div>
            ))}
          </div>

          {/* Section détaillée */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {detailedFeatures.title[language]}
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              {detailedFeatures.description[language]}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {detailedFeatures.features[language].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans tarifaires */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Choose Your Plan' : 'Choisissez Votre Forfait'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(features).map(([key, plan]) => (
              <div 
                key={key}
                className={`bg-white rounded-xl shadow-lg p-8 ${
                  key === 'pro' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title[language]}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.monthly && (
                    <span className="text-gray-500 block mt-2">
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
                <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  {language === 'en' ? 'Get Started' : 'Commander'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes de paiement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'en' ? 'Payment Methods' : 'Moyens de Paiement'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Bank Transfer' : 'Virement Bancaire'}
                </h3>
                <p className="text-gray-600">RIB: XX XXX XXXXX XXXXXXX XX</p>
              </div>
              <div>
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'On-site Payment' : 'Paiement sur Place'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'Visit our office in Sousse'
                    : 'Visitez notre bureau à Sousse'}
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              {language === 'en'
                ? 'All prices are subject to 19% VAT'
                : 'Tous les prix sont soumis à une TVA de 19%'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSPayeDetailPage; 