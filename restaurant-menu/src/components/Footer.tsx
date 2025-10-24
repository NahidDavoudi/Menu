'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { restaurantInfo } from '@/data/menuData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      label: 'اینستاگرام',
      href: '#',
      color: 'hover:text-pink-400',
      username: restaurantInfo.socialMedia.instagram,
    },
    {
      icon: MessageCircle,
      label: 'تلگرام',
      href: '#',
      color: 'hover:text-blue-400',
      username: restaurantInfo.socialMedia.telegram,
    },
    {
      icon: Send,
      label: 'واتساپ',
      href: '#',
      color: 'hover:text-green-400',
      username: restaurantInfo.socialMedia.whatsapp,
    },
  ];

  const workingHours = [
    { day: 'شنبه تا چهارشنبه', time: '۱۲:۰۰ - ۲۳:۰۰' },
    { day: 'پنج‌شنبه و جمعه', time: '۱۲:۰۰ - ۲۴:۰۰' },
  ];

  const quickLinks = [
    { label: 'خانه', href: '#home' },
    { label: 'منو', href: '#menu' },
    { label: 'درباره ما', href: '#about' },
    { label: 'تماس با ما', href: '#contact' },
    { label: 'سفارش آنلاین', href: '#order' },
  ];

  return (
    <footer id="contact" className="relative bg-dark-400 border-t border-dark-100">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Restaurant Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{restaurantInfo.logo}</span>
              <h3 className="text-2xl font-bold text-white">
                {restaurantInfo.name}
              </h3>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              {restaurantInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="p-2 rounded-xl bg-dark-300 border border-dark-100">
                  <MapPin className="w-5 h-5 text-accent-red" />
                </div>
                <span>{restaurantInfo.address}</span>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="p-2 rounded-xl bg-dark-300 border border-dark-100">
                  <Phone className="w-5 h-5 text-accent-red" />
                </div>
                <span>{restaurantInfo.phone}</span>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="p-2 rounded-xl bg-dark-300 border border-dark-100">
                  <Mail className="w-5 h-5 text-accent-red" />
                </div>
                <span>{restaurantInfo.email}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={cn(
                      'text-white/70 hover:text-accent-red',
                      'transition-all duration-300',
                      'flex items-center gap-2'
                    )}
                  >
                    <span className="w-2 h-2 bg-accent-red rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent-red" />
              ساعات کاری
            </h4>
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={cn(
                    'p-3 rounded-xl',
                    'bg-dark-300 border border-dark-100',
                    'neumorphic-inset'
                  )}
                >
                  <div className="text-white font-medium text-sm">
                    {schedule.day}
                  </div>
                  <div className="text-accent-red font-bold">
                    {schedule.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-dark-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-right">
                ما را دنبال کنید
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-xl',
                      'bg-dark-300 border border-dark-100',
                      'text-white/70 hover:text-white',
                      'neumorphic-raised neumorphic-hover',
                      'transition-all duration-300',
                      social.color
                    )}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm hidden sm:block">{social.username}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                عضویت در خبرنامه
              </h4>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="ایمیل شما..."
                  className={cn(
                    'flex-1 px-4 py-3 rounded-xl',
                    'bg-dark-300 border border-dark-100',
                    'text-white placeholder:text-white/50',
                    'focus:outline-none focus:border-accent-red/50',
                    'transition-all duration-300'
                  )}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'px-6 py-3 rounded-xl',
                    'bg-accent-red text-white font-medium',
                    'hover:bg-accent-red/90',
                    'transition-all duration-300',
                    'neumorphic-raised neumorphic-hover'
                  )}
                >
                  عضویت
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-dark-100 text-center"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} {restaurantInfo.name}. تمامی حقوق محفوظ است.
          </p>
          <p className="text-white/30 text-xs mt-2">
            طراحی شده با ❤️ برای بهترین تجربه غذایی
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-red/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;