import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, CheckCircle2, Award, Briefcase, Sparkles, Instagram, ExternalLink } from 'lucide-react';
import Canonical from '../components/SEO/Canonical';

const teamData = {
  'ritik-rozra': {
    name: 'Ritik Rozra',
    role: 'Sr. SEO Strategist',
    tagline: 'Making Brands Easier to Discover , on Google, AI, and Whatever Comes Next',
    avatar: '/ritik.jpeg',
    bio: `I got into SEO because I wanted to understand one simple thing: why does Google choose one website over another? Four years and hundreds of projects later, I'm still asking that question , I've just gotten considerably better at finding the answer. From technical SEO and content strategy to site architecture, topical authority and AI search, I love figuring out what's stopping a website from growing and turning that into a strategy that actually moves the needle.\n\nAt XD Media, I work on building SEO strategies that go beyond rankings and traffic. Because getting 100,000 visitors looks great in a report, but if none of them become customers, we haven't really won. My approach combines search behaviour, data, content, technical SEO and business goals to make brands easier to discover, whether someone is searching through Google, an AI assistant or whatever search looks like next.\n\nI'm also slightly obsessed with where SEO is heading. AEO, GEO, AI Overviews, LLM visibility, entities, information gain , I test, learn and experiment with all of it. But underneath the fancy terminology, my philosophy stays pretty simple: create something genuinely worth finding, make it ridiculously easy to understand, and give search engines a good reason to trust it.\n\nAnd yes, after all these years, I still refresh Search Console after publishing something good. Some habits are difficult to lose.`,
    experience: '4+ Years',
    specialties: ['Technical SEO & Site Architecture', 'Topical Authority & Content Strategy', 'AEO, GEO & AI Search Optimisation', 'LLM Visibility & Entity SEO'],
    achievements: [
      'Scaled organic traffic for a SaaS client by 340% within 8 months',
      'Fixed Core Web Vitals for 50+ enterprise sites achieving 90+ PageSpeed scores',
      'Built topical clusters driving 150K+ monthly organic visits'
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/ritikrozra-seo-specialist/',
      twitter: 'https://x.com/rozra_ritik',
      threads: 'https://www.threads.com/@ritikrozra',
      email: 'ritik@xdmedia.in'
    }
  },
  'aryan-puri': {
    name: 'Aryan Puri',
    role: 'Graphics & Packaging Designer',
    tagline: 'Designing Packaging & Print that Strengthens Brand Identity and Wins Shelf Space',
    avatar: '/Aryan.png',
    bio: `I'm a Graphic Designer with 2+ years of professional experience, specializing in Packaging Design and Print Design. Throughout my journey, I have worked on creating visually engaging, functional, and market-ready designs that strengthen brand identity and enhance customer experience. My approach combines creativity, strategy, and attention to detail to deliver packaging and print solutions that are both impactful and practical.\n\nBeyond my core specialization, I also have experience in Brand Identity, Social Media Design, and Video Editing. I enjoy helping businesses build a consistent visual presence across print and digital platforms through thoughtful design solutions. Whether it's developing product packaging, marketing materials, or brand assets, I believe every design should communicate with purpose, solve real problems, and leave a lasting impression.`,
    experience: '2+ Years',
    specialties: ['Packaging Design & Print Design', 'Brand Identity Development', 'Social Media Design', 'Video Editing & Motion'],
    achievements: [
      'Designed market-ready packaging for multiple product launches across FMCG categories',
      'Built consistent brand identity systems across print and digital platforms',
      'Delivered end-to-end visual solutions from concept to production-ready artwork'
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/aryan-puri-476136219',
      instagram: 'https://www.instagram.com/aryanpuristoryteller?igsh=cW9xMnE4N3F3dTY1',
      behance: 'https://www.behance.net/aryanpuri14/projects',
      email: 'aryan@xdmedia.in'
    }
  },
  'adil-ali': {
    name: 'Adil Ali',
    role: 'Video Editor & D.O.P',
    tagline: 'I Don\'t Just Make Videos , I Tell Stories',
    avatar: '/adil.heic',
    bio: `I don't just make videos , I tell stories. For me, filmmaking has never been about pressing the record button. It's about finding the emotion behind every frame, the purpose behind every shot, and the story that deserves to be remembered.\n\nOver the past five years, I've been working as a Director, Director of Photography (D.O.P.), and Video Editor, constantly learning, experimenting, and refining my craft with every project I take on.\n\nCurrently, I work as a Video Editor at XD Media, where I collaborate with talented creatives to produce content that is engaging, visually compelling, and purpose-driven. Every project challenges me to think differently, solve creative problems, and push my storytelling further.\n\nMy journey hasn't been about chasing titles , it's been about chasing better stories. I've directed shoots, operated cameras, built visual concepts, crafted cinematic edits, and spent countless hours perfecting the smallest details because I believe those details are what separate good content from unforgettable films.`,
    experience: '5+ Years',
    specialties: ['Cinematic Video Editing', 'Direction & D.O.P', 'Visual Storytelling', 'Content Production & Post-Production'],
    achievements: [
      '5+ years directing and shooting cinematic video content across multiple genres',
      'Produced purpose-driven brand films and social media content at XD Media',
      'Combined camera operation, direction, and editing to deliver full end-to-end video production'
    ],
    social: {
      instagram: 'https://www.instagram.com/theaadiarts?igsh=dHh6bTF3OG85djJ2',
      email: 'adil@xdmedia.in'
    }
  }
};

const TeamMemberDetail = () => {
  const { memberId } = useParams();
  const member = teamData[memberId];

  if (!member) {
    return <Navigate to="/about-us" replace />;
  }

  const socialBtn =
    'inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#47BF72] hover:text-[#16a34a] hover:bg-[#f0fdf4] text-sm font-medium transition-all';

  return (
    <>
      <Helmet>
        <title>{member.name} | {member.role} at XD MEDIA</title>
        <meta name="description" content={`${member.name} is the ${member.role} at XD MEDIA. ${member.tagline}`} />
      </Helmet>
      <Canonical path={`/team/${memberId}`} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 sm:pt-32 pb-24 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link , high z-index + extra top space so navbar logo cannot intercept clicks */}
          <div className="relative z-[60] mb-8">
            <a
              href="/about-us"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#47BF72]/40 text-[#16a34a] hover:bg-[#47BF72] hover:text-white font-semibold text-sm transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About Us
            </a>
          </div>

          {/* Profile Card Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 mb-12 relative overflow-hidden shadow-sm"
          >
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#47BF72]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              {/* Avatar Image */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#47BF72]/30 shadow-lg">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="lg:col-span-8 text-center lg:text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#16a34a] bg-[#f0fdf4] border border-[#dcfce7] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> XD Media Team
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  {member.name}
                </h1>

                <p className="text-xl text-[#16a34a] font-semibold">
                  {member.role}
                </p>

                <p className="text-slate-500 text-base sm:text-lg leading-relaxed italic max-w-2xl">
                  "{member.tagline}"
                </p>

                {/* Social Links & Contact */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={socialBtn}>
                      <Linkedin className="w-4 h-4 text-[#16a34a]" /> LinkedIn
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className={socialBtn}>
                      <Twitter className="w-4 h-4 text-[#16a34a]" /> X / Twitter
                    </a>
                  )}
                  {member.social.threads && (
                    <a href={member.social.threads} target="_blank" rel="noopener noreferrer" className={socialBtn}>
                      <ExternalLink className="w-4 h-4 text-[#16a34a]" /> Threads
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className={socialBtn}>
                      <Instagram className="w-4 h-4 text-[#16a34a]" /> Instagram
                    </a>
                  )}
                  {member.social.behance && (
                    <a href={member.social.behance} target="_blank" rel="noopener noreferrer" className={socialBtn}>
                      <ExternalLink className="w-4 h-4 text-[#16a34a]" /> Behance
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#47BF72] text-[#052012] font-bold text-sm hover:bg-[#3aa85f] transition-all"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#16a34a]" /> Overview & Experience
                </h2>
                <div className="space-y-4">
                  {member.bio.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed text-base">{para}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#16a34a]" /> Proven Impact
                </h2>
                <ul className="space-y-4">
                  {member.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
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
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">Core Skills</h3>
                <div className="space-y-2.5">
                  {member.specialties.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                  <p className="text-xs text-slate-500 mb-4">Want to work directly on your campaign?</p>
                  <Link
                    to="/contact"
                    className="block w-full py-3 rounded-xl bg-[#47BF72] text-[#052012] font-bold text-sm hover:bg-[#3aa85f] transition-all text-center"
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
