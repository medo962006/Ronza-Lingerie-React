// src/components/Pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './_AboutPage.scss'; // Import SCSS



const AboutPage = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div className="hero-image-container">
          <motion.img
            src={'../../assets/images/placeholder.jpg'}
            alt="Elegant lingerie"
            className="hero-image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        <motion.div className="hero-text-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="hero-title">Our Story: Crafted with Passion, Designed for Confidence</h1>
          <p className="hero-subtitle">Discover the heart and soul behind Ronza Lingerie, where artistry meets empowerment.</p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="section-content">
          <div className="text-column">
            <motion.h2 className="section-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Ronza Legacy: A Dream Woven in Lace
            </motion.h2>
            <motion.p className="section-paragraph"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ronza Lingerie began with a simple dream: to create lingerie that transcends mere garments, becoming intimate expressions of beauty and self-love. Founded [Year Founded] by [Founder's Name], a visionary with an unwavering passion for exquisite craftsmanship and feminine allure, Ronza was born from a desire to fill a void in the market – to offer lingerie that was not only luxurious but also deeply personal and empowering.
              <br /><br />
              Inspired by the timeless elegance of vintage lingerie and the modern woman's desire for confidence and comfort, we embarked on a journey to source the finest materials and hone artisanal techniques. From delicate French lace to the smoothest silks, every element is chosen with intention and care.
            </motion.p>
          </div>
          <motion.div className="image-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={'../../assets/images/placeholder.jpg'} alt="Founder sketching lingerie" className="section-image" />
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship & Quality Section */}
      <section className="craftsmanship-section">
        <div className="section-content">
          <motion.div className="image-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={'../../assets/images/placeholder.jpg'} alt="Lace details" className="section-image" />
          </motion.div>
          <div className="text-column">
            <motion.h2 className="section-title"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Uncompromising Craftsmanship: The Art of Detail
            </motion.h2>
            <motion.p className="section-paragraph"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At Ronza Lingerie, we believe true luxury lies in the details. Our pieces are meticulously crafted by skilled artisans who pour their passion and expertise into every stitch. We are committed to using only the highest quality materials, sourced from renowned European ateliers.
              <br /><br />
              Each design begins with a hand-drawn sketch, evolving into a pattern carefully cut and sewn with precision. Delicate lace appliques are hand-placed, embroidery is painstakingly detailed, and every seam is finished to perfection. This dedication to craftsmanship ensures not only exquisite beauty but also exceptional comfort and enduring quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Empowering Women Section */}
      <section className="empowerment-section">
        <div className="section-content">
          <div className="text-column">
            <motion.h2 className="section-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Beyond Beauty: Empowering Confidence
            </motion.h2>
            <motion.p className="section-paragraph"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ronza Lingerie is more than just clothing; it's a feeling, an experience, a statement of self-worth. We believe that lingerie has the power to transform how a woman feels – sensual, confident, and unapologetically herself.
              <br /><br />
              Our designs are created to celebrate the female form in all its beauty and diversity. We strive to offer pieces that fit flawlessly, feel incredible against the skin, and inspire a sense of inner radiance. We are committed to inclusivity and believe that every woman deserves to feel beautiful and empowered, starting from the very first layer she puts on.
            </motion.p>
          </div>
          <motion.div className="image-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={'../../assets/images/placeholder.jpg'} alt="Diverse group of women smiling" className="section-image" />
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section (Optional) */}
      {/* <section className="team-section">
        <h2 className="section-title">Meet the Ronza Team</h2>
        <p className="section-paragraph">Optional: Briefly introduce key team members with photos and short bios.</p>
      </section> */}

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          <h2 className="cta-title">Ready to Experience Ronza?</h2>
          <p className="cta-subtitle">Explore our collections and discover the perfect pieces to elevate your everyday.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collections
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutPage;