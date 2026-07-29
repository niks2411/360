import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, CheckCircle2, Award, Briefcase, Sparkles } from 'lucide-react';
import Canonical from '../components/SEO/Canonical';

const teamData = {
  'ritik-rozra': {
    name: 'Ritik Rozra',
    role: 'SEO Manager',
    tagline: 'Driving 300%+ Organic Search Growth for Global Brands',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&crop=face&auto=format',
    coverBg: 'linear-gradient(135deg, #0b2418 0%, #173a26 50%, #060f0a 100%)',
    bio: 'Ritik leads technical SEO, search strategy, and content optimization at XD MEDIA. With 6+ years of experience across eCommerce, B2B SaaS, and local service markets, he has audited over 200 websites and delivered sustainable organic rankings without shortcut black-hat tactics.',
    experience: '6+ Years',
    specialties: ['Technical SEO Audits & Core Web Vitals', 'Topical Authority & Content Architecture', 'eCommerce & SaaS Keyword Strategy', 'Generative Engine Optimization (GEO/AEO)'],
    achievements: [
      'Scaled organic traffic for a SaaS client by 340% within 8 months',
      'Fixed Core Web Vitals for 50+ Enterprise sites achieving 90+ PageSpeed scores',
      'Built topical clusters driving 150K+ monthly organic visits'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'ritik@xdmedia.in'
    }
  },
  'aryan-puri': {
    name: 'Aryan Puri',
    role: 'Digital Marketer',
    tagline: 'Architect of High-Converting Paid Funnels & Performance Campaigns',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&auto=format',
    coverBg: 'linear-gradient(135deg, #123322 0%, #0e2a1b 50%, #060f0a 100%)',
    bio: 'Aryan is a performance marketing specialist at XD MEDIA, specializing in Meta Ads (Facebook & Instagram), Google Ads, and full-funnel conversion rate optimization. He has managed over $1.5M in profitable ad spend across North America, Europe, and Asia-Pacific markets.',
    experience: '5+ Years',
    specialties: ['Meta & Google Ads Campaign Scaling', 'Conversion Rate Optimization (CRO)', 'Omnichannel Retargeting Sequences', 'Performance Analytics & ROAS Optimization'],
    achievements: [
      'Managed $1.5M+ ad spend delivering an average 3.2x ROAS across campaigns',
      'Lowered Cost Per Acquisition (CPA) by 42% for an international D2C brand',
      'Designed lead generation funnels achieving 18%+ conversion rates'
    ],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'aryan@xdmedia.in'
    }
  }
};

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const member = teamData[memberId];

  if (!member) {
    return <Navigate to="/about-us" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{member.name} | {member.role} at XD MEDIA</title>
        <meta name="description" content={`${member.name} is the ${member.role} at XD MEDIA. ${member.tagline}`} />
      </Helmet>
      <Canonical path={`/team/${memberId}`} />

      <main className="min-h-screen bg-[#060f0a] text-white pt-10 pb-24 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-[#47BF72] hover:text-green-400 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to About Us
            </Link>
          </motion.div>

          {/* Profile Card Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 p-8 sm:p-12 mb-12 relative overflow-hidden"
            style={{ background: member.coverBg }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              {/* Avatar Image */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#47BF72]/40 shadow-2xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="lg:col-span-8 text-center lg:text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#47BF72] bg-[#47BF72]/10 border border-[#47BF72]/30 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Team Leader
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {member.name}
                </h1>

                <p className="text-xl text-[#47BF72] font-semibold">
                  {member.role}
                </p>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic max-w-2xl">
                  "{member.tagline}"
                </p>

                {/* Social Links & Contact */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#47BF72] hover:text-[#47BF72] text-sm font-medium transition-all"
                    >
                      <Linkedin className="w-4 h-4 text-[#47BF72]" /> LinkedIn
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#47BF72] hover:text-[#47BF72] text-sm font-medium transition-all"
                    >
                      <Twitter className="w-4 h-4 text-[#47BF72]" /> Twitter
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#47BF72] text-[#052012] font-bold text-sm hover:bg-green-400 transition-all"
                    >
                      <Mail className="w-4 h-4" /> Email Direct
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: About & Achievements */}
            <div className="lg:col-span-8 space-y-8">

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#47BF72]" /> Overview & Experience
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {member.bio}
                </p>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#47BF72]" /> Proven Impact
                </h2>
                <ul className="space-y-4">
                  {member.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#47BF72] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* Right Column: Core Expertise */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-white mb-4">Core Skills</h3>
                <div className="space-y-2.5">
                  {member.specialties.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-xs text-gray-400 mb-4">Want to work directly on your campaign?</p>
                  <Link
                    to="/contact"
                    className="block w-full py-3 rounded-xl bg-[#47BF72] text-[#052012] font-bold text-sm hover:bg-green-400 transition-all text-center"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};

export default TeamMemberDetail;
