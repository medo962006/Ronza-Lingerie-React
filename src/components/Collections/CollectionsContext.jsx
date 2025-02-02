// src/components/Collections/CollectionsContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [collections,setCollections] = useState([ // eslint-disable-line no-unused-vars
    {
      id: 1,
      name: "Romance",
      category: "lingerie",
      price: 129.99,
      images: [
        "https://i.imgur.com/RIJc6d3.jpeg"
      ],
      isNew: true,
      description: "Elegant black lace collection with intricate details",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Rose", "Pearl"],
      details: [
        "Made with premium French lace",
        "Adjustable straps",
        "Delicate embroidery details"
      ],
      image: "https://i.imgur.com/RIJc6d3.jpeg",
    },
    {
      id: 2,
      name: "Silk Dreams",
      category: "sleepwear",
      price: 189.99,
      images: [
        "https://i.imgur.com/TMqKRjG.jpeg",
        "https://i.imgur.com/k3EP3Ap.jpeg"
      ],
      isNew: true,
      description: "Luxurious silk sleepwear in soft pastel shades",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Pearl", "Lavender", "Sky"],
      details: [
        "100% pure mulberry silk",
        "Temperature regulating",
        "Hypoallergenic material"
      ],
      image: "https://i.imgur.com/iSLYwXm.jpeg"
    }
  ]);  // eslint-disable-line no-unused-vars

  const [loading, setLoading] = useState(false); // eslint-disable-line no-unused-vars
  const [error, setError] = useState(null);  // eslint-disable-line no-unused-vars

  // Existing methods
  const filterCollections = (filter) => {
    if (filter === 'all') return collections;
    return collections.filter(item => item.category === filter);
  };

  const sortCollections = (items, sortBy) => {
    return [...items].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });
    
  };
  const searchCollections = (query) => {
    if (!query) {
      return collections; // Return all collections if query is empty
    }
    const lowerCaseQuery = query.toLowerCase();
    return collections.filter(collection => {
      return (
        collection.name.toLowerCase().includes(lowerCaseQuery) ||
        collection.description.toLowerCase().includes(lowerCaseQuery) ||
        collection.details.some(detail => detail.toLowerCase().includes(lowerCaseQuery)) // Search in details array too
        // Add more fields to search if needed (e.g., category, colors, sizes)
      );
    });
  };
  

  // New method to get a single collection
  const getCollection = (id) => {
    return collections.find(item => item.id === parseInt(id));
  };

  return (
    <CollectionsContext.Provider value={{
      collections,
      loading,
      error,
      filterCollections,
      sortCollections,
      getCollection,
      searchCollections // Add searchCollections to the context value
    }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => {
  const context = useContext(CollectionsContext);
  if (!context) {
    throw new Error('useCollections must be used within a CollectionsProvider');
  }
  return context;
};