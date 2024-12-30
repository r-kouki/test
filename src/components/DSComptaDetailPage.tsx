import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Check, Download, CreditCard, Building2, FileSpreadsheet, Receipt, Coins } from 'lucide-react';

const DSComptaDetailPage = () => {
  const { language, setCurrentPage } = useApp();

  const features = {
    basic: {
      title: { en: "DSCOMPTA", fr: "DSCOMPTA" },
      subtitle: { 
        en: "No assistance", 
        fr: "Aucune assistance" 
      },
      price: "Gratuite",
      limits: { 
        en: "2 Files, 1000 entries per file", 
        fr: "2 Dossiers, 1000 écritures par dossier" 
      },
      features: {
        en: [
          "2 Files maximum",
          "1000 entries per file",
          "Basic features",
          "No assistance",
          "3-year lifetime license"
        ],
        fr: [
          "2 Dossiers maximum",
          "1000 écritures par dossier",
          "Fonctionnalités de base",
          "Sans assistance",
          "Licence à vie avec mise à jour automatique 3ans"
        ]
      }
    },
    pro: {
      title: { en: "DSCOMPTA PRO", fr: "DSCOMPTA PRO" },
      price: "2600 DT",
      monthly: "260 DT/mois",
      subtitle: {
        en: "1 computer, unlimited files and entries, 3-year updates, 1-year assistance",
        fr: "1 ordinateur, nb de Dossiers, et écritures illimités, Licence à vie et mise à jour 3 ans, Assistance 1 année"
      },
      features: {
        en: [
          "Unlimited files and entries",
          "1 computer license",
          "3-year updates",
          "1-year assistance",
          "All features included"
        ],
        fr: [
          "Dossiers et écritures illimités",
          "Licence 1 ordinateur",
          "Mise à jour 3 ans",
          "Assistance 1 année",
          "Toutes les fonctionnalités"
        ]
      }
    },
    enterprise: {
      title: { en: "DSCOMPTA Enterprise", fr: "DSCOMPTA Entreprises" },
      price: "7200 DT",
      monthly: "720 DT/mois",
      subtitle: {
        en: "Network installation, unlimited files and entries, 1-year assistance",
        fr: "Installation réseau, nombre de Dossiers et écritures illimités réseaux, Assistance 1 année"
      },
      features: {
        en: [
          "Network installation",
          "Unlimited network files",
          "Unlimited network entries",
          "1-year assistance",
          "All features included"
        ],
        fr: [
          "Installation réseau",
          "Dossiers réseaux illimités",
          "Écritures réseaux illimitées",
          "Assistance 1 année",
          "Toutes les fonctionnalités"
        ]
      }
    }
  };

  const mainFeatures = [
    {
      icon: <Coins className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Multi-Currency Management',
        fr: 'Gestion Multi-Devises'
      },
      description: {
        en: 'Manage accounts in multiple currencies with automatic exchange gain/loss entries calculation.',
        fr: 'Gérez vos comptes en plusieurs devises avec calcul automatique des écritures de gain ou perte de change.'
      }
    },
    {
      icon: <Receipt className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Invoicing & Digitization',
        fr: 'Facturation & Numérisation'
      },
      description: {
        en: 'Create customized invoices and quotes, with automatic accounting integration and document scanning.',
        fr: 'Créez des factures et devis personnalisés, avec intégration comptable automatique et numérisation des documents.'
      }
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: {
        en: 'Tax Management',
        fr: 'Gestion Fiscale'
      },
      description: {
        en: 'Complete accounting solution with Tunisian chart of accounts and 2018 tax returns pre-installed.',
        fr: 'Solution comptable complète avec plan comptable tunisien et liasses fiscales 2018 pré-installées.'
      }
    }
  ];

  const detailedFeatures = {
    title: {
      en: 'Complete Accounting Solution',
      fr: 'Solution Comptable Complète'
    },
    description: {
      en: 'DSCOMPTA is a general, analytical, and budgetary accounting software. A complete ready-to-use product, easy to use with Tunisian chart of accounts and pre-installed tax returns.',
      fr: 'DSCOMPTA est un logiciel de comptabilité générale, analytique et budgétaire. Un produit complet prêt à l\'emploi, simple d\'usage avec un plan comptable tunisien et liasses fiscales pré-installées.'
    },
    features: {
      en: [
        'Multi-currency account management',
        'Automatic exchange gain/loss calculation',
        'Customizable invoice and quote templates',
        'Document scanning and archiving',
        'Guided entries pre-positioned at debit or credit',
        'Customizable entry templates (rent, purchases, payroll, sales)',
        'One-click printing of Balance, General Ledger, and Journals',
        'Tax returns in EXCEL or XML format',
        'Automated accounting entry of invoices',
        'Simple and intuitive quote and invoice creation'
      ],
      fr: [
        'Gestion des comptes en plusieurs devises',
        'Calcul automatique des gains/pertes de change',
        'Modèles de factures et devis personnalisables',
        'Numérisation et archivage des documents',
        'Saisies guidées pré-positionnées au débit ou crédit',
        'Modèles de saisie personnalisables (loyer, achats, paie, ventes)',
        'Impression en un clic de la Balance, Grand-livre et Journaux',
        'Liasses fiscales en format EXCEL ou XML',
        'Automatisation de l\'imputation comptable des factures',
        'Création simple et intuitive des devis et factures'
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
                  {language === 'en' ? 'Multi-Currency Accounting Software' : 'Logiciel de Comptabilité Multi-Devises'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {language === 'en' 
                    ? 'Maintain compliant accounting with intuitive and simplified features that will help you optimize your tasks while saving significant time.'
                    : 'Tenez une comptabilité conforme avec des fonctionnalités intuitives et simplifiées qui vous permettront d\'optimiser vos tâches tout en vous apportant un gain de temps non négligeable.'}
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
                  src={`${import.meta.env.BASE_URL}images/dscompta.webp`}
                  alt="DSCOMPTA Interface"
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
                {plan.subtitle && (
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle[language]}</p>
                )}
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

export default DSComptaDetailPage; 