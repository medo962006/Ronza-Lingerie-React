// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('lingerie_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('lingerie_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const alreadyInWishlist = prevWishlist.some(item => item.id === product.id);
      if (alreadyInWishlist) {
        return prevWishlist; // Don't add if already in wishlist
      } else {
        return [...prevWishlist, product];
      }
    });
    setIsWishlistOpen(true); // Optionally open wishlist sidebar on add
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist =>
      prevWishlist.filter(item => item.id !== productId)
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      isWishlistOpen,
      setIsWishlistOpen,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      getWishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};