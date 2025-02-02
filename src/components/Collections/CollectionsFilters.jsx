// src/components/Collections/CollectionFilters.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './_CollectionFilters.scss';

const CollectionFilters = ({ activeFilter, setActiveFilter, sortBy, setSortBy }) => {
  const filters = [
    { id: 'all', label: 'All Collections' },
    { id: 'lingerie', label: 'Lingerie' },
    { id: 'sleepwear', label: 'Sleepwear' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="collection-filters">
      <div className="filters-container">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? 'active' : ''}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <div className="sort-select">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CollectionFilters;