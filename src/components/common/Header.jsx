import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-xl sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/10 transition">
            <span className="text-3xl animate-float">🛍️</span>
            <div>
              <span className="text-[10px] block leading-none text-gray-300">Shop</span>
              <span className="text-xl font-bold block leading-none tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Ease
              </span>
            </div>
          </Link>

          {/* Delivery */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white/10 transition cursor-pointer">
            <FaMapMarkerAlt className="text-yellow-400 text-sm" />
            <div>
              <span className="text-[10px] text-gray-300 block leading-none">Deliver to</span>
              <span className="text-sm font-bold block leading-none text-white">Pakistan</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-3">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <select className="bg-gray-50 text-gray-700 text-sm px-3 py-2 border-r border-gray-200 focus:outline-none hidden sm:block">
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Shoes</option>
              </select>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none text-sm"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 px-6 py-2 transition-all">
                <FaSearch className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block px-3 py-1 rounded-lg hover:bg-white/10 transition cursor-pointer">
              <span className="text-[10px] text-gray-300 block leading-none">Hello, Guest</span>
              <span className="text-sm font-bold block leading-none text-white">Sign In</span>
            </div>

            <div className="hidden md:block px-3 py-1 rounded-lg hover:bg-white/10 transition cursor-pointer">
              <span className="text-[10px] text-gray-300 block leading-none">Returns</span>
              <span className="text-sm font-bold block leading-none text-white">& Orders</span>
            </div>

            <Link to="/cart" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white/10 transition relative">
              <FaShoppingCart className="text-2xl text-white" />
              <span className="absolute -top-1 left-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {itemCount}
              </span>
              <span className="text-sm font-bold text-white hidden sm:block">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-1.5 text-sm overflow-x-auto">
            <Link to="/" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">
              <FaBars /> All
            </Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">Today's Deals</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">Electronics</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">Clothing</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">Shoes</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">New Arrivals</Link>
            <Link to="/products" className="px-3 py-1 rounded-lg hover:bg-white/10 transition whitespace-nowrap text-gray-200 hover:text-white">Best Sellers</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;