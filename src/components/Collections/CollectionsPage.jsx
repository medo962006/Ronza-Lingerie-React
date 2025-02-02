// src/components/Collections/CollectionsPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CollectionGrid from './CollectionsGrid';
import CollectionFilters from './CollectionsFilters';
import { useCollections } from './CollectionsContext'; // Import useCollections
import './_CollectionPage.scss';

const CollectionsPage = ({ searchQuery }) => { // Receive searchQuery as prop
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { collections, filterCollections, sortCollections, searchCollections } = useCollections(); // Get collections too

  const filteredAndSortedCollections = () => {
    let currentCollections = collections; // Start with all collections from context
    currentCollections = searchCollections(searchQuery, currentCollections); // Apply search
    currentCollections = filterCollections(activeFilter, currentCollections); // Apply category filter
    return sortCollections(currentCollections, sortBy); // Then sort
  };


  return (
      <div className="collections-page">
        <div className="collections-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="collections-header">
              <h1>Our Collections</h1>
              <p>Discover our curated selection of premium lingerie pieces</p>
            </div>

            <CollectionFilters
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <CollectionGrid
              activeFilter={activeFilter}
              sortBy={sortBy}
              collections={filteredAndSortedCollections()} // Pass filtered and sorted collections
            />
          </motion.div>
        </div>
      </div>
  );
};

export default CollectionsPage;