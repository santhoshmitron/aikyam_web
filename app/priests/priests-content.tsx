'use client';

import { Calendar } from "@/components/ui/calendar"
import { MapPin, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Users, Star, GraduationCap, Globe, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PriestsContent() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const priests = [
    {
      id: 1,
      name: 'Pandit Sharma',
      temple: 'Shri Krishna Mandir',
      specialty: 'Krishna Bhakti',
      experience: '25 years',
      certifications: 'Vedic Scholar, Mantra Specialist',
      languages: ['Sanskrit', 'Hindi', 'English'],
      rating: 4.9,
      about: 'Expert in Krishna worship with deep knowledge of Bhagavad Gita and traditional Vrindavan rituals.',
    },
    {
      id: 2,
      name: 'Swami Kumar',
      temple: 'Kashi Vishwanath Temple',
      specialty: 'Shiva Meditation',
      experience: '30 years',
      certifications: 'Advaita Vedanta, Tantra Specialist',
      languages: ['Sanskrit', 'Hindi', 'Bengali'],
      rating: 4.8,
      about: 'Renowned meditation guide with expertise in Shiva worship and non-dual philosophy.',
    },
    {
      id: 3,
      name: 'Pandit Tripathy',
      temple: 'Jagannath Temple',
      specialty: 'Odia Rituals',
      experience: '22 years',
      certifications: 'Odisha Puja Specialist, Mantra Master',
      languages: ['Sanskrit', 'Hindi', 'Odia'],
      rating: 4.9,
      about: 'Custodian of authentic Odia temple traditions and Jagannath puja practices.',
    },
    {
      id: 4,
      name: 'Dr. Rajesh Iyer',
      temple: 'Meenakshi Temple',
      specialty: 'Dravidian Traditions',
      experience: '28 years',
      certifications: 'Classical Tamil Scholar, Agama Expert',
      languages: ['Sanskrit', 'Tamil', 'Telugu', 'English'],
      rating: 4.8,
      about: 'Expert in Dravidian temple architecture and classical Tamil Shaiva traditions.',
    },
    {
      id: 5,
      name: 'Swami Ananda',
      temple: 'Vaishno Devi Temple',
      specialty: 'Shakti Worship',
      experience: '26 years',
      certifications: 'Devi Worship Expert, Tantra Scholar',
      languages: ['Sanskrit', 'Hindi', 'Punjabi'],
      rating: 4.9,
      about: 'Devoted to Goddess worship with expertise in Durga Saptashati and ritual practices.',
    },
    {
      id: 6,
      name: 'Pandit Venkatesh',
      temple: 'Tirupati Balaji Temple',
      specialty: 'Vaishnava Philosophy',
      experience: '32 years',
      certifications: 'Sri Vaishnava Scholar, Vedantic Master',
      languages: ['Sanskrit', 'Telugu', 'Tamil', 'English'],
      rating: 4.8,
      about: 'Leading authority on Sri Vaishnava philosophy and Lord Venkateswara worship.',
    },
    {
      id: 7,
      name: 'Swami Govind',
      temple: 'Sri Ranganathaswamy Temple',
      specialty: 'Vedic Rituals',
      experience: '29 years',
      certifications: 'Vedic Ritual Expert, Yajnakarma Specialist',
      languages: ['Sanskrit', 'Tamil', 'Kannada', 'English'],
      rating: 4.7,
      about: 'Expert in elaborate Vedic ceremonies and traditional puja methodologies.',
    },
    {
      id: 8,
      name: 'Pandit Arun',
      temple: 'Golden Temple',
      specialty: 'Sikh Spirituality',
      experience: '24 years',
      certifications: 'Sikh Scripture Expert, Kirtan Master',
      languages: ['Punjabi', 'Hindi', 'English'],
      rating: 4.8,
      about: 'Devoted to Sikh traditions with expertise in Gurbani recitation and spiritual guidance.',
    },
  ];

  const specialties = [
    { id: 'all', label: 'All' },
    { id: 'Krishna Bhakti', label: 'Krishna Bhakti' },
    { id: 'Shiva Meditation', label: 'Shiva Meditation' },
    { id: 'Odia Rituals', label: 'Odia Rituals' },
    { id: 'Dravidian Traditions', label: 'Dravidian Traditions' },
    { id: 'Shakti Worship', label: 'Shakti Worship' },
    { id: 'Vaishnava Philosophy', label: 'Vaishnava Philosophy' },
    { id: 'Vedic Rituals', label: 'Vedic Rituals' },
    { id: 'Sikh Spirituality', label: 'Sikh Spirituality' },
  ];

  const filteredPriests = priests.filter((priest) => selectedSpecialty === 'all' || priest.specialty === selectedSpecialty);

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
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">Verified Priests</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                500+ certified and experienced priests dedicated to preserving authentic spiritual traditions and leading daily ceremonies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Priests Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Priests</h2>
              <p className="text-lg text-gray-600 font-light">Experts in their respective traditions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {priests.map((priest, index) => (
                <motion.div
                  key={priest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">{priest.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{priest.temple}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-light text-gray-700">{priest.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4 pb-4 border-b border-purple-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Flame className="w-4 h-4 text-purple-600" />
                      <span className="font-light">{priest.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <span className="font-light">{priest.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 font-light mb-4 leading-relaxed">{priest.about}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {priest.certifications.split(',').map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">
                          {cert.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {priest.languages.map((lang, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gradient-to-r from-purple-100 to-amber-100 rounded text-xs text-gray-700">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-light rounded-full py-2">
                    Watch Their Ceremonies in App
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Priest Qualifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Priest Qualifications</h2>
              <p className="text-lg text-gray-600 font-light">Our rigorous verification process ensures authenticity</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Award,
                  title: 'Verified Credentials',
                  description: 'All priests undergo thorough background verification and credential authentication.',
                },
                {
                  icon: BookOpen,
                  title: 'Vedic Knowledge',
                  description: 'Deep understanding of Vedas, Upanishads, and scriptural traditions.',
                },
                {
                  icon: GraduationCap,
                  title: 'Continuous Learning',
                  description: 'Regular participation in spiritual seminars and advanced training programs.',
                },
                {
                  icon: Users,
                  title: 'Community Recognition',
                  description: 'Respected within their temple communities with years of dedicated service.',
                },
                {
                  icon: Globe,
                  title: 'Cultural Expertise',
                  description: 'Masters of regional traditions and authentic ritual practices.',
                },
                {
                  icon: Heart,
                  title: 'Spiritual Dedication',
                  description: 'Genuine commitment to serving devotees with authentic spiritual guidance.',
                },
              ].map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-100"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-amber-500 rounded-lg w-fit mb-4">
                    <qual.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">{qual.title}</h3>
                  <p className="text-gray-600 font-light">{qual.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Priest Specializations</h2>
              <p className="text-lg text-gray-600 font-light">Experts in different spiritual traditions</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { emoji: '🕉️', name: 'Shiva Worship', count: '85+' },
                { emoji: '🙏', name: 'Krishna Bhakti', count: '65+' },
                { emoji: '👑', name: 'Devi Worship', count: '75+' },
                { emoji: '📿', name: 'Vedantic', count: '55+' },
                { emoji: '🎵', name: 'Chant & Kirtan', count: '90+' },
                { emoji: '🧘', name: 'Meditation', count: '70+' },
                { emoji: '✨', name: 'Tantra', count: '45+' },
                { emoji: '🌊', name: 'Rituals', count: '100+' },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-amber-50 rounded-xl border border-purple-200 text-center"
                >
                  <div className="text-4xl mb-3">{spec.emoji}</div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">{spec.name}</h3>
                  <p className="text-2xl font-light text-purple-600">{spec.count} Priests</p>
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
              <h2 className="text-4xl md:text-5xl font-light mb-6">Connect with 500+ Verified Priests</h2>
              <p className="text-xl font-light text-purple-100 mb-8 max-w-2xl mx-auto">
                Watch authentic ceremonies led by experts in their respective traditions. Download Aikyam today.
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
