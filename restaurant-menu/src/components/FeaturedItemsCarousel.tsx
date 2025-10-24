'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { cn, formatPrice } from '@/lib/utils';
import { MenuItem } from '@/types';
import { categories } from '@/data/menuData';

interface FeaturedItemsCarouselProps {
  onAddToCart?: (item: MenuItem, quantity: number) => void;
}

const FeaturedItemsCarousel = ({ onAddToCart }: FeaturedItemsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get featured items (popular, new, or chef recommended)
  const featuredItems = categories
    .flatMap(category => category.items)
    .filter(item => item.isPopular || item.isNew || item.isChefRecommended)
    .slice(0, 6); // Limit to 6 items

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredItems.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (featuredItems.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-red mb-4 text-glow">
            ⭐ آیتم‌های ویژه
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            محبوب‌ترین غذاها و توصیه‌های شف را کشف کنید
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-dark-300 border border-dark-100 neumorphic-inset">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative h-96 md:h-[500px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {featuredItems[currentIndex].image ? (
                    <Image
                      src={featuredItems[currentIndex].image!}
                      alt={featuredItems[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-dark-400 to-dark-500 flex items-center justify-center">
                      <span className="text-8xl">🍽️</span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-2xl p-8 md:p-12">
                    {/* Badges */}
                    <div className="flex gap-2 mb-4">
                      {featuredItems[currentIndex].isPopular && (
                        <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          محبوب
                        </span>
                      )}
                      {featuredItems[currentIndex].isNew && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          جدید
                        </span>
                      )}
                      {featuredItems[currentIndex].isChefRecommended && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          توصیه شف
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow"
                    >
                      {featuredItems[currentIndex].name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg text-white/80 mb-6 leading-relaxed"
                    >
                      {featuredItems[currentIndex].description}
                    </motion.p>

                    {/* Price */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-accent-red mb-6"
                    >
                      {formatPrice(featuredItems[currentIndex].price)}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onAddToCart?.(featuredItems[currentIndex], 1)}
                      className={cn(
                        'flex items-center gap-3 px-8 py-4 rounded-2xl',
                        'bg-accent-red text-white font-semibold text-lg',
                        'neumorphic-raised neumorphic-hover',
                        'transition-all duration-300',
                        'hover:bg-accent-red/90'
                      )}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      افزودن به سبد خرید
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className={cn(
                'absolute left-4 top-1/2 transform -translate-y-1/2 z-20',
                'p-3 rounded-full',
                'bg-white/10 border border-white/20 backdrop-blur-sm',
                'hover:bg-white/20 hover:border-white/30',
                'transition-all duration-300'
              )}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className={cn(
                'absolute right-4 top-1/2 transform -translate-y-1/2 z-20',
                'p-3 rounded-full',
                'bg-white/10 border border-white/20 backdrop-blur-sm',
                'hover:bg-white/20 hover:border-white/30',
                'transition-all duration-300'
              )}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredItems.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-accent-red shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'
                )}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => goToSlide(index)}
                className={cn(
                  'relative cursor-pointer rounded-2xl overflow-hidden',
                  'bg-dark-300 border border-dark-100',
                  'neumorphic-raised neumorphic-hover',
                  'transition-all duration-300',
                  index === currentIndex && 'border-accent-red/50 shadow-lg shadow-accent-red/20'
                )}
              >
                {/* Thumbnail Image */}
                <div className="aspect-square relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-400 flex items-center justify-center">
                      <span className="text-2xl">🍽️</span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Active Indicator */}
                  {index === currentIndex && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 border-2 border-accent-red rounded-2xl"
                    />
                  )}
                </div>

                {/* Thumbnail Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-sm font-medium truncate">
                    {item.name}
                  </h4>
                  <p className="text-accent-red text-xs font-bold">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedItemsCarousel;