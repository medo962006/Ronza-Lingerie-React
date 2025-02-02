// src/components/Navigation/MobileMenu.jsx
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const MobileMenu = ({ isOpen, closeMenu }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="mobile-menu-container"
        >
          <div className="mobile-menu-header">
            <button onClick={closeMenu} className="close-button">
              <FiX size={28} />
            </button>
          </div>
          <nav className="mobile-menu-content">
            <div className="menu-section">
              <h3 className="menu-section-title">Collections</h3>
              <ul className="menu-list">
                <li><a href="/bras">Bras</a></li>
                <li><a href="/panties">Panties</a></li>
                <li><a href="/lingerie-sets">Lingerie Sets</a></li>
                <li><a href="/new-arrivals">New Arrivals</a></li>
              </ul>
            </div>
            <div className="menu-section">
              <h3 className="menu-section-title">Support</h3>
              <ul className="menu-list">
                <li><a href="/size-guide">Size Guide</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;