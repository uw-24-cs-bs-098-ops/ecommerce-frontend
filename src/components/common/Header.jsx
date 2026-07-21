import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaBars, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const itemCount = getTotalItems();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-[#0a0a1a] border-b border-[#1f2937] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-[#111827] transition">
            <span className="text-2xl font-bold text-yellow-400">🛍️</span>
            <div>
              <span className="text-[10px] block leading-none text-gray-400">Shop</span>
              <span className="text-xl font-bold block leading-none tracking-wide gradient-text">Ease</span>
            </div>
          </Link>

          {/* Delivery */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer">
            <FaMapMarkerAlt className="text-yellow-400 text-sm" />
            <div>
              <span className="text-[10px] text-gray-400 block leading-none">Deliver to</span>
              <span className="text-sm font-bold block leading-none text-white">Pakistan</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-3">
            <div className="flex items-center bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden focus-within:border-indigo-500 transition">
              <select className="bg-[#111827] text-gray-300 text-sm px-3 py-2 border-r border-[#1f2937] focus:outline-none hidden sm:block">
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Shoes</option>
              </select>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-2 transition-all">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-2">
            {/* User Greeting */}
            {isAuthenticated && user ? (
              <div className="hidden md:block px-3 py-1 rounded-lg">
                <span className="text-[10px] text-gray-400 block leading-none">Welcome</span>
                <span className="text-sm font-bold block leading-none text-yellow-400">{user.name}</span>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer">
                <span className="text-[10px] text-gray-400 block leading-none">Hello, Guest</span>
                <span className="text-sm font-bold block leading-none text-white">Sign In</span>
              </Link>
            )}

            {/* Returns */}
            <div className="hidden lg:block px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer">
              <span className="text-[10px] text-gray-400 block leading-none">Returns</span>
              <span className="text-sm font-bold block leading-none text-white">& Orders</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-[#111827] transition relative">
              <FaShoppingCart className="text-2xl text-white" />
              <span className={`absolute -top-1 left-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${itemCount > 0 ? 'animate-pulse' : ''}`}>
                {itemCount}
              </span>
              <span className="text-sm font-bold text-white hidden sm:block">Cart</span>
            </Link>

            {/* Logout Button */}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-red-400"
              >
                <FaSignOutAlt className="text-sm" />
                <span className="text-sm font-medium hidden sm:block">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#0f0f1f] border-t border-[#1f2937]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-1.5 text-sm overflow-x-auto">
            <Link to="/" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">
              <FaBars /> All
            </Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">Today's Deals</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">Electronics</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">Clothing</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">Shoes</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">New Arrivals</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-[#111827] transition whitespace-nowrap text-gray-300 hover:text-white">Best Sellers</Link>
            
            {/* Mobile Login/Signup/Logout */}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="md:hidden px-3 py-1 rounded-lg hover:bg-[#111827] transition text-yellow-400 hover:text-yellow-300">
                  Login
                </Link>
                <Link to="/signup" className="md:hidden px-3 py-1 rounded-lg hover:bg-[#111827] transition text-indigo-400 hover:text-indigo-300">
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="md:hidden px-3 py-1 rounded-lg hover:bg-[#111827] transition text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;