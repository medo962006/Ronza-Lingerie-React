// src/components/Collections/ProductInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ProductInfo.scss';

const ProductInfo = ({ 
  product, 
  selectedSize, 
  setSelectedSize, 
  quantity, 
  setQuantity 
}) => {
  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + amount));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', {
      productId: product.id,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="product-info">
      <header className="product-header">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price}</p>
      </header>

      {product.isNew && (
        <span className="new-label">New Collection</span>
      )}

      <div className="size-selector">
        <h3>Select Size</h3>
        <div className="size-options">
          {product.sizes.map((size) => (
            <motion.button
              key={size}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        <h3>Quantity</h3>
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="quantity-button"
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 10}
            className="quantity-button"
          >
            +
          </button>
        </div>
      </div>

      <motion.button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Add to Cart
      </motion.button>

      <div className="product-meta">
        <div className="meta-item">
          <h3>Material</h3>
          <p>{product.material}</p>
        </div>
        <div className="meta-item">
          <h3>Care Instructions</h3>
          <p>{product.careInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;