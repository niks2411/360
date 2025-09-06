import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Tag, 
  Map, 
  TrendingUp, 
  FileText, 
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart3
} from 'lucide-react';

const SEOTools = () => {
  const tools = [
    {
      icon: Search,
      title: 'Keyword Analysis',
      description: 'Discover high-value keywords and analyze search volume, competition, and trends.',
      features: ['Keyword research', 'Competitor analysis', 'Search volume data', 'Trend tracking']
    },
    {
      icon: Tag,
      title: 'Meta Tag Generator',
      description: 'Create optimized meta titles and descriptions for better search engine visibility.',
      features: ['Title optimization', 'Meta descriptions', 'Character counting', 'Preview testing']
    },
    {
      icon: Map,
      title: 'Sitemap Builder',
      description: 'Generate XML sitemaps to help search engines crawl and index your site.',
      features: ['XML sitemap generation', 'URL prioritization', 'Change frequency', 'Last modified dates']
    },
    {
      icon: FileText,
      title: 'Content Optimizer',
      description: 'Analyze and optimize your content for better SEO performance.',
      features: ['Readability analysis', 'Keyword density', 'Content suggestions', 'SEO scoring']
    },
    {
      icon: Globe,
      title: 'Site Audit',
      description: 'Comprehensive website analysis to identify SEO issues and opportunities.',
      features: ['Technical SEO audit', 'Page speed analysis', 'Mobile optimization', 'Link analysis']
    },
    {
      icon: BarChart3,
      title: 'Rank Tracking',
      description: 'Monitor your keyword rankings across different search engines.',
      features: ['Position tracking', 'Ranking history', 'Competitor monitoring', 'Performance reports']
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings',
    'Better user experience and engagement',
    'Higher conversion rates',
    'Comprehensive SEO insights',
    'Competitive advantage'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
              SEO Tools & Optimization
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive SEO tools to boost your search engine rankings, 
              increase organic traffic, and improve your website's visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
              Powerful SEO Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your website for search engines 
              and drive more organic traffic to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <tool.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Try Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
                Why SEO Matters for Your Business
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Search Engine Optimization is crucial for online success. 
                Our tools help you achieve better rankings and drive qualified traffic.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-dark-800 mb-6">SEO Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Organic Traffic Growth</span>
                  <span className="text-2xl font-bold text-green-500">+285%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Ranking Position</span>
                  <span className="text-2xl font-bold text-blue-500">#3.2</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Click-Through Rate</span>
                  <span className="text-2xl font-bold text-purple-500">12.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your SEO?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our powerful SEO tools today and watch your organic traffic grow. 
              No technical knowledge required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-dark-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-800 transition-colors inline-flex items-center justify-center">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOTools;
