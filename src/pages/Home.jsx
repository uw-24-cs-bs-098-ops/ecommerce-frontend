import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  FaStar, FaStarHalfAlt, FaRegStar, 
  FaTruck, FaShieldAlt, FaHeadset, 
  FaArrowRight, FaClock, FaFire,
  FaLaptop, FaTshirt, FaShoePrints,
  FaBook, FaGamepad, FaGem, FaTag
} from 'react-icons/fa';
import productData from '../data/products.json';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [dealsProducts, setDealsProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const allProducts = productData.products || [];
    setFeaturedProducts(allProducts.slice(0, 8));
    setDealsProducts(allProducts.slice(8, 16));
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
    { name: 'Electronics', icon: <FaLaptop className="text-3xl" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Clothing', icon: <FaTshirt className="text-3xl" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Shoes', icon: <FaShoePrints className="text-3xl" />, color: 'from-green-500 to-emerald-500' },
    { name: 'Books', icon: <FaBook className="text-3xl" />, color: 'from-orange-500 to-red-500' },
    { name: 'Gaming', icon: <FaGamepad className="text-3xl" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Accessories', icon: <FaGem className="text-3xl" />, color: 'from-pink-500 to-rose-500' },
  ];

  const getRandomDiscount = () => {
    const discounts = [20, 25, 30, 35, 40, 45, 47, 50];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  return (
    <div className="bg-[#0a0a1a]">
      
      {/* ===== HERO SECTION - Responsive ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE - Welcome Content */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse-slow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                🔥 Limited Time Offer - Up to 50% Off
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                Discover Amazing <br />
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Products
                </span>
                <br />at Best Prices
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Shop the latest trends with exclusive deals and offers. 
                Quality products delivered to your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  to="/products" 
                  className="group bg-white text-indigo-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  Start Shopping 🛍️
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/products" 
                  className="bg-yellow-400 text-gray-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-yellow-500/30 text-sm sm:text-base"
                >
                  Explore Deals 🔥
                  <FaTag className="group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              <div className="flex gap-6 sm:gap-8 mt-6 sm:mt-10 justify-center lg:justify-start">
                <div>
                  <div className="text-xl sm:text-2xl font-bold">50K+</div>
                  <div className="text-xs sm:text-sm text-white/70">Happy Customers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold">4.9★</div>
                  <div className="text-xs sm:text-sm text-white/70">Average Rating</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold">24/7</div>
                  <div className="text-xs sm:text-sm text-white/70">Customer Support</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Offer Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎉</div>
                <div className="text-lg sm:text-2xl font-bold">50% Off</div>
                <div className="text-xs sm:text-sm text-white/70">On Electronics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">👕</div>
                <div className="text-lg sm:text-2xl font-bold">Buy 1 Get 1</div>
                <div className="text-xs sm:text-sm text-white/70">On Clothing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">👟</div>
                <div className="text-lg sm:text-2xl font-bold">30% Off</div>
                <div className="text-xs sm:text-sm text-white/70">On Shoes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📦</div>
                <div className="text-lg sm:text-2xl font-bold">Free Shipping</div>
                <div className="text-xs sm:text-sm text-white/70">On Orders $50+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS BAR - Responsive ===== */}
      <section className="bg-[#111827] border-b border-[#1f2937] py-4 sm:py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-indigo-800/50 transition">
                <FaTruck className="text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Free Shipping</h4>
                <p className="text-[10px] sm:text-xs text-gray-400">On orders $50+</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-900/30 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-green-800/50 transition">
                <FaShieldAlt className="text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Secure Payment</h4>
                <p className="text-[10px] sm:text-xs text-gray-400">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-purple-800/50 transition">
                <FaHeadset className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">24/7 Support</h4>
                <p className="text-[10px] sm:text-xs text-gray-400">Live chat & email</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-900/30 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-orange-800/50 transition">
                <FaClock className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white">Easy Returns</h4>
                <p className="text-[10px] sm:text-xs text-gray-400">30 days return</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES - Responsive ===== */}
      <section className="container-custom -mt-4 sm:-mt-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category.name} 
              to="/products" 
              className={`group bg-gradient-to-br ${category.color} rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold">{category.name}</span>
              <div className="w-full h-1 bg-white/30 rounded-full mt-1 sm:mt-2 group-hover:bg-white transition-all"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== DEALS OF THE DAY - Responsive ===== */}
      <section className="container-custom py-8 sm:py-12">
        <div className="flex flex-wrap justify-between items-center mb-6 sm:mb-8 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <FaFire className="text-red-500" /> Deals of the Day
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">Limited time offers - Up to 50% off</p>
          </div>
          <Link to="/products" className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            See All <FaArrowRight className="text-xs" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {dealsProducts.slice(0, 8).map((product) => {
            const discount = getRandomDiscount();
            const discountedPrice = product.price * (1 - discount / 100);
            return (
              <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 relative group">
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full z-10 animate-pulse-slow">
                  -{discount}% OFF
                </div>
                <div className="relative overflow-hidden bg-[#0f1729] h-40 sm:h-48">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                  </Link>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-yellow-400 font-medium bg-yellow-900/30 inline-block px-1.5 sm:px-2 py-0.5 rounded-full">
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-xs sm:text-sm text-white mt-1 sm:mt-2 line-clamp-2 hover:text-yellow-400 transition h-8 sm:h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(product.rating || 4.5)}
                    <span className="text-[10px] sm:text-xs text-gray-500">({product.reviews || 128})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 sm:mt-2">
                    <span className="text-base sm:text-lg font-bold text-yellow-400">${discountedPrice.toFixed(2)}</span>
                    <span className="text-[10px] sm:text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Grab Deal 🛒
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS - Responsive ===== */}
      <section className="container-custom py-6 sm:py-8">
        <div className="flex flex-wrap justify-between items-center mb-6 sm:mb-8 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              ✨ Featured Products
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">Handpicked just for you</p>
          </div>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View All <FaArrowRight className="text-xs" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden bg-[#0f1729] h-40 sm:h-48">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                </Link>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  ★ Featured
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-indigo-400 font-medium bg-indigo-900/30 inline-block px-1.5 sm:px-2 py-0.5 rounded-full">
                  {product.category}
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-xs sm:text-sm text-white mt-1 sm:mt-2 line-clamp-2 hover:text-indigo-400 transition h-8 sm:h-10">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(product.rating || 4.5)}
                  <span className="text-[10px] sm:text-xs text-gray-500">({product.reviews || 128})</span>
                </div>
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                  <span className="text-base sm:text-lg font-bold text-yellow-400">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FLASH SALE BANNER - Responsive ===== */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-8 sm:py-12 my-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-4xl sm:text-5xl animate-float">⚡</div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">🔥 Flash Sale!</h2>
                <p className="text-white/80 text-xs sm:text-sm">Limited time offers - Up to 50% off</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                <div className="text-lg sm:text-2xl font-bold">12</div>
                <div className="text-[10px] sm:text-xs text-white/80">Hours</div>
              </div>
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                <div className="text-lg sm:text-2xl font-bold">45</div>
                <div className="text-[10px] sm:text-xs text-white/80">Minutes</div>
              </div>
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                <div className="text-lg sm:text-2xl font-bold">30</div>
                <div className="text-[10px] sm:text-xs text-white/80">Seconds</div>
              </div>
              <Link to="/products" className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-2xl text-sm sm:text-base">
                Shop Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA - Responsive ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 sm:py-16 my-4">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Start Shopping? 🛍️
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
            Join thousands of happy customers and discover amazing products at unbeatable prices.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Browse All Products <FaArrowRight />
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/20 text-sm sm:text-base"
            >
              View Deals 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER - Responsive ===== */}
      <section className="bg-[#111827] py-12 sm:py-16">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Get Exclusive Deals
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Subscribe to get special offers and updates</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-[#0a0a1a] border border-[#1f2937] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-yellow-500 transition placeholder-gray-500 text-sm sm:text-base"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;