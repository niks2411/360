import React from "react";
import { Timeline } from "./ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">24</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Platform Launch & Growth</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Our Breakthrough Year</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Active Clients</span>
                    <span className="font-bold text-green-600">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Client Satisfaction</span>
                    <span className="font-bold text-green-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Revenue Growth</span>
                    <span className="font-bold text-green-600">300%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Team Size</span>
                    <span className="font-bold text-green-600">25+</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Redis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">Major Milestones</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Launched SEO Optimization Suite
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Deployed Analytics Dashboard
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Marketing Automation Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">23</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Foundation & Team Building</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">Building the Dream Team</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Team Expansion
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Marketing Specialists</span>
                    <span className="font-bold text-green-600">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Senior Developers</span>
                    <span className="font-bold text-green-600">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Design Team</span>
                    <span className="font-bold text-green-600">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Customer Success</span>
                    <span className="font-bold text-green-600">6</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Product Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">MVP SEO Tools</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Analytics Framework</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Marketing Automation</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">User Testing</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Feedback Loop</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Beta Launch</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">Major Milestones</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Office Space Expansion
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Cloud Infrastructure
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Security Protocols
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">22</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Company Inception</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">The Beginning of Our Journey</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Market Research
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Websites Analyzed</span>
                    <span className="font-bold text-green-600">1000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Pain Points Identified</span>
                    <span className="font-bold text-green-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Competitors Studied</span>
                    <span className="font-bold text-green-600">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Market Validation</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Company Formation
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">EMB Global Inc.</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Initial Funding</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Mumbai Office</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Mission Defined</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Values Set</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Team Hired</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-3">Major Milestones</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Market Analysis Complete
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Business Plan Finalized
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                  Legal Structure Setup
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};
