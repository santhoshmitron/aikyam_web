'use client';

import React from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, History, Globe, Award, BookOpen, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TemplesContent() {
  const temples = [
    {
      id: 1,
      name: 'Shri Krishna Mandir',
      deity: 'Sri Krishna',
      location: 'Vrindavan, Uttar Pradesh',
      rating: 4.9,
      priests: 12,
      established: '1500 AD',
      ceremonies: ['Morning Aarti', 'Afternoon Puja', 'Evening Aarti'],
      about: 'One of the most sacred temples dedicated to Lord Krishna with daily darshans and authentic Vrindavan traditions.',
      accent: 'from-orange-400 to-rose-400',
    },
    {
      id: 2,
      name: 'Kashi Vishwanath Temple',
      deity: 'Lord Shiva',
      location: 'Varanasi, Uttar Pradesh',
      rating: 4.8,
      priests: 25,
      established: '1780 AD',
      ceremonies: ['Mangala Aarti', 'Ganga Aarti', 'Abhisheka'],
      about: 'Ancient temple with immense spiritual significance, located on the banks of the holy Ganges.',
      accent: 'from-blue-400 to-indigo-400',
    },
    {
      id: 3,
      name: 'Jagannath Temple',
      deity: 'Lord Jagannath',
      location: 'Puri, Odisha',
      rating: 4.9,
      priests: 30,
      established: '12th Century',
      ceremonies: ['Mangala Aarti', 'Bhog Offering', 'Sandhya Puja'],
      about: 'One of the four sacred Dhams, home to the famous Jagannath Yatra with rich Odia traditions.',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      id: 4,
      name: 'Meenakshi Temple',
      deity: 'Goddess Meenakshi',
      location: 'Madurai, Tamil Nadu',
      rating: 4.8,
      priests: 28,
      established: '6th Century',
      ceremonies: ['Surya Puja', 'Meenakshi Abhisheka', 'Night Deepa Arti'],
      about: 'Legendary temple with intricate architecture and Dravidian traditions spanning centuries.',
      accent: 'from-emerald-400 to-teal-500',
    },
    {
      id: 5,
      name: 'Vaishno Devi Temple',
      deity: 'Goddess Durga',
      location: 'Jammu, Kashmir',
      rating: 4.9,
      priests: 35,
      established: 'Ancient',
      ceremonies: ['Morning Aarti', 'Afternoon Prayers', 'Evening Aarti'],
      about: 'Sacred shrine to Goddess Durga with one of the highest pilgrim footfalls in India.',
      accent: 'from-red-400 to-rose-500',
    },
    {
      id: 6,
      name: 'Sri Ranganathaswamy Temple',
      deity: 'Lord Vishnu',
      location: 'Srirangam, Tamil Nadu',
      rating: 4.7,
      priests: 40,
      established: '10th Century',
      ceremonies: ['Kalyana Aarti', 'Prabandham Recitation', 'Seva Services'],
      about: 'Largest temple in India with exquisite architectural beauty and traditional Sri Vaishnava practices.',
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      id: 7,
      name: 'Tirupati Balaji Temple',
      deity: 'Lord Venkateswara',
      location: 'Tirupati, Andhra Pradesh',
      rating: 4.8,
      priests: 50,
      established: '10th Century',
      ceremonies: ['Suprabhata Seva', 'Abhisheka Seva', 'Archana Seva'],
      about: 'Richest temple in the world with ancient Dravidian architecture and daily rituals.',
      accent: 'from-yellow-400 to-amber-500',
    },
    {
      id: 8,
      name: 'Golden Temple',
      deity: 'Sikh Religious Center',
      location: 'Amritsar, Punjab',
      rating: 4.9,
      priests: 20,
      established: '1601 AD',
      ceremonies: ['Palki Sahib', 'Kirtan', 'Langar Service'],
      about: 'Holiest Gurudwara for Sikhs, known for its spiritual significance and free community meals.',
      accent: 'from-yellow-300 to-amber-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent -z-10" />
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">Sacred Temples</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Discover 500+ verified temples across India offering daily live darshan. Each temple is carefully vetted for authenticity and spiritual significance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Temples Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Temples</h2>
              <p className="text-lg text-gray-600 font-light">Each with unique traditions and daily ceremonies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {temples.map((temple, index) => (
                <motion.div
                  key={temple.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-white rounded-3xl border border-purple-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Decorative Header */}
                  <div className={`h-3 bg-gradient-to-r ${temple.accent}`} />
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${temple.accent} bg-opacity-10`}>
                            <Flame className="w-5 h-5 text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-medium text-gray-900 tracking-tight">{temple.name}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-light">{temple.location}</span>
                        </div>
                      </div>
                      <div className={`px-4 py-1.5 bg-gradient-to-r ${temple.accent} text-white rounded-full text-xs font-medium shadow-sm`}>
                        {temple.deity}
                      </div>
                    </div>

                    <div className="relative mb-8">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-100 to-transparent rounded-full" />
                      <p className="text-gray-600 font-light leading-relaxed italic pl-4">
                        "{temple.about}"
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-purple-50/50 rounded-2xl border border-purple-100/50">
                      <div className="text-center">
                        <History className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Established</p>
                        <span className="text-sm font-medium text-gray-700">{temple.established}</span>
                      </div>
                      <div className="text-center border-x border-purple-100">
                        <Users className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Priests</p>
                        <span className="text-sm font-medium text-gray-700">{temple.priests}</span>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Rating</p>
                        <span className="text-sm font-medium text-gray-700">★ {temple.rating}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <p className="text-sm font-medium text-gray-800">Daily Ceremonies</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {temple.ceremonies.map((ceremony, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-white rounded-full text-xs text-purple-700 border border-purple-100 shadow-sm hover:border-purple-300 transition-colors cursor-default"
                          >
                            {ceremony}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Decoration */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${temple.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-tl-full -mr-16 -mb-16`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Temple Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Temple Categories</h2>
              <p className="text-lg text-gray-600 font-light">Explore temples dedicated to different deities</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: '🕉️', title: 'Shiva Temples', count: '120+', description: 'Dedicated to Lord Shiva and Shakti' },
                { icon: '🙏', title: 'Vishnu Temples', count: '85+', description: 'Lord Vishnu and avatars' },
                { icon: '💛', title: 'Devi Temples', count: '95+', description: 'Goddess Durga and forms' },
                { icon: '🕯️', title: 'Ancient Temples', count: '200+', description: 'Heritage sites and Dhams' },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-100 text-center"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-light text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-2xl font-light text-purple-600 mb-2">{category.count}</p>
                  <p className="text-sm text-gray-600 font-light">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Temples Special */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Verified Temples</h2>
              <p className="text-lg text-gray-600 font-light">Why our temples stand out</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Verified Authenticity',
                  description: 'All temples are verified for authentic traditions and proper rituals.',
                },
                {
                  icon: Users,
                  title: 'Certified Priests',
                  description: 'Experienced priests with proper credentials and spiritual knowledge.',
                },
                {
                  icon: Globe,
                  title: 'Daily Live Streaming',
                  description: 'Real-time access to ceremonies from verified temple sources.',
                },
                {
                  icon: History,
                  title: 'Rich Heritage',
                  description: 'Temples with centuries of history and spiritual significance.',
                },
                {
                  icon: BookOpen,
                  title: 'Sacred Practices',
                  description: 'Following authentic Vedic and traditional practices.',
                },
                {
                  icon: Flame,
                  title: 'Community Support',
                  description: 'Active spiritual communities and devotee networks.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl border border-purple-200"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-amber-500 rounded-lg w-fit mb-4">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">Connect with 500+ Temples</h2>
              <p className="text-xl font-light text-purple-100 mb-8 max-w-2xl mx-auto">
                Watch live darshan from verified temples across India. Download Aikyam today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-purple-900 font-semibold px-8 py-3 rounded-full">
                  Download for Android
                </Button>
                <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-purple-900 font-semibold px-8 py-3 rounded-full">
                  Download for iOS
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
