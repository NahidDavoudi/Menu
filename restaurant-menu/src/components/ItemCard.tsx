'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Star, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import { cn, formatPrice } from '@/lib/utils';
import { MenuItem } from '@/types';

interface ItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem, quantity: number) => void;
  className?: string;
  layout?: 'grid' | 'list';
}

const ItemCard = ({ item, onAddToCart, className, layout = 'grid' }: ItemCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(item, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const getBadges = () => {
    const badges = [];
    if (item.isPopular) badges.push({ text: 'محبوب', color: 'bg-accent-red' });
    if (item.isNew) badges.push({ text: 'جدید', color: 'bg-green-500' });
    if (item.isChefRecommended) badges.push({ text: 'توصیه شف', color: 'bg-yellow-500' });
    return badges;
  };

  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          'flex items-center gap-4 p-4 rounded-2xl',
          'bg-dark-300 border border-dark-100',
          'neumorphic-raised neumorphic-hover',
          'transition-all duration-300',
          className
        )}
      >
        {/* Image */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-dark-500 flex-shrink-0">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl">
              🍽️
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white">{item.name}</h3>
                {getBadges().map((badge, index) => (
                  <span
                    key={index}
                    className={cn('text-xs px-2 py-1 rounded-full text-white', badge.color)}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/70 mb-2">{item.description}</p>
              <div className="text-lg font-bold text-accent-red">
                {formatPrice(item.price)}
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={cn(
                'p-2 rounded-xl',
                'bg-accent-red text-white',
                'neumorphic-raised neumorphic-hover',
                'transition-all duration-300'
              )}
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'menu-card relative overflow-hidden',
        'bg-gradient-to-br from-gray-100 to-gray-200',
        'group',
        className
      )}
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {getBadges().map((badge, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'px-3 py-1 rounded-xl text-white text-xs font-bold shadow-lg',
              badge.color
            )}
          >
            {badge.text}
          </motion.span>
        ))}
      </div>

      {/* Image */}
      <div className="relative h-48 bg-dark-500 m-3 rounded-2xl overflow-hidden">
        {item.image ? (
          <>
            <Image
              src={item.image}
              alt={item.name}
              fill
              className={cn(
                'object-cover transition-all duration-500',
                isHovered ? 'scale-110' : 'scale-100',
                imageLoaded ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loading-pulse w-full h-full" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🍽️
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="text-center text-white">
            <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">افزودن به سبد</span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h3 className="text-xl font-bold text-dark-500 mb-2 text-center">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">مواد اولیه:</p>
            <div className="flex flex-wrap gap-1">
              {item.ingredients.slice(0, 3).map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
              {item.ingredients.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{item.ingredients.length - 3} مورد دیگر
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-accent-red">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex items-center justify-between gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={decrementQuantity}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </motion.button>
            <span className="px-4 py-2 font-medium text-gray-800 min-w-[3rem] text-center">
              {quantity}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={incrementQuantity}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={cn(
              'flex-1 flex items-center justify-center gap-2',
              'px-4 py-3 rounded-xl font-medium',
              'bg-accent-red text-white',
              'hover:bg-accent-red/90',
              'transition-all duration-300',
              'shadow-lg hover:shadow-xl'
            )}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>افزودن</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 border-2 border-accent-red/50 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ItemCard;