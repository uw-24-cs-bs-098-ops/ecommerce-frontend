import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        await signup(formData.fullName, formData.email, formData.password);
        navigate('/home');
      } catch (error) {
        // Error handled in auth context
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-[#0a0a1a] min-h-screen flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        
        <Link to="/login" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium mb-4 transition">
          <FaArrowLeft /> Back to Login
        </Link>

        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">📝</div>
            <h1 className="text-2xl font-bold text-white">Create Account</h1>
            <p className="text-gray-400 text-sm mt-1">Join ShopEase today</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`signup-input w-full bg-[#0a0a1a] border ${errors.fullName ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400`}
                placeholder="John Doe"
                autoComplete="name"
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`signup-input w-full bg-[#0a0a1a] border ${errors.email ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400`}
                placeholder="john@example.com"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`signup-input w-full bg-[#0a0a1a] border ${errors.password ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400 pr-12`}
                  placeholder="Min 8 characters"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password *</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`signup-input w-full bg-[#0a0a1a] border ${errors.confirmPassword ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400 pr-12`}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${
                isLoading
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]'
              }`}
            >
              {isLoading ? '⏳ Creating account...' : 'Create Account'}
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;