'use client';

import React, { useState } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { Heart, Sun, Moon, Sparkles, Gift, Lightbulb, Shield, Brain, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Check, Copy, Share2, Zap } from 'lucide-react'; // Import missing icons

const blessings = [
  { id: 1, image: <Sun />, quote: 'May you find peace in the sun.', deity: 'Sun God', temple: 'Temple of Light', liked: 100, shared: 50 },
  { id: 2, image: <Moon />, quote: 'May you shine brightly in the night.', deity: 'Moon Goddess', temple: 'Temple of Night', liked: 80, shared: 40 },
  // Add more blessings here
];

const priestBlessings = [
  { id: 1, priest: 'Father John', temple: 'St. Mary Church', blessing: 'May God bless you.', experience: '20 years' },
  { id: 2, priest: 'Mother Jane', temple: 'Holy Trinity Church', blessing: 'May peace be with you.', experience: '15 years' },
  // Add more priest blessings here
];

export default function DailyBlessingsContent() {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const blessings = [
    {
      time: 'Morning',
      icon: Sun,
      title: 'Morning Mantras',
      description: 'Start your day with sacred chants and mantras from verified priests. Receive personalized blessings based on your zodiac sign.',
      examples: ['Gayatri Mantra', 'Surya Namaskar', 'Daily Affirmations'],
    },
    {
      time: 'Afternoon',
      icon: Sparkles,
      title: 'Midday Inspirations',
      description: 'Receive uplifting spiritual messages and wisdom quotes during your work hours to maintain positive energy.',
      examples: ['Bhagavad Gita Verses', 'Spiritual Insights', 'Daily Wisdom'],
    },
    {
      time: 'Evening',
      icon: Moon,
      title: 'Evening Meditations',
      description: 'Wind down with guided meditations and evening prayers for peaceful sleep and spiritual reflection.',
      examples: ['Guided Meditation', 'Evening Aarti', 'Sleep Blessings'],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Spiritual Connection',
      description: 'Daily touch with sacred traditions and divine presence in your life.',
    },
    {
      icon: Brain,
      title: 'Mental Peace',
      description: 'Reduce stress and anxiety through guided meditations and mantras.',
    },
    {
      icon: Lightbulb,
      title: 'Daily Wisdom',
      description: 'Gain insights from ancient scriptures and spiritual teachings.',
    },
    {
      icon: Gift,
      title: 'Personalized Blessings',
      description: 'Receive customized blessings based on your preferences and spiritual needs.',
    },
    {
      icon: Shield,
      title: 'Positive Energy',
      description: 'Start and end each day with powerful mantras for protection and positivity.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Growth',
      description: 'Evolve spiritually through consistent daily spiritual practices.',
    },
  ];

  const features = [
    {
      title: 'Personalized Delivery',
      description: 'Blessings delivered at your preferred time - morning, afternoon, or evening.',
    },
    {
      title: 'Verified Priests',
      description: 'All blessings and mantras are from certified and experienced spiritual leaders.',
    },
    {
      title: 'Multiple Languages',
      description: 'Receive blessings in your preferred language - Sanskrit, Hindi, English, and regional languages.',
    },
    {
      title: 'Interactive Sharing',
      description: 'Share daily blessings with family and friends to spread positive energy.',
    },
    {
      title: 'Blessing Archive',
      description: 'Access past blessings anytime for repeated reading and meditation.',
    },
    {
      title: 'Zodiac Customization',
      description: 'Get blessings and mantras specific to your astrological sign.',
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
                Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">Blessings</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Receive personalized spiritual blessings, sacred mantras, and daily wisdom delivered directly to you every morning, afternoon, and evening.
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
                  src="/images/image1.png"
                  alt="Daily Blessings Feature"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Times of Day */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Blessings All Day Long</h2>
              <p className="text-lg text-gray-600 font-light">Stay connected throughout your day with spiritual guidance</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blessings.map((blessing, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-shadow"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl w-fit mb-4">
                    <blessing.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{blessing.title}</h3>
                  <p className="text-gray-600 font-light mb-4 leading-relaxed">{blessing.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Examples:</p>
                    <ul className="space-y-1">
                      {blessing.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Benefits of Daily Blessings</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-100"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-amber-500 rounded-lg w-fit mb-4">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 font-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Smart Features</h2>
              <p className="text-lg text-gray-600 font-light">Everything you need for your daily spiritual practice</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl border border-purple-200"
                >
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Get Daily Blessings</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Download Aikyam',
                  description: 'Get the app from Android or iOS app store.',
                },
                {
                  step: 2,
                  title: 'Set Your Preferences',
                  description: 'Choose your preferred times and blessing types - morning, afternoon, or evening.',
                },
                {
                  step: 3,
                  title: 'Enable Notifications',
                  description: 'Get notifications when your daily blessings are ready to read.',
                },
                {
                  step: 4,
                  title: 'Start Your Journey',
                  description: 'Begin receiving daily blessings, mantras, and spiritual wisdom instantly.',
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
              <h2 className="text-4xl md:text-5xl font-light mb-6">Receive Blessings Daily</h2>
              <p className="text-xl font-light text-purple-100 mb-8 max-w-2xl mx-auto">
                Never miss a moment of spiritual connection. Download Aikyam now.
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
