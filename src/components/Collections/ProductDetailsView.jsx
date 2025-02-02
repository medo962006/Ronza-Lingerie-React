import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

import { useParams } from 'react-router-dom';
import { useCollections } from './CollectionsContext';

const ProductDetailsView = () => {
  const { id } = useParams();
  const { collections } = useCollections();
  
  const product = collections.find(item => item.id === parseInt(id)) || {
  id: 1,
  name: "Silk Dreams Collection",
  price: 129.99,
  description: "Luxurious silk lingerie set featuring delicate lace details and adjustable straps. Perfect for special occasions.",
  images: ["/api/placeholder/600/800", "/api/placeholder/600/800", "/api/placeholder/600/800"],
  sizes: ["XS", "S", "M", "L", "XL"], 
  colors: ["Black", "Rose", "Pearl"],
  category: "Lingerie",
  isNew: true
};
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden"
          >
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                New
              </span>
            )}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
          <div className="flex gap-2 mt-4">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-2xl mt-2">${product.price}</p>
          </div>

          <p className="text-gray-400">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? 'border-white bg-white text-black'
                      : 'border-gray-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedColor === color
                      ? 'border-white bg-white text-black'
                      : 'border-gray-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-medium mb-2">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1 border border-gray-600 rounded-lg"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 border border-gray-600 rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-black py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-600 rounded-lg hover:border-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Additional Information */}
          <div className="pt-6 border-t border-gray-800">
            <h3 className="text-lg font-medium mb-2">Product Details</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Category: {product.category}</li>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;