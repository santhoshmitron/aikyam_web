"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getJobCategoryBySlug } from "@/lib/jobs";
import Footer from "@/components/aikyam/Footer";

export default function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = React.use(params);
  const category = getJobCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Category Not Found</h1>
          <p className="text-gray-600 mb-8">The job category you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/#careers")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Careers
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = category.icon;
  const emailSubject = encodeURIComponent(`Application for ${category.title} Position`);
  const emailBody = encodeURIComponent(
    `Dear Aikyam Hiring Team,\\n\\nI am writing to express my interest in the ${category.title} positions at Aikyam.\\n\\n[Your message here]\\n\\nBest regards,\\n[Your name]`
  );
  const mailtoLink = `mailto:info@shriaikyam.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/#careers")}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          <span>Back to Careers</span>
        </motion.button>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
              {category.totalOpenings}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-4">
            {category.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {category.shortDescription}
          </p>

          <a href={mailtoLink}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 w-5 h-5" />
              Apply Now
            </Button>
          </a>
        </motion.div>

        {/* Job Positions */}
        {category.positions.map((position, posIndex) => (
          <div key={posIndex}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (posIndex + 1) }}
              className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8"
            >
              {/* Position Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                    {position.title}
                  </h2>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                    {position.openings}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 w-4 h-4 text-purple-600" />
                    <span>{position.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 w-4 h-4 text-purple-600" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 font-medium">{position.type}</span>
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Role Overview</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {position.fullDescription}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {position.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Qualifications */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Required Qualifications</h3>
                <ul className="space-y-3">
                  {position.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Divider between positions (except after last one) */}
            {posIndex < category.positions.length - 1 && (
              <div className="flex items-center justify-center my-12">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
              </div>
            )}
          </div>
        ))}

        {/* Apply CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl shadow-xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Send us your application and let's build something meaningful together.
          </p>
          <a href={mailtoLink}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-purple-600 hover:bg-purple-50 border-2 border-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 w-5 h-5" />
              Apply via Email
            </Button>
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
