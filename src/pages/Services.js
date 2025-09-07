import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Mail, 
  BarChart3, 
  Settings, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Headphones
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Complete search engine optimization to improve your website\'s visibility and rankings.',
      features: [
        'Keyword research and analysis',
        'On-page and technical SEO',
        'Content optimization',
        'Link building strategies',
        'Local SEO optimization',
        'SEO performance tracking'
      ],
      price: 'Starting at $299/month',
      popular: false
    },
    {
      icon: Mail,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to grow your online presence and drive conversions.',
      features: [
        'Email marketing campaigns',
        'Social media management',
        'Content marketing',
        'PPC advertising',
        'Marketing automation',
        'Campaign performance analysis'
      ],
      price: 'Starting at $499/month',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Advanced analytics and reporting to track performance and make data-driven decisions.',
      features: [
        'Custom dashboard creation',
        'Real-time reporting',
        'Performance analytics',
        'Conversion tracking',
        'ROI analysis',
        'Monthly strategy reviews'
      ],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      icon: Settings,
      title: 'Website Development',
      description: 'Professional website development and optimization for better performance and user experience.',
      features: [
        'Responsive web design',
        'Performance optimization',
        'Security implementation',
        'CMS integration',
        'E-commerce solutions',
        'Ongoing maintenance'
      ],
      price: 'Starting at $799/project',
      popular: false
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert consulting to help you develop and implement effective digital strategies.',
      features: [
        'Strategy development',
        'Competitive analysis',
        'Market research',
        'Implementation planning',
        'Team training',
        'Ongoing support'
      ],
      price: 'Starting at $150/hour',
      popular: false
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automate your marketing processes to improve efficiency and drive better results.',
      features: [
        'Lead nurturing sequences',
        'Email automation',
        'Behavioral triggers',
        'CRM integration',
        'Workflow optimization',
        'Performance monitoring'
      ],
      price: 'Starting at $399/month',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful campaigns and satisfied clients'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Manager',
      description: 'Personal account manager for personalized service'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The SEO optimization service has increased our organic traffic by 300% in just 6 months. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      content: 'Their marketing automation tools have streamlined our processes and improved our conversion rates significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Business Co.',
      content: 'The analytics dashboard provides incredible insights that help us make better business decisions.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive digital solutions tailored to your business needs. 
              From SEO to marketing automation, we provide everything you need to succeed online.
            </p>
            {/* CTA removed as requested */}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of your digital presence, 
              ensuring maximum impact and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-dark-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-dark-800 mb-2">{service.price}</div>
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-dark-800 hover:bg-gray-200'
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service with proven results and dedicated support 
              to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-dark-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section removed as requested */}
    </div>
  );
};

export default Services;
