import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Canonical from '../components/SEO/Canonical';
import TestimonialCards from '../components/TestimonialCards';
import GmbBadge from '../components/GmbBadge';
import { countries } from '../lib/countries';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
);

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', countryCode: '+1', service: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: `${formData.countryCode} ${formData.phone}`,
          service: formData.service,
          sourcePage: 'Digital Marketing',
          formType: 'Digital Marketing Proposal'
        })
      });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', countryCode: '+1', service: '' });
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    { title: 'SEO & Search Growth', desc: 'Technical SEO, content strategy and link building built to win organic rankings and long-term compounding traffic — not short-lived spikes.', id: 'seo' },
    { title: 'Website Development', desc: 'Fast, conversion-focused websites and landing pages built on modern stacks — designed to turn traffic into leads, not just look good.', id: 'webdev' },
    { title: 'PPC & Google Ads Management', desc: 'Google Search, Shopping and Performance Max campaigns engineered to lower cost per acquisition while scaling ad spend profitably.', id: 'ppc' },
    { title: 'Meta Ads (Facebook & Instagram)', desc: 'Full-funnel Facebook and Instagram advertising — from scroll-stopping creative to retargeting sequences that recover abandoned buyers.', id: 'meta-ads' },
    { title: 'Graphic Designing', desc: 'Brand identity, social media creatives and marketing collateral that keep your brand consistent and instantly recognizable everywhere it shows up.', id: 'design' },
    { title: 'Video Editing', desc: 'Short-form and long-form video editing for YouTube, Reels, Shorts and TikTok — built for retention, watch time and shares.', id: 'video' },
    { title: 'WhatsApp Marketing & Automation', desc: 'Automated WhatsApp flows for abandoned carts, order updates and re-engagement — turning a messaging app into a retention channel.', id: 'whatsapp' },
    { title: 'White-Label Marketing', desc: 'Fulfillment for agencies — white-label SEO, PPC and design delivered under your brand, backed by our reporting and QA.', id: 'white-label' },
  ];

  const deepDives = [
    {
      id: 'seo', tag: 'SEO & Search Growth',
      title: 'Search Engine Optimization Services Built for Long-Term Organic Growth',
      desc: 'We combine technical SEO audits, search-intent-mapped content, and white-hat link building to help small and mid-size businesses in the US, UK, Canada and Australia rank for the keywords their customers are actually searching. No keyword-stuffed content, no shortcut backlinks — just a system that compounds month over month.',
      items: ['Technical SEO audits & Core Web Vitals fixes', 'Local SEO & Google Business Profile optimization', 'Content and topical authority strategy', 'AI search & AI Overview optimization (GEO)'],
      cta: 'Get a Free SEO Audit'
    },
    {
      id: 'webdev', tag: 'Website Development',
      title: 'Custom Website Development for Conversion-Focused Small Businesses',
      desc: 'A website that looks good but doesn\'t convert is a cost center, not an asset. Our development team builds fast, mobile-first websites and landing pages engineered around clear calls to action, so every visitor your marketing sends has a real reason to become a lead.',
      items: ['Responsive, SEO-ready website builds', 'Landing pages for paid ad campaigns', 'E-commerce & booking-system integrations', 'Ongoing CMS support & maintenance'],
      cta: 'Request a Website Quote'
    },
    {
      id: 'ppc', tag: 'PPC & Google Ads',
      title: 'Google Ads Management That Lowers Cost Per Acquisition',
      desc: 'Paid search should never be a black box. We build Google Search, Shopping and Performance Max campaigns on tightly structured account architecture and conversion tracking, so every dollar of ad spend is traceable back to real leads and sales.',
      items: ['Search, Shopping & Performance Max campaigns', 'Conversion tracking & call tracking setup', 'Negative keyword & budget-waste audits', 'Weekly performance reporting, no jargon'],
      cta: 'Get a Free PPC Account Review'
    },
    {
      id: 'meta-ads', tag: 'Meta Ads',
      title: 'Facebook & Instagram Advertising Agency for Lead Generation and Sales',
      desc: 'From scroll-stopping creative to lookalike audiences and retargeting sequences, our Meta Ads team builds full-funnel campaigns that turn cold audiences into customers — and recover the ones who almost bought.',
      items: ['Creative strategy & ad production', 'Audience research & lookalike targeting', 'Retargeting & abandoned-cart recovery', 'Pixel & Conversions API setup'],
      cta: 'Get a Free Meta Ads Audit'
    },
    {
      id: 'design', tag: 'Graphic Designing',
      title: 'Professional Graphic Design Services for Brand Identity and Social Media',
      desc: 'Inconsistent branding quietly erodes trust. Our design team builds a visual identity system — logo, colors, templates — and applies it consistently across your website, ads and social media so your brand looks credible everywhere a customer finds it.',
      items: ['Logo & brand identity design', 'Social media creative & ad banners', 'Brochures, presentations & sales collateral', 'Packaging & print-ready design'],
      cta: 'See Design Packages'
    },
    {
      id: 'video', tag: 'Video Editing',
      title: 'Video Editing Services for YouTube, Instagram Reels and TikTok Growth',
      desc: 'Raw footage is only half the job. Our editors cut, caption and pace videos specifically for how each platform\'s algorithm rewards watch time — so your content gets seen, not just uploaded.',
      items: ['Short-form editing for Reels, Shorts & TikTok', 'Long-form YouTube editing & thumbnails', 'Captioning, motion graphics & sound design', 'Ad-ready video variants for testing'],
      cta: 'Get a Video Sample Edit'
    },
    {
      id: 'whatsapp', tag: 'WhatsApp Marketing & Automation',
      title: 'WhatsApp Marketing Automation Agency for Customer Retention and Repeat Sales',
      desc: 'Email open rates keep falling — WhatsApp open rates don\'t. We build automated WhatsApp flows for order confirmations, abandoned-cart recovery, appointment reminders and re-engagement campaigns, turning a messaging app your customers already use into a dependable revenue channel.',
      items: ['WhatsApp Business API setup & verification', 'Automated cart-recovery & order-update flows', 'Broadcast campaigns & segmented lists', 'Chatbot & CRM integration'],
      cta: 'See WhatsApp Automation Demo'
    },
  ];

  const processSteps = [
    { num: '01', title: 'Audit', desc: 'Full-funnel audit of your website, SEO, ad accounts and analytics to find what\'s actually costing you conversions.' },
    { num: '02', title: 'Strategy', desc: 'A channel-mix plan mapped to your budget and goals — not a generic package pulled off a shelf.' },
    { num: '03', title: 'Build & Launch', desc: 'Website, creative, campaigns and automations built and shipped on a fixed timeline with clear milestones.' },
    { num: '04', title: 'Optimize', desc: 'Continuous A/B testing, conversion-rate optimization and budget reallocation toward what\'s working.' },
    { num: '05', title: 'Scale', desc: 'Once a channel proves ROI, we scale spend and output — backed by reporting you can actually read.' },
  ];

  const industries = [
    { title: 'Real Estate', desc: 'Local SEO & lead-gen ads for agents and brokerages' },
    { title: 'E-commerce & Retail', desc: 'Shopping ads, CRO and retargeting for online stores' },
    { title: 'Healthcare & Clinics', desc: 'Compliant SEO and appointment-focused ad funnels' },
    { title: 'Law Firms', desc: 'High-intent PPC and local SEO for practice areas' },
    { title: 'SaaS & Tech', desc: 'Demand-gen content and CRO for trial-to-paid growth' },
    { title: 'Home Services', desc: 'Local SEO, GBP management and call-tracking PPC' },
    { title: 'Restaurants & Hospitality', desc: 'Social content, reviews management and local visibility' },
    { title: 'Professional & Agency Services', desc: 'White-label fulfillment for agencies and consultants' },
  ];

  const whyUs = [
    { title: 'One Team, Every Channel', desc: 'SEO, PPC, design, video and web development planned together — so campaigns reinforce each other instead of competing for the same budget.' },
    { title: 'Transparent, Real-Time Reporting', desc: 'Live dashboards and plain-English reporting — you always know exactly what was done and what it returned.' },
    { title: 'No Long-Term Lock-In', desc: 'We earn renewals with results, not restrictive contracts. Month-to-month flexibility on every engagement.' },
    { title: 'Dedicated Account Manager', desc: 'A single point of contact who knows your business — not a rotating cast of account reps.' },
    { title: 'Certified & Compliant', desc: 'Google Partner and Meta Business Partner certified, with ad accounts and tracking set up to current privacy standards.' },
    { title: 'Built for Speed to Market', desc: 'Fixed-timeline delivery on websites, creative and campaign launches — growth doesn\'t wait for internal delays.' },
  ];

  const faqs = [
    { q: 'What does a full-service digital marketing agency actually do?', a: 'A full-service digital marketing agency like XD Media plans and executes multiple growth channels — SEO, paid advertising, website development, content, design and messaging automation — as one connected strategy instead of separate, disconnected projects. Instead of hiring a freelance SEO consultant, a separate PPC manager and a separate web developer, you get one team that coordinates all of it toward a single goal: more qualified leads and sales.' },
    { q: 'How much does it cost to hire a digital marketing agency in the US, UK, Canada or Australia?', a: 'Costs vary by scope, but most small-to-mid-size businesses in Tier-1 markets invest between a few hundred and a few thousand dollars per month depending on which services are included and current ad spend. We build custom packages rather than one-size-fits-all pricing, so you only pay for the channels that make sense for your budget and goals — ask for a free proposal to get exact numbers for your business.' },
    { q: 'How long does it take to see results from SEO and paid ads?', a: 'Paid advertising (Google Ads, Meta Ads) can generate leads within the first 1–2 weeks of launch once tracking and targeting are dialed in. SEO is a longer-horizon investment — most businesses see meaningful organic ranking movement within 3–6 months, with compounding returns after that as content and authority build up. We run both in parallel so you get short-term leads while long-term organic growth is being built.' },
    { q: 'Can one agency really manage SEO, PPC, Meta Ads, web development and content together?', a: 'Yes — that\'s the core reason XD Media exists. Each channel we run is staffed by a specialist, but all specialists work off one shared strategy and reporting dashboard for your account, so your website, ad campaigns and organic content are always aligned instead of working against each other.' },
    { q: 'Do you offer month-to-month contracts, or are we locked into a long-term agreement?', a: 'All of our engagements are month-to-month. We believe results should earn your renewal, not a contract clause — so you can scale up, pause, or adjust services as your business needs change.' },
    { q: 'Do you work with businesses outside your home country?', a: 'Yes. XD Media works with clients across the United States, United Kingdom, Canada and Australia, in addition to other markets. Our team operates across time zones and reports in your local business hours and currency preferences.' },
    { q: 'Do you provide white-label digital marketing services for other agencies?', a: 'Yes — we offer white-label SEO, PPC and design fulfillment for marketing agencies and consultants who want to expand their service offering without hiring an in-house team. Work is delivered under your brand with the same reporting and QA standards used on our direct client accounts.' },
    { q: 'How do you report results and prove ROI?', a: 'Every client gets access to a live reporting dashboard covering rankings, traffic, ad spend and conversions, plus a monthly plain-English summary call. We track cost per lead, cost per acquisition and revenue attribution wherever possible, so results are measured in business outcomes, not vanity metrics.' },
  ];

  const scrollToForm = () => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Helmet>
        <title>Core Growth Specialists | Digital Marketing Agency for SEO, PPC, Web Development & Meta Ads</title>
        <meta name="description" content="Core Growth Specialists is a full-service digital marketing agency helping brands in the USA, UK, Canada & Australia grow with SEO, PPC, web development, Meta Ads, graphic design, video editing and WhatsApp marketing automation." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          "name": "XD Media", "url": "https://xdmedia.in",
          "description": "Full-service digital marketing agency offering SEO, PPC, web development, Meta Ads, graphic design, video editing and WhatsApp marketing automation for businesses in the USA, UK, Canada and Australia.",
          "areaServed": ["United States", "United Kingdom", "Canada", "Australia"]
        })}</script>
      </Helmet>
      <Canonical path="/digital-market" />

      <style>{`
        .dm-page { --green: #2ee878; --green-2: #17b85e; --green-soft: rgba(46,232,120,0.12); --bg-dark: #060f0a; --bg-dark-2: #0b1f14; --bg-dark-3: #0e2a1b; --ink: #eafff2; --muted: #9fb8a9; --border-dark: #1d3626; --border-light: #e3ece6; --bg-light-2: #f4f9f6; font-family: 'DM Sans', sans-serif; }
        .dm-page h1,.dm-page h2,.dm-page h3,.dm-page h4 { font-family: 'DM Sans', sans-serif; font-weight: 600; line-height: 1.15; letter-spacing: -0.01em; }
        .dm-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green-2); margin-bottom: 14px; }
        .dm-eyebrow::before { content: ""; width: 18px; height: 2px; background: var(--green-2); display: inline-block; }
      `}</style>

      <div className="dm-page">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden text-[#eafff2] pt-16 sm:pt-20">
          {/* Background image only — same photo as Home; original styling kept */}
          <div className="absolute inset-0">
            <img
              src="/premium_photo-1661696348133-653cb6cc037c.avif"
              className="w-full h-full object-cover"
              alt=""
            />
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(1200px 600px at 20% -10%, rgba(18,51,34,0.88) 0%, rgba(6,15,10,0.94) 55%)' }}
            />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-16 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
              <div>
                <div className="mb-5">
                  <GmbBadge />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold mb-5 leading-[1.12]">
                  One Growth Partner. <span className="text-[#2ee878] font-fraunces italic">Every Channel.</span> 3X The Results.
                </h1>
                <p className="text-lg text-[#9fb8a9] max-w-[560px] mb-7">
                  XD Media is a performance-driven digital marketing agency helping brands across the USA, UK, Canada and Australia grow with SEO, PPC, web development, Meta Ads, graphic design, video editing and WhatsApp marketing automation — all under one roof.
                </p>
                <div className="flex flex-wrap gap-4 mb-9">
                  <button onClick={scrollToForm} className="px-7 py-3.5 rounded-full font-semibold text-[15px] bg-[#2ee878] text-[#052012] hover:bg-[#17b85e] transition-all hover:-translate-y-0.5">Get My Free Growth Plan</button>
                  <a href="#services" className="px-7 py-3.5 rounded-full font-semibold text-[15px] border-[1.5px] border-[#1d3626] text-[#eafff2] hover:border-[#2ee878] hover:text-[#2ee878] transition-all">Explore Our Services</a>
                </div>
                <div className="flex flex-wrap gap-6 text-[13.5px] text-[#9fb8a9]">
                  {['Transparent, no-jargon reporting', 'No long-term lock-in contracts', 'Dedicated account manager'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#2ee878" strokeWidth="2.5" strokeLinecap="round" /></svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Form */}
              <div id="lead-form" className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 relative shadow-2xl overflow-hidden text-slate-900">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-green-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                {submitted ? (
                  <div className="text-center py-10 relative z-10">
                    <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Proposal Request Received!</h3>
                    <p className="text-slate-500 text-sm mb-6">We'll reply within 24 hours with a custom growth plan.</p>
                    <button onClick={() => setSubmitted(false)} className="text-[#17b85e] font-semibold hover:underline text-sm">Submit another request</button>
                  </div>
                ) : (
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl text-slate-900 mb-6 text-center leading-tight font-inter">
                      Get A Free <span className="font-fraunces italic text-[#16a34a]">Growth Proposal</span> & Estimate
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          required
                          disabled={submitting}
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          disabled={submitting}
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <select
                          value={formData.countryCode}
                          onChange={e => setFormData({ ...formData, countryCode: e.target.value })}
                          disabled={submitting}
                          className="sm:col-span-1 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-3.5 rounded-xl focus:border-[#47BF72] focus:bg-white outline-none transition-all text-sm"
                        >
                          {countries.map((c, idx) => (
                            <option key={`${c.name}-${c.code}-${idx}`} value={c.code}>
                              {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          disabled={submitting}
                          placeholder="Phone Number (optional)"
                          className="sm:col-span-2 px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm placeholder-slate-400 disabled:opacity-50 bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                        />
                      </div>
                      <div>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          required
                          disabled={submitting}
                          className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 outline-none text-sm disabled:opacity-50 appearance-none cursor-pointer bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#47BF72] focus:bg-white"
                          style={{
                            color: formData.service ? '#0f172a' : 'rgba(15, 23, 42, 0.4)'
                          }}
                        >
                          <option value="" disabled style={{ background: 'white', color: 'rgba(15, 23, 42, 0.4)' }}>
                            Select Service Interested In
                          </option>
                          <option value="SEO & Search Growth" style={{ background: 'white', color: '#0f172a' }}>
                            SEO & Search Growth
                          </option>
                          <option value="Website Development" style={{ background: 'white', color: '#0f172a' }}>
                            Website Development
                          </option>
                          <option value="PPC / Google Ads" style={{ background: 'white', color: '#0f172a' }}>
                            PPC / Google Ads
                          </option>
                          <option value="Meta Ads (Facebook & Instagram)" style={{ background: 'white', color: '#0f172a' }}>
                            Meta Ads (Facebook & Instagram)
                          </option>
                          <option value="Graphic Designing" style={{ background: 'white', color: '#0f172a' }}>
                            Graphic Designing
                          </option>
                          <option value="Video Editing" style={{ background: 'white', color: '#0f172a' }}>
                            Video Editing
                          </option>
                          <option value="WhatsApp Marketing & Automation" style={{ background: 'white', color: '#0f172a' }}>
                            WhatsApp Marketing & Automation
                          </option>
                          <option value="Full Growth Package" style={{ background: 'white', color: '#0f172a' }}>
                            Full Growth Package
                          </option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl font-medium text-white transition-all duration-200 shadow-lg text-base uppercase tracking-wide disabled:opacity-50"
                        style={{ backgroundColor: '#47a858' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#47BF72'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#47a858'}
                      >
                        {submitting ? 'Sending...' : 'Get My Free Proposal →'}
                      </button>
                    </form>
                    <p className="text-center text-[11.5px] text-slate-400 mt-3">No spam. No obligation. Just a real strategy call.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="relative z-10 border-t border-b border-[#1d3626]" style={{ background: '#0b1f14' }}>
            <div className="max-w-[1200px] mx-auto px-6 py-7 flex items-center justify-between flex-wrap gap-6">
              <span className="text-[12.5px] text-[#9fb8a9] uppercase tracking-widest font-semibold whitespace-nowrap">Trusted by growing brands in</span>
              <div className="flex gap-10 flex-wrap opacity-75">
                {['USA', 'UK', 'Canada', 'Australia', '+ 100 Global Clients'].map((s, i) => (
                  <span key={i} className="font-bold text-[16px] text-[#9fb8a9]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow">Our Services</span>
              <h2 className="text-[38px] mb-3.5 text-gray-900">A Full-Service Digital Marketing Agency, Not a One-Trick SEO Shop</h2>
              <p className="text-gray-500 text-[17px]">Most agencies specialize in one channel and hope the rest falls into place. We run SEO, paid ads, web development, design, video and messaging as one connected growth engine — so every channel compounds the others instead of competing for budget.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-[#f4f9f6] border border-[#e3ece6] rounded-[14px] p-6 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-[#17b85e] group">
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 mb-3.5">{s.desc}</p>
                  <a href={`#${s.id}`} className="text-[13.5px] font-semibold text-[#17b85e]">Learn more →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE DEEP-DIVES ===== */}
        <section className="py-24 bg-[#f4f9f6]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow">Services In Depth</span>
              <h2 className="text-[38px] mb-3.5 text-gray-900">How Each Service Is Built to Move Revenue, Not Just Metrics</h2>
              <p className="text-gray-500 text-[17px]">Every engagement starts with your business goal — leads, bookings, or sales — and works backward into the channel mix that gets there fastest.</p>
            </div>
            <div className="space-y-0">
              {deepDives.map((dd, i) => {
                const imageMap = {
                  'seo': '/SEO.png',
                  'webdev': '/Custom Web Devops.png',
                  'ppc': '/GOOGLE ADS.png',
                  'meta-ads': '/Meta Ads.png',
                  'design': '/Design.png',
                  'video': '/Video Editing.png',
                  'whatsapp': '/Whatsapp Marketing Automation.png'
                };
                const imageSrc = imageMap[dd.id];

                return (
                  <div key={dd.id} id={dd.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-12 border-b border-[#e3ece6] last:border-b-0 ${i % 2 !== 0 ? 'direction-rtl' : ''}`}>
                    <div className={`rounded-[22px] overflow-hidden shadow-lg border border-[#e3ece6] bg-white flex items-center justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      {imageSrc ? (
                        <img src={imageSrc} alt={dd.title} className="w-full h-auto object-contain rounded-[22px]" />
                      ) : (
                        <span className="opacity-40 text-xs tracking-widest uppercase text-[#9fb8a9]">Image Placeholder</span>
                      )}
                    </div>
                    <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                      <span className="inline-block text-[12px] font-bold px-3 py-1 rounded-full text-[#17b85e] mb-3.5" style={{ background: 'rgba(46,232,120,0.12)' }}>{dd.tag}</span>
                      <h3 className="text-[28px] font-bold text-gray-900 mb-3.5">{dd.title}</h3>
                      <p className="text-gray-500 text-[15.5px] mb-4">{dd.desc}</p>
                      <ul className="space-y-2.5 mb-5">
                        {dd.items.map((item, j) => (
                          <li key={j} className="flex gap-2.5 items-start text-[14.5px] text-gray-800">
                            <span className="mt-0.5 text-[#17b85e] flex-shrink-0"><CheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <button onClick={scrollToForm} className="px-7 py-3.5 rounded-full font-semibold text-[15px] border-[1.5px] border-[#e3ece6] text-gray-800 hover:border-[#17b85e] hover:text-[#17b85e] transition-all">{dd.cta}</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== AI / GEO TECH ===== */}
        <section className="py-24 text-[#eafff2]" style={{ background: '#060f0a' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow" style={{ color: '#2ee878' }}>Next-Gen Visibility</span>
              <h2 className="text-[38px] mb-3.5">Get Found on Google, ChatGPT and AI Overviews — Not Just the Old Search Results</h2>
              <p className="text-[#9fb8a9] text-[17px]">Search behavior has changed. We optimize your brand's presence for AI-powered search — Google AI Overviews, ChatGPT, and Perplexity — alongside traditional rankings, so you show up wherever your next customer is asking the question.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'AI Search Optimization (AEO/GEO)', desc: 'We structure your content and schema so AI answer engines can cite your business by name — a growing share of buying research now starts in a chat window, not a search bar.', cta: 'Check My AI Visibility', image: '/AI Search Optimization.png' },
                { title: 'Core Web Vitals & CMS Optimization', desc: 'Slow sites lose both rankings and customers. We audit and optimize your CMS — WordPress, Shopify, Webflow or custom — for speed, stability and mobile usability.', cta: 'Get a Free Speed Audit', image: '/CMS Optimizaton.png' },
              ].map((card, i) => (
                <div key={i} className="rounded-[22px] p-8 border border-[#1d3626]" style={{ background: '#0b1f14' }}>
                  <div className="rounded-xl mb-5 overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-auto object-contain rounded-xl" />
                  </div>
                  <h3 className="text-[21px] font-bold mb-2.5">{card.title}</h3>
                  <p className="text-[#9fb8a9] text-[14.5px] mb-4">{card.desc}</p>
                  <button onClick={scrollToForm} className="px-7 py-3.5 rounded-full font-semibold text-[15px] border-[1.5px] border-[#1d3626] text-[#eafff2] hover:border-[#2ee878] hover:text-[#2ee878] transition-all">{card.cta}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHO WE ARE ===== */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 sm:p-16 flex flex-col justify-center text-[#eafff2]" style={{ background: 'linear-gradient(160deg,#0b2418,#123322)' }}>
            <span className="dm-eyebrow" style={{ color: '#2ee878' }}>Who We Are</span>
            <h2 className="text-[34px] font-bold mb-4">A Growth Team, Not a Vendor List</h2>
            <p className="text-[#9fb8a9] text-[15.5px] mb-7">XD Media was built on a simple frustration: businesses were hiring five different vendors for SEO, ads, design and web — and getting five different, disconnected strategies. We built one team that plans and executes every channel together, so nothing works in a silo.</p>
            <div className="grid grid-cols-3 gap-5 mb-7">
              {[{ n: '100+', l: 'Brands served globally' }, { n: '4', l: 'Tier-1 markets served (US, UK, CA, AU)' }, { n: '7', l: 'Services under one roof' }].map((s, i) => (
                <div key={i}><b className="text-[32px] text-[#2ee878] block">{s.n}</b><span className="text-[12.5px] text-[#9fb8a9]">{s.l}</span></div>
              ))}
            </div>
            <a href="/about-us" className="inline-flex w-fit px-7 py-3.5 rounded-full font-semibold text-[15px] bg-[#2ee878] text-[#052012] hover:bg-[#17b85e] transition-all">Learn More About Us</a>
          </div>
          <div className="p-12 sm:p-16 bg-[#f4f9f6] flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-[320px] aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white mb-6">
              <img src="/88.png" alt="XD Media Growth Team" className="w-full h-full object-cover" />
            </div>
            <p className="text-[13px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Certified Partners</p>
            <div className="flex gap-4 flex-wrap justify-center">
              {['Google Partner', 'Meta Business Partner', 'Semrush Certified', 'HubSpot Certified'].map((p, i) => (
                <span key={i} className="text-[13px] font-semibold text-gray-500 border border-[#e3ece6] px-3.5 py-2 rounded-lg">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="process" className="py-24 text-[#eafff2]" style={{ background: '#060f0a' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow" style={{ color: '#2ee878' }}>Execution Engine</span>
              <h2 className="text-[38px] mb-3.5">How We Build Growth — Step by Step</h2>
              <p className="text-[#9fb8a9] text-[17px]">We fix the foundation, connect the channels, then scale performance. Most agencies guess. We engineer.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {processSteps.map((s, i) => (
                <div key={i} className="rounded-[14px] p-6 border border-[#1d3626]" style={{ background: '#0b1f14' }}>
                  <div className="text-[13px] text-[#2ee878] font-bold mb-3.5">Step {s.num}</div>
                  <h4 className="text-[17px] font-bold mb-2">{s.title}</h4>
                  <p className="text-[13.5px] text-[#9fb8a9]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <div id="results">
          <TestimonialCards />
        </div>

        {/* ===== INDUSTRIES ===== */}
        <section id="industries" className="py-24 bg-[#f4f9f6]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow">Who We Work With</span>
              <h2 className="text-[38px] mb-3.5 text-gray-900">Digital Marketing Services Tailored to Your Industry</h2>
              <p className="text-gray-500 text-[17px]">Generic strategy doesn't convert. We tailor channel mix and messaging to how your specific industry actually buys.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white border border-[#e3ece6] rounded-[14px] p-5 text-center transition-all hover:-translate-y-1 hover:border-[#17b85e]">
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1.5">{ind.title}</h4>
                  <p className="text-[12.5px] text-gray-500">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY US ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow">Why Businesses Choose XD Media</span>
              <h2 className="text-[38px] mb-3.5 text-gray-900">What Makes Us the Right Digital Marketing Partner</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} className="p-2">
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-[14.5px] text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="px-6 pb-24">
          <div className="max-w-[1200px] mx-auto rounded-[22px] p-12 sm:p-16 flex flex-wrap items-center justify-between gap-8 text-[#eafff2]" style={{ background: 'linear-gradient(135deg,#0b2418,#173a26)' }}>
            <h2 className="text-[34px] font-bold max-w-[520px]">Let's Build a Growth Engine for Your Brand</h2>
            <div className="flex gap-4">
              <button onClick={scrollToForm} className="px-7 py-3.5 rounded-full font-semibold text-[15px] bg-[#2ee878] text-[#052012] hover:bg-[#17b85e] transition-all">Get My Free Proposal</button>
              <a href="/contact" className="px-7 py-3.5 rounded-full font-semibold text-[15px] border-[1.5px] border-[#1d3626] text-[#eafff2] hover:border-[#2ee878] hover:text-[#2ee878] transition-all">Book a Strategy Call</a>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-24 bg-[#f4f9f6]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="dm-eyebrow">Frequently Asked Questions</span>
              <h2 className="text-[38px] mb-3.5 text-gray-900">Digital Marketing Agency FAQs</h2>
              <p className="text-gray-500 text-[17px]">Answers to what business owners ask us most before getting started.</p>
            </div>
            <div className="max-w-[840px] mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-[#e3ece6] rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[15.5px] text-gray-900 hover:bg-gray-50 transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <span className={`text-xl text-[#17b85e] transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[400px]' : 'max-h-0'}`}>
                    <p className="px-6 pb-5 text-gray-500 text-[14.5px]">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalMarketing;
