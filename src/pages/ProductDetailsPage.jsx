import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '3rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <p className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/products"> Products</Link> / 
          {product.name}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Product Image with Zoom */}
          <div>
            <div 
              className={`product-image-container ${isZoomed ? 'zoomed' : ''}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-main-image"
              />
              {isZoomed && (
                <div className="zoom-overlay">
                  <img src={product.image} alt="Zoomed" className="zoomed-image" />
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <img src={product.image} alt="thumbnail" className="thumbnail" />
              <img src={product.image} alt="thumbnail" className="thumbnail" />
              <img src={product.image} alt="thumbnail" className="thumbnail" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <h1 style={{ fontSize: '2.5rem' }}>{product.name}</h1>
              <button 
                onClick={toggleWishlist}
                style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
              >
                {isWishlisted ? <FaHeart color="#FF4757" /> : <FaRegHeart />}
              </button>
            </div>
            <div style={{ color: '#FFB800', fontSize: '1.2rem', margin: '0.5rem 0' }}>
              ★★★★★ <span style={{ color: '#666', fontSize: '0.9rem' }}>({product.reviews} reviews)</span>
            </div>
            <p style={{ fontSize: '2rem', color: '#6C63FF', fontWeight: 'bold', margin: '1rem 0' }}>
              ${product.price}
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontWeight: 'bold' }}>Color: {selectedColor}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: '0.5rem 1rem',
                        border: selectedColor === color ? '2px solid #6C63FF' : '1px solid #ddd',
                        borderRadius: '8px',
                        background: selectedColor === color ? '#6C63FF20' : 'white',
                        cursor: 'pointer'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
              <span style={{ fontWeight: 'bold' }}>Quantity:</span>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
              >−</button>
              <span style={{ fontSize: '1.2rem', width: '2rem', textAlign: 'center' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
              >+</button>
            </div>

            <button 
              className="add-to-cart" 
              onClick={handleAddToCart}
              style={{ padding: '1rem 3rem', fontSize: '1.2rem', width: '100%' }}
            >
              🛒 Add to Cart
            </button>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <span>🚚 Free Shipping</span>
              <span>🔄 30-Day Returns</span>
              <span>🔒 Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Related Products</h2>
          <div className="products-grid">
            {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <Link to={`/product/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-card">
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                  <h3>{p.name}</h3>
                  <p className="price">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;