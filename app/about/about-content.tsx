'use client';

import React from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { Heart, Target, Users, Sparkles } from 'lucide-react';

export default function AboutContent() {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every ritual is led by verified priests who carry centuries of tradition.',
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making spiritual connection available to devotees worldwide, anytime, anywhere.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Uniting temples, priests, and devotees in one sacred digital ecosystem.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Using technology to preserve and revive ancient spiritual traditions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              About Aikyam
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />
            <p className="text-2xl text-gray-600 font-light leading-relaxed">
              Bridging the ancient and the modern, the sacred and the digital.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                  <p>
                    Aikyam was born from a simple observation: millions of Indians yearn for spiritual connection,
                    but geographical and temporal barriers prevent them from experiencing authentic temple rituals and priest-led guidance.
                  </p>
                  <p>
                    We set out to solve this not by replacing tradition, but by amplifying it. Our platform brings verified priests,
                    ancient rituals, and divine connection directly to devotees' devices.
                  </p>
                  <p>
                    Today, Aikyam stands as India's only priest-led spiritual ecosystem, uniting temples across Bharat with millions of believers worldwide.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-12 text-center">
                <p className="text-7xl mb-4">🕉️</p>
                <p className="text-purple-700 font-light text-lg">
                  "Where tradition meets technology, and faith finds its voice."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <p className="text-5xl font-light mb-3">500+</p>
                <p className="text-lg font-light text-purple-200">Verified Priests</p>
              </div>
              <div className="p-8 border-l border-r border-white/20">
                <p className="text-5xl font-light mb-3">1000+</p>
                <p className="text-lg font-light text-purple-200">Temples Connected</p>
              </div>
              <div className="p-8">
                <p className="text-5xl font-light mb-3">100K+</p>
                <p className="text-lg font-light text-purple-200">Devotees Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl">
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  To democratize spiritual connection by uniting temples, priests, and devotees through an authentic,
                  technology-enabled platform that preserves and celebrates Hindu traditions for generations to come.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl">
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  A world where every devotee, regardless of location or circumstance, can experience authentic
                  temple rituals, spiritual guidance, and divine connection on their own terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
