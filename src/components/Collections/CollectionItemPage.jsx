// src/components/Collections/CollectionItemPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollections } from './CollectionsContext';
import { useCart } from '../../Context/CartContext';
import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import './_CollectionItemPage.scss';

const CollectionItemPage = () => {
  const { id } = useParams();
  const { getCollection } = useCollections();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const collection = getCollection(id);

  if (!collection) {
    return (
      <div className="collection-item-error">
        <h2>Product not found</h2>
      </div>
    );
  }

  

  return (
    <motion.div 
      className="collection-item-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="collection-item-container">
        <div className="collection-item-grid">
          <ImageGallery images={collection.images} name={collection.name} />
          
          <ProductDetails 
            collection={collection}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            onAddToCart={useCart}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionItemPage;