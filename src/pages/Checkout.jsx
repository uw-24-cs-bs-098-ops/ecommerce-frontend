import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getShippingCost, getTax, getGrandTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  if (cartItems.length === 0) {
    navigate('/products');
    return null;
  }

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP Code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        toast.success('🎉 Order placed successfully! Thank you for shopping!');
        clearCart();
        setIsSubmitting(false);
        navigate('/');
      }, 2000);
    }
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
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full bg-[#0a0a1a] border ${errors.fullName ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#0a0a1a] border ${errors.email ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-3 sm:mt-4">
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a1a] border ${errors.phone ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                  placeholder="+92 300 1234567"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="mt-3 sm:mt-4">
                <label className="block text-xs sm:text-sm text-gray-400 mb-1">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a1a] border ${errors.address ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                  placeholder="123 Main Street"
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full bg-[#0a0a1a] border ${errors.city ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                    placeholder="New York"
                  />
                  {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full bg-[#0a0a1a] border ${errors.zipCode ? 'border-red-500' : 'border-[#1f2937]'} text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-500 text-sm sm:text-base`}
                    placeholder="10001"
                  />
                  {errors.zipCode && <p className="text-red-400 text-xs mt-1">{errors.zipCode}</p>}
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

          <div className="lg:col-span-1">
            <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-4 sm:p-6 sticky top-24">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Order Summary</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-gray-300 py-1 border-b border-[#1f2937] last:border-0">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm mt-4 pt-2 border-t border-[#1f2937]">
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