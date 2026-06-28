import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Determine badge
  const getBadge = () => {
    if (product.discount) return { text: `-${product.discount}%`, type: 'sale' };
    if (product.isNew) return { text: 'NEW', type: 'new' };
    if (product.reviews > 500) return { text: 'BEST SELLER', type: 'bestseller' };
    return null;
  };

  const badge = getBadge();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* Badge */}
        {badge && (
          <span className={`product-badge ${badge.type}`}>{badge.text}</span>
        )}
        
        {/* Wishlist Button */}
        <button className="wishlist-btn" onClick={toggleWishlist}>
          {isWishlisted ? <FaHeart color="#FF4757" /> : <FaRegHeart />}
        </button>

        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div className="rating">★★★★★</div>
        <p className="price">
          {product.discount ? (
            <>
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem' }}>
                ${(product.price * (1 + product.discount/100)).toFixed(2)}
              </span>
              {' '}${product.price}
            </>
          ) : (
            <>${product.price}</>
          )}
        </p>
      </Link>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;