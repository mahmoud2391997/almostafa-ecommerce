'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false); // Track initialization

  // Load cart from localStorage safely (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (error) {
          console.error('Failed to parse cart data:', error);
          localStorage.removeItem('cart'); // Clear corrupted data
        }
      }
      setIsInitialized(true); // Mark as initialized
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.title === product.title);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove item from cart
  const removeFromCart = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  // Function to update item quantity
  const updateQuantity = (title, newQuantity) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0) // Remove if quantity becomes 0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);