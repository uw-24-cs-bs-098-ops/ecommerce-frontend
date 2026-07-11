import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    console.log('Adding to cart:', product.name, 'Quantity:', quantity);
    
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if product exists
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.success(`✅ ${product.name} quantity updated!`);
        return updatedItems;
      } else {
        // Add new product if it doesn't exist
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          stock: product.stock,
          quantity: quantity,
          rating: product.rating || 4.5,
          reviews: product.reviews || 128
        };
        toast.success(`🎉 ${product.name} added to cart!`);
        return [...prevItems, newItem];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success(`🗑️ ${product?.name || 'Item'} removed from cart`);
  };

  // Update item quantity
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

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    toast.success('🗑️ Cart cleared');
  };

  // Get total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get shipping cost
  const getShippingCost = () => {
    const total = getTotalPrice();
    if (total === 0) return 0;
    return total >= 50 ? 0 : 9.99;
  };

  // Get tax
  const getTax = () => {
    return getTotalPrice() * 0.08;
  };

  // Get grand total
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
      shippingCost: getShippingCost(),
      tax: getTax(),
      grandTotal: getGrandTotal(),
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