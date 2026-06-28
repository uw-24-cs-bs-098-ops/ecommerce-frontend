import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const QuickView = ({ product, onClose }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, 1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;