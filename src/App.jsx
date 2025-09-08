import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AromasSection from './components/AromasSection';
import ProductGrid from './components/ProductGrid';
import FeaturedProduct from './components/FeaturedProduct';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />
      <Hero />
      <AromasSection />
      <ProductGrid />
      <FeaturedProduct />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;