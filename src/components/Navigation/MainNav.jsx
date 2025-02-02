// src/components/Navigation/MainNav.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiUser, FiSearch, FiX } from 'react-icons/fi'; // Import FiX for clear button
import MobileMenu from './MobileMenu';
import './_navigation.scss';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import { motion } from 'framer-motion';
const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const { getWishlistCount, setIsWishlistOpen: setWishlistSidebarOpen } = useWishlist();

  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [isSearchActive, setIsSearchActive] = useState(false); // State to control search input visibility

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) { // If search is being opened, focus on input
      setTimeout(() => document.getElementById('search-input').focus(), 0); // Focus after animation
    } else {
      setSearchQuery(''); // Clear query when closing search
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add debouncing here if you want to delay search while typing
    // For now, we'll search on every input change (for simplicity)
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    document.getElementById('search-input').focus(); // Refocus after clearing
  };


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
                Our Sctory
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
            <motion.div className="search-container" animate={isSearchActive ? "active" : "inactive"}>
              <input
                id="search-input"
                type="text"
                className="search-input"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {searchQuery && (
                <motion.button
                  className="search-clear-button"
                  onClick={handleClearSearch}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={18} />
                </motion.button>
              )}
            </motion.div>


            <button className="nav-action search-trigger" onClick={handleSearchToggle}>
              <FiSearch size={20} />
            </button>
            <button
              className="nav-action"
              onClick={() => setWishlistSidebarOpen(true)}
            >
              <FiHeart size={20} />
              {getWishlistCount() > 0 && (
                <span className="counter">{getWishlistCount()}</span>
              )}
            </button>
            <button
              className="nav-action"
              onClick={() => setIsCartOpen(true)}
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