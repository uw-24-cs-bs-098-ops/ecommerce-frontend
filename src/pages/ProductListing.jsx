import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import productData from '../data/products.json';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  useEffect(() => {
    const allProducts = productData.products;
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    let result = products;
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, sortBy, products]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
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

  // Category icons
  const categoryIcons = {
    'Electronics': '📱',
    'Clothing': '👕',
    'Shoes': '👟',
    'Books': '📚',
    'Gaming': '🎮',
    'Accessories': '💎'
  };

  const categoryColors = {
    'Electronics': 'from-blue-500 to-cyan-500',
    'Clothing': 'from-purple-500 to-pink-500',
    'Shoes': 'from-green-500 to-emerald-500',
    'Books': 'from-orange-500 to-red-500',
    'Gaming': 'from-indigo-500 to-purple-500',
    'Accessories': 'from-pink-500 to-rose-500'
  };

  return (
    <div className="bg-[#0a0a1a] min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* ===== CATEGORIES SECTION ===== */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📂 Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                className={`bg-gradient-to-br ${categoryColors[category] || 'from-gray-600 to-gray-700'} rounded-xl p-4 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  selectedCategory === category ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a1a]' : ''
                }`}
              >
                <div className="text-2xl mb-1">{categoryIcons[category] || '📦'}</div>
                <span className="text-xs font-semibold">{category}</span>
              </button>
            ))}
          </div>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory('')}
              className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        {/* ===== HEADER ===== */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium transition">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-white flex-1 text-center">
            All Products
          </h1>
        </div>

        {/* ===== SEARCH & FILTER ===== */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-[#0a0a1a] border border-[#1f2937] text-white px-4 py-2 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-[#0a0a1a] border border-[#1f2937] text-white rounded-xl focus:outline-none focus:border-indigo-500 transition cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-[#0a0a1a] border border-[#1f2937] text-white rounded-xl focus:outline-none focus:border-indigo-500 transition cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* ===== RESULTS COUNT ===== */}
        <div className="text-sm text-gray-400 mb-4">
          {filteredProducts.length} products found
        </div>

        {/* ===== PRODUCT GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500" 
                />
              </Link>
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

        {/* ===== GO TO CART ===== */}
        <div className="text-center mt-10">
          <Link 
            to="/cart" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            🛒 Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;