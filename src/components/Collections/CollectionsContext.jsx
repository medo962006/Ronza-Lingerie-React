// src/components/Collections/CollectionsContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "Romance",
      category: "lingerie",
      price: 129.99,
      images: [
        "https://images-cdn.ubuy.co.in/662d83beb9fc77250c79ef08-sexy-lingerie-for-women-naughty-3-piece.jpg",
        "https://images-cdn.ubuy.co.in/662d83beb9fc77250c79ef08-sexy-lingerie-for-women-naughty-3-piece.jpg",
        "https://images-cdn.ubuy.co.in/662d83beb9fc77250c79ef08-sexy-lingerie-for-women-naughty-3-piece.jpg"
      ],
      isNew: true,
      description: "Elegant black lace collection with intricate details",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Rose", "Pearl"],
      details: [
        "Made with premium French lace",
        "Adjustable straps",
        "Delicate embroidery details"
      ]
    },
    {
      id: 2,
      name: "Silk Dreams",
      category: "sleepwear",
      price: 189.99,
      images: [
        "https://cdn-img.prettylittlething.com/0/8/a/d/08adf8a1ec7877874e558f4626e5bbeb397d4e33_cmw0505_5.jpg?imwidth=600",
        "https://sinderella.in/cdn/shop/products/journi-lace-lingerie-931371.jpg?v=1725306583&width=1000",
        "https://cdn-img.prettylittlething.com/0/8/a/d/08adf8a1ec7877874e558f4626e5bbeb397d4e33_cmw0505_5.jpg?imwidth=600"
      ],
      isNew: true,
      description: "Luxurious silk sleepwear in soft pastel shades",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Pearl", "Lavender", "Sky"],
      details: [
        "100% pure mulberry silk",
        "Temperature regulating",
        "Hypoallergenic material"
      ]
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      getCollection
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