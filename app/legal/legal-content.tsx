'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';

const tabs = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms of Service' },
  { id: 'refund', label: 'Refund Policy' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function LegalContent() {
  const [activeTab, setActiveTab] = useState<TabId>('privacy');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as TabId;
    if (tabs.some((t) => t.id === hash)) setActiveTab(hash);
  }, []);

  function switchTab(id: TabId) {
    setActiveTab(id);
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page header */}
          <section className="py-12 mb-4">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Legal
            </h1>
            <p className="text-gray-600 font-light">
              Privacy, terms &amp; refund policies
            </p>
          </section>

          {/* Tab bar */}
          <div className="flex gap-2 border-b border-gray-200 mb-12 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ────────── Privacy Policy ────────── */}
          {activeTab === 'privacy' && (
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p className="text-sm text-gray-400">
                Last Updated: 2026-03-10 &nbsp;·&nbsp; Effective: 2026-03-10
              </p>

              <Section title="1. Introduction">
                <p>
                  Shri Aikyam Solutions Private Limited (&ldquo;Aikyam,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the Aikyam mobile application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
                </p>
                <p>
                  We are committed to protecting your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA), the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and all applicable Indian laws.
                </p>
                <p>
                  By using the App, you consent to the data practices described in this Privacy Policy. If you do not agree, please do not use the App.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <h3 className="font-medium text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
                <Table
                  headers={['Data Type', 'Purpose', 'When Collected']}
                  rows={[
                    ['Name', 'Account profile, display name', 'Registration'],
                    ['Phone Number', 'Account verification, OTP authentication', 'Registration'],
                    ['Profile Photo', 'User profile display', 'Optional, user-initiated'],
                    ['Date of Birth', 'Age verification', 'Registration (optional)'],
                    ['Gender', 'Personalization (optional)', 'Profile setup (optional)'],
                    ['Language Preference', 'App language (optional)', 'Optional, user-initiated'],
                    ['Posts, Comments, Media', 'Social feed participation', 'User-initiated'],
                    ['Seva Booking Details', 'Processing ritual bookings', 'During booking'],
                    ['Family Member Details', 'Perform the ritual in temple; shared with the temple priest', 'During booking'],
                    ['Payment Information', 'Processing payments for seva bookings', 'During payment'],
                    ['Communication Data', 'Customer support', 'When you contact us'],
                  ]}
                />
                <h3 className="font-medium text-gray-900 mt-8 mb-3">2.2 Information Collected Automatically</h3>
                <Table
                  headers={['Data Type', 'Purpose']}
                  rows={[
                    ['Device Information', 'App compatibility, debugging'],
                    ['Device ID / Advertising ID', 'Analytics, push notifications'],
                    ['Operating System & Version', 'Compatibility, debugging'],
                    ['IP Address', 'Security, approximate location'],
                    ['App Usage Data', 'Improving user experience'],
                    ['Crash Logs', 'Bug fixing and stability'],
                    ['Log Data', 'Security and troubleshooting'],
                  ]}
                />
                <h3 className="font-medium text-gray-900 mt-8 mb-3">2.3 Location Information</h3>
                <Table
                  headers={['Data Type', 'Purpose', 'How Collected']}
                  rows={[
                    ['Precise Location', 'Discovering nearby temples', 'With your explicit permission'],
                    ['Approximate Location', 'Regional content and recommendations', 'With your explicit permission'],
                  ]}
                />
                <p className="mt-3">We only access your location when you explicitly grant permission. You can revoke location access at any time through your device settings.</p>
                <h3 className="font-medium text-gray-900 mt-8 mb-3">2.4 Information from Third Parties</h3>
                <Table
                  headers={['Source', 'Data Type', 'Purpose']}
                  rows={[['Payment Processors', 'Transaction confirmation (no card details)', 'Payment verification']]}
                />
              </Section>

              <Section title="3. How We Use Your Information">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-gray-900">Provide and maintain the App:</strong> Create and manage your account, display your profile, and enable social features.</li>
                  <li><strong className="text-gray-900">Temple discovery:</strong> Show temples near your location and provide relevant recommendations.</li>
                  <li><strong className="text-gray-900">Process transactions:</strong> Facilitate seva bookings and payment processing.</li>
                  <li><strong className="text-gray-900">Temple sevas:</strong> Facilitate the priests to perform the sevas in the temples.</li>
                  <li><strong className="text-gray-900">Communication:</strong> Send booking confirmations, temple updates, event notifications, and important service announcements.</li>
                  <li><strong className="text-gray-900">Personalization:</strong> Customize your feed, recommendations, and temple suggestions.</li>
                  <li><strong className="text-gray-900">Safety and moderation:</strong> Detect and prevent fraud, abuse, and policy violations.</li>
                  <li><strong className="text-gray-900">Analytics and improvement:</strong> Understand how the App is used to improve features and fix issues.</li>
                  <li><strong className="text-gray-900">Legal compliance:</strong> Comply with legal obligations, resolve disputes, and enforce our terms.</li>
                </ul>
                <Highlight>We do <strong>NOT</strong> sell your personal data to third parties, use it for targeted political advertising, or engage in discriminatory profiling.</Highlight>
              </Section>

              <Section title="4. How We Share Your Information">
                <h3 className="font-medium text-gray-900 mb-2">4.1 Public Information</h3>
                <p>Your profile name, profile photo, and public posts are visible to other users of the App.</p>
                <h3 className="font-medium text-gray-900 mt-6 mb-3">4.2 Service Providers</h3>
                <Table
                  headers={['Provider Type', 'Data Shared', 'Purpose']}
                  rows={[
                    ['Cloud Hosting', 'All app data', 'Infrastructure'],
                    ['Payment Processors', 'Transaction details', 'Payment processing'],
                    ['Analytics', 'Usage data, device info', 'App analytics'],
                    ['Push Notifications (FCM)', 'Device tokens', 'Notifications'],
                    ['Crash Reporting (Crashlytics)', 'Crash logs, device info', 'Stability'],
                  ]}
                />
                <h3 className="font-medium text-gray-900 mt-6 mb-2">4.3 Temple Partners</h3>
                <p>When you book a seva or interact with a temple, relevant booking details (name, booking type, date, devotee details) are shared with the temple to fulfill your request.</p>
                <h3 className="font-medium text-gray-900 mt-6 mb-2">4.4 Legal Requirements</h3>
                <p>We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, property, enforce our Terms of Service, or respond to an emergency.</p>
                <h3 className="font-medium text-gray-900 mt-6 mb-2">4.5 Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets, your data may be transferred. You will be notified of any such change.</p>
              </Section>

              <Section title="5. Data Storage and Security">
                <Card>
                  <p><strong className="text-gray-900">Storage:</strong> Secure servers in India, encryption at rest and in transit.</p>
                  <p><strong className="text-gray-900">Encryption:</strong> TLS 1.2+ for all data transmission.</p>
                  <p><strong className="text-gray-900">Authentication:</strong> Secure token-based API authentication.</p>
                  <p><strong className="text-gray-900">Payment Security:</strong> No credit/debit card numbers or bank details stored. RBI-authorized, PCI-DSS compliant gateways.</p>
                  <p className="mb-0"><strong className="text-gray-900">Access Control:</strong> Strict controls, continuous monitoring, periodic security assessments.</p>
                </Card>
                <p>Despite our efforts, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</p>
              </Section>

              <Section title="6. Data Retention">
                <Table
                  headers={['Data Type', 'Retention Period']}
                  rows={[
                    ['Account data', 'Duration of account + 180 days after deletion'],
                    ['Posts and comments', 'Duration of account (or until deleted by user)'],
                    ['Transaction records', '8 years (Indian tax laws)'],
                    ['Analytics data', '36 months (anonymized)'],
                    ['Crash logs', '180 days'],
                    ['Server logs', '180 days'],
                    ['Communication records', '3 years'],
                  ]}
                />
                <p>After the retention period, data is permanently deleted or anonymized.</p>
              </Section>

              <Section title="7. Your Rights">
                <p className="mb-4">Under Indian law (DPDPA 2023 and IT Act):</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong className="text-gray-900">Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-gray-900">Right to Correction:</strong> Update or correct your data through the App or by contacting us.</li>
                  <li><strong className="text-gray-900">Right to Erasure:</strong> Request deletion via <strong className="text-gray-900">Settings &gt; Profile &gt; Delete Account</strong> or email <a href="mailto:delete.account@shriaikyam.com" className="text-purple-600 hover:underline">delete.account@shriaikyam.com</a>. We delete within 30 days. Some data retained for legal obligations. Public content may be anonymized.</li>
                  <li><strong className="text-gray-900">Right to Withdraw Consent:</strong> Withdraw consent at any time (may reduce functionality).</li>
                  <li><strong className="text-gray-900">Right to Grievance Redressal:</strong> File a complaint with our Grievance Officer or the Data Protection Board of India.</li>
                </ul>
              </Section>

              <Section title="8. Children's Privacy">
                <p>Aikyam is not intended for children under 13. We do not knowingly collect data from children under 13. For users 13–18, we recommend parental supervision. Under DPDPA 2023, processing data of individuals under 18 requires verifiable parental consent. If we discover such data collected without consent, we will delete it promptly.</p>
              </Section>

              <Section title="9. Third-Party Links and Services">
                <p>The App may link to third-party websites, services, or temple websites. We are not responsible for their privacy practices.</p>
              </Section>

              <Section title="10. Push Notifications">
                <p>We send notifications for seva confirmations, temple updates, events, social interactions (likes, comments, follows), service updates, and app updates. Manage preferences in App settings or device settings.</p>
              </Section>

              <Section title="11. Cookies and Tracking">
                <p>The App may use <strong className="text-gray-900">Google Analytics</strong> for understanding user behaviour. These tools use device identifiers and anonymous usage data. No personal information is shared beyond what is described here.</p>
              </Section>

              <Section title="12. Changes to This Privacy Policy">
                <p>We may update this policy. The &ldquo;Last Updated&rdquo; date will change. Material changes notified via the App. Continued use constitutes acceptance.</p>
              </Section>

              <Section title="13. Grievance Officer">
                <Card>
                  <p><strong className="text-gray-900">Name:</strong> Pradeep Kumar P</p>
                  <p><strong className="text-gray-900">Designation:</strong> Grievance Officer</p>
                  <p><strong className="text-gray-900">Organization:</strong> Shri Aikyam Solutions Private Limited</p>
                  <p><strong className="text-gray-900">Email:</strong> <a href="mailto:grievance@shriaikyam.com" className="text-purple-600 hover:underline">grievance@shriaikyam.com</a></p>
                  <p><strong className="text-gray-900">Address:</strong> No 22, Ferns Residency II, Geddalahalli, Bangalore, KA, India, 560077</p>
                  <p className="mb-0"><strong className="text-gray-900">Response Time:</strong> Within 24 hours of receipt, resolution within 15 days</p>
                </Card>
              </Section>

              <Section title="14. Contact Us">
                <Card>
                  <p className="font-medium text-gray-900 mb-2">Shri Aikyam Solutions Private Limited</p>
                  <p>Email: <a href="mailto:privacy@shriaikyam.com" className="text-purple-600 hover:underline">privacy@shriaikyam.com</a> &nbsp;·&nbsp; Support: <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a></p>
                  <p>Address: No 22, Ferns Residency II, Geddalahalli, Bangalore, KA, India, 560077</p>
                  <p className="mb-0">Website: <a href="https://www.shriaikyam.com" className="text-purple-600 hover:underline">www.shriaikyam.com</a></p>
                </Card>
                <p className="text-sm text-gray-400 italic mt-6">This Privacy Policy is governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.</p>
              </Section>
            </div>
          )}

          {/* ────────── Terms of Service ────────── */}
          {activeTab === 'terms' && (
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p className="text-sm text-gray-400">
                Last Updated: [INSERT DATE] &nbsp;·&nbsp; Effective: [INSERT DATE]
              </p>

              <Section title="1. Acceptance of Terms">
                <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Aikyam mobile application (&ldquo;App&rdquo;) operated by Shri Aikyam Solutions Private Limited (&ldquo;Aikyam,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), a company incorporated under the laws of India.</p>
                <p>By creating an account, accessing, or using the App, you agree to these Terms, our <button onClick={() => switchTab('privacy')} className="text-purple-600 hover:underline">Privacy Policy</button>, <a href="/community" className="text-purple-600 hover:underline">Community Guidelines</a>, and all applicable policies.</p>
              </Section>

              <Section title="2. Eligibility">
                <ul className="list-disc list-inside space-y-2">
                  <li>Minimum age: <strong className="text-gray-900">13 years</strong>. Ages 13–18 require parental/guardian consent.</li>
                  <li>By using the App, you represent and warrant that you meet the eligibility requirements.</li>
                  <li>You must not be barred from using the App under applicable laws.</li>
                </ul>
              </Section>

              <Section title="3. Account Registration">
                <p>You must provide accurate, current, and complete information. You are responsible for account security and all activity under your account. Each individual may maintain only one account. Notify us immediately of unauthorized use. Aikyam will not be liable for loss or damage arising from your failure to protect your account.</p>
              </Section>

              <Section title="4. Description of Service">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-gray-900">Temple Profiles:</strong> Timings, history, location, and more.</li>
                  <li><strong className="text-gray-900">Social Feed:</strong> Updates, photos, and videos from temples and devotees.</li>
                  <li><strong className="text-gray-900">Seva Bookings:</strong> Book religious rituals (sevas/poojas) at participating temples.</li>
                  <li><strong className="text-gray-900">Event Notifications:</strong> Temple events, festivals, and announcements.</li>
                  <li><strong className="text-gray-900">Community:</strong> Follow temples, like and comment on posts, engage with devotees.</li>
                </ul>
              </Section>

              <Section title="5. User Conduct">
                <p className="mb-4">You agree to use the App only for lawful purposes. You agree <strong className="text-gray-900">NOT</strong> to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Post content that is defamatory, obscene, abusive, hateful, or discriminatory</li>
                  <li>Post content that demeans, disrespects, or offends any religion, caste, creed, or community</li>
                  <li>Impersonate any person, temple, or organization</li>
                  <li>Spam, harass, bully, or threaten other users</li>
                  <li>Upload malicious software, viruses, or harmful code</li>
                  <li>Attempt unauthorized access to the App or its systems</li>
                  <li>Use the App for unauthorized commercial purposes</li>
                  <li>Scrape, mine, or extract data from the App</li>
                  <li>Create fake temple profiles or misleading religious content</li>
                  <li>Solicit money under false pretenses</li>
                  <li>Violate any applicable law or regulation</li>
                </ul>
                <Highlight>
                  <strong>Religious Sensitivity:</strong> Treat all traditions with respect. No religious hatred, intolerance, misrepresentation, or targeting individuals based on beliefs. Full rules in our <a href="/community" className="text-purple-600 hover:underline">Community Guidelines</a>.
                </Highlight>
                <p>Violations may result in content removal, temporary suspension, permanent termination, or reporting to law enforcement.</p>
              </Section>

              <Section title="6. User-Generated Content">
                <p>You retain ownership. By posting, you grant Aikyam a non-exclusive, worldwide, royalty-free, transferable license to use, display, reproduce, modify, distribute, and store your content for operating and improving the App.</p>
                <p>You are solely responsible for your content and warrant you have the necessary rights and that it does not violate third-party IP or privacy rights.</p>
                <p>We may monitor, remove, or restrict violating content and suspend repeat offenders. Report violations via in-app reporting or <a href="mailto:report@shriaikyam.com" className="text-purple-600 hover:underline">report@shriaikyam.com</a>.</p>
              </Section>

              <Section title="7. Temple Profiles and Information">
                <p>Temple profiles are for informational purposes. We do not guarantee accuracy, completeness, or timeliness. Verify critical details directly with the temple. Temples may be official partners (verified) or community-sourced. We are not responsible for actions of any temple.</p>
              </Section>

              <Section title="8. Seva Bookings & Payments">
                <p>Bookings subject to availability and temple confirmation. Prices in INR, set by temples. GST and taxes displayed before confirmation. Total amount (all inclusive) shown before payment. Payments processed through RBI-authorized gateways; we do not store card details.</p>
                <Warning>
                  <strong>Aikyam&apos;s Role:</strong> Aikyam is a platform connecting devotees with temples. Aikyam is NOT the provider of the religious service. The temple is solely responsible for performing the seva. Full payment and refund details in the <button onClick={() => switchTab('refund')} className="text-purple-600 hover:underline">Refund Policy</button>.
                </Warning>
              </Section>

              <Section title="9. Intellectual Property">
                <p>The App, its design, features, graphics, logos, and trademarks are the exclusive property of Shri Aikyam Solutions Private Limited, protected by Indian and international IP laws. You receive a limited, non-exclusive, non-transferable, revocable license for personal, non-commercial use. You may not copy, modify, distribute, reverse engineer, decompile, or use our branding without consent.</p>
              </Section>

              <Section title="10. Third-Party Services">
                <p>The App may integrate with third-party services (payment gateways, maps, social platforms). Your use is governed by their terms. Aikyam is not responsible for third-party content, functionality, or practices.</p>
              </Section>

              <Section title="11. Disclaimers">
                <p className="uppercase text-sm tracking-wide text-gray-500">The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. We do not guarantee uninterrupted availability, error-free operation, or accuracy of temple information. Aikyam does not endorse, verify, or take responsibility for any religious content, practices, or advice shared on the platform.</p>
              </Section>

              <Section title="12. Limitation of Liability">
                <p>To the maximum extent permitted by law: no liability for indirect, incidental, special, consequential, or punitive damages. Total aggregate liability capped at the amount you paid in the prior 12 months, or INR 5,000, whichever is greater. Not liable for performance/non-performance of sevas by temples or force majeure events.</p>
              </Section>

              <Section title="13. Indemnification">
                <p>You agree to indemnify and hold harmless Aikyam, its directors, officers, employees, and agents from claims arising from your use of the App, violation of Terms, your content, or violation of third-party rights or law.</p>
              </Section>

              <Section title="14. Account Termination">
                <p><strong className="text-gray-900">By you:</strong> Settings &gt; Account &gt; Delete Account, <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a>, or <a href="/community#delete" className="text-purple-600 hover:underline">online request</a>.</p>
                <p><strong className="text-gray-900">By Aikyam:</strong> For Terms violations, fraud/illegal activity, legal requirements, or service discontinuation.</p>
                <p>Upon termination: your right to use the App ceases; data may be deleted subject to legal retention. Sections 6.1, 9, 11, 12, 13, and 16 survive termination.</p>
              </Section>

              <Section title="15. Modifications to Terms">
                <p>&ldquo;Last Updated&rdquo; date will be changed. Material changes notified via App or email. Continued use constitutes acceptance. If you disagree, you must stop using the App.</p>
              </Section>

              <Section title="16. Governing Law & Dispute Resolution">
                <p className="mb-4">Governed by Indian law. Resolution process:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong className="text-gray-900">Informal resolution</strong> via <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a></li>
                  <li><strong className="text-gray-900">Mediation</strong> if informal resolution fails within 30 days</li>
                  <li><strong className="text-gray-900">Arbitration</strong> under the Arbitration and Conciliation Act, 1996, in [INSERT CITY], India, in English</li>
                  <li><strong className="text-gray-900">Jurisdiction:</strong> Courts in [INSERT CITY], India</li>
                </ol>
              </Section>

              <Section title="17. General Provisions">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-gray-900">Severability:</strong> Invalid provisions don&apos;t affect the remainder.</li>
                  <li><strong className="text-gray-900">Waiver:</strong> Failure to enforce a right is not a waiver.</li>
                  <li><strong className="text-gray-900">Entire Agreement:</strong> These Terms with referenced policies are the entire agreement.</li>
                  <li><strong className="text-gray-900">Assignment:</strong> We may assign; you may not without consent.</li>
                  <li><strong className="text-gray-900">Force Majeure:</strong> Not liable for events beyond reasonable control.</li>
                  <li><strong className="text-gray-900">Language:</strong> English version prevails in translation conflicts.</li>
                </ul>
              </Section>

              <Section title="18. Contact Us">
                <Card>
                  <p className="font-medium text-gray-900 mb-2">Shri Aikyam Solutions Private Limited</p>
                  <p>Legal: <a href="mailto:legal@shriaikyam.com" className="text-purple-600 hover:underline">legal@shriaikyam.com</a> &nbsp;·&nbsp; Support: <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a></p>
                  <p>Address: [INSERT REGISTERED ADDRESS, CITY, STATE, PIN CODE, INDIA]</p>
                  <p className="mb-0">Website: <a href="https://aikyam.com" className="text-purple-600 hover:underline">aikyam.com</a></p>
                </Card>
                <p className="text-sm text-gray-400 italic mt-6">By using the Aikyam App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
              </Section>
            </div>
          )}

          {/* ────────── Payment & Refund Policy ────────── */}
          {activeTab === 'refund' && (
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p className="text-sm text-gray-400">
                Last Updated: 2026-03-10 &nbsp;·&nbsp; Effective: 2026-03-10
              </p>

              <Section title="1. Overview">
                <p>This Payment &amp; Refund Policy governs all financial transactions made through the Aikyam mobile application (&ldquo;App&rdquo;), including seva (religious ritual) bookings, donations, and any other paid services. Aikyam is operated by Shri Aikyam Solutions Private Limited.</p>
                <p>By making a payment through the App, you agree to the terms outlined in this policy.</p>
              </Section>

              <Section title="2. Services Offered">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-gray-900">Seva Bookings:</strong> Poojas, archanas, abhishekams, homams, etc.</li>
                  <li><strong className="text-gray-900">Priest Offerings:</strong> Payment to the priest (where available)</li>
                  <li><strong className="text-gray-900">Prasad Delivery:</strong> Ordering prasad from temples (where available)</li>
                  <li><strong className="text-gray-900">Donation Facilitation:</strong> Donations to temples (where available)</li>
                  <li><strong className="text-gray-900">Premium Features:</strong> Any future premium app features (if applicable)</li>
                </ul>
              </Section>

              <Section title="3. Aikyam's Role">
                <Highlight>
                  <strong>Important:</strong> Aikyam is a technology platform and payment facilitator. Aikyam does <strong>NOT</strong> provide religious services. Temples are the service providers. The temple is solely responsible for performing the seva. Aikyam may charge a service/convenience fee.
                </Highlight>
              </Section>

              <Section title="4. Pricing and Fees">
                <ul className="list-disc list-inside space-y-2">
                  <li>All prices in <strong className="text-gray-900">Indian Rupees (INR)</strong>, set by respective temples.</li>
                  <li>Prices may vary between temples and are subject to change without notice.</li>
                  <li>GST applied as per prevailing rates; total inclusive of taxes shown before confirmation.</li>
                  <li>Tax breakup shown on payment summary / invoice.</li>
                  <li>Convenience/service fee (if any) displayed separately.</li>
                  <li>Amount at checkout is final — no hidden charges.</li>
                </ul>
              </Section>

              <Section title="5. Payment Methods">
                <Card>
                  <p><strong className="text-gray-900">Accepted:</strong> UPI, Debit Cards (Visa, Mastercard, RuPay), Credit Cards (Visa, Mastercard, RuPay, Amex), Net Banking, Mobile Wallets (Paytm, PhonePe, Google Pay, etc.)</p>
                  <p>All payments processed through <strong className="text-gray-900">RBI-authorized, PCI-DSS compliant</strong> gateways. We do NOT store card numbers or bank account details. 2FA required for card transactions per RBI guidelines.</p>
                  <p><strong className="text-gray-900">Confirmation:</strong> In-app booking confirmation and SMS (where applicable) with a unique booking reference number.</p>
                  <p className="mb-0"><strong className="text-gray-900">Failed payments:</strong> No booking created. If money debited but booking not confirmed, automatic refund within 5–7 business days. Contact <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a> if delayed.</p>
                </Card>
              </Section>

              <Section title="6. Cancellation Policy">
                <p className="mb-4">Refunds for cancelled sevas vary by the seva requested and the temple performing it. Each seva has different levels of prior preparation. When specific cancellation terms are not mentioned by a temple, the following apply:</p>
                <Table
                  headers={['Cancellation Timing', 'Refund']}
                  rows={[
                    ['More than 48 hours before seva', '100% refund'],
                    ['24–48 hours before seva', '50% refund'],
                    ['Less than 24 hours before seva', 'No refund'],
                    ['After seva date/time has passed', 'No refund'],
                    ['Seva already performed', 'No refund'],
                  ]}
                />
                <p><strong className="text-gray-900">How to cancel:</strong> App &gt; My Bookings &gt; Select booking &gt; Cancel Booking &gt; Confirm.</p>
                <p><strong className="text-gray-900">Temple cancellation:</strong> Notified immediately; 100% refund within 5–7 business days; alternative date or equivalent seva may be offered.</p>
                <p><strong className="text-gray-900">Aikyam cancellation (rare):</strong> Technical errors, fraud, temple closure due to emergencies/force majeure — 100% refund in all cases.</p>
              </Section>

              <Section title="7. Refund Details">
                <Table
                  headers={['Scenario', 'Refund', 'Timeline']}
                  rows={[
                    ['User cancels > 48 hrs before', '100%', '5–7 business days'],
                    ['User cancels 24–48 hrs before', '50%', '5–7 business days'],
                    ['User cancels < 24 hrs before', 'Not eligible', 'N/A'],
                    ['Temple cancels seva', '100%', '5–7 business days'],
                    ['Seva not performed', '100%', '5–7 business days'],
                    ['Payment deducted, booking failed', '100% (auto)', '5–7 business days'],
                    ['Duplicate payment', '100% of duplicate', '5–7 business days'],
                    ['Service quality complaint', 'Case-by-case', '7–14 business days'],
                    ['Force majeure', '100%', '7–14 business days'],
                  ]}
                />
                <Success>Refunds credited to original payment method. Bank processing may add 2–5 additional days. You will receive an in-app notification when the refund is initiated.</Success>
                <p><strong className="text-gray-900">Not eligible:</strong> Change of mind after window, no-show, factors outside Aikyam&apos;s control, convenience fees (non-refundable unless within 100% refund window).</p>
                <p><strong className="text-gray-900">Partial refunds:</strong> May be offered if only part of a multi-seva booking is affected, or as a goodwill gesture.</p>
              </Section>

              <Section title="8. Disputes">
                <p>Contact <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a> within 7 days with booking reference, transaction details, and description. Acknowledgment within 24 hours, resolution within 7–14 business days. Contact us before initiating a bank chargeback; fraudulent chargebacks may result in account suspension.</p>
              </Section>

              <Section title="9. Donations">
                <p>Facilitated on behalf of the temple. Voluntary and <strong className="text-gray-900">non-refundable</strong>. Tax receipts (80G, where applicable) issued by the temple. Aikyam retains only payment processing fees.</p>
              </Section>

              <Section title="10. Invoices & Receipts">
                <p>Digital receipt for every transaction in &ldquo;My Bookings.&rdquo; Includes booking details, amount, tax breakup, and reference. GST-compliant invoices available via App or <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a>.</p>
              </Section>

              <Section title="11. Currency & Security">
                <p>All transactions in INR. International cards may incur conversion charges. All payment data encrypted via SSL/TLS. PCI-DSS compliant. We never store full card numbers or CVV.</p>
              </Section>

              <Section title="12. Compliance">
                <p>Compliant with RBI payment guidelines, Consumer Protection Act 2019, Consumer Protection (E-Commerce) Rules 2020, GST Act, IT Act 2000, and Google Play Payments Policy.</p>
              </Section>

              <Section title="13. Contact">
                <Card>
                  <p>Support: <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a> &nbsp;·&nbsp; Response: within 24 hours on business days</p>
                  <p>Grievance Officer: <a href="mailto:grievance@shriaikyam.com" className="text-purple-600 hover:underline">grievance@shriaikyam.com</a></p>
                  <p className="mb-0">Address: Shri Aikyam Solutions Private Limited, No 22, Ferns Residency II, Geddalahalli, Bangalore, KA, India, 560077</p>
                </Card>
              </Section>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ── Shared sub-components ───────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-light text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 px-3 font-medium text-gray-900">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 px-3 ${j === 0 ? 'font-medium text-gray-800' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">{children}</div>;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg my-4">{children}</div>;
}

function Warning({ children }: { children: React.ReactNode }) {
  return <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-4">{children}</div>;
}

function Success({ children }: { children: React.ReactNode }) {
  return <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-4">{children}</div>;
}
