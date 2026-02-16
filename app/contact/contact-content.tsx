"use client";

import React, { useState } from "react";
import Header from "@/components/aikyam/Header";
import Footer from "@/components/aikyam/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log("[v0] Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@aikyam.com",
      subtext: "General inquiries",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />
            <p className="text-2xl text-gray-600 font-light leading-relaxed">
              Have a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-purple-700 mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">{info.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="priest">Priest Application</option>
                      <option value="temple">Temple Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                    {submitted ? "Message Sent!" : "Send Message"}
                  </motion.button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-green-600 font-medium"
                    >
                      Thank you! We'll get back to you soon.
                    </motion.p>
                  )}
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How do I download the Aikyam app?",
                  a: 'You can download Aikyam from the Google Play Store or Apple App Store. Search for "Aikyam" and download the official app.',
                },
                {
                  q: "Is Aikyam available outside India?",
                  a: "Currently, Aikyam is available on Android and iOS with support for users worldwide who wish to connect with Indian temples and priests.",
                },
                {
                  q: "How can I become a priest on Aikyam?",
                  a: 'Visit the "Join as a Priest" section on our website or contact priests@aikyam.in for detailed information about our priest onboarding process.',
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major payment methods including credit/debit cards, digital wallets, and bank transfers.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-lg border border-purple-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
