// src/components/Navigation/MainNav.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import './_navigation.scss'; // Correct relative path
import { useCart } from '../../Context/CartContext'; // Correct import path
import { useWishlist } from '../../Context/WishlistContext'; // Correct import path


const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart(); // Get cart context functions
  const { getWishlistCount, setIsWishlistOpen: setWishlistSidebarOpen } = useWishlist(); // Get wishlist context functions

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-navigation ${hasScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          <Link to="/" className="logo">
            Ronza Lingerie
          </Link>

          <div className="desktop-menu">
            <div className="main-links">
              <NavLink
                to="/collections"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Collections
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Our Story
              </NavLink>
              <div className="nav-item dropdown">
                <span className="Support">Support</span>
                <div className="dropdown-content">
                  <Link to="/size-guide">Size Guide</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/faq">FAQ</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-actions">
            <button className="nav-action search-trigger">
              <FiSearch size={20} />
            </button>
            <button
              className="nav-action"
              onClick={() => setWishlistSidebarOpen(true)} // Open Wishlist Sidebar on click
            >
              <FiHeart size={20} />
              {getWishlistCount() > 0 && (
                <span className="counter">{getWishlistCount()}</span>
              )}
            </button>
            <button
              className="nav-action"
              onClick={() => setIsCartOpen(true)} // Open Cart Sidebar on click
            >
              <FiShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="counter">{getCartCount()}</span>
              )}
            </button>
            <button className="nav-action">
              <FiUser size={20} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </>
  );
};

export default MainNav;