import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomeHero from './components/HomePage/HomeHero';
import './styles/main.scss';
import CollectionsPage from './components/Collections/CollectionsPage';
import { CollectionsProvider } from './components/Collections/CollectionsContext';
import CollectionItemPage from './components/Collections/CollectionItemPage';
import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext';
function App() {
  return (
    <CartProvider>
    <WishlistProvider>
    <CollectionsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeHero />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionItemPage />} />
        </Route>
      </Routes>
    </Router>
    </CollectionsProvider>
    </WishlistProvider>
    </CartProvider>
  );
}

export default App;
