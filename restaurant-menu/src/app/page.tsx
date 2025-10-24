'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/hooks/useCart';
import { Category } from '@/types';

// Components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import MenuItemsSection from '@/components/MenuItemsSection';
import FeaturedItemsCarousel from '@/components/FeaturedItemsCarousel';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    openCart,
    closeCart,
    toggleCart,
  } = useCart();

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <main className="min-h-screen bg-dark-500 overflow-x-hidden">
      {/* Navbar */}
      <Navbar 
        cartItemsCount={getTotalItems()} 
        onCartClick={toggleCart}
      />

      {/* Page Content */}
      <div className="pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <CategoriesSection
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          onBackToCategories={handleBackToCategories}
        />

        {/* Featured Items Carousel */}
        {!selectedCategory && (
          <FeaturedItemsCarousel onAddToCart={addToCart} />
        )}

        {/* All Menu Items Section */}
        {!selectedCategory && (
          <MenuItemsSection onAddToCart={addToCart} />
        )}

        {/* Footer */}
        <Footer />
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        totalPrice={getTotalPrice()}
      />

      {/* Loading Animation for Page Transitions */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed inset-0 bg-dark-500 z-50 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="text-6xl"
        >
          🍽️
        </motion.div>
      </motion.div>
    </main>
  );
}