'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import Image from 'next/image';
import { cn, formatPrice } from '@/lib/utils';
import { CartItem } from '@/types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  totalPrice: number;
}

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  totalPrice,
}: CartSidebarProps) => {
  const handleCheckout = () => {
    // Here you would integrate with your payment system
    alert('پرداخت با موفقیت انجام شد! (این یک نمونه است)');
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={cn(
              'fixed top-0 right-0 h-full w-96 max-w-[90vw] z-50',
              'bg-dark-300 border-l border-dark-100',
              'shadow-2xl flex flex-col'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-dark-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-accent-red" />
                <h2 className="text-xl font-bold text-white">سبد خرید</h2>
                <span className="bg-accent-red text-white text-sm px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={cn(
                  'p-2 rounded-xl',
                  'bg-dark-400 hover:bg-dark-200',
                  'text-white/70 hover:text-white',
                  'transition-all duration-300'
                )}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    سبد خرید خالی است
                  </h3>
                  <p className="text-white/70 text-sm">
                    برای افزودن آیتم به منو بروید
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'flex gap-4 p-4 rounded-2xl',
                        'bg-dark-400 border border-dark-100',
                        'neumorphic-raised'
                      )}
                    >
                      {/* Item Image */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-dark-500 flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl">
                            🍽️
                          </div>
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-accent-red font-bold text-sm">
                          {formatPrice(item.price)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className={cn(
                              'p-1 rounded-lg',
                              'bg-dark-300 hover:bg-dark-200',
                              'text-white/70 hover:text-white',
                              'transition-all duration-300'
                            )}
                          >
                            <Minus className="w-3 h-3" />
                          </motion.button>
                          
                          <span className="text-white font-medium text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className={cn(
                              'p-1 rounded-lg',
                              'bg-dark-300 hover:bg-dark-200',
                              'text-white/70 hover:text-white',
                              'transition-all duration-300'
                            )}
                          >
                            <Plus className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onRemoveItem(item.id)}
                        className={cn(
                          'p-2 rounded-xl',
                          'bg-red-500/20 hover:bg-red-500/30',
                          'text-red-400 hover:text-red-300',
                          'transition-all duration-300'
                        )}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-dark-100 p-6 space-y-4">
                {/* Clear Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClearCart}
                  className={cn(
                    'w-full flex items-center justify-center gap-2',
                    'py-2 px-4 rounded-xl text-sm',
                    'bg-red-500/20 border border-red-500/30',
                    'text-red-400 hover:text-red-300',
                    'hover:bg-red-500/30',
                    'transition-all duration-300'
                  )}
                >
                  <Trash2 className="w-4 h-4" />
                  پاک کردن سبد خرید
                </motion.button>

                {/* Total */}
                <div className="flex items-center justify-between py-3 border-t border-dark-100">
                  <span className="text-white font-semibold">مجموع:</span>
                  <span className="text-xl font-bold text-accent-red">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className={cn(
                    'w-full flex items-center justify-center gap-3',
                    'py-4 px-6 rounded-2xl font-semibold',
                    'bg-accent-red text-white',
                    'neumorphic-raised neumorphic-hover',
                    'transition-all duration-300',
                    'hover:bg-accent-red/90'
                  )}
                >
                  <CreditCard className="w-5 h-5" />
                  پرداخت و تکمیل سفارش
                </motion.button>

                {/* Delivery Info */}
                <p className="text-xs text-white/50 text-center">
                  زمان تحویل: ۳۰-۴۵ دقیقه | هزینه ارسال: رایگان
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;