import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/home/HeroSlider';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoBanner from '../components/home/PromoBanner';
import TrustBadges from '../components/home/TrustBadges';
import BrandStrip from '../components/home/BrandStrip';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <PromoBanner />
      <Categories />
      <FeaturedProducts />
      <BrandStrip />
      <TrustBadges />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;