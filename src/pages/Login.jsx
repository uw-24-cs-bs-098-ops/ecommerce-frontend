import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    
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
        await login(formData.email, formData.password);
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
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🛍️</div>
            <h1 className="text-3xl font-bold text-white">Welcome to <span className="text-yellow-400">ShopEase</span></h1>
            <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`login-input w-full bg-[#0a0a1a] border ${errors.email ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400`}
                placeholder="demo@example.com"
                autoComplete="username"
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
                  className={`login-input w-full bg-[#0a0a1a] border ${errors.password ? 'border-red-500' : 'border-[#1f2937]'} text-white px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition placeholder-gray-400 pr-12`}
                  placeholder="password123"
                  autoComplete="current-password"
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

            <div className="text-right mb-6">
              <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
                Forgot Password?
              </a>
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
              {isLoading ? '⏳ Signing in...' : 'Sign In'}
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;