"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { jobCategories } from "@/lib/jobs";

export default function Careers() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full">
            <p className="text-xs sm:text-sm font-medium text-purple-700 tracking-wide uppercase flex items-center gap-2 justify-center">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              Join Our Mission
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6">
            Come Build the Digital Mandir of Bharat
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 sm:mb-8" />
        </motion.div>

        {/* Open roles */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {jobCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/careers/${category.slug}`}>
                  <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                          {category.totalOpenings}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
                        {category.title}
                      </h3>

                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        {category.shortDescription}
                      </p>

                      <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
