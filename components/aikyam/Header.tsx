'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
            
            <h1 className={`hidden sm:block text-lg sm:text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Aikyam
            </h1>
          </Link>

          {/* Desktop state */}
          <div className="hidden lg:block text-sm font-medium text-purple-100/90">
            Home
          </div>

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
            <motion.div
              className="text-white/90 py-3 px-4 rounded-lg bg-white/10 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.05 }}
            >
              Home
            </motion.div>
          </nav>
        </motion.div>
      </motion.div>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-20" />
    </>
  );
}
