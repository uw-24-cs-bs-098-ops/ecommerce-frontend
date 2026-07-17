import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="bg-[#0a0a1a] border-b border-[#1f2937] sticky top-0 z-50">
      <div className="container-custom">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-1 sm:py-2 gap-1 sm:gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 px-1 sm:px-2 py-1 rounded-lg hover:bg-[#111827] transition flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-yellow-400">🛍️</span>
            <div>
              <span className="text-[8px] sm:text-[10px] block leading-none text-gray-400">Shop</span>
              <span className="text-sm sm:text-xl font-bold block leading-none tracking-wide gradient-text">Ease</span>
            </div>
          </Link>

          {/* Delivery - Laptop Only */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer flex-shrink-0">
            <FaMapMarkerAlt className="text-yellow-400 text-sm" />
            <div>
              <span className="text-[10px] text-gray-400 block leading-none">Deliver to</span>
              <span className="text-sm font-bold block leading-none text-white">Pakistan</span>
            </div>
          </div>

          {/* Search Bar - Tablet & Laptop */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-2 sm:mx-3">
            <div className="flex items-center bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden focus-within:border-indigo-500 transition w-full">
              <select className="bg-[#111827] text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 border-r border-[#1f2937] focus:outline-none hidden sm:block">
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Shoes</option>
              </select>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 px-2 sm:px-4 py-1.5 sm:py-2 bg-transparent text-white focus:outline-none placeholder-gray-500 text-xs sm:text-sm"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-3 sm:px-6 py-1.5 sm:py-2 transition-all flex-shrink-0">
                <FaSearch className="text-white text-xs sm:text-sm" />
              </button>
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Sign In - Laptop Only */}
            <div className="hidden lg:block px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer">
              <span className="text-[8px] sm:text-[10px] text-gray-400 block leading-none">Hello, Guest</span>
              <span className="text-xs sm:text-sm font-bold block leading-none text-white">Sign In</span>
            </div>

            {/* Returns - Laptop Only */}
            <div className="hidden lg:block px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition cursor-pointer">
              <span className="text-[8px] sm:text-[10px] text-gray-400 block leading-none">Returns</span>
              <span className="text-xs sm:text-sm font-bold block leading-none text-white">& Orders</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition relative">
              <FaShoppingCart className="text-xl sm:text-2xl text-white" />
              <span className={`absolute -top-1 left-4 sm:left-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-[10px] sm:text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center ${itemCount > 0 ? 'animate-pulse' : ''}`}>
                {itemCount}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white hidden sm:block">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV - Scrollable on Mobile */}
      <div className="bg-[#0f0f1f] border-t border-[#1f2937] overflow-x-auto">
        <div className="container-custom">
          <div className="flex items-center gap-1 sm:gap-4 py-1 text-[10px] sm:text-sm overflow-x-auto whitespace-nowrap">
            <Link to="/" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">
              <FaBars className="text-xs sm:text-sm" /> All
            </Link>
            <Link to="/products" className="px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">Today's Deals</Link>
            <Link to="/products" className="px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">Electronics</Link>
            <Link to="/products" className="px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">Clothing</Link>
            <Link to="/products" className="px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">Shoes</Link>
            <Link to="/products" className="hidden md:block px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">New Arrivals</Link>
            <Link to="/products" className="hidden md:block px-2 sm:px-3 py-1 rounded-lg hover:bg-[#111827] transition text-gray-300 hover:text-white">Best Sellers</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;