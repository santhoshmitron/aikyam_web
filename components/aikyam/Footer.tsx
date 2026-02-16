"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-950 to-purple-900 text-white overflow-hidden">
      {/* Sacred geometry background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: `${(i + 1) * 8}%`,
                height: `${(i + 1) * 8}%`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h4 className="text-xl font-light mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">info@shriaikyam.com</p>
                  <p className="text-sm">General inquiries</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Bengaluru, Karnataka</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-12" />

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm rounded-2xl">
            <p className="text-2xl md:text-3xl font-light text-yellow-200 italic leading-relaxed">
              "Let technology be our lamp, and devotion be its flame."
            </p>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-purple-300 text-sm"
        >
          <p>© 2026 Aikyam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Final blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-purple-300 text-lg">🙏</p>
          <p className="text-purple-400 text-sm mt-2">
            Made with devotion in Bharat
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
