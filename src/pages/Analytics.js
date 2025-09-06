import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  MousePointer,
  Clock,
  ArrowRight,
  Download,
  RefreshCw,
  Filter
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Analytics = () => {
  // Sample data for charts
  const trafficData = [
    { month: 'Jan', visitors: 4000, pageViews: 8000, sessions: 3500 },
    { month: 'Feb', visitors: 3000, pageViews: 6000, sessions: 2800 },
    { month: 'Mar', visitors: 5000, pageViews: 10000, sessions: 4200 },
    { month: 'Apr', visitors: 4500, pageViews: 9000, sessions: 3800 },
    { month: 'May', visitors: 6000, pageViews: 12000, sessions: 5200 },
    { month: 'Jun', visitors: 5500, pageViews: 11000, sessions: 4800 }
  ];

  const conversionData = [
    { name: 'Organic', value: 45, color: '#3B82F6' },
    { name: 'Direct', value: 25, color: '#10B981' },
    { name: 'Social', value: 15, color: '#F59E0B' },
    { name: 'Email', value: 10, color: '#EF4444' },
    { name: 'Paid', value: 5, color: '#8B5CF6' }
  ];

  const deviceData = [
    { device: 'Desktop', users: 65, color: '#3B82F6' },
    { device: 'Mobile', users: 30, color: '#10B981' },
    { device: 'Tablet', users: 5, color: '#F59E0B' }
  ];

  const metrics = [
    {
      icon: Users,
      title: 'Total Visitors',
      value: '125,430',
      change: '+12.5%',
      trend: 'up'
    },
    {
      icon: Eye,
      title: 'Page Views',
      value: '2.1M',
      change: '+8.2%',
      trend: 'up'
    },
    {
      icon: MousePointer,
      title: 'Click Rate',
      value: '3.2%',
      change: '-2.1%',
      trend: 'down'
    },
    {
      icon: Clock,
      title: 'Avg. Session',
      value: '2m 45s',
      change: '+15.3%',
      trend: 'up'
    }
  ];

  const topPages = [
    { page: '/home', views: 12500, bounceRate: '45%' },
    { page: '/products', views: 8900, bounceRate: '52%' },
    { page: '/about', views: 6700, bounceRate: '38%' },
    { page: '/contact', views: 4200, bounceRate: '65%' },
    { page: '/blog', views: 3800, bounceRate: '48%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
              Analytics & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive analytics dashboard to track performance, 
              understand user behavior, and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center">
                View Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center">
                Export Data
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      metric.trend === 'down' ? 'rotate-180' : ''
                    }`} />
                    {metric.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-1">{metric.value}</h3>
                <p className="text-gray-600">{metric.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
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
              Performance Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visualize your data with interactive charts and graphs 
              to understand trends and patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traffic Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-dark-800">Traffic Overview</h3>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="visitors" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Conversion Sources */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-dark-800">Traffic Sources</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={conversionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {conversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Device Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-dark-800">Device Analytics</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  Last 30 Days
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  Last 7 Days
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-xl font-semibold text-dark-800 mb-6">Top Performing Pages</h3>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-semibold text-green-600">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-dark-800">{page.page}</div>
                      <div className="text-sm text-gray-600">{page.views.toLocaleString()} views</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Bounce Rate</div>
                    <div className="font-semibold text-dark-800">{page.bounceRate}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              Get Deeper Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Unlock the full potential of your data with advanced analytics, 
              custom reports, and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-dark-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Upgrade to Pro
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

export default Analytics;
