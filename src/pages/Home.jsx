import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowRight } from 'react-icons/fa';
import productData from '../data/products.json';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Get first 8 products as featured
    const allProducts = productData.products || [];
    setFeaturedProducts(allProducts.slice(0, 8));
    console.log('Featured Products loaded:', allProducts.slice(0, 8).length);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating || 4.5);
    const hasHalfStar = (rating || 4.5) % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline text-xs" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline text-xs" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline text-xs" />);
      }
    }
    return stars;
  };

  const categories = [
    { name: 'Electronics', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Clothing', icon: '👕', color: 'from-purple-500 to-pink-500' },
    { name: 'Shoes', icon: '👟', color: 'from-green-500 to-emerald-500' },
    { name: 'Books', icon: '📚', color: 'from-orange-500 to-red-500' },
    { name: 'Gaming', icon: '🎮', color: 'from-indigo-500 to-purple-500' },
    { name: 'Accessories', icon: '💎', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="bg-[#0a0a1a] min-h-screen">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-4">
            🔥 Limited Time Offer - Up to 50% Off
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-yellow-300">ShopEase</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-white text-indigo-600 px-8 py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Start Shopping 🛍️
              <FaArrowRight />
            </Link>
            <Link 
              to="/products" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Explore Deals 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category.name} 
              to="/products" 
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <span className="text-sm font-semibold">{category.name}</span>
              <div className="w-full h-1 bg-white/30 rounded-full mt-2"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">✨ Featured Products</h2>
            <p className="text-sm text-gray-400">Handpicked just for you</p>
          </div>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.length === 0 ? (
            <div className="col-span-4 text-center text-gray-400 py-10">
              No products found. Please check your data.
            </div>
          ) : (
            featuredProducts.map((product) => (
              <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover" 
                  />
                </Link>
                <div className="p-4">
                  <div className="text-xs text-indigo-400 font-medium bg-indigo-900/30 inline-block px-2 py-0.5 rounded-full">
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-sm text-white mt-2 line-clamp-2 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(product.rating || 4.5)}
                    <span className="text-xs text-gray-500">({product.reviews || 128})</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-yellow-400">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs py-1.5 px-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 my-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of happy customers and discover amazing products.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all"
          >
            Browse All Products →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;