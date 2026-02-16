'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Live Darshan', href: '/live-darshan' },
    { label: 'Daily Blessings', href: '/daily-blessings' },
    { label: 'Temples', href: '/temples' },
    { label: 'Priests', href: '/priests' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header Container */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-b from-purple-900 to-transparent'
        }`}
        initial={false}
        animate={{
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="text-3xl sm:text-4xl cursor-pointer"
            >
              ॐ
            </motion.div>
            <h1 className={`hidden sm:block text-lg sm:text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Aikyam
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.label} whileHover={{ y: -2 }}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-purple-600 ${
                    isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:shadow-lg transition-all duration-300"
          >
            Download App
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-purple-100' : 'hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 z-40"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 backdrop-blur-xl border-b border-white/10 shadow-xl"
          animate={{
            paddingTop: isMobileMenuOpen ? '80px' : '0px',
            paddingBottom: isMobileMenuOpen ? '20px' : '0px',
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-3 px-6 pb-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-yellow-400 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Mobile CTA Button */}
            <motion.button
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 font-medium hover:shadow-lg transition-all mt-4"
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button>
          </nav>
        </motion.div>
      </motion.div>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-20" />
    </>
  );
}
