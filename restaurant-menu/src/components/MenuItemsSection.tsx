'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MenuItem, Category } from '@/types';
import { categories } from '@/data/menuData';
import ItemCard from './ItemCard';

interface MenuItemsSectionProps {
  onAddToCart?: (item: MenuItem, quantity: number) => void;
}

const MenuItemsSection = ({ onAddToCart }: MenuItemsSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popular'>('name');

  // Get all menu items
  const allItems = useMemo(() => {
    return categories.flatMap(category => category.items);
  }, []);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let items = allItems;

    // Filter by search term
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients?.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Sort items
    items.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'popular':
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return a.name.localeCompare(b.name, 'fa');
        default:
          return a.name.localeCompare(b.name, 'fa');
      }
    });

    return items;
  }, [allItems, searchTerm, selectedCategory, sortBy]);

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
            همه آیتم‌های منو
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            تمام غذاها و نوشیدنی‌های موجود در رستوران را مشاهده کنید
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            'bg-dark-300 border border-dark-100 rounded-2xl p-6 mb-8',
            'neumorphic-inset'
          )}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="جستجو در منو..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={cn(
                  'w-full pr-10 pl-4 py-3 rounded-xl',
                  'bg-dark-400 border border-dark-100 text-white',
                  'placeholder:text-white/50',
                  'focus:outline-none focus:border-accent-red/50',
                  'transition-all duration-300'
                )}
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={cn(
                'px-4 py-3 rounded-xl',
                'bg-dark-400 border border-dark-100 text-white',
                'focus:outline-none focus:border-accent-red/50',
                'transition-all duration-300'
              )}
            >
              <option value="all">همه دسته‌ها</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popular')}
              className={cn(
                'px-4 py-3 rounded-xl',
                'bg-dark-400 border border-dark-100 text-white',
                'focus:outline-none focus:border-accent-red/50',
                'transition-all duration-300'
              )}
            >
              <option value="name">مرتب‌سازی بر اساس نام</option>
              <option value="price">مرتب‌سازی بر اساس قیمت</option>
              <option value="popular">محبوب‌ترین‌ها</option>
            </select>

            {/* Layout Toggle */}
            <div className="flex bg-dark-400 border border-dark-100 rounded-xl p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLayout('grid')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-300',
                  layout === 'grid'
                    ? 'bg-accent-red text-white shadow-lg'
                    : 'text-white/70 hover:text-white'
                )}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLayout('list')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-300',
                  layout === 'list'
                    ? 'bg-accent-red text-white shadow-lg'
                    : 'text-white/70 hover:text-white'
                )}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6 text-white/70 text-sm"
        >
          {filteredItems.length} آیتم یافت شد
          {searchTerm && ` برای "${searchTerm}"`}
          {selectedCategory !== 'all' && ` در دسته‌بندی "${categories.find(c => c.id === selectedCategory)?.name}"`}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          layout
          className={cn(
            layout === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          )}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ItemCard
                item={item}
                onAddToCart={onAddToCart}
                layout={layout}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              آیتمی یافت نشد
            </h3>
            <p className="text-white/70 mb-6">
              لطفاً کلمات کلیدی دیگری را امتحان کنید یا فیلترها را تغییر دهید
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className={cn(
                'px-6 py-3 rounded-xl',
                'bg-accent-red text-white font-medium',
                'hover:bg-accent-red/90',
                'transition-all duration-300'
              )}
            >
              پاک کردن فیلترها
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuItemsSection;