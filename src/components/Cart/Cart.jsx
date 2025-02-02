// src/components/Cart/Cart.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../Context/CartContext';
import './_Cart.scss';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="cart-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="cart-drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button 
              className="close-button"
              onClick={() => setIsCartOpen(false)}
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <motion.div 
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="cart-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img src={item.images[0]} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-options">
                        Size: {item.selectedSize} | Color: {item.selectedColor}
                      </p>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(
                            item.id, 
                            item.selectedSize, 
                            item.selectedColor, 
                            item.quantity - 1
                          )}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(
                            item.id, 
                            item.selectedSize, 
                            item.selectedColor, 
                            item.quantity + 1
                          )}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="remove-button"
                        onClick={() => removeFromCart(
                          item.id, 
                          item.selectedSize, 
                          item.selectedColor
                        )}
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="checkout-button">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;