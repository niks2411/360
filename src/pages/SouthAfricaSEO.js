import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Canonical from '../components/SEO/Canonical';
import TestimonialCards from '../components/TestimonialCards';
import { CheckCircle, ChevronDown, HelpCircle, Send } from 'lucide-react';
import { countries } from '../lib/countries';

const SouthAfricaSEO = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    city: 'Sandton',
    serviceNeed: 'Local SEO',
    phoneNumber: '',
    countryCode: '+27'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [activeFaq, setActiveFaq] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          city: formData.city,
          serviceNeed: formData.serviceNeed,
          phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
          sourcePage: 'Affordable SEO Services South Africa',
          formType: 'Hero Quote Request'
        })
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        website: '',
        city: 'Sandton',
        serviceNeed: 'Local SEO',
        phoneNumber: '',
        countryCode: '+27'
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit request. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      q: 'Why does XD Media cost less than a big Sandton or Cape Town agency?',
      a: 'The gap comes from overhead, not quality of work. A traditional office-based agency retainer carries the cost of a city-centre lease and multiple layers of account management. XD Media runs a lean, remote-first team of certified specialists working directly on your account — the same technical audits, content and link building, without the overhead markup.'
    },
    {
      q: 'Is outsourcing SEO to a remote team safe, or will quality suffer?',
      a: 'It depends entirely on the provider. Risk comes from agencies that subcontract to unvetted freelancers, use bulk-bought links, or refuse to explain their process. XD Media keeps every account in-house, follows Google\'s own guidelines, and gives you transparent reporting so nothing about your account is hidden.'
    },
    {
      q: 'How much do your SEO packages cost?',
      a: 'Our published starting points run from R4,999/month for local SEO to R11,999/month for full-scope SEO, with custom pricing for agency white-label fulfillment. Exact scope depends on your market, competition and current site health, which we confirm on a free audit call before you commit to anything.'
    },
    {
      q: 'Can marketing agencies white-label or outsource SEO fulfillment to your team?',
      a: 'Yes. We provide fully white-labeled SEO — audits, content, link building and reporting — under your agency\'s brand, with NDA-backed confidentiality. Your clients interact only with your brand; we work behind the scenes as your fulfillment team.'
    },
    {
      q: 'How long does it take to see SEO results?',
      a: 'Most clients see meaningful ranking movement within 3 to 6 months, with results compounding after that as content and backlinks accumulate. Anyone promising first-page rankings in days or weeks is describing a tactic that risks a Google penalty, not real SEO.'
    },
    {
      q: 'Do you guarantee first-page rankings?',
      a: 'No — and any agency that guarantees specific rankings in writing should be treated as a red flag, since no agency controls Google\'s algorithm. What we do commit to is the process: technical fixes, quality content and white-hat links, delivered on schedule and reported transparently every month.'
    },
    {
      q: 'Do you offer month-to-month contracts?',
      a: 'Yes, all engagements are month-to-month. We\'d rather earn your renewal with results than hold your account through a long-term contract.'
    },
    {
      q: 'Which parts of South Africa and which industries do you work with?',
      a: 'We serve small businesses, ecommerce brands and marketing agencies across Sandton, Rosebank, Cape Town, Johannesburg, Pretoria and Midrand — across industries such as home services, healthcare, legal, real estate, hospitality and SaaS.'
    }
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.xdmedia.in/' },
      { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://www.xdmedia.in/seo-service' },
      { '@type': 'ListItem', position: 3, name: 'Affordable SEO Services in South Africa', item: 'https://www.xdmedia.in/affordable-seo-services-south-africa' }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Affordable SEO Services',
    name: 'Affordable SEO Services in South Africa',
    description: 'White-hat SEO services for small businesses, ecommerce brands and marketing agencies across South Africa, including local SEO, technical SEO, content, link building and white-label fulfillment.',
    provider: {
      '@type': 'Organization',
      name: 'XD Media',
      url: 'https://www.xdmedia.in'
    },
    areaServed: [
      { '@type': 'Place', name: 'Sandton, South Africa' },
      { '@type': 'Place', name: 'Rosebank, South Africa' },
      { '@type': 'Place', name: 'Cape Town, South Africa' },
      { '@type': 'Place', name: 'Johannesburg, South Africa' },
      { '@type': 'Place', name: 'Pretoria, South Africa' },
      { '@type': 'Place', name: 'Midrand, South Africa' }
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ZAR',
      lowPrice: '4999',
      highPrice: '11999',
      offerCount: '3'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Affordable SEO Services in South Africa | Local SEO for Sandton, Rosebank &amp; Cape Town | XD Media</title>
        <meta
          name="description"
          content="XD Media builds SEO programs for small businesses, ecommerce brands and agencies across Sandton, Rosebank, Cape Town, Johannesburg, Pretoria and Midrand. Transparent Rand pricing, certified specialists, no long-term contracts."
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Canonical path="/affordable-seo-services-south-africa" />

      {/* Internal Custom Styling scoped to page layout elements */}
      <style>{`
        .sa-seo-page {
          --bg-dark: #060f0a;
          --bg-dark-2: #0b1f14;
          --bg-dark-3: #0e2a1b;
          --green: #2ee878;
          --green-2: #17b85e;
          --green-soft: rgba(46,232,120,0.12);
          --ink: #eafff2;
          --muted-on-dark: #9fb8a9;
          --text: #131c17;
          --text-muted: #5c6d63;
          --bg-light: #ffffff;
          --bg-light-2: #f4f9f6;
          --border-light: #e3ece6;
          --border-dark: #1d3626;
          --radius: 14px;
          --radius-lg: 22px;
          --shadow: 0 10px 30px rgba(10,40,25,0.08);
          --font-head: 'DM Sans', sans-serif;
          --font-body: 'Inter', 'DM Sans', sans-serif;
          --maxw: 1200px;
          font-family: var(--font-body);
          color: var(--text);
          background: var(--bg-light);
          line-height: 1.6;
        }

        .sa-seo-page h1, .sa-seo-page h2, .sa-seo-page h3, .sa-seo-page h4 {
          font-family: var(--font-head);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .sa-seo-page .wrap {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 24px;
        }

        .sa-seo-page .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green-2);
          margin-bottom: 14px;
        }

        .sa-seo-page .eyebrow::before {
          content: "";
          width: 18px;
          height: 2px;
          background: var(--green-2);
          display: inline-block;
        }

        .sa-seo-page .section-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }

        .sa-seo-page .section-head h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .sa-seo-page .section-head p {
          color: var(--text-muted);
          font-size: 17px;
        }

        .sa-seo-page .section-head.on-dark p {
          color: var(--muted-on-dark);
        }

        .sa-seo-page .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px 28px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          border: none;
          transition: all .2s ease;
          white-space: nowrap;
        }

        .sa-seo-page .btn-primary { background: var(--green); color: #052012; }
        .sa-seo-page .btn-primary:hover { background: var(--green-2); transform: translateY(-2px); }
        .sa-seo-page .btn-outline { background: transparent; border: 1.5px solid var(--border-dark); color: var(--ink); }
        .sa-seo-page .btn-outline:hover { border-color: var(--green); color: var(--green); }
        .sa-seo-page .btn-outline-light { background: transparent; border: 1.5px solid var(--border-light); color: var(--text); }
        .sa-seo-page .btn-outline-light:hover { border-color: var(--green-2); color: var(--green-2); }
        .sa-seo-page .btn-block { width: 100%; }

        /* BREADCRUMB */
        .sa-seo-page .breadcrumb {
          background: var(--bg-dark-2);
          border-bottom: 1px solid var(--border-dark);
          padding: 12px 0;
        }
        .sa-seo-page .breadcrumb .wrap {
          display: flex;
          gap: 8px;
          font-size: 13px;
          color: var(--muted-on-dark);
          flex-wrap: wrap;
        }
        .sa-seo-page .breadcrumb a:hover { color: var(--green); }
        .sa-seo-page .breadcrumb span { color: #3f5a49; }

        /* HERO */
        .sa-seo-page .hero {
          background: radial-gradient(1200px 600px at 20% -10%, #123322 0%, var(--bg-dark) 55%);
          color: var(--ink);
          padding: 64px 0 0;
          position: relative;
          overflow: hidden;
        }
        .sa-seo-page .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 24px 72px;
        }
        .sa-seo-page .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: var(--green-soft);
          border: 1px solid rgba(46,232,120,.35);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: var(--green);
          margin-bottom: 22px;
        }
        .sa-seo-page .hero h1 { font-size: 46px; margin-bottom: 18px; }
        .sa-seo-page .hero h1 span { color: var(--green); }
        .sa-seo-page .hero p.lead { font-size: 17.5px; color: var(--muted-on-dark); max-width: 580px; margin-bottom: 28px; }
        .sa-seo-page .hero-actions { display: flex; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
        .sa-seo-page .hero-trust { display: flex; gap: 24px; flex-wrap: wrap; }
        .sa-seo-page .hero-trust div { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: var(--muted-on-dark); }
        .sa-seo-page .hero-trust svg { flex-shrink: 0; }

        .sa-seo-page .lead-card {
          background: var(--bg-light);
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
        }
        .sa-seo-page .lead-card h3 { font-size: 20px; margin-bottom: 4px; color: var(--text); }
        .sa-seo-page .lead-card p { font-size: 13.5px; color: var(--text-muted); margin-bottom: 20px; }
        .sa-seo-page .lead-card input, .sa-seo-page .lead-card select {
          width: 100%;
          padding: 13px 14px;
          margin-bottom: 12px;
          border-radius: 10px;
          border: 1.5px solid var(--border-light);
          font-size: 14px;
          font-family: var(--font-body);
          background: #fbfdfc;
          color: var(--text);
        }
        .sa-seo-page .lead-card .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .sa-seo-page .lead-card .phone-row { display: grid; grid-template-columns: 0.4fr 1fr; gap: 8px; }
        .sa-seo-page .lead-card .row2 input, .sa-seo-page .lead-card .row2 select { margin-bottom: 0; }
        .sa-seo-page .lead-card button { width: 100%; margin-top: 6px; padding: 15px; }
        .sa-seo-page .lead-card .fineprint { text-align: center; font-size: 11.5px; color: var(--text-muted); margin-top: 12px; margin-bottom: 0; }

        .sa-seo-page .logo-strip { background: var(--bg-dark-2); border-top: 1px solid var(--border-dark); border-bottom: 1px solid var(--border-dark); padding: 24px 0; }
        .sa-seo-page .logo-strip .wrap { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
        .sa-seo-page .logo-strip .label { font-size: 12.5px; color: var(--muted-on-dark); text-transform: uppercase; letter-spacing: .1em; font-weight: 600; white-space: nowrap; }
        .sa-seo-page .logo-strip .logos { display: flex; gap: 34px; flex-wrap: wrap; opacity: .8; }
        .sa-seo-page .logo-strip .logos span { font-family: var(--font-head); font-weight: 700; font-size: 15px; color: var(--muted-on-dark); }

        /* STAT BAR */
        .sa-seo-page .stat-bar { background: var(--bg-light); border-bottom: 1px solid var(--border-light); padding: 44px 0; }
        .sa-seo-page .stat-bar .wrap { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; text-align: center; }
        .sa-seo-page .stat-bar b { display: block; font-family: var(--font-head); font-size: 30px; color: var(--green-2); }
        .sa-seo-page .stat-bar span { font-size: 13px; color: var(--text-muted); }

        /* WHY AFFORDABLE */
        .sa-seo-page .why-afford { background: var(--bg-light-2); padding: 96px 0; }
        .sa-seo-page .afford-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; margin-bottom: 56px; }
        .sa-seo-page .afford-grid .media { aspect-ratio: 4/3; border-radius: var(--radius-lg); background: linear-gradient(135deg,#0e2a1b,#123322); position: relative; overflow: hidden; }
        .sa-seo-page .afford-grid .media::after { content: "IMAGE PLACEHOLDER"; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: rgba(255,255,255,.35); font-size: 12px; letter-spacing: .08em; }
        .sa-seo-page .afford-grid p { color: var(--text-muted); margin-bottom: 16px; font-size: 15.5px; }

        .sa-seo-page .compare-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .sa-seo-page .compare-col { border-radius: var(--radius-lg); padding: 32px; }
        .sa-seo-page .compare-col.good { background: var(--green-soft); border: 1px solid rgba(46,232,120,.3); }
        .sa-seo-page .compare-col.bad { background: #fdf1ef; border: 1px solid #f3d2ca; }
        .sa-seo-page .compare-col h4 { font-size: 17px; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
        .sa-seo-page .compare-col ul li { display: flex; gap: 10px; font-size: 14.5px; margin-bottom: 13px; align-items: flex-start; }
        .sa-seo-page .compare-col ul li svg { flex-shrink: 0; margin-top: 3px; }
        .sa-seo-page .compare-col.good svg { color: var(--green-2); }
        .sa-seo-page .compare-col.bad svg { color: #d9573f; }

        /* PRICING */
        .sa-seo-page .pricing { background: var(--bg-light); padding: 96px 0; }
        .sa-seo-page .pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .sa-seo-page .price-card { background: var(--bg-light-2); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 36px 28px; display: flex; flex-direction: column; position: relative; }
        .sa-seo-page .price-card.featured { background: var(--bg-light); border-color: var(--green-2); box-shadow: var(--shadow); }
        .sa-seo-page .price-card .badge { position: absolute; top: -13px; left: 28px; background: var(--green); color: #052012; font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 999px; }
        .sa-seo-page .price-card h3 { font-size: 19px; margin-bottom: 6px; }
        .sa-seo-page .price-card .sub { font-size: 13.5px; color: var(--text-muted); margin-bottom: 22px; min-height: 36px; }
        .sa-seo-page .price-card .amount { font-family: var(--font-head); font-size: 36px; margin-bottom: 2px; }
        .sa-seo-page .price-card .amount span { font-size: 14px; font-weight: 500; color: var(--text-muted); font-family: var(--font-body); }
        .sa-seo-page .price-card ul { margin: 22px 0; flex-grow: 1; list-style: none; }
        .sa-seo-page .price-card ul li { display: flex; gap: 10px; font-size: 13.8px; margin-bottom: 12px; color: var(--text); align-items: flex-start; }
        .sa-seo-page .price-card ul li svg { flex-shrink: 0; margin-top: 3px; color: var(--green-2); }
        .sa-seo-page .pricing-note { text-align: center; font-size: 13.5px; color: var(--text-muted); margin-top: 36px; }

        /* DEEP DIVE */
        .sa-seo-page .deep-dive { background: var(--bg-light-2); padding: 96px 0; }
        .sa-seo-page .dd-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center;
          padding: 48px 0; border-bottom: 1px solid var(--border-light);
        }
        .sa-seo-page .dd-row:last-child { border-bottom: none; }
        .sa-seo-page .dd-row.reverse .dd-media { order: 2; }
        .sa-seo-page .dd-media {
          aspect-ratio: 4/3; border-radius: var(--radius-lg); background: linear-gradient(135deg,#0e2a1b,#123322);
          position: relative; overflow: hidden;
        }
        .sa-seo-page .dd-media::after { content: "IMAGE PLACEHOLDER"; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: rgba(255,255,255,.35); font-size: 12px; letter-spacing: .08em; }
        .sa-seo-page .dd-text .tag { display: inline-block; background: var(--green-soft); color: var(--green-2); font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }
        .sa-seo-page .dd-text h3 { font-size: 26px; margin-bottom: 14px; }
        .sa-seo-page .dd-text p { color: var(--text-muted); margin-bottom: 16px; font-size: 15.5px; }
        .sa-seo-page .dd-text ul { margin-bottom: 20px; list-style: none; }
        .sa-seo-page .dd-text ul li { display: flex; gap: 10px; align-items: flex-start; font-size: 14.5px; color: var(--text); margin-bottom: 10px; }
        .sa-seo-page .dd-text ul li svg { flex-shrink: 0; margin-top: 3px; color: var(--green-2); }

        /* PROCESS */
        .sa-seo-page .process { background: var(--bg-dark); color: var(--ink); padding: 96px 0; }
        .sa-seo-page .process-steps { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; margin-top: 50px; }
        .sa-seo-page .step { background: var(--bg-dark-2); border: 1px solid var(--border-dark); border-radius: var(--radius); padding: 26px 20px; }
        .sa-seo-page .step .num { font-family: var(--font-head); font-size: 13px; color: var(--green); font-weight: 700; margin-bottom: 14px; }
        .sa-seo-page .step h4 { font-size: 17px; margin-bottom: 8px; }
        .sa-seo-page .step p { font-size: 13.5px; color: var(--muted-on-dark); }

        /* RESULTS */
        .sa-seo-page .results { background: var(--bg-light); padding: 96px 0; }
        .sa-seo-page .case-card { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border-light); border-radius: var(--radius-lg); overflow: hidden; }
        .sa-seo-page .case-media { background: linear-gradient(135deg,#123322,#081b12); position: relative; }
        .sa-seo-page .case-media::after { content: "IMAGE PLACEHOLDER"; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: rgba(255,255,255,.35); font-size: 12px; letter-spacing: .08em; }
        .sa-seo-page .case-content { padding: 48px; }
        .sa-seo-page .case-content .quote { font-size: 19px; font-family: var(--font-head); font-weight: 600; margin-bottom: 20px; }
        .sa-seo-page .case-metrics { display: flex; gap: 32px; margin: 26px 0; flex-wrap: wrap; }
        .sa-seo-page .case-metrics div b { font-family: var(--font-head); font-size: 26px; color: var(--green-2); display: block; }
        .sa-seo-page .case-metrics div span { font-size: 12.5px; color: var(--text-muted); }
        .sa-seo-page .case-author { display: flex; align-items: center; gap: 12px; margin-top: 20px; }
        .sa-seo-page .case-author .avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--border-light); }
        .sa-seo-page .case-author b { font-size: 14px; display: block; }
        .sa-seo-page .case-author span { font-size: 12.5px; color: var(--text-muted); }

        /* WHY US */
        .sa-seo-page .why-us { background: var(--bg-light-2); padding: 96px 0; }
        .sa-seo-page .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .sa-seo-page .why-card { background: var(--bg-light); border: 1px solid var(--border-light); border-radius: var(--radius); padding: 28px; }
        .sa-seo-page .why-card .ic { width: 48px; height: 48px; border-radius: 12px; background: var(--green-soft); display: flex; align-items: center; justify-content: center; color: var(--green-2); margin-bottom: 16px; }
        .sa-seo-page .why-card h3 { font-size: 17px; margin-bottom: 8px; }
        .sa-seo-page .why-card p { font-size: 14.5px; color: var(--text-muted); }

        /* INDUSTRIES */
        .sa-seo-page .industries { background: var(--bg-light); padding: 96px 0; }
        .sa-seo-page .industry-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .sa-seo-page .industry-card { background: var(--bg-light-2); border: 1px solid var(--border-light); border-radius: var(--radius); padding: 22px; text-align: center; transition: all .2s ease; }
        .sa-seo-page .industry-card:hover { border-color: var(--green-2); transform: translateY(-4px); }
        .sa-seo-page .industry-card .ic { width: 40px; height: 40px; border-radius: 10px; background: var(--green-soft); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; color: var(--green-2); }
        .sa-seo-page .industry-card h4 { font-size: 14.5px; margin-bottom: 6px; }
        .sa-seo-page .industry-card p { font-size: 12.5px; color: var(--text-muted); }

        /* TESTIMONIALS */
        .sa-seo-page .testimonials { background: var(--bg-dark); color: var(--ink); padding: 96px 0; }
        .sa-seo-page .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .sa-seo-page .testi-card { background: var(--bg-dark-2); border: 1px solid var(--border-dark); border-radius: var(--radius); padding: 28px; }
        .sa-seo-page .testi-card .stars { color: var(--green); font-size: 14px; margin-bottom: 14px; }
        .sa-seo-page .testi-card p { font-size: 14.5px; color: var(--muted-on-dark); margin-bottom: 20px; }
        .sa-seo-page .testi-card .who { display: flex; align-items: center; gap: 12px; }
        .sa-seo-page .testi-card .avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--border-dark); flex-shrink: 0; }
        .sa-seo-page .testi-card b { font-size: 13.5px; display: block; }
        .sa-seo-page .testi-card span { font-size: 12px; color: var(--muted-on-dark); }

        /* CTA BANNER */
        .sa-seo-page .cta-banner {
          background: linear-gradient(135deg,#0b2418,#173a26); color: var(--ink);
          border-radius: var(--radius-lg); padding: 64px; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
          margin: 0 24px;
        }
        .sa-seo-page .cta-banner h2 { font-size: 32px; max-width: 520px; }
        .sa-seo-page .cta-banner .actions { display: flex; gap: 16px; }

        /* FAQ */
        .sa-seo-page .faq { background: var(--bg-light-2); padding: 96px 0; }
        .sa-seo-page .faq-list { max-width: 840px; margin: 0 auto; }
        .sa-seo-page .faq-item { background: var(--bg-light); border: 1px solid var(--border-light); border-radius: 12px; margin-bottom: 12px; overflow: hidden; }
        .sa-seo-page .faq-q { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; cursor: pointer; font-weight: 600; font-size: 15.5px; gap: 16px; }
        .sa-seo-page .faq-q .plus { font-size: 20px; color: var(--green-2); transition: transform .2s ease; flex-shrink: 0; }
        .sa-seo-page .faq-item.open .faq-q .plus { transform: rotate(45deg); }
        .sa-seo-page .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .sa-seo-page .faq-item.open .faq-a { max-height: 400px; }
        .sa-seo-page .faq-a p { padding: 0 24px 22px; color: var(--text-muted); font-size: 14.5px; margin: 0; }

        /* RESPONSIVE */
        @media (max-width: 1080px) {
          .sa-seo-page .stat-bar .wrap { grid-template-columns: repeat(2,1fr); }
          .sa-seo-page .pricing-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
          .sa-seo-page .process-steps { grid-template-columns: repeat(3,1fr); }
          .sa-seo-page .industry-grid { grid-template-columns: repeat(2,1fr); }
          .sa-seo-page .why-grid, .sa-seo-page .testi-grid { grid-template-columns: 1fr 1fr; }
          .sa-seo-page .afford-grid { grid-template-columns: 1fr; }
          .sa-seo-page .compare-wrap { grid-template-columns: 1fr; }
        }
        @media (max-width: 900px) {
          .sa-seo-page .hero-grid { grid-template-columns: 1fr; }
          .sa-seo-page .hero h1 { font-size: 34px; }
          .sa-seo-page .dd-row, .sa-seo-page .dd-row.reverse { grid-template-columns: 1fr; }
          .sa-seo-page .dd-row.reverse .dd-media { order: 0; }
          .sa-seo-page .case-card { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sa-seo-page section { padding: 64px 0; }
          .sa-seo-page .stat-bar .wrap, .sa-seo-page .process-steps, .sa-seo-page .industry-grid, .sa-seo-page .why-grid, .sa-seo-page .testi-grid { grid-template-columns: 1fr; }
          .sa-seo-page .lead-card .row2 { grid-template-columns: 1fr; }
          .sa-seo-page .cta-banner { padding: 36px 24px; }
        }
      `}</style>

      <div className="sa-seo-page">
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="wrap">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/seo-service">SEO Services</a>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>SEO Services in South Africa</span>
          </div>
        </div>

        {/* HERO */}
        <section className="hero relative overflow-hidden" style={{ paddingBottom: 0 }}>
          <div className="absolute inset-0 z-0">
            <img
              src="/premium_photo-1661696348133-653cb6cc037c.avif"
              className="w-full h-full object-cover opacity-50"
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>
          <div className="hero-grid relative z-10">
            <div>
              <span className="hero-badge">● SEO for South African Businesses, Nationwide</span>
              <h1>
                Affordable SEO Services in South Africa — <span>Real Rankings</span>, Without the Big Agency Price Tag
              </h1>
              <p className="lead">
                XD Media helps small businesses, ecommerce brands and marketing agencies across Sandton, Rosebank, Cape Town, Johannesburg, Pretoria and Midrand rank higher on Google without paying premium big-agency retainers. Same technical rigor, same white-hat process, same reporting standards. Just a leaner, remote-first cost structure, passed on to you.
              </p>
              <div className="hero-actions">
                <a href="#lead-form" className="btn btn-primary">Get My Free SEO Audit &amp; Quote</a>
                <a href="#pricing" className="btn btn-outline">See Our Packages</a>
              </div>
              <div className="hero-trust">
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2ee878" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  In-house specialists, never outsourced further
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2ee878" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  Flat, transparent monthly pricing in Rand
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2ee878" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  No long-term lock-in contracts
                </div>
              </div>
            </div>

            <div className="lead-card" id="lead-form">
              <h3>Get a Free SEO Audit &amp; Pricing Quote</h3>
              <p>Tell us about your business — a real strategist replies within 24 hours, not a bot.</p>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <CheckCircle size={48} color="var(--green-2)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Quote Request Sent!</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Thank you for reaching out. A specialist will review your details and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Business Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                  <div className="phone-row" style={{ marginBottom: '12px' }}>
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      style={{ marginBottom: 0 }}
                    >
                      {countries.map((c) => (
                        <option key={`${c.code}-${c.dial_code}`} value={c.dial_code}>
                          {c.flag} {c.dial_code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      style={{ marginBottom: 0 }}
                    />
                  </div>
                  <div className="row2">
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="Sandton">Sandton</option>
                      <option value="Rosebank">Rosebank</option>
                      <option value="Cape Town">Cape Town</option>
                      <option value="Johannesburg">Johannesburg</option>
                      <option value="Pretoria">Pretoria</option>
                      <option value="Midrand">Midrand</option>
                      <option value="Other — South Africa">Other — South Africa</option>
                    </select>
                    <select
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                    >
                      <option value="Local SEO">Local SEO</option>
                      <option value="Ecommerce SEO">Ecommerce SEO</option>
                      <option value="Full SEO Package">Full SEO Package</option>
                      <option value="White-Label / Outsourced SEO (Agencies)">White-Label / Outsourced SEO (Agencies)</option>
                    </select>
                  </div>
                  {error && <p style={{ color: '#d9573f', fontSize: '13px', marginTop: '8px' }}>{error}</p>}
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Get My Free Quote →'}
                  </button>
                </form>
              )}
              <p className="fineprint">No spam. No obligation. Just an honest pricing conversation.</p>
            </div>
          </div>

          <div className="logo-strip">
            <div className="wrap">
              <span className="label">Delivering SEO results for businesses across</span>
              <div className="logos">
                <span>Sandton</span>
                <span>Rosebank</span>
                <span>Cape Town</span>
                <span>Johannesburg</span>
                <span>Pretoria</span>
                <span>Midrand</span>
              </div>
            </div>
          </div>
        </section>

        {/* STAT BAR */}
        <section className="stat-bar">
          <div className="wrap">
            <div>
              <b>~50%</b>
              <span>Lower cost than typical Sandton/Rosebank agency retainers</span>
            </div>
            <div>
              <b>100+</b>
              <span>South African websites optimized</span>
            </div>
            <div>
              <b>3–6 mo</b>
              <span>Typical timeline to meaningful ranking movement</span>
            </div>
            <div>
              <b>SAST</b>
              <span>Support in your business hours, nationwide</span>
            </div>
          </div>
        </section>

        {/* WHY AFFORDABLE */}
        <section className="why-afford">
          <div className="wrap">
            <div className="afford-grid">
              <div>
                <span className="eyebrow">Why It's Affordable, Not Cheap</span>
                <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
                  How a Remote-First SEO Team Charges Less Without Cutting Corners
                </h2>
                <p>
                  A traditional agency retainer in Sandton, Rosebank or Cape Town CBD comes loaded with overhead you never see on the invoice — office leases, layers of account managers, and city-centre premiums. XD Media runs lean: a remote-first team of certified specialists working directly on your account, without the office overhead baked into every rand you spend.
                </p>
                <p>
                  What it isn't: spun content, private blog network (PBN) backlinks, keyword-stuffed pages, or guaranteed #1 rankings sold to whoever pays first. We turn away those requests. XD Media runs the same technical audits, search-intent content mapping and white-hat link building process you'd get from a premium agency retainer — priced for what it actually costs to deliver, not what a city-centre lease demands you charge.
                </p>
                <a href="#pricing" className="btn btn-primary" style={{ width: 'fit-content' }}>
                  See What's Included
                </a>
              </div>
              <div className="media"></div>
            </div>

            <div className="compare-wrap">
              <div className="compare-col good">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#17b85e" strokeWidth="1.8" />
                  </svg>
                  What a Lower-Cost Retainer Should Actually Mean
                </h4>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    A lower monthly cost for equally certified specialists
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Transparent, itemized monthly reporting
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Realistic timelines — 3 to 6 months to see traction
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Month-to-month flexibility, not a 12-month lock-in
                  </li>
                </ul>
              </div>
              <div className="compare-col bad">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9v4M12 17h.01M10.3 3.86L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.86a2 2 0 00-3.4 0z" stroke="#d9573f" strokeWidth="1.8" />
                  </svg>
                  Red Flags of "Cheap" SEO Scams
                </h4>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9573f">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Guaranteed #1 Google rankings in writing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9573f">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Backlink "packages" sold by the thousand
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9573f">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    No visibility into what's actually being done
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9573f">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Locked into a 12-month contract before you see results
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Transparent Pricing</span>
              <h2>SEO Packages for South African Businesses and Agencies</h2>
              <p>
                No setup fees hidden in the fine print, no surprise invoices. Pick a starting point — we'll tailor scope to your market and competition on the free audit call.
              </p>
            </div>
            <div className="pricing-grid">
              <div className="price-card">
                <h3>Starter — Local SEO</h3>
                <p className="sub">For single-location small businesses that need to win the local map pack and organic results.</p>
                <div className="amount">
                  R4,999 <span>/ month</span>
                </div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Google Business Profile optimization
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    On-page SEO for up to 10 pages
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Local citation building &amp; NAP cleanup
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Up to 10 tracked keywords
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Monthly plain-English report
                  </li>
                </ul>
                <a href="#lead-form" className="btn btn-outline-light btn-block">
                  Get Started
                </a>
              </div>

              <div className="price-card featured">
                <span className="badge">Most Popular</span>
                <h3>Growth — Full SEO</h3>
                <p className="sub">For growing SMBs and ecommerce stores that need content, technical fixes and links working together.</p>
                <div className="amount">
                  R11,999 <span>/ month</span>
                </div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Everything in Starter, plus:
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Technical SEO audit &amp; Core Web Vitals fixes
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    4 SEO-researched blog posts / month
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    White-hat link building (guest posts, digital PR)
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Up to 25 tracked keywords + live dashboard
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Monthly strategy call
                  </li>
                </ul>
                <a href="#lead-form" className="btn btn-primary btn-block">
                  Get Started
                </a>
              </div>

              <div className="price-card">
                <h3>Agency / White-Label</h3>
                <p className="sub">For marketing agencies that want to outsource or resell SEO fulfillment under their own brand.</p>
                <div className="amount">
                  Custom <span>pricing</span>
                </div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Unbranded, white-label reporting dashboard
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Dedicated account manager for your agency
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    NDA-backed confidentiality, your brand only
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Per-client or bulk-seat pricing available
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Fulfillment for SEO, content &amp; link building
                  </li>
                </ul>
                <a href="/white-label-seo" className="btn btn-outline-light btn-block">
                  Explore White-Label
                </a>
              </div>
            </div>
            <p className="pricing-note">
              *Final pricing depends on your market, competition and current site health — packages shown are common starting points, confirmed on your free audit call. Prices in ZAR, excl. VAT.
            </p>
          </div>
        </section>

        {/* SERVICE DEEP-DIVE */}
        <section className="deep-dive" id="services">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What's Included</span>
              <h2>A Lean Budget Doesn't Mean Limited Scope</h2>
              <p>Every package is built on the same four disciplines — we just scale the depth of execution to your budget and goals.</p>
            </div>

            <div className="dd-row">
              <div className="dd-media"></div>
              <div className="dd-text">
                <span className="tag">Local SEO</span>
                <h3>Local SEO Services for South African Small Businesses</h3>
                <p>
                  If your customers find you by searching "near me" or a suburb and city name, local SEO is where a modest spend returns the fastest results. We optimize your Google Business Profile, clean up inconsistent NAP citations across South African directories, and build location-specific pages that actually rank — the same playbook agencies charge R15,000+/month for.
                </p>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Google Business Profile setup &amp; optimization
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Local citation building &amp; NAP consistency audits
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Review generation &amp; reputation management
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    City/suburb/service landing pages built to rank locally
                  </li>
                </ul>
              </div>
            </div>

            <div className="dd-row reverse">
              <div className="dd-media"></div>
              <div className="dd-text">
                <span className="tag">Technical &amp; Ecommerce SEO</span>
                <h3>Technical SEO That Fixes What's Actually Costing You Rankings</h3>
                <p>
                  Most "cheap SEO" skips the technical layer because it's slower and less flashy than link packages. We start there instead — crawlability, indexation, Core Web Vitals, and product/category structure for Shopify and WooCommerce stores — because no amount of content fixes a site Google can't properly crawl.
                </p>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Technical audits, Core Web Vitals &amp; crawl fixes
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Shopify, WooCommerce &amp; WordPress SEO
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Product &amp; category schema markup
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    AI Overview &amp; AI search visibility (GEO)
                  </li>
                </ul>
              </div>
            </div>

            <div className="dd-row">
              <div className="dd-media"></div>
              <div className="dd-text">
                <span className="tag">Content &amp; Link Building</span>
                <h3>Search-Intent Content and White-Hat Link Building, Not Filler</h3>
                <p>
                  Content is mapped to what your buyers are actually searching, not stuffed with keywords for a bot to read. Links are earned through guest posts, digital PR and resource outreach — never bought in bulk from a link farm, which is the fastest way a "cheap" SEO package gets a site penalized.
                </p>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Search-intent content mapping &amp; briefs
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    SEO-optimized blog &amp; landing page writing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Guest post &amp; digital PR link building
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Internal linking &amp; topical authority structure
                  </li>
                </ul>
              </div>
            </div>

            <div className="dd-row reverse">
              <div className="dd-media"></div>
              <div className="dd-text">
                <span className="tag">For Agencies</span>
                <h3>Outsource or White-Label SEO to Our Specialist Remote Team</h3>
                <p>
                  Plenty of South African agencies already outsource SEO fulfillment to protect margins — the question is finding a team that reports cleanly and keeps work in-house. We deliver fully white-labeled SEO (audits, content, link building, reporting) under your agency's brand, with your client never seeing our name.
                </p>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    White-label reports with your agency's branding
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Dedicated project manager in your time zone
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    NDA &amp; confidentiality on every account
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Scales from 1 client to 50+ seats
                  </li>
                </ul>
                <a href="/white-label-seo" className="btn btn-outline-light">
                  See White-Label SEO Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process" id="process">
          <div className="wrap">
            <div className="section-head on-dark">
              <span className="eyebrow">How We Work</span>
              <h2>From Free Audit to Ranking Movement</h2>
              <p>No black-box retainers. Every step is scoped, reported, and tied to what it's actually doing for your rankings.</p>
            </div>
            <div className="process-steps">
              <div className="step">
                <div className="num">Step 01</div>
                <h4>Free Audit</h4>
                <p>A 30-minute call plus a full technical, content and backlink audit of your current site — no cost, no obligation.</p>
              </div>
              <div className="step">
                <div className="num">Step 02</div>
                <h4>Custom Plan</h4>
                <p>A scoped plan mapped to your budget, market and competitors — not a generic package pulled off a shelf.</p>
              </div>
              <div className="step">
                <div className="num">Step 03</div>
                <h4>Fix &amp; Build</h4>
                <p>Technical fixes, on-page optimization and content go live on a fixed monthly schedule you can see in the dashboard.</p>
              </div>
              <div className="step">
                <div className="num">Step 04</div>
                <h4>Earn Links</h4>
                <p>White-hat outreach and digital PR build authority gradually — no bulk-bought links that put your site at risk.</p>
              </div>
              <div className="step">
                <div className="num">Step 05</div>
                <h4>Report &amp; Scale</h4>
                <p>A monthly, plain-English report shows what moved and why — then we double down on what's working.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="results" id="results">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Proof, Not Promises</span>
              <h2>What a Leaner SEO Spend Actually Delivers</h2>
              <p>Lower cost doesn't mean lower expectations — here's what a typical engagement looks like.</p>
            </div>
            <div className="case-card">
              <div className="case-media"></div>
              <div className="case-content">
                <div className="quote">
                  "We were paying a Sandton-based agency R28,000/month and got vague reports. XD Media costs less than half that and we actually understand what they're doing every month — our organic leads have nearly doubled."
                </div>
                <div className="case-metrics">
                  <div>
                    <b>+164%</b>
                    <span>Organic traffic (5 months)</span>
                  </div>
                  <div>
                    <b>-55%</b>
                    <span>Monthly SEO spend vs. previous agency</span>
                  </div>
                  <div>
                    <b>19</b>
                    <span>Keywords moved to page 1</span>
                  </div>
                </div>
                <div className="case-author">
                  <div className="avatar"></div>
                  <div>
                    <b>Client Name</b>
                    <span>Owner, Home Services Company — Midrand, South Africa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TRUST US */}
        <section className="why-us">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Why Trust XD Media</span>
              <h2>What to Actually Check Before Outsourcing Your SEO</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>In-House, Not Subcontracted</h3>
                <p>Your account is worked on by our own certified team — never handed off to a third freelancer chain you have no visibility into.</p>
              </div>
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Certified &amp; Google Partner</h3>
                <p>Our specialists hold current Google and industry certifications — the same qualifications you'd expect from a big agency retainer.</p>
              </div>
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>SAST Hours, Same-Day Replies</h3>
                <p>Calls and reports are scheduled in South African business hours — no waiting overnight for a reply from an overseas time zone.</p>
              </div>
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>You See Everything</h3>
                <p>A live dashboard shows rankings, traffic and every task completed — nothing about your account is a black box.</p>
              </div>
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>No Ranking Guarantees</h3>
                <p>Anyone guaranteeing #1 rankings is either lying or using tactics that get sites penalized. We commit to process, transparency and effort — not promises no one can control.</p>
              </div>
              <div className="why-card">
                <div className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Month-to-Month</h3>
                <p>No 12-month contracts. We keep your business by continuing to earn it, not by locking you in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industries">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Who We Work With</span>
              <h2>SEO Tailored to Your Industry</h2>
              <p>From single-location service businesses across South Africa to agencies reselling under their own brand.</p>
            </div>
            <div className="industry-grid">
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Home Services</h4>
                <p>Local SEO &amp; GBP management for contractors, plumbers, electricians</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Ecommerce &amp; Retail</h4>
                <p>Shopify/WooCommerce SEO, product schema, category structure</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Healthcare &amp; Clinics</h4>
                <p>Compliant local SEO and appointment-focused content</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Law Firms</h4>
                <p>Practice-area content and high-intent local SEO</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l9 4-9 4-9-4 9-4zM3 11l9 4 9-4M3 16l9 4 9-4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>SaaS &amp; Startups</h4>
                <p>Content-led SEO for organic demand generation</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-6 9 6v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Real Estate</h4>
                <p>Local SEO &amp; listing visibility for agents and estate agencies</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3h18v14H3zM7 21h10" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Restaurants &amp; Hospitality</h4>
                <p>Reviews, local visibility and menu/schema optimization</p>
              </div>
              <div className="industry-card">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h4>Marketing Agencies</h4>
                <p>White-label SEO fulfillment sold under your brand</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div className="pb-16 lg:pb-24">
          <TestimonialCards />
        </div>

        {/* CTA BANNER */}
        <section className="py-12 lg:py-16">
          <div className="cta-banner">
            <h2>Ready for SEO That Fits Your Budget, Not Just Your Competitor's?</h2>
            <div className="actions">
              <a href="#lead-form" className="btn btn-primary">
                Get My Free Audit
              </a>
              <a href="/contact" className="btn btn-outline">
                Book a Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2>South African SEO Pricing &amp; Process — FAQs</h2>
              <p>What business owners and agency founders ask us before signing up.</p>
            </div>
            <div className="faq-list">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${activeFaq === idx ? 'open' : ''}`}
                >
                  <div
                    className="faq-q"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    {item.q} <span className="plus">+</span>
                  </div>
                  <div className="faq-a">
                    <p>{item.a}</p>
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

export default SouthAfricaSEO;
