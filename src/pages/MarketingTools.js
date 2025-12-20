import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight, Share2, MessageCircle } from 'lucide-react';

const MarketingTools = () => {
  const marketingServices = [
    {
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community engagement across all platforms",
      features: ["Content Calendar", "Community Management", "Analytics & Reporting", "Influencer Coordination"]
    },
    {
      title: "Performance Marketing",
      description: "Data-driven ad campaigns on Meta, Google, and YouTube optimized for maximum ROI",
      features: ["Meta Ads (FB & IG)", "Google Ads", "YouTube Advertising", "Retargeting Campaigns"]
    },
    {
      title: "Content & Video Marketing",
      description: "Compelling content and video production that engages audiences and drives conversions",
      features: ["Video Production", "Content Writing", "Scriptwriting", "Post-Production"]
    }
  ];

  const dashboardMetrics = [
    { label: "Campaign ROI", value: "450%", change: "+125%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Leads Generated", value: "12.5K", change: "+380%", icon: <Users className="w-5 h-5" /> },
    { label: "Conversion Rate", value: "8.2%", change: "+92%", icon: <Target className="w-5 h-5" /> },
    { label: "Engagement Rate", value: "15.8%", change: "+210%", icon: <MessageCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* Hero Section */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(12,33,21) 0%, rgb(20,50,35) 100%)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-8"
              style={{
                background: 'rgba(71, 191, 114, 0.2)',
                border: '1px solid rgba(71, 191, 114, 0.4)',
                color: '#47BF72'
              }}
            >
              <BarChart3 className="w-4 h-4" />
              Performance Marketing & Analytics
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 tracking-tight">
              <span className="text-white font-inter font-normal block mb-2">
                Data-Driven.
              </span>
              <span className="text-white font-fraunces italic font-light">
                Results-Focused.
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed font-inter font-light max-w-3xl mx-auto mb-10">
              Track every metric that matters. Our marketing dashboards give you real-time insights to optimize campaigns and maximize ROI.
            </p>

            <button
              className="px-10 py-5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              style={{
                background: '#47BF72',
                boxShadow: '0 10px 30px rgba(71, 191, 114, 0.3)'
              }}
            >
              View Demo Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              Real-Time Marketing Dashboard
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Monitor all your campaigns in one place with actionable insights
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                      background: 'rgba(71, 191, 114, 0.2)',
                      color: '#47BF72'
                    }}>
                      {metric.icon}
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{metric.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden backdrop-blur-xl border" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Campaign Performance</h3>
                  <p className="text-gray-400 text-sm">Last 30 days overview</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{
                    background: 'rgba(71, 191, 114, 0.2)',
                    border: '1px solid rgba(71, 191, 114, 0.3)'
                  }}>
                    Export Report
                  </button>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="rounded-xl p-8 mb-6" style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div className="flex items-end justify-between h-64 gap-4">
                  {[65, 80, 75, 90, 85, 95, 88, 92, 98, 100, 95, 97].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1 rounded-t-lg transition-all duration-300 hover:opacity-80"
                      style={{
                        background: `linear-gradient(180deg, #47BF72 0%, #3aa85f 100%)`,
                        minHeight: '20px'
                      }}
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Campaign List */}
              <div className="space-y-3">
                {[
                  { name: "Meta Ads - Summer Campaign", status: "Active", performance: "Excellent", spend: "$2,450", roi: "450%" },
                  { name: "Google Ads - Brand Keywords", status: "Active", performance: "Good", spend: "$1,890", roi: "380%" },
                  { name: "YouTube Video Campaign", status: "Active", performance: "Excellent", spend: "$3,200", roi: "520%" }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg" style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <div>
                        <div className="text-white font-medium">{campaign.name}</div>
                        <div className="text-sm text-gray-400">{campaign.status} • {campaign.performance}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{campaign.roi} ROI</div>
                      <div className="text-sm text-gray-400">{campaign.spend} spent</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
      }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-inter">
              Complete Marketing Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              From strategy to execution, we handle everything
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl p-8 h-full backdrop-blur-xl border transition-all duration-300" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: '#47BF72' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-inter">
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Get access to our marketing dashboard and start tracking your growth
            </p>
            <button
              className="px-10 py-5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #47BF72, #3aa85f)',
                boxShadow: '0 10px 40px rgba(71, 191, 114, 0.3)'
              }}
            >
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketingTools;
