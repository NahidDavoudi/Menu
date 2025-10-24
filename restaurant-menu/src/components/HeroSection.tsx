'use client';

import { motion } from 'framer-motion';
import { ChefHat, Star, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const features = [
    { icon: ChefHat, text: 'شف مجرب', color: 'text-yellow-400' },
    { icon: Star, text: 'کیفیت درجه یک', color: 'text-accent-red' },
    { icon: Clock, text: 'سرویس سریع', color: 'text-green-400' },
    { icon: MapPin, text: 'محل دنج', color: 'text-blue-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Glassmorphism Effect */}
      <div className="absolute inset-0">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')`,
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Glassmorphic Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-red/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              'text-4xl md:text-6xl lg:text-7xl font-bold',
              'text-white text-glow',
              'leading-tight'
            )}
          >
            <span className="block mb-2">🍽️ رستوران مدرن</span>
            <span className="text-2xl md:text-4xl lg:text-5xl text-accent-red font-normal">
              طعم واقعی لذت
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            بهترین غذاهای ایتالیایی و بین‌المللی را با کیفیت درجه یک و در محیطی دنج و مدرن تجربه کنید
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={cn(
                  'flex items-center space-x-3 space-x-reverse',
                  'px-4 py-3 rounded-xl',
                  'bg-white/10 border border-white/20 backdrop-blur-sm',
                  'hover:bg-white/20 hover:border-white/30',
                  'transition-all duration-300'
                )}
              >
                <feature.icon className={cn('w-5 h-5', feature.color)} />
                <span className="text-white font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-8 py-4 rounded-2xl font-semibold text-lg',
                'bg-accent-red text-white',
                'neumorphic-raised neumorphic-hover',
                'transition-all duration-300',
                'hover:bg-accent-red/90',
                'border border-accent-red/30'
              )}
            >
              🍽️ مشاهده منو
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-8 py-4 rounded-2xl font-semibold text-lg',
                'bg-white/10 text-white border border-white/30',
                'backdrop-blur-sm',
                'hover:bg-white/20 hover:border-white/50',
                'transition-all duration-300'
              )}
            >
              📖 درباره ما
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">اسکرول کنید</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-2 border-accent-red rounded-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-2 border-yellow-400 rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;