// src/components/HomePage/HomeHero.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroAnimations';

const HomeHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(el => el.classList.add('loaded'));
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-reveal-container">
          <h1 className="hero-title animate-on-load">
            <span className="line">Crafted with Passion,</span>
            <span className="line">Worn with Confidence</span>
          </h1>
        </div>
        
        <p className="hero-subtitle animate-on-load">Premium Luxury Lingerie Collections</p>
        
        <div className="cta-container animate-on-load">
          <Link to="/collections" className="cta-button">
            <span className="cta-text">Discover Now</span>
            <div className="hover-fill" aria-hidden="true"></div>
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <svg className="scroll-arrow" viewBox="0 0 24 24">
          <path d="M12 17.414l-5.707-5.707 1.414-1.414L12 14.586l4.293-4.293 1.414 1.414L12 17.414z"/>
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;