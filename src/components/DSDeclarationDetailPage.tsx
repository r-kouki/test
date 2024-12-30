import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Check, Download, CreditCard, Building2, FileText, FileSpreadsheet, Calculator } from 'lucide-react';

const DSDeclarationDetailPage = () => {
  const { language, setCurrentPage } = useApp();

  const features = {
    basic: {
      title: { en: "DSDECLARATION", fr: "DSDECLARATION" },
      subtitle: { 
        en: "Single computer, no updates", 
        fr: "1 ordinateur Licence à vie sans aucune mise à jour" 
      },
      price: "300 DT",
      features: {
        en: [
          "Single computer license",
          "Basic features",
          "No updates",
          "XML export",
          "CNSS declaration module included"
        ],
        fr: [
          "Licence 1 ordinateur",
          "Fonctionnalités de base",
          "Sans mise à jour",
          "Export XML",
          "Module déclaration CNSS inclus"
        ]
      }
    },
    pro: {
      title: { en: "DSDECLARATION PRO", fr: "DSDECLARATION PRO" },
      price: "600 DT",
      subtitle: {
        en: "Single computer, 3-year updates",
        fr: "1 ordinateur, Licence à vie et mise à jour 3 ans"
      },
      features: {
        en: [
          "Single computer license",
          "3-year updates",
          "All modules included",
          "Technical support",
          "XML export"
        ],
        fr: [
          "Licence 1 ordinateur",
          "Mise à jour 3 ans",
          "Tous les modules inclus",
          "Support technique",
          "Export XML"
        ]
      }
    },
    enterprise: {
      title: { en: "DSDECLARATION Enterprise", fr: "DSDECLARATION Entreprises" },
      price: "1500 DT",
      subtitle: {
        en: "Network installation",
        fr: "Installation réseau"
      },
      features: {
        en: [
          "Network installation",
          "Multiple users",
          "All modules included",
          "Priority support",
          "XML export"
        ],
        fr: [
          "Installation réseau",
          "Multi-utilisateurs",
          "Tous les modules inclus",
          "Support prioritaire",
          "Export XML"
        ]
      }
    }
  };

  const mainFeatures = [
    {
      icon: <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Tax Returns',
        fr: 'Liasse Fiscale'
      },
      description: {
        en: 'Automatically generate tax returns in XML format for electronic filing, compliant with Article 41 (Finance Law 2017).',
        fr: 'Générez automatiquement la liasse fiscale en format XML pour la télé-déclaration, conforme à l\'Article 41 (loi des Finances 2017).'
      }
    },
    {
      icon: <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Automated Calculations',
        fr: 'Calculs Automatisés'
      },
      description: {
        en: 'Import balances, automated calculations and verification in real-time.',
        fr: 'Import des balances, calculs automatisés et vérification en temps réel.'
      }
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Multiple Declarations',
        fr: 'Déclarations Multiples'
      },
      description: {
        en: 'Generate CNSS, Employer, VAT suspension invoices and purchase orders declarations.',
        fr: 'Générez les déclarations CNSS, Employeur, factures en suspension de TVA et bons de commandes.'
      }
    }
  ];

  const detailedFeatures = {
    title: {
      en: 'Complete Declaration Solution',
      fr: 'Solution Complète de Déclaration'
    },
    description: {
      en: 'The simplest solution to declare your company\'s tax returns and generate all required declarations in XML format.',
      fr: 'La solution la plus simple pour déclarer la liasse fiscale de votre entreprise et générer toutes les déclarations requises en format XML.'
    },
    features: {
      en: [
        'Tax returns (F6001 to F6005)',
        'CNSS declarations on CD',
        'Employer declarations on magnetic media',
        'VAT suspension invoices declarations',
        'Purchase orders declarations',
        'Real-time calculations and verification',
        'Balance import from accounting software',
        'Parameter backup and restoration',
        'Simple configuration with included assistance',
        'Compliant with Tunisian tax regulations'
      ],
      fr: [
        'Liasses fiscales (F6001 à F6005)',
        'Déclarations CNSS sur CD',
        'Déclarations employeur sur supports magnétiques',
        'Déclarations des factures en suspension de TVA',
        'Déclarations des bons de commandes',
        'Calculs et vérification en temps réel',
        'Import de la balance depuis votre logiciel comptable',
        'Sauvegarde et restauration des paramètres',
        'Paramétrage simple avec assistance incluse',
        'Conforme à la réglementation fiscale tunisienne'
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
                  {language === 'en' 
                    ? 'Tax Returns & Employer Declarations' 
                    : 'Liasse Fiscale & Déclaration de l\'Employeur'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {language === 'en'
                    ? 'The simplest solution for filing your company\'s tax returns and employer declarations on magnetic media.'
                    : 'La solution la plus simple pour déclarer la liasse fiscale de votre entreprise et les déclarations employeur sur supports magnétiques.'}
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
                  src="/images/dsdeclaration.jpeg"
                  alt="DSDECLARATION Interface"
                  className="rounded-xl shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
                  <span className="font-bold">2024</span>
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
                {plan.subtitle && (
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle[language]}</p>
                )}
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
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

export default DSDeclarationDetailPage; 