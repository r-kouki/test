export interface Product {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  features: {
    en: string[];
    fr: string[];
  };
  price: string;
  imageUrl: string;
}

export type Language = 'en' | 'fr';
export type Theme = 'light' | 'dark';