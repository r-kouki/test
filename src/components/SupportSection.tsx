import React from 'react';
import { HeadphonesIcon, Clock, Mail, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';

const SupportSection = () => {
  const { language } = useApp();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {language === 'en' ? 'Support & Maintenance' : 'Assistance & Maintenance'}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Professional support and assistance for all your needs'
            : 'Support professionnel et assistance pour tous vos besoins'}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <HeadphonesIcon className="text-blue-600" />
              {language === 'en' ? 'Phone Support' : 'Assistance Téléphonique'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en'
                ? 'Available Monday to Thursday'
                : 'Disponible du lundi au jeudi'}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="text-blue-600" />
              9h00 - 12h00 | 14h00 - 17h00
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="text-blue-600" />
              {language === 'en' ? 'Email Support' : 'Assistance par Email'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Get answers within 24 hours'
                : 'Réponses sous 24 heures'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" />
              {language === 'en' ? 'Training Sessions' : 'Sessions de Formation'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'One-hour personalized training sessions'
                : 'Formations personnalisées d\'une heure'}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {language === 'en'
                ? 'Free for VIP clients'
                : 'Gratuit pour les clients VIP'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Support Rates' : 'Tarifs Assistance'}
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                {language === 'en' ? '1 Day: ' : '1 Journée: '}
                <span className="font-semibold">540dt HT</span>
              </li>
              <li>
                {language === 'en' ? '1 Hour: ' : '1 Heure: '}
                <span className="font-semibold">140dt HT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            {language === 'en' ? 'Schedule an Appointment' : 'Prendre un Rendez-vous'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 