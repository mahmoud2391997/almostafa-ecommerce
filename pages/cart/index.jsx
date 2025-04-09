import React from 'react';
import { useCart } from '../cartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const fixedPrice = 10; // Fixed price for all items

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (fixedPrice * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cart.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 md:p-8 text-center">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link href="/productsList" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow overflow-hidden flex flex-col sm:flex-row">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-80 m-auto  object-cover" 
                  />
                  <div className="p-4 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold truncate">{item.title}</h3>
                      <p className="text-gray-600">${fixedPrice.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.title, Math.max(1, item.quantity - 1))}
                          className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.title, item.quantity + 1)}
                          className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="text-gray-500 hover:text-red-500 transition p-1"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="sm:text-right">
                      <p className="text-lg font-semibold">${(fixedPrice * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary - Only show if cart has items */}
        {cart.length > 0 && (
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-lg md:text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                Proceed to Checkout
              </button>
              <div className="mt-4 text-center">
                <Link href="/productsList" className="text-blue-600 hover:underline text-sm md:text-base">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;