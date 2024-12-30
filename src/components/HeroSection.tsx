import { useApp } from '../context/AppContext';

const HeroSection = () => {
  const { language } = useApp();

  // Helper function for translations
  const t = (enText: string, frText: string) => (language === 'en' ? enText : frText);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-blue-600 mb-6">{t('Who We Are', 'Qui Sommes-Nous')}</h1>
              <p className="text-xl text-gray-600 mb-6">
                {t(
                  'With over 25 years of experience, KOUKI SOFTWARES has established itself as a leader in business management software solutions in Tunisia. Our expertise in payroll, accounting, and tax management makes us your ideal partner for digital transformation.',
                  'Avec plus de 25 ans d\'expérience, KOUKI SOFTWARES s\'est imposé comme leader des solutions logicielles de gestion d\'entreprise en Tunisie. Notre expertise en paie, comptabilité et gestion fiscale fait de nous votre partenaire idéal pour la transformation numérique.'
                )}
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  {t('Our Products', 'Nos Produits')}
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  {t('Contact Us', 'Contactez-Nous')}
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-banner.webp`}
                alt={t('Interface of KOUKI SOFTWARES', 'Interface de KOUKI SOFTWARES')}
                className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[16/9]"
                loading="eager"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-blue-600">25+</p>
                <p className="text-sm text-gray-600">{t('Years of Experience', 'Ans d\'Expérience')}</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">{t('Updates & Support', 'Mises à jour & Support')}</h3>
            <p className="text-gray-600">
              {t(
                'All KOUKI SOFTWARES products are regularly updated, benefiting from free updates. Our professional support team ensures your success with continuous assistance.',
                'Tous les produits KOUKI SOFTWARES sont régulièrement mis à jour, bénéficiant des mises à jour gratuites. Notre équipe de support professionnelle assure votre réussite avec une assistance continue.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
