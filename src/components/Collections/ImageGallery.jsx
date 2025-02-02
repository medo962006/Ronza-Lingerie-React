// src/components/Collections/ImageGallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <motion.img
          src={selectedImage}
          alt={`${name} - Main view`}
          className={`main-image ${isZoomed ? 'zoomed' : ''}`}
          onClick={() => setIsZoomed(!isZoomed)}
          layoutId="main-image"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`${name} - View ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={selectedImage}
              alt={`${name} - Zoomed view`}
              className="zoomed-image"
              layoutId="main-image"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;