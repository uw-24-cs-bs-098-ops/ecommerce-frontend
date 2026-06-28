import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';
import { useState } from 'react';

const Header = () => {
  const { getTotalItems } = useCart();
  const { setSearchQuery, searchQuery } = useSearch();
  const cartCount = getTotalItems();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(searchQuery || '');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue.trim());
    navigate('/products');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // If on products page, update search in real-time
    if (window.location.pathname === '/products') {
      setSearchQuery(value.trim());
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => setSearchQuery('')}>🛍️ ShopLogo</Link>
      </div>
      
      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">🔍</button>
      </form>

      <nav>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setSearchQuery('')}>Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          <li><Link to="/login">👤 Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;