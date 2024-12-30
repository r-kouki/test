import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'dspaye',
    title: {
      en: "DSPAYE - Payroll Management Software",
      fr: "DSPAYE - Logiciel de Paie et RH"
    },
    description: {
      en: "Complete payroll and HR management solution with automatic updates for all Tunisian collective agreements.",
      fr: "Solution complète de gestion de la paie et RH avec mise à jour automatique de toutes les conventions collectives tunisiennes."
    },
    features: {
      en: [
        "Automatic payroll processing",
        "HR management",
        "Social security declarations",
        "Leave management",
        "Automatic regulatory updates"
      ],
      fr: [
        "Traitement automatique de la paie",
        "Gestion des ressources humaines",
        "Déclarations CNSS",
        "Gestion des congés",
        "Mises à jour réglementaires automatiques"
      ]
    },
    price: "2600 DT",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
  },
  {
    id: 'dscompta',
    title: {
      en: "DSCOMPTA - Accounting Software",
      fr: "DSCOMPTA - Logiciel de Comptabilité"
    },
    description: {
      en: "Multi-currency accounting solution with automated entries and tax declarations.",
      fr: "Solution de comptabilité multi-devises avec écritures automatisées et déclarations fiscales."
    },
    features: {
      en: [
        "Multi-currency management",
        "Automated accounting entries",
        "Tax declarations",
        "Financial reporting",
        "Invoice management"
      ],
      fr: [
        "Gestion multi-devises",
        "Écritures comptables automatisées",
        "Déclarations fiscales",
        "Rapports financiers",
        "Gestion des factures"
      ]
    },
    price: "2600 DT",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6d2a3b559946?auto=format&fit=crop&q=80"
  },
  {
    id: 'dsdeclaration',
    title: {
      en: "DSDECLARATION - Tax Declaration Software",
      fr: "DSDECLARATION - Logiciel de Liasse Fiscale"
    },
    description: {
      en: "Complete solution for tax declarations and employer statements with XML export.",
      fr: "Solution complète pour les déclarations fiscales et déclarations employeur avec export XML."
    },
    features: {
      en: [
        "Tax declarations in XML format",
        "Employer statements",
        "VAT declarations",
        "CNSS declarations",
        "Automated calculations"
      ],
      fr: [
        "Déclarations fiscales en format XML",
        "Déclarations employeur",
        "Déclarations TVA",
        "Déclarations CNSS",
        "Calculs automatisés"
      ]
    },
    price: "300 DT",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80"
  }
];