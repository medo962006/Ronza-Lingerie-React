// src/components/Collections/CollectionGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCollections } from './CollectionsContext';
import { Link } from 'react-router-dom';
import './_CollectionGrid.scss';

const CollectionGrid = ({ activeFilter, sortBy }) => {
  const { filterCollections, sortCollections, loading, error } = useCollections();

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner" aria-label="Loading collections"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  const filteredCollections = filterCollections(activeFilter);
  const sortedCollections = sortCollections(filteredCollections, sortBy);

  return (
    <div className="collection-grid">
      {sortedCollections.map((collection, index) => (
        <motion.div
          key={collection.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="collection-item"
        >
          <Link to={`/collections/${collection.id}`}>
            <div className="collection-image">
              <img
                src={collection.image}
                alt={collection.name}
                loading="lazy"
              />
              {collection.isNew && (
                <div className="new-badge">
                  New
                </div>
              )}
            </div>

            <div className="collection-details">
              <h3 className="collection-title">
                {collection.name}
              </h3>
              <p className="collection-description">
                {collection.description}
              </p>
              <p className="collection-price">
                ${collection.price}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CollectionGrid;