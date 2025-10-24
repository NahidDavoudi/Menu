'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Navbar = ({ cartItemsCount = 0, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'خانه', icon: '🏠' },
    { href: '#menu', label: 'منو', icon: '📋' },
    { href: '#about', label: 'درباره ما', icon: '📖' },
    { href: '#contact', label: 'تماس', icon: '📞' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'mx-4 mt-4 rounded-3xl glassmorphic'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 space-x-reverse"
            >
              <span className="text-3xl">🍽️</span>
              <span className="text-xl font-bold text-white text-glow">
                رستوران مدرن
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'flex items-center space-x-2 space-x-reverse',
                    'px-4 py-2 rounded-xl text-white/90 text-sm font-medium',
                    'transition-all duration-300',
                    'bg-white/5 border border-white/10 backdrop-blur-sm',
                    'hover:bg-accent-red/20 hover:border-accent-red/30',
                    'hover:shadow-lg hover:shadow-accent-red/20'
                  )}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Cart & Mobile Menu Button */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCartClick}
                className={cn(
                  'relative p-3 rounded-xl',
                  'bg-white/10 border border-white/20 backdrop-blur-sm',
                  'hover:bg-accent-red/20 hover:border-accent-red/30',
                  'transition-all duration-300',
                  'hover:shadow-lg hover:shadow-accent-red/20'
                )}
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={cn(
                      'absolute -top-2 -right-2',
                      'bg-accent-red text-white text-xs font-bold',
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      'shadow-lg'
                    )}
                  >
                    {cartItemsCount > 9 ? '9+' : cartItemsCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className={cn(
                  'md:hidden p-3 rounded-xl',
                  'bg-white/10 border border-white/20 backdrop-blur-sm',
                  'hover:bg-accent-red/20 hover:border-accent-red/30',
                  'transition-all duration-300'
                )}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn(
                'fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50',
                'bg-dark-300 border-l border-white/10',
                'shadow-2xl md:hidden'
              )}
            >
              <div className="p-6 pt-24">
                {/* Mobile Navigation Items */}
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={toggleMenu}
                      className={cn(
                        'flex items-center space-x-4 space-x-reverse',
                        'p-4 rounded-xl text-white/90 font-medium',
                        'bg-white/5 border border-white/10',
                        'hover:bg-accent-red/20 hover:border-accent-red/30',
                        'transition-all duration-300',
                        'hover:shadow-lg hover:shadow-accent-red/20'
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    تماس با ما
                  </h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Phone className="w-4 h-4" />
                      <span>۰۲۱-۸۸۷۷۶۶۵۵</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Info className="w-4 h-4" />
                      <span>تهران، خیابان ولیعصر</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;