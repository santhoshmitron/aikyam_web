'use client';

import React, { useState } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, Search } from 'lucide-react';

export default function BlogContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Sacred Significance of Daily Puja Rituals',
      excerpt: 'Discover how daily puja rituals connect us to the divine and bring spiritual harmony to our lives.',
      category: 'spirituality',
      author: 'Pandit Sharma',
      date: 'January 25, 2026',
      readTime: '5 min read',
      image: '🙏',
    },
    {
      id: 2,
      title: 'Understanding the Four Vedas: A Beginner\'s Guide',
      excerpt: 'An introduction to the ancient Vedic scriptures and their relevance in modern spiritual practice.',
      category: 'education',
      author: 'Dr. Gupta',
      date: 'January 23, 2026',
      readTime: '8 min read',
      image: '📚',
    },
    {
      id: 3,
      title: 'Krishna Consciousness: Path to Inner Peace',
      excerpt: 'Explore the teachings of Lord Krishna and how Bhakti yoga transforms our relationship with the divine.',
      category: 'spirituality',
      author: 'Swami Kumar',
      date: 'January 20, 2026',
      readTime: '7 min read',
      image: '✨',
    },
    {
      id: 4,
      title: 'Temple Architecture and Its Spiritual Meaning',
      excerpt: 'Understand the sacred geometry and symbolism behind Hindu temple designs.',
      category: 'temples',
      author: 'Pt. Nayak',
      date: 'January 18, 2026',
      readTime: '6 min read',
      image: '🕉️',
    },
    {
      id: 5,
      title: 'Meditation Techniques from Ancient Hindu Philosophy',
      excerpt: 'Learn proven meditation methods that have been practiced for thousands of years.',
      category: 'practices',
      author: 'Swami Anand',
      date: 'January 15, 2026',
      readTime: '9 min read',
      image: '🧘',
    },
    {
      id: 6,
      title: 'Celebrating Indian Festivals: Spiritual Significance',
      excerpt: 'Discover the deeper meaning behind major Hindu festivals and their role in spiritual life.',
      category: 'culture',
      author: 'Pandit Tripathy',
      date: 'January 12, 2026',
      readTime: '6 min read',
      image: '🎉',
    },
    {
      id: 7,
      title: 'The Power of Mantra: Sound and Spirituality',
      excerpt: 'Explore how sacred mantras influence our consciousness and connect us to higher realms.',
      category: 'practices',
      author: 'Swami Kumar',
      date: 'January 10, 2026',
      readTime: '7 min read',
      image: '🎵',
    },
    {
      id: 8,
      title: 'Yoga and Hinduism: More Than Physical Exercise',
      excerpt: 'Understand how yoga is an integral part of Hindu spirituality and personal transformation.',
      category: 'practices',
      author: 'Dr. Verma',
      date: 'January 8, 2026',
      readTime: '8 min read',
      image: '🧘‍♀️',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'spirituality', label: 'Spirituality' },
    { id: 'education', label: 'Education' },
    { id: 'practices', label: 'Practices' },
    { id: 'temples', label: 'Temples' },
    { id: 'culture', label: 'Culture' },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === 'all' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-light mb-4">Aikyam Blog</h1>
              <p className="text-lg text-purple-200 font-light">
                Spiritual wisdom, ancient teachings, and modern insights for your journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-purple-200 rounded-full focus:border-purple-500 focus:outline-none font-light"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-light transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-purple-900 shadow-lg'
                      : 'bg-white border-2 border-purple-200 text-purple-900 hover:border-purple-400'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-purple-100 cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="text-7xl"
                      >
                        {post.image}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold capitalize">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 font-light">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 font-light text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 font-light pt-4 border-t border-purple-100">
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>

                      <button className="w-full mt-4 flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-light text-sm">
                        Read Article <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-2xl text-gray-600 font-light">No articles found</p>
                <p className="text-gray-500 font-light mt-2">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light mb-4">Stay Updated</h2>
              <p className="text-lg text-purple-200 font-light mb-8">
                Subscribe to our newsletter for weekly spiritual insights and updates
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 font-light focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-purple-900 font-semibold rounded-full transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
