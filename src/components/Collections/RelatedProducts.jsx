// src/components/Collections/RelatedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollections } from './CollectionsContext';
import './RelatedProducts.scss';

const RelatedProducts = ({ currentProductId, category }) => {
  const { collections } = useCollections();
  
  const relatedProducts = collections
    .filter(product => 
      product.category === category && 
      product.id !== currentProductId
    )
    .slice(0, 4);

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>
      
      <div className="related-products-grid">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="related-product-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/collections/${product.id}`} className="product-link">
              <div className="product-image">
                <img src={product.images[0]} alt={product.name} />
              </div>
              
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;