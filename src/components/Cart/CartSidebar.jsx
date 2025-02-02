// src/components/Cart/CartSidebar.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../Context/CartContext';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import './_CartSidebar.scss';

const CartSidebar = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    getCartCount 
  } = useCart();

  const cartCount = getCartCount();

  return (
    <>
      {/* Cart Toggle Button */}
      <button 
        className="cart-toggle"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="cart-sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <motion.div 
              className="cart-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Header */}
              <div className="cart-sidebar-header">
                <h2>Your Cart ({cartCount})</h2>
                <button 
                  className="close-button"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="cart-sidebar-items">
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <ShoppingCart size={48} />
                    <p>Your cart is empty</p>
                    <button 
                      className="continue-shopping"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div 
                        key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <div className="item-image">
                          <img src={item.images[0]} alt={item.name} />
                        </div>
                        
                        <div className="item-details">
                          <h3>{item.name}</h3>
                          <p className="item-options">
                            Size: {item.selectedSize} | Color: {item.selectedColor}
                          </p>
                          <p className="item-price">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          
                          <div className="item-controls">
                            <div className="quantity-controls">
                              <button 
                                onClick={() => updateQuantity(
                                  item.id, 
                                  item.selectedSize, 
                                  item.selectedColor, 
                                  item.quantity - 1
                                )}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
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
                                <Plus size={16} />
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
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="cart-sidebar-footer">
                  <div className="cart-summary">
                    <div className="subtotal">
                      <span>Subtotal</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="shipping">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="total">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button className="checkout-button">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;