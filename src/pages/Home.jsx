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
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-slow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                🔥 Limited Time Offer - Up to 50% Off
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Discover Amazing <br />
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Products
                </span>
                <br />at Best Prices
              </h1>
              
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Shop the latest trends with exclusive deals and offers. 
                Quality products delivered to your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products" 
                  className="group bg-white text-indigo-600 px-8 py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Start Shopping 🛍️
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/products" 
                  className="bg-yellow-400 text-gray-900 px-8 py-3.5 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-yellow-500/30"
                >
                  Explore Deals 🔥
                  <FaTag className="group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              <div className="flex gap-8 mt-10">
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-white/70">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-sm text-white/70">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/70">Customer Support</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">🎉</div>
                <div className="text-2xl font-bold">50% Off</div>
                <div className="text-sm text-white/70">On Electronics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">👕</div>
                <div className="text-2xl font-bold">Buy 1 Get 1</div>
                <div className="text-sm text-white/70">On Clothing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">👟</div>
                <div className="text-2xl font-bold">30% Off</div>
                <div className="text-sm text-white/70">On Shoes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">📦</div>
                <div className="text-2xl font-bold">Free Shipping</div>
                <div className="text-sm text-white/70">On Orders $50+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS BAR ===== */}
      <section className="bg-[#111827] border-b border-[#1f2937] py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-2xl group-hover:bg-indigo-800/50 transition">
                <FaTruck className="text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Free Shipping</h4>
                <p className="text-xs text-gray-400">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-2xl group-hover:bg-green-800/50 transition">
                <FaShieldAlt className="text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Secure Payment</h4>
                <p className="text-xs text-gray-400">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-2xl group-hover:bg-purple-800/50 transition">
                <FaHeadset className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">24/7 Support</h4>
                <p className="text-xs text-gray-400">Live chat & email</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-orange-900/30 flex items-center justify-center text-2xl group-hover:bg-orange-800/50 transition">
                <FaClock className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Easy Returns</h4>
                <p className="text-xs text-gray-400">30 days return</p>
              </div>
            </div>
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
              className={`group bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <span className="text-sm font-semibold">{category.name}</span>
              <div className="w-full h-1 bg-white/30 rounded-full mt-2 group-hover:bg-white transition-all"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== DEALS OF THE DAY ===== */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <FaFire className="text-red-500" /> Deals of the Day
            </h2>
            <p className="text-sm text-gray-400">Limited time offers - Up to 50% off</p>
          </div>
          <Link to="/products" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            See All Deals <FaArrowRight className="text-xs" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealsProducts.slice(0, 8).map((product) => {
            const discount = getRandomDiscount();
            const discountedPrice = product.price * (1 - discount / 100);
            return (
              <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 relative group">
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse-slow">
                  -{discount}% OFF
                </div>
                <div className="relative overflow-hidden bg-[#0f1729] h-48">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <div className="text-xs text-yellow-400 font-medium bg-yellow-900/30 inline-block px-2 py-0.5 rounded-full">
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-sm text-white mt-2 line-clamp-2 hover:text-yellow-400 transition h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(product.rating || 4.5)}
                    <span className="text-xs text-gray-500">({product.reviews || 128})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-yellow-400">${discountedPrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-xs py-1.5 px-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Grab Deal 🛒
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ✨ Featured Products
            </h2>
            <p className="text-sm text-gray-400">Handpicked just for you</p>
          </div>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View All <FaArrowRight className="text-xs" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden bg-[#0f1729] h-48">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                </Link>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  ★ Featured
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-indigo-400 font-medium bg-indigo-900/30 inline-block px-2 py-0.5 rounded-full">
                  {product.category}
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-sm text-white mt-2 line-clamp-2 hover:text-indigo-400 transition h-10">
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
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs py-1.5 px-3 rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FLASH SALE BANNER ===== */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-12 my-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl animate-float">⚡</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">🔥 Flash Sale!</h2>
                <p className="text-white/80 text-sm">Limited time offers - Up to 50% off</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-white/80">Hours</div>
              </div>
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <div className="text-2xl font-bold">45</div>
                <div className="text-xs text-white/80">Minutes</div>
              </div>
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <div className="text-2xl font-bold">30</div>
                <div className="text-xs text-white/80">Seconds</div>
              </div>
              <Link to="/products" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-2xl">
                Shop Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 my-4">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping? 🛍️
          </h2>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of happy customers and discover amazing products at unbeatable prices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Browse All Products <FaArrowRight />
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              View Deals 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-[#111827] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Get Exclusive Deals
            </h2>
            <p className="text-gray-400 mb-6">Subscribe to get special offers and updates</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-[#0a0a1a] border border-[#1f2937] text-white px-5 py-3 rounded-xl focus:outline-none focus:border-yellow-500 transition placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;