// src/components/Wishlist/WishlistSidebar.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '../../Context/WishlistContext';
import { Heart, X, Trash2 } from 'lucide-react'; // Icons
import './_WishlistSidebar.scss'; // Create this SCSS file

const WishlistSidebar = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    removeFromWishlist,
    getWishlistCount
  } = useWishlist();

  const wishlistCount = getWishlistCount();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div
            className="wishlist-sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
          />

          <motion.div
            className="wishlist-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="wishlist-sidebar-header">
              <h2>Wishlist ({wishlistCount})</h2>
              <button
                className="close-button"
                onClick={() => setIsWishlistOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="wishlist-sidebar-items">
              {wishlist.length === 0 ? (
                <div className="empty-wishlist">
                  <Heart size={48} />
                  <p>Your wishlist is empty</p>
                  <button
                    className="continue-shopping"
                    onClick={() => setIsWishlistOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {wishlist.map((item) => (
                    <motion.div
                      key={item.id}
                      className="wishlist-item"
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
                        <p className="item-price">${item.price.toFixed(2)}</p>

                        <div className="item-controls">
                          <button
                            className="remove-button"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            <Trash2 size={16} /> Remove
                          </button>
                          {/* You can add "Add to Cart" button here if you want */}
                          {/* <button className="add-to-cart-from-wishlist-button">Add to Cart</button> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* No Footer needed for wishlist in this basic example, but you can add one */}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistSidebar;