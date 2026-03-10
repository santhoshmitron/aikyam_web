'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/aikyam/Header';
import Footer from '@/components/aikyam/Footer';

const tabs = [
  { id: 'guidelines', label: 'Community Guidelines' },
  { id: 'delete', label: 'Delete Account' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function CommunityContent() {
  const [activeTab, setActiveTab] = useState<TabId>('guidelines');

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
              Community
            </h1>
            <p className="text-gray-600 font-light">
              Guidelines, moderation &amp; account management
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

          {/* ────────── Community Guidelines ────────── */}
          {activeTab === 'guidelines' && (
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p className="text-sm text-gray-400">
                Last Updated: 2026-03-10 &nbsp;·&nbsp; Effective: 2026-03-10
              </p>

              <p>Aikyam is built on reverence, respect, and community. These guidelines cover how we expect users to behave, what content is allowed, how we moderate, and what happens when rules are broken. This policy applies to all content: text posts, photos, videos, comments, profile information, and direct messages.</p>

              <Section title="1. Guiding Principles">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-gray-900">Respect for all faiths:</strong> Content must respect all religious traditions, beliefs, and practices.</li>
                  <li><strong className="text-gray-900">Safety first:</strong> Every user should feel safe from harassment, abuse, and harm.</li>
                  <li><strong className="text-gray-900">Transparency:</strong> Rules are clear and enforcement is explained.</li>
                  <li><strong className="text-gray-900">Proportionality:</strong> Actions match the severity of the violation.</li>
                  <li><strong className="text-gray-900">Fairness:</strong> All users treated equally, regardless of following or status.</li>
                  <li><strong className="text-gray-900">Due process:</strong> Every user can understand and appeal decisions.</li>
                </ul>
              </Section>

              <Section title="2. Community Standards">
                <p><strong className="text-gray-900">Be Respectful:</strong> Treat every member with dignity. Honour the diversity of Hindu traditions — Shaiva, Vaishnava, Shakta, Smarta, and all sampradayas. Respect other religions. Engage constructively.</p>
                <p><strong className="text-gray-900">Be Authentic:</strong> Share genuine experiences. Use your real identity. No fake profiles or impersonation. Provide accurate temple details.</p>
                <p><strong className="text-gray-900">Be Safe:</strong> Don&apos;t share others&apos; personal information without consent. Report unsafe content. Protect minors.</p>
                <p><strong className="text-gray-900">Be Lawful:</strong> Follow all applicable Indian laws. No fraud, scams, or deception.</p>
              </Section>

              <Section title="3. Content Standards">
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-6">
                  <p className="font-medium text-gray-900 mb-3">Encouraged Content</p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li>Temple visit experiences and photos</li>
                    <li>Spiritual reflections and devotional content</li>
                    <li>Festival, event, and observance information</li>
                    <li>Temple history, architecture, and significance</li>
                    <li>Devotional music, bhajans, and spiritual art</li>
                    <li>Questions about rituals, customs, and traditions</li>
                    <li>Community service and charitable activities</li>
                    <li>Personal spiritual journeys and experiences</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg mb-6">
                  <p className="font-medium text-gray-900 mb-3">Prohibited Content</p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li><strong className="text-gray-800">Hate speech:</strong> Promoting hatred or discrimination against any religion, caste, creed, race, ethnicity, gender, or community</li>
                    <li><strong className="text-gray-800">Religious disrespect:</strong> Demeaning any religious figure, deity, scripture, or sacred symbol; promoting religious supremacy or coercive conversion</li>
                    <li><strong className="text-gray-800">Violence:</strong> Threats, graphic violence, incitement to harm or self-harm</li>
                    <li><strong className="text-gray-800">Harassment:</strong> Bullying, doxxing, intimidation, shaming for religious practices</li>
                    <li><strong className="text-gray-800">Misinformation:</strong> False claims about temples, events, rituals</li>
                    <li><strong className="text-gray-800">Sexual content:</strong> Nudity, sexually explicit or suggestive material</li>
                    <li><strong className="text-gray-800">Fraud &amp; scams:</strong> Fake sevas, fraudulent donations, financial scams, MLM disguised as religion</li>
                    <li><strong className="text-gray-800">Spam:</strong> Repetitive, irrelevant, or unsolicited content; fake engagement; bots</li>
                    <li><strong className="text-gray-800">Impersonation:</strong> Fake temple profiles, impersonating priests or leaders</li>
                    <li><strong className="text-gray-800">Illegal content:</strong> Anything violating Indian law, IP rights, or court orders</li>
                    <li><strong className="text-gray-800">Self-harm:</strong> Promoting or glorifying self-harm or suicide</li>
                    <li><strong className="text-gray-800">Political campaigning:</strong> Partisan content unrelated to temples or devotion</li>
                  </ul>
                </div>

                <Highlight>
                  <strong>Religious Content Scope:</strong> Religious content on Aikyam is limited to Hinduism (Sanatan Dharma), Buddhism, Sikhism, and Jainism. Content of any other religion is not allowed.
                </Highlight>
              </Section>

              <Section title="4. What Is User-Generated Content?">
                <p>Text posts and captions, photos and images, videos, comments and replies, profile information (bio, profile picture), temple reviews, seva booking reviews, and shared links (including YouTube embeds).</p>
              </Section>

              <Section title="5. How We Moderate">
                <h3 className="font-medium text-gray-900 mb-2">Automated Systems</h3>
                <p>Detect and filter spam, explicit imagery, and known prohibited content. Flag potentially violating content for human review. Identify abusive behaviour patterns. Prevent re-upload of removed content.</p>
                <h3 className="font-medium text-gray-900 mt-6 mb-2">Human Moderation</h3>
                <p>Reviews all flagged and reported content. Trained on cultural and religious sensitivity. Makes final decisions on ambiguous cases.</p>
                <h3 className="font-medium text-gray-900 mt-6 mb-2">Community Reporting</h3>
                <p>Every post, comment, and profile has a report option. Users can also email <a href="mailto:report@shriaikyam.com" className="text-purple-600 hover:underline">report@shriaikyam.com</a> or the Grievance Officer at <a href="mailto:grievance@shriaikyam.com" className="text-purple-600 hover:underline">grievance@shriaikyam.com</a>.</p>
              </Section>

              <Section title="6. How to Report">
                <Card>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Tap the <strong className="text-gray-900">three-dot menu (...)</strong> on the content</li>
                    <li>Select <strong className="text-gray-900">&ldquo;Report&rdquo;</strong></li>
                    <li>Choose a category: hate speech, harassment, spam, misinformation, sexual content, fraud, impersonation, violence, IP violation, or other</li>
                    <li>Add details (optional) and submit</li>
                  </ol>
                  <p className="mt-3 text-sm">Abusing the reporting system may result in action against the reporting account.</p>
                </Card>
              </Section>

              <Section title="7. Review Timelines">
                <Table
                  headers={['Report Type', 'Initial Review', 'Resolution']}
                  rows={[
                    ['Imminent safety threat', '2 hours', '24 hours'],
                    ['Hate speech / violence', '12 hours', '24 hours'],
                    ['Government takedown order', '36 hours', 'Per legal timeline'],
                    ['Harassment / bullying', '24 hours', '48 hours'],
                    ['Misinformation', '24 hours', '72 hours'],
                    ['Spam', '24 hours', '48 hours'],
                    ['Other violations', '48 hours', '72 hours'],
                  ]}
                />
              </Section>

              <Section title="8. Enforcement Actions">
                <Table
                  headers={['Level', 'Action', 'Trigger']}
                  rows={[
                    ['1 — Warning', 'Content removed + warning notification', 'First minor violation'],
                    ['2 — Restriction', 'Posting restriction (24–72 hrs)', 'Repeated minor violations'],
                    ['3 — Suspension', 'Account suspended (7–30 days)', 'Serious / repeated moderate violations'],
                    ['4 — Permanent Ban', 'Account permanently terminated', 'Severe violations, illegal activity'],
                  ]}
                />
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-4">
                  <strong className="text-gray-900">Immediate permanent ban</strong> (no warning): child sexual abuse material, credible violence threats, terrorism content, coordinated harassment, identity theft/fraud.
                </div>
                <p>Additional actions: warning labels, reduced distribution, disabling comments, or restricting features.</p>
              </Section>

              <Section title="9. Appeals">
                <p><strong className="text-gray-900">In-app:</strong> Tap the moderation notification &gt; select &ldquo;Appeal.&rdquo;</p>
                <p><strong className="text-gray-900">Email:</strong> <a href="mailto:appeals@shriaikyam.com" className="text-purple-600 hover:underline">appeals@shriaikyam.com</a> with your username, the content in question, why you believe the decision was incorrect, and any supporting context.</p>
                <p>Reviewed by a different moderator within 7 business days. Decisions are final.</p>
              </Section>

              <Section title="10. Content Ownership & Licensing">
                <p>You retain ownership. By posting, you grant Aikyam a non-exclusive, worldwide, royalty-free, sublicensable, transferable license to display, store, reproduce, distribute, and create derivative works (thumbnails, previews) within the App. License ends when you delete your content or account. Do not post content you don&apos;t own — respect copyrights and get consent for photos/videos of other people.</p>
              </Section>

              <Section title="11. Copyright & Intellectual Property">
                <p>If your IP has been infringed, send a notice to <a href="mailto:copyright@shriaikyam.com" className="text-purple-600 hover:underline">copyright@shriaikyam.com</a> with: description of work, location on Aikyam, contact info, good-faith statement, accuracy statement, and signature. Action within 72 hours.</p>
                <p><strong className="text-gray-900">Counter-notice:</strong> Email <a href="mailto:copyright@shriaikyam.com" className="text-purple-600 hover:underline">copyright@shriaikyam.com</a> with contact info, description of removed content, and basis for claim. Review and possible restoration within 14 business days.</p>
              </Section>

              <Section title="12. Religious Content Standards">
                <p>We respect all sampradayas equally. We don&apos;t favour any school of thought. We allow respectful theological discussion and protect minority traditions within Hinduism. Moderators are trained on cultural context, regional variations, religious symbolism, and the line between expression and hate speech.</p>
                <p>Respectful inter-faith discussions are permitted. Content must not demean any religion. Proselytization and forced conversion content is prohibited.</p>
              </Section>

              <Section title="13. Your Safety Controls">
                <Card>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-gray-900">Block:</strong> Prevent users from seeing your content or contacting you</li>
                    <li><strong className="text-gray-900">Mute:</strong> Hide content from specific users</li>
                    <li><strong className="text-gray-900">Comment controls:</strong> Disable comments on your posts</li>
                    <li><strong className="text-gray-900">Privacy settings:</strong> Control profile visibility</li>
                    <li><strong className="text-gray-900">Report:</strong> Flag violations on any content or profile</li>
                  </ul>
                </Card>
                <p className="mt-3">The App is not intended for children under 13. Content harmful to minors is strictly prohibited. We actively monitor for and remove child exploitation content and report CSAM to relevant authorities.</p>
              </Section>

              <Section title="14. Transparency">
                <p>We publish periodic transparency reports on: volume of reports received, actions taken, categories of violations, appeal outcomes, and government/legal requests. Changes to this policy are communicated through the App before they take effect.</p>
              </Section>

              <Section title="15. Legal Compliance">
                <p>Compliant with IT Act 2000, IT Intermediary Guidelines 2021, DPDPA 2023, IPC (hate speech, defamation), and Representation of the People Act (during elections). Government orders processed within 36 hours.</p>
              </Section>

              <Section title="16. Grievance Officer & Contact">
                <Card>
                  <p><strong className="text-gray-900">Grievance Officer:</strong> Pradeep Kumar P — <a href="mailto:grievance@shriaikyam.com" className="text-purple-600 hover:underline">grievance@shriaikyam.com</a></p>
                  <p><strong className="text-gray-900">Response:</strong> Acknowledgment within 48 hours, resolution within 15 days</p>
                  <p>Moderation: <a href="mailto:moderation@shriaikyam.com" className="text-purple-600 hover:underline">moderation@shriaikyam.com</a></p>
                  <p>Report: <a href="mailto:report@shriaikyam.com" className="text-purple-600 hover:underline">report@shriaikyam.com</a> &nbsp;·&nbsp; Appeals: <a href="mailto:appeals@shriaikyam.com" className="text-purple-600 hover:underline">appeals@shriaikyam.com</a> &nbsp;·&nbsp; Copyright: <a href="mailto:copyright@shriaikyam.com" className="text-purple-600 hover:underline">copyright@shriaikyam.com</a></p>
                  <p className="mb-0">Community: <a href="mailto:community@shriaikyam.com" className="text-purple-600 hover:underline">community@shriaikyam.com</a></p>
                </Card>
              </Section>
            </div>
          )}

          {/* ────────── Delete Account ────────── */}
          {activeTab === 'delete' && (
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p>We&apos;re sorry to see you go. This page lets you request deletion of your Aikyam account and personal data.</p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <strong className="text-red-700">This action is permanent.</strong> Once deleted, your account cannot be recovered.
              </div>

              <Section title="What Will Be Deleted">
                <ul className="list-disc list-inside space-y-2">
                  <li>Profile information (name, phone, bio, profile photo)</li>
                  <li>Posts, comments, and uploaded media</li>
                  <li>Temple follow list and preferences</li>
                  <li>App settings and notification preferences</li>
                  <li>Active bookings (non-refundable if within cancellation window)</li>
                </ul>
              </Section>

              <Section title="What Will Be Retained">
                <Table
                  headers={['Data', 'Reason']}
                  rows={[
                    ['Transaction records', '8 years (Indian tax law)'],
                    ['Anonymized analytics', 'Aggregated, non-personal'],
                    ['Legal hold data', 'Active legal proceedings'],
                    ['Server logs', '180 days (security)'],
                  ]}
                />
              </Section>

              <Section title="Deletion Timeline">
                <Table
                  headers={['Action', 'When']}
                  rows={[
                    ['Account access removed', 'Immediately'],
                    ['Personal data deleted', 'Within 30 days'],
                    ['Backup data purged', 'Within 60 days'],
                  ]}
                />
              </Section>

              <Section title="Option 1: Delete via the App">
                <ol className="space-y-3">
                  {[
                    'Open the Aikyam app',
                    'Go to Settings',
                    'Tap Profile',
                    'Tap Delete Account',
                    'Confirm your identity and tap Confirm Deletion',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Section>

              <Section title="Option 2: Request via This Page">
                <p className="mb-6">If you cannot access the app, submit a request below. We will verify your identity and process within 30 days.</p>
                <DeleteForm />
              </Section>

              <Section title="Option 3: Request via Email">
                <p>Email <a href="mailto:delete.account@shriaikyam.com" className="text-purple-600 hover:underline">delete.account@shriaikyam.com</a> with subject <strong className="text-gray-900">&ldquo;Account Deletion Request&rdquo;</strong> and include your registered phone number and username.</p>
              </Section>

              <Section title="Before You Delete">
                <Card>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-gray-900">Take a break:</strong> Log out and return any time.</li>
                    <li><strong className="text-gray-900">Adjust notifications:</strong> Turn them off in Settings.</li>
                    <li><strong className="text-gray-900">Privacy settings:</strong> Adjust profile visibility.</li>
                    <li><strong className="text-gray-900">Report a problem:</strong> <a href="mailto:support@shriaikyam.com" className="text-purple-600 hover:underline">support@shriaikyam.com</a></li>
                  </ul>
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

function DeleteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const reason = (form.elements.namedItem('reason') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent('Account Deletion Request');
    const body = encodeURIComponent(
      `Account Deletion Request\n\nPhone: ${phone}\nUsername: ${username || 'Not provided'}\nReason: ${reason || 'Not provided'}\n\nI confirm that I want to permanently delete my Aikyam account.`
    );
    window.location.href = `mailto:delete.account@shriaikyam.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-medium text-green-800 mb-2">Request Submitted</h3>
        <p className="text-green-700">We will verify your identity and process deletion within 30 days. A confirmation will be sent once complete.</p>
        <p className="text-green-700 text-sm mb-0">No response within 24 hours? Contact <a href="mailto:delete.account@shriaikyam.com" className="underline">delete.account@shriaikyam.com</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-5">
      <h3 className="text-lg font-medium text-gray-900">Account Deletion Request</h3>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1.5">Registered Phone Number *</label>
        <input type="text" id="phone" name="phone" required placeholder="Enter your registered phone number" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
      </div>

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-1.5">Username / Display Name</label>
        <input type="text" id="username" name="username" placeholder="Optional" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-900 mb-1.5">Reason for Deletion (optional)</label>
        <textarea id="reason" name="reason" rows={3} placeholder="Help us improve by sharing why you're leaving" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 accent-purple-600 rounded" />
          <span className="text-sm">I understand that account deletion is permanent and cannot be undone.</span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 accent-purple-600 rounded" />
          <span className="text-sm">I understand that pending seva bookings will be affected and non-refundable bookings will not be refunded.</span>
        </label>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 accent-purple-600 rounded" />
          <span className="text-sm">I understand that some data may be retained for legal compliance as described above.</span>
        </label>
      </div>

      <button type="submit" className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
        Submit Deletion Request
      </button>
    </form>
  );
}
