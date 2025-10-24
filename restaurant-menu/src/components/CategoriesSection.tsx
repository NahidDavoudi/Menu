'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import { categories } from '@/data/menuData';

interface CategoriesSectionProps {
  onCategorySelect?: (category: Category) => void;
  selectedCategory?: Category | null;
  onBackToCategories?: () => void;
}

const CategoriesSection = ({ 
  onCategorySelect, 
  selectedCategory, 
  onBackToCategories 
}: CategoriesSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCategoryClick = (category: Category) => {
    onCategorySelect?.(category);
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'محبوب':
        return 'bg-gradient-to-r from-accent-red to-accent-darkRed';
      case 'جدید':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'ویژه':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'توصیه شف':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-red mb-4 text-glow">
            منوی رستوران
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            دسته‌بندی غذاها را انتخاب کنید و از طعم‌های بی‌نظیر لذت ببرید
          </p>
        </motion.div>

        {/* Menu Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            'relative bg-dark-300 border border-dark-100 rounded-3xl p-8 md:p-12',
            'neumorphic-inset',
            'transition-all duration-500 ease-out',
            'overflow-hidden'
          )}
        >
          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              // Categories Grid
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onHoverStart={() => setHoveredCard(category.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      'menu-card relative overflow-hidden',
                      'bg-gradient-to-br from-gray-100 to-gray-200',
                      'cursor-pointer group'
                    )}
                  >
                    {/* Badge */}
                    {category.badge && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={cn(
                          'absolute top-4 right-4 z-10',
                          'px-3 py-1 rounded-xl text-white text-xs font-bold',
                          'shadow-lg',
                          getBadgeColor(category.badge)
                        )}
                      >
                        {category.badge}
                      </motion.div>
                    )}

                    {/* Category Icon */}
                    <div className="h-48 flex items-center justify-center bg-dark-500 m-3 rounded-2xl relative overflow-hidden">
                      <motion.div
                        animate={hoveredCard === category.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-6xl md:text-7xl"
                      >
                        {category.icon}
                      </motion.div>
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === category.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-accent-red/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Plus className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Category Content */}
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-b-3xl">
                      <h3 className="text-xl md:text-2xl font-bold text-dark-500 mb-3 text-center">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Items Count */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="mt-4 text-center"
                      >
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {category.items.length} آیتم
                        </span>
                      </motion.div>
                    </div>

                    {/* Hover Effect Border */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === category.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-2 border-accent-red/50 rounded-3xl pointer-events-none"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Selected Category Items
              <motion.div
                key="category-items"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Back Button */}
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  onClick={onBackToCategories}
                  className={cn(
                    'flex items-center space-x-3 space-x-reverse',
                    'px-6 py-3 rounded-xl',
                    'bg-dark-300 text-white border border-dark-100',
                    'neumorphic-raised neumorphic-hover',
                    'transition-all duration-300',
                    'hover:-translate-y-1'
                  )}
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>بازگشت</span>
                </motion.button>

                {/* Category Header */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center mb-8"
                >
                  <div className="text-4xl mb-4">{selectedCategory.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedCategory.name}
                  </h3>
                  <p className="text-white/70">{selectedCategory.description}</p>
                </motion.div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {selectedCategory.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={cn(
                        'flex items-center justify-between',
                        'p-4 md:p-6 rounded-2xl',
                        'bg-dark-300 border border-dark-100',
                        'neumorphic-raised neumorphic-hover',
                        'transition-all duration-300'
                      )}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 space-x-reverse mb-2">
                          <h4 className="text-lg font-semibold text-white">
                            {item.name}
                          </h4>
                          {item.isPopular && (
                            <span className="text-xs bg-accent-red text-white px-2 py-1 rounded-full">
                              محبوب
                            </span>
                          )}
                          {item.isNew && (
                            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                              جدید
                            </span>
                          )}
                          {item.isChefRecommended && (
                            <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                              توصیه شف
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="text-left mr-4">
                        <span className="text-xl font-bold text-accent-red">
                          {new Intl.NumberFormat('fa-IR').format(item.price)} تومان
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;