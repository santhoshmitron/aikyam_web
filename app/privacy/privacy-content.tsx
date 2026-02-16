'use client';

import React from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <section className="py-12 mb-12">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-light">
              Last updated: January 2024
            </p>
          </section>

          {/* Content */}
          <div className="space-y-12 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Aikyam ("we," "us," "our," or "Company") operates the Aikyam mobile application (the "Service").
                This page informs you of our policies regarding the collection, use, and disclosure of personal data
                when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                2. Information Collection and Use
              </h2>
              <p className="mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="font-medium text-gray-900">Personal Data:</h3>
                  <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information
                    that can be used to contact or identify you ("Personal Data"). This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>First name and last name</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                3. Security of Personal Data
              </h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                4. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: privacy@aikyam.in
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
