import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 5.00;
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <div style={{ padding: '3rem 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛒 Shopping Cart</h1>
          <div style={{ padding: '4rem', background: '#f8f9fa', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.5rem', color: '#666' }}>Your cart is empty</p>
            <p style={{ color: '#999', marginTop: '0.5rem' }}>Start shopping to add items to your cart</p>
            <Link to="/products">
              <button className="cta-button" style={{ marginTop: '1.5rem' }}>
                Continue Shopping →
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div style={{ padding: '3rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🛒 Shopping Cart</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Cart Items */}
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #eee',
                padding: '1rem 0',
                gap: '1rem'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '8px' }} 
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p style={{ color: '#6C63FF', fontWeight: 'bold' }}>${item.price}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{ padding: '0.3rem 0.8rem', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
                  >−</button>
                  <span style={{ minWidth: '2rem', textAlign: 'center' }}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{ padding: '0.3rem 0.8rem', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
                  >+</button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: '#FF4757', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                >🗑️</button>
              </div>
            ))}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Link to="/products">
                <button style={{ padding: '0.6rem 1.5rem', border: '1px solid #6C63FF', color: '#6C63FF', background: 'white', borderRadius: '50px', cursor: 'pointer' }}>
                  ← Continue Shopping
                </button>
              </Link>
              <button 
                onClick={clearCart}
                style={{ padding: '0.6rem 1.5rem', border: 'none', color: '#FF4757', background: 'none', cursor: 'pointer' }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '12px',
            position: 'sticky',
            top: '100px',
            height: 'fit-content'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Order Summary</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <hr style={{ margin: '1rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span style={{ color: '#6C63FF' }}>${total.toFixed(2)}</span>
            </div>
            
            {shipping === 0 && (
              <p style={{ color: '#2ecc71', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                🎉 You've qualified for FREE shipping!
              </p>
            )}
            
            <button style={{
              width: '100%',
              padding: '1rem',
              background: '#6C63FF',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '1.5rem',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#5A52D5'}
            onMouseLeave={(e) => e.target.style.background = '#6C63FF'}
            >
              Proceed to Checkout →
            </button>

            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
              🔒 Secure checkout • Multiple payment options
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;