import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaArrowLeft, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0a0a1a] min-h-screen py-8 sm:py-16 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="max-w-sm sm:max-w-md mx-auto bg-[#111827] border border-[#1f2937] rounded-2xl p-6 sm:p-12 text-center">
            <div className="text-5xl sm:text-6xl mb-4">🛒</div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6">Looks like you haven't added any items yet</p>
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold inline-block hover:shadow-2xl transition w-full sm:w-auto"
            >
              Start Shopping 🛍️
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a1a] min-h-screen py-4 sm:py-8 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-bold text-white">🛒 Shopping Cart</h1>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-xs sm:text-sm font-medium">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-3 sm:p-4">
              <div className="flex flex-wrap justify-between items-center pb-3 mb-3 border-b border-[#1f2937] gap-2">
                <span className="text-xs sm:text-sm text-gray-400">
                  {totalItems} item{totalItems > 1 ? 's' : ''} in cart
                </span>
                <button 
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 text-xs sm:text-sm font-medium flex items-center gap-1 transition"
                >
                  <FaTrash className="text-xs sm:text-sm" /> Clear Cart
                </button>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-4 border-b border-[#1f2937] last:border-0">
                  {/* Product Image */}
                  <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl mx-auto sm:mx-0" />
                  
                  {/* Product Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <Link to={`/product/${item.id}`} className="font-medium text-sm sm:text-base text-white hover:text-indigo-400 transition">
                      {item.name.length > 20 ? item.name.substring(0, 20) + '...' : item.name}
                    </Link>
                    <div className="text-xs sm:text-sm text-gray-400">{item.category}</div>
                    <div className="text-base sm:text-lg font-bold text-yellow-400">${item.price.toFixed(2)}</div>
                  </div>
                  
                  {/* Quantity Controls & Remove */}
                  <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                    <div className="flex items-center gap-1 sm:gap-2 bg-[#0a0a1a] border border-[#1f2937] rounded-xl px-1 sm:px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center"
                      >
                        <FaMinus className="text-[10px] sm:text-xs" />
                      </button>
                      <span className="w-6 sm:w-8 text-center font-bold text-white text-sm sm:text-base">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center"
                      >
                        <FaPlus className="text-[10px] sm:text-xs" />
                      </button>
                    </div>
                    
                    <div className="text-right min-w-[60px] sm:min-w-[80px]">
                      <div className="font-bold text-white text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-[10px] sm:text-xs transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-3 sm:p-4 sticky top-24">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax (8%)</span>
                  <span className="text-white font-bold">${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-[#1f2937] pt-2 sm:pt-3 mt-2 sm:mt-3">
                  <div className="flex justify-between text-base sm:text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-yellow-400">${(totalPrice + (totalPrice * 0.08)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/checkout" 
                className="block mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 sm:py-3 rounded-xl font-bold text-center hover:shadow-lg transition hover:scale-[1.02] text-sm sm:text-base"
              >
                Proceed to Checkout ✅
              </Link>
              
              <Link 
                to="/products" 
                className="block text-center text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm font-medium mt-2 sm:mt-3 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;