'use client';

import React, { useState } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What is Aikyam?',
          a: 'Aikyam is India\'s first priest-led spiritual ecosystem that unites temples, verified priests, and devotees through authentic digital darshans, personalized poojas, and sacred rituals. We bring the spiritual experience directly to your device while maintaining the authenticity of Hindu traditions.',
        },
        {
          q: 'How do I get started with Aikyam?',
          a: 'Simply download the Aikyam app on Android or iOS, create an account, and explore live darshans, temples, priests, and daily blessings. No sign-in is required for basic browsing - you only need an account for booking or personalized services.',
        },
        {
          q: 'Is Aikyam free to use?',
          a: 'Yes! Aikyam is free to browse temples, priests, and watch live darshans. Premium features like personalized poojas and private consultations with priests may require payment.',
        },
      ],
    },
    {
      category: 'Live Darshan',
      questions: [
        {
          q: 'What is Live Darshan?',
          a: 'Live Darshan is a real-time spiritual experience where you can watch authentic temple rituals and ceremonies being performed by verified priests. It brings the sacred experience of temple darshan directly to your device.',
        },
        {
          q: 'Can I join a live darshan anytime?',
          a: 'Live Darshans are scheduled at specific times based on the temple\'s daily rituals. You can check the upcoming schedule on the app and set reminders for your preferred darshans.',
        },
        {
          q: 'Do I need special equipment for live darshan?',
          a: 'No, you just need a smartphone with an internet connection. Our app is optimized for all devices, and you can enjoy live darshan anytime, anywhere.',
        },
      ],
    },
    {
      category: 'Priests & Verification',
      questions: [
        {
          q: 'How are priests verified?',
          a: 'All priests on Aikyam undergo a rigorous verification process including background checks, credential verification, experience assessment, and community reviews. They receive an official Aikyam certification badge.',
        },
        {
          q: 'Can I consult with a priest directly?',
          a: 'Yes! You can schedule consultations with verified priests through the app for personalized guidance, ritual planning, and spiritual counseling.',
        },
        {
          q: 'What qualifications do Aikyam priests have?',
          a: 'Our priests are experienced in various traditions, including Vedic scholarship, specific deity worship (Krishna, Shiva, Durga, etc.), ritual expertise, and spiritual counseling. Each priest\'s credentials are visible on their profile.',
        },
      ],
    },
    {
      category: 'Temples & Poojas',
      questions: [
        {
          q: 'Can I book a pooja through Aikyam?',
          a: 'Yes! You can browse available poojas, select a temple and priest of your choice, and book personalized poojas for any auspicious occasion or spiritual need.',
        },
        {
          q: 'How are temples selected for Aikyam?',
          a: 'We partner with authentic, registered temples that have a strong spiritual reputation and are committed to preserving traditional practices. All temples are verified and rated by devotees.',
        },
        {
          q: 'Can I view temple information before booking?',
          a: 'Absolutely! You can view detailed temple profiles including location, deity, priests, rituals, ratings, and devotee reviews. This helps you make an informed choice.',
        },
      ],
    },
    {
      category: 'Daily Blessings',
      questions: [
        {
          q: 'What are Daily Blessings?',
          a: 'Daily Blessings are sacred wisdom and spiritual guidance shared by verified priests every day. Each blessing includes a quote, the deity it relates to, and the temple it comes from.',
        },
        {
          q: 'Can I save my favorite blessings?',
          a: 'Yes! You can save, share, and revisit your favorite blessings anytime. Build your personal collection of spiritual wisdom for daily inspiration.',
        },
        {
          q: 'How are blessings selected?',
          a: 'Blessings are carefully selected from our network of verified priests and spiritual masters. Each blessing goes through quality checks to ensure authenticity and spiritual value.',
        },
      ],
    },
    {
      category: 'Technical & Privacy',
      questions: [
        {
          q: 'Is my personal information safe?',
          a: 'Yes, we use industry-standard encryption and security protocols to protect your data. Your information is never shared with third parties without your consent.',
        },
        {
          q: 'What are the app requirements?',
          a: 'Aikyam works on Android 8.0+ and iOS 13.0+. We recommend having a stable internet connection for the best experience.',
        },
        {
          q: 'How do I contact customer support?',
          a: 'You can reach our support team through the app\'s help section, email, or contact page. We typically respond within 24 hours.',
        },
      ],
    },
    {
      category: 'Community & Values',
      questions: [
        {
          q: 'Why doesn\'t Aikyam charge for basic darshan?',
          a: 'We believe in democratizing spiritual connection. Making basic features free ensures that every devotee, regardless of financial status, can experience authentic spirituality.',
        },
        {
          q: 'How does Aikyam preserve temple traditions?',
          a: 'We work exclusively with verified priests and authentic temples to ensure rituals and ceremonies maintain their traditional significance. Technology amplifies traditions, not replaces them.',
        },
        {
          q: 'Can I become a priest partner on Aikyam?',
          a: 'Yes! Experienced priests can apply to join our network. Visit the "Join Us" section to learn about priest partnership requirements and benefits.',
        },
      ],
    },
  ];

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
              <div className="flex justify-center mb-4">
                <HelpCircle className="w-12 h-12 text-yellow-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-light mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-purple-200 font-light max-w-2xl mx-auto">
                Find answers to common questions about Aikyam, our services, and how to get started
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((category, categoryIdx) => (
                <motion.div
                  key={categoryIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
                >
                  {/* Category Title */}
                  <h2 className="text-2xl font-light text-gray-900 mb-4">{category.category}</h2>

                  {/* Questions */}
                  <div className="space-y-3">
                    {category.questions.map((item, qIdx) => {
                      const isOpen = openIndex === `${categoryIdx}-${qIdx}`;
                      return (
                        <motion.div
                          key={qIdx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: qIdx * 0.05 }}
                          className="border-2 border-purple-200 rounded-xl overflow-hidden hover:border-purple-400 transition-colors"
                        >
                          <motion.button
                            onClick={() => setOpenIndex(isOpen ? null : `${categoryIdx}-${qIdx}`)}
                            className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-colors"
                          >
                            <span className="text-lg font-light text-gray-900 text-left">
                              {item.q}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0 ml-4" />
                            </motion.div>
                          </motion.button>

                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 bg-white border-t border-purple-100">
                              <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-lg text-gray-600 font-light mb-8">
                Can't find the answer you're looking for? Contact our support team.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-purple-900 font-semibold rounded-full transition-all hover:shadow-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
