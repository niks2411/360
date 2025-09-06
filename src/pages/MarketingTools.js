import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Calendar,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Send,
  Eye,
  MousePointer
} from 'lucide-react';

const MarketingTools = () => {
  const tools = [
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Create, send, and track professional email marketing campaigns.',
      features: ['Drag-and-drop editor', 'A/B testing', 'Automated sequences', 'Analytics tracking']
    },
    {
      icon: Target,
      title: 'Ad Tracking',
      description: 'Monitor and optimize your advertising campaigns across platforms.',
      features: ['Multi-platform tracking', 'Conversion tracking', 'ROI analysis', 'Performance reports']
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automate your marketing workflows and nurture leads effectively.',
      features: ['Lead scoring', 'Workflow automation', 'Behavioral triggers', 'Personalization']
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Target the right audience with advanced segmentation tools.',
      features: ['Demographic targeting', 'Behavioral analysis', 'Custom segments', 'Lookalike audiences']
    },
    {
      icon: Calendar,
      title: 'Campaign Planning',
      description: 'Plan and schedule your marketing campaigns with precision.',
      features: ['Content calendar', 'Scheduling tools', 'Team collaboration', 'Campaign templates']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to measure and improve your marketing ROI.',
      features: ['Real-time reporting', 'Custom dashboards', 'ROI tracking', 'Attribution modeling']
    }
  ];

  const features = [
    {
      icon: Send,
      title: 'Multi-Channel Marketing',
      description: 'Reach your audience across email, social media, and advertising platforms.'
    },
    {
      icon: Eye,
      title: 'Advanced Targeting',
      description: 'Precise audience targeting based on demographics, behavior, and interests.'
    },
    {
      icon: MousePointer,
      title: 'Conversion Optimization',
      description: 'Optimize your campaigns for maximum conversions and ROI.'
    }
  ];

  const stats = [
    { number: '2.5M+', label: 'Emails Sent Monthly' },
    { number: '45%', label: 'Average Open Rate' },
    { number: '12%', label: 'Click-Through Rate' },
    { number: '300%', label: 'ROI Improvement' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
              Marketing Tools & Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powerful marketing tools to create campaigns, track performance, 
              and automate your marketing workflows for maximum impact.
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

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
              Complete Marketing Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns 
              across all channels and touchpoints.
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
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <tool.icon className="w-8 h-8 text-purple-600" />
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
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Try Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Marketing Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive marketing tools help you reach the right audience, 
              at the right time, with the right message.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
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
                Drive Better Marketing Results
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our marketing tools are designed to help you create more effective campaigns, 
                reach your target audience, and achieve better ROI.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-dark-800">Increased Engagement</h4>
                    <p className="text-gray-600">Higher open rates and click-through rates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Target className="w-8 h-8 text-blue-500" />
                  <div>
                    <h4 className="font-semibold text-dark-800">Better Targeting</h4>
                    <p className="text-gray-600">Reach the right audience with precision</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <BarChart3 className="w-8 h-8 text-purple-500" />
                  <div>
                    <h4 className="font-semibold text-dark-800">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Make informed choices with real-time analytics</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-dark-800 mb-6">Campaign Performance</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email Open Rate</span>
                  <span className="text-2xl font-bold text-green-500">45.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Click-Through Rate</span>
                  <span className="text-2xl font-bold text-blue-500">12.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="text-2xl font-bold text-purple-500">8.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '85%' }}></div>
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our powerful marketing tools today and watch your campaigns 
              deliver better results than ever before.
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

export default MarketingTools;
