// src/components/Collections/CollectionsPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CollectionGrid from './CollectionsGrid';
import CollectionFilters from './CollectionsFilters';
import { CollectionsProvider } from './CollectionsContext';
import './_CollectionPage.scss';

const CollectionsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <CollectionsProvider>
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
            />
          </motion.div>
        </div>
      </div>
    </CollectionsProvider>
  );
};

export default CollectionsPage;