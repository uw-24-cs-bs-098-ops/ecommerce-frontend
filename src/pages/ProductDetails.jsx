import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa';
import productData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const found = productData.products.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-[#0a0a1a] min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Product not found</h2>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">Back to Products</Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating || 4.5);
    const hasHalfStar = (rating || 4.5) % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline text-sm" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline text-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline text-sm" />);
      }
    }
    return stars;
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="bg-[#0a0a1a] min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link to="/products" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium mb-6 transition">
          <FaArrowLeft /> Back to Products
        </Link>
        
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f1729] rounded-xl overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-80 md:h-96 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-indigo-400 font-medium bg-indigo-900/30 inline-block px-3 py-1 rounded-full">
                  {product.category}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-3">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  {renderStars(product.rating || 4.5)}
                  <span className="text-sm text-gray-400">({product.reviews || 128} reviews)</span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-yellow-400">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">{product.description}</p>
                <div className="mt-4">
                  {product.stock > 0 ? (
                    <span className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-xl text-sm font-medium">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      ✅ In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 px-4 py-2 rounded-xl text-sm font-medium">
                      ❌ Out of Stock
                    </span>
                  )}
                </div>
              </div>
              <div className="border-t border-[#1f2937] pt-6 mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="font-medium text-white">Quantity:</label>
                  <div className="flex items-center gap-3 bg-[#0a0a1a] border border-[#1f2937] rounded-xl px-3 py-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center">
                      <FaMinus className="text-xs" />
                    </button>
                    <span className="w-10 text-center font-bold text-white text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="w-8 h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center">
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#0a0a1a] rounded-xl px-4 py-3 mb-4 border border-[#1f2937]">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-2xl font-bold text-yellow-400">${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity)}
                  disabled={product.stock === 0}
                  className={`w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 ${product.stock > 0 ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-[#1f2937] text-gray-500 cursor-not-allowed'}`}
                >
                  {product.stock > 0 ? `🛒 Add to Cart ($${totalPrice.toFixed(2)})` : 'Out of Stock'}
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  {product.stock > 0 ? '✓ Secure checkout • Free shipping on orders $50+' : '🚫 This product is currently unavailable'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;