import React from 'react';
import { Download } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface DownloadItem {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  version: string;
  type: 'free' | 'pro' | 'enterprise';
}

const downloads: DownloadItem[] = [
  {
    id: 'dspaye-free',
    name: {
      en: "DSPAYE - Free Version",
      fr: "DSPAYE - Version Gratuite"
    },
    version: "2025",
    type: 'free'
  },
  {
    id: 'dscompta-free',
    name: {
      en: "DSCOMPTA - Free Version",
      fr: "DSCOMPTA - Version Gratuite"
    },
    version: "2025",
    type: 'free'
  },
  {
    id: 'dsdeclaration-free',
    name: {
      en: "Tax Declaration Software",
      fr: "Logiciel Déclaration Employeur"
    },
    version: "2024",
    type: 'free'
  }
];

const DownloadsSection = () => {
  const { language } = useApp();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'en' ? 'Download Our Software' : 'Télécharger Nos Logiciels'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloads.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{item.name[language]}</h3>
              <p className="text-gray-600 mb-4">
                {language === 'en' ? 'Version' : 'Version'} {item.version}
              </p>
              <button
                onClick={() => window.location.href = '#'} // Add actual download link
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Download size={20} />
                {language === 'en' ? 'Download' : 'Télécharger'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection; 