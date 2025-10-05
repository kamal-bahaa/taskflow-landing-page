import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 font-sans antialiased">
      <Header />
      <div className="pt-[200px] md:pt-[300px]">
        <FeaturesSection />
        <ReviewsSection />
        <PricingSection />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;