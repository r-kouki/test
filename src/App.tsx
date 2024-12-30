import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useApp } from './context/AppContext';
import ProductsSection from './components/ProductsSection';
import ProductDetailPage from './components/ProductDetailPage';
import PricingSection from './components/PricingSection';
import DownloadsSection from './components/DownloadsSection';
import SupportSection from './components/SupportSection';
import ContactPage from './components/ContactPage';
import HeroSection from './components/HeroSection';
import DSPayeDetailPage from './components/DSPayeDetailPage';
import DSComptaDetailPage from './components/DSComptaDetailPage';
import DSDeclarationDetailPage from './components/DSDeclarationDetailPage';

const App = () => {
  const { currentPage, setCurrentPage } = useApp();

  const renderCurrentPage = () => {
    if (currentPage.startsWith('product-')) {
      const productId = currentPage.replace('product-', '');
      return <ProductDetailPage productId={productId} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <ProductsSection />
          </>
        );
      case 'products':
        return <ProductsSection />;
      case 'pricing':
        return <PricingSection />;
      case 'downloads':
        return <DownloadsSection />;
      case 'support':
        return <SupportSection />;
      case 'contact':
        return <ContactPage />;
      case 'dspaye':
        return <DSPayeDetailPage />;
      case 'dscompta':
        return <DSComptaDetailPage />;
      case 'dsdeclaration':
        return <DSDeclarationDetailPage />;
      default:
        return <ProductsSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onContactClick={() => setCurrentPage('contact')}
        onHomeClick={() => setCurrentPage('home')}
      />
      <main className="flex-grow pt-20">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;