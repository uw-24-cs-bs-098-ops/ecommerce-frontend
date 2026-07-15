import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaArrowLeft, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
  // Get cart functions from context
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems,
    getShippingCost,
    getTax,
    getGrandTotal
  } = useCart();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();
  const shippingCost = getShippingCost();
  const tax = getTax();
  const grandTotal = getGrandTotal();

  // ===== EMPTY CART STATE =====
  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0a0a1a] min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-[#111827] border border-[#1f2937] rounded-2xl p-12 text-center">
            {/* Empty Cart Icon */}
            <div className="text-6xl mb-4">🛒</div>
            
            {/* Empty Cart Message */}
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Looks like you haven't added any items yet</p>
            
            {/* Link to Products Page */}
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold inline-block hover:shadow-2xl transition"
            >
              Start Shopping 🛍️
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ===== CART WITH ITEMS =====
  return (
    <div className="bg-[#0a0a1a] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">🛒 Shopping Cart</h1>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ===== CART ITEMS ===== */}
          <div className="lg:col-span-2">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4">
              {/* Cart Header */}
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#1f2937]">
                <span className="text-sm text-gray-400">
                  {totalItems} item{totalItems > 1 ? 's' : ''} in cart
                </span>
                <button 
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1 transition"
                >
                  <FaTrash /> Clear Cart
                </button>
              </div>
              
              {/* Cart Items List */}
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-[#1f2937] last:border-0">
                  
                  {/* Product Image */}
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="font-medium text-white hover:text-indigo-400 transition">
                      {item.name}
                    </Link>
                    <div className="text-sm text-gray-400">{item.category}</div>
                    <div className="text-lg font-bold text-yellow-400">${item.price.toFixed(2)}</div>
                  </div>
                  
                  {/* Quantity Controls & Remove */}
                  <div className="flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-[#0a0a1a] border border-[#1f2937] rounded-xl px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg hover:bg-[#1f2937] text-white transition flex items-center justify-center"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                    
                    {/* Item Total & Remove */}
                    <div className="text-right min-w-[80px]">
                      <div className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-xs transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== ORDER SUMMARY ===== */}
          <div className="lg:col-span-1">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 sticky top-24">
              <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                {/* Subtotal */}
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                
                {/* Shipping */}
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className={`font-bold ${shippingCost === 0 ? 'text-green-400' : 'text-white'}`}>
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                {/* Tax */}
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax (8%)</span>
                  <span className="text-white font-bold">${tax.toFixed(2)}</span>
                </div>
                
                {/* Total */}
                <div className="border-t border-[#1f2937] pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-yellow-400">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <Link 
                to="/checkout" 
                className="block mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-center hover:shadow-lg transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;