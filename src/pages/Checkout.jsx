import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getShippingCost, getTax, getGrandTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  if (cartItems.length === 0) {
    navigate('/products');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('🎉 Order placed successfully! Thank you for shopping!');
      clearCart();
      setIsSubmitting(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bg-[#0a0a1a] min-h-screen py-4 sm:py-8 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-bold text-white">✅ Checkout</h1>
          <Link to="/cart" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-xs sm:text-sm font-medium">
            <FaArrowLeft /> Back to Cart
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mt-3 sm:mt-4">
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mt-3 sm:mt-4">
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a1a] border border-[#1f2937] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base"
                    placeholder="10001"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 sm:mt-6 py-3 sm:py-3.5 rounded-xl font-bold text-center transition-all duration-300 text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? '⏳ Processing...' : '🛒 Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 sm:p-6 sticky top-24">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-bold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className={`font-bold ${getShippingCost() === 0 ? 'text-green-400' : 'text-white'}`}>
                    {getShippingCost() === 0 ? 'FREE' : `$${getShippingCost().toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax (8%)</span>
                  <span className="text-white font-bold">${getTax().toFixed(2)}</span>
                </div>
                <div className="border-t border-[#1f2937] pt-2 sm:pt-3 mt-2 sm:mt-3">
                  <div className="flex justify-between text-base sm:text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-yellow-400">${getGrandTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link 
                to="/cart" 
                className="block text-center text-indigo-400 hover:text-indigo-300 text-xs sm:text-sm font-medium mt-3 sm:mt-4 transition"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;