// src/components/Layout/MainLayout.jsx
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/MainNav';
import { initHeroAnimations } from '../HomePage/HeroAnimations';
import Cart from '../Cart/Cart';
import './_MainLayout.scss'; // Create this SCSS file for styling
import WishlistSidebar from '../Wishlist/WishlistSidebar';
import CartSidebar from '../Cart/CartSidebar';
import { Heart } from 'lucide-react'; // Import Heart icon for wishlist toggle
import { useWishlist } from '../../Context/WishlistContext'; // Import useWishlist
const MainLayout = () => {
  useEffect(() => {
    initHeroAnimations();
  }, []);

  const { isWishlistOpen, setIsWishlistOpen, getWishlistCount } = useWishlist(); // Use wishlist context

  const wishlistCount = getWishlistCount();

  return (
    <div className="app-container">
      <Navigation />
      <div className="header-actions"> {/* Container for cart and wishlist toggles, adjust styling as needed */}
        <button
          className="wishlist-toggle" // Style this button
          onClick={() => setIsWishlistOpen(!isWishlistOpen)}
        >
          <Heart size={24} />
          {wishlistCount > 0 && (
            <span className="wishlist-count">{wishlistCount}</span>
          )}
                  </button>
                  <CartSidebar />
          </div>
      <main className="content-container">
        <Outlet /> {/* This handles the routed page content */}
      </main>

      <Cart />
      <WishlistSidebar /> {/* Include WishlistSidebar component */}
    </div>
  );
};

export default MainLayout;