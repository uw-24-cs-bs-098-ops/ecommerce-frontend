import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Checkout</h1>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2>Order placed successfully! 🎉</h2>
        <Link to="/" style={{ display: 'inline-block', marginTop: '20px', background: '#f0c14b', padding: '10px 30px', borderRadius: '8px', textDecoration: 'none', color: 'black' }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;