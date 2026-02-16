'use client';

import React from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { Play, MapPin, Clock, Users, Zap, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LiveDarshanContent() {
  const features = [
    {
      icon: Play,
      title: 'Real-Time Streaming',
      description: 'Watch live aarti and puja ceremonies from verified temples across India in real-time, whenever you want.',
    },
    {
      icon: Users,
      title: 'Multiple Temples',
      description: 'Connect with 500+ verified temples offering daily live darshan schedules. Choose from various traditions and rituals.',
    },
    {
      icon: Globe,
      title: 'Accessible Anywhere',
      description: 'Experience sacred rituals from your home. No geographical barriers to spiritual connection.',
    },
    {
      icon: Award,
      title: 'Verified Priests',
      description: 'All ceremonies are led by verified priests maintaining authentic traditions and proper protocols.',
    },
    {
      icon: Clock,
      title: 'Multiple Timings',
      description: 'Various temples offer morning, afternoon, and evening ceremonies to fit your daily schedule.',
    },
    {
      icon: Zap,
      title: 'HD Quality',
      description: 'Crystal clear video and audio for a more immersive spiritual experience from your device.',
    },
  ];

  const temples = [
    {
      name: 'Shri Krishna Mandir',
      location: 'Vrindavan, Uttar Pradesh',
      deity: 'Sri Krishna',
      ceremonies: ['Morning Aarti', 'Afternoon Puja', 'Evening Aarti'],
      description: 'One of the most sacred Krishna temples with daily live aarti ceremonies featuring traditional rituals.',
    },
    {
      name: 'Sri Veerabhadra Temple',
      location: 'Bangalore, Karnataka',
      deity: 'Lord Veerabhadra',
      ceremonies: ['Morning Puja', 'Abhisheka', 'Evening Aarti'],
      description: 'Dedicated to fierce manifestation of Shiva, offering powerful spiritual experiences daily.',
    },
    {
      name: 'Jagannath Temple',
      location: 'Puri, Odisha',
      deity: 'Lord Jagannath',
      ceremonies: ['Mangala Aarti', 'Bhog Offering', 'Sandhya Puja'],
      description: 'One of the four Dhams, streaming authentic Odia rituals and sacred ceremonies.',
    },
    {
      name: 'Meenakshi Temple',
      location: 'Madurai, Tamil Nadu',
      deity: 'Goddess Meenakshi',
      ceremonies: ['Surya Puja', 'Meenakshi Abhisheka', 'Night Deepa Arti'],
      description: 'Legendary temple with intricate rituals following Dravidian traditions spanning centuries.',
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
                Live Darshan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">Anytime</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Watch authentic temple ceremonies from verified priests in real-time. Experience spiritual connection without geographical barriers.
              </p>
            </motion.div>

            {/* Feature image mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-16"
            >
              <div className="max-w-2xl mx-auto">
                <img
                  src="/images/image2.png"
                  alt="Live Darshan Feature"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Why Choose Live Darshan</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Temples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Temples</h2>
              <p className="text-lg text-gray-600 font-light">Experience live ceremonies from these sacred temples</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {temples.map((temple, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">{temple.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{temple.location}</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-amber-500 text-white rounded-full text-sm font-light">
                      {temple.deity}
                    </div>
                  </div>

                  <p className="text-gray-600 font-light mb-4 leading-relaxed">{temple.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-gray-700">Daily Ceremonies:</p>
                    <div className="flex flex-wrap gap-2">
                      {temple.ceremonies.map((ceremony, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200"
                        >
                          {ceremony}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-light rounded-full py-2">
                    Download App to Watch
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">How It Works</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Download the App',
                  description: 'Get the Aikyam app on Android or iOS from your preferred app store.',
                },
                {
                  step: 2,
                  title: 'Browse Temples',
                  description: 'Explore 500+ verified temples offering live darshan ceremonies daily.',
                },
                {
                  step: 3,
                  title: 'Select Your Time',
                  description: 'Choose from multiple ceremony times: morning, afternoon, or evening.',
                },
                {
                  step: 4,
                  title: 'Watch Live',
                  description: 'Experience authentic rituals led by verified priests in real-time.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-amber-500 text-white font-light text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-2xl font-light text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-light">{item.description}</p>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-light mb-6">Start Your Spiritual Journey</h2>
              <p className="text-xl font-light text-purple-100 mb-8 max-w-2xl mx-auto">
                Experience live darshan from 500+ verified temples. Download Aikyam today.
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
