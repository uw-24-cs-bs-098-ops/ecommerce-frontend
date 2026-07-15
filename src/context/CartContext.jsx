import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage on app start
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ===== ADD TO CART =====
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increase quantity
        toast.success(`✅ ${product.name} quantity updated!`);
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If new, add to cart
        toast.success(`🎉 ${product.name} added to cart!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // ===== REMOVE FROM CART =====
  const removeFromCart = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success(`🗑️ ${product?.name || 'Item'} removed from cart`);
  };

  // ===== UPDATE QUANTITY =====
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // ===== CLEAR CART =====
  const clearCart = () => {
    setCartItems([]);
    toast.success('🗑️ Cart cleared');
  };

  // ===== GET TOTAL ITEMS =====
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // ===== GET TOTAL PRICE =====
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // ===== GET SHIPPING COST =====
  const getShippingCost = () => {
    const total = getTotalPrice();
    if (total === 0) return 0;
    return total >= 50 ? 0 : 9.99;
  };

  // ===== GET TAX =====
  const getTax = () => {
    return getTotalPrice() * 0.08;
  };

  // ===== GET GRAND TOTAL =====
  const getGrandTotal = () => {
    return getTotalPrice() + getShippingCost() + getTax();
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      getShippingCost,
      getTax,
      getGrandTotal,
      itemCount: getTotalItems(),
      totalPrice: getTotalPrice(),
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};