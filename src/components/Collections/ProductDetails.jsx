import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../Context/CartContext'; // Make sure the path is correct!
import { useWishlist } from '../../Context/WishlistContext'; // Import useWishlist

const ProductDetails = ({
  collection, // This is the product object
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  // onAddToCart prop is removed
}) => {
  const { addToCart } = useCart(); // Get addToCart from the context
  const { addToWishlist } = useWishlist(); // Get addToWishlist from wishlist context

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart.");
      return;
    }

    // Create a product object to pass to addToCart.
    // Make sure it includes all necessary properties expected by addToCart
    const productToAdd = {
      ...collection, // Spread the existing collection object
      selectedSize: selectedSize, // Add selectedSize
      selectedColor: selectedColor, // Add selectedColor
    };

    addToCart(productToAdd); // Call addToCart with the constructed product object
    // Optionally provide user feedback here
    console.log("Item added to cart!"); // For debugging
  };
  const handleAddToWishlist = () => {
    addToWishlist(collection); // Call addToWishlist, no size/color needed for wishlist in this example
    // Optionally provide user feedback
    console.log("Item added to wishlist!");
  };
  return (
    <div className="product-details">
      <motion.div
        className="product-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="product-header">
          <h1>{collection.name}</h1>
          {collection.isNew && <span className="new-badge">New</span>}
        </div>

        <div className="product-price">
          ${collection.price.toFixed(2)}
        </div>

        <p className="product-description">{collection.description}</p>

        <div className="product-options">
          <div className="size-selector">
            <h3>Size</h3>
            <div className="options-grid">
              {collection.sizes.map((size) => (
                <button
                  key={size}
                  className={`option-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="color-selector">
            <h3>Color</h3>
            <div className="options-grid">
              {collection.colors.map((color) => (
                <button
                  key={color}
                  className={`option-button ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
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
      <motion.button // Add "Add to Wishlist" button
          className="add-to-wishlist-button" // Style this button
          onClick={handleAddToWishlist}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Wishlist
        </motion.button>

        <div className="product-details-list">
          <h3>Product Details</h3>
          <ul>
            {collection.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;