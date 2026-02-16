'use client';

import { motion } from 'framer-motion';

const temples = [
  { image: '/images/temple1.png', name: 'Temple of Lord Krishna', location: 'Mathura, Uttar Pradesh', priests: 20 },
  { image: '/images/temple2.png', name: 'Golden Temple', location: 'Amritsar, Punjab', priests: 15 },
  { image: '/images/temple3.png', name: 'Sabarimala Temple', location: 'Kerala', priests: 30 },
];

const appMockups = [
  { image: '/images/image1.png', title: 'Mockup 1' },
  { image: '/images/image2.png', title: 'Mockup 2' },
  { image: '/images/image3.png', title: 'Mockup 3' },
];

export default function TemplesAndPriests() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            For Temples & Priests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Expand your reach. Serve more devotees. Preserve traditions. Join India's largest priest-led spiritual network.
          </p>
        </motion.div>

        {/* App Mockup Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {appMockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex-shrink-0"
            >
              <div className="relative w-64 h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-gradient-to-br from-purple-400 to-purple-600 p-3">
                <img
                  src={mockup.image || "/placeholder.svg"}
                  alt={mockup.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
