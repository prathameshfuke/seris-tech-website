import React from 'react';
import { AlertTriangle, Shield, Bell, Smartphone, Wifi, Globe, Brain } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary healthcare solutions powered by artificial intelligence, designed to protect and enhance lives.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* HealthSentinel */}
            <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 p-8 rounded-2xl border border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">HealthSentinel</h3>
                  <p className="text-cyan-400 font-semibold">AI-Powered Early Warning Platform</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced AI analytics platform that predicts disease outbreaks before they happen, providing 
                communities with crucial early warnings and actionable insights to prevent health crises.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Advanced AI Analytics</span>
                    <p className="text-gray-400 text-sm">Machine learning algorithms for early disease detection and outbreak prediction</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Multilingual & Offline-First</span>
                    <p className="text-gray-400 text-sm">Designed for rural and underserved areas with limited connectivity</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Bell className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Real-Time Alerts</span>
                    <p className="text-gray-400 text-sm">Instant notifications with actionable insights for health officials and communities</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* AgeWell */}
            <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 p-8 rounded-2xl border border-slate-600/30 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AgeWell</h3>
                  <p className="text-emerald-400 font-semibold">Smart Eldercare Dispenser</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive smart eldercare solution that combines wearable emergency detection with automated 
                medication management, ensuring senior safety and peace of mind for families.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Wearable Emergency Detection</span>
                    <p className="text-gray-400 text-sm">Advanced fall detection and emergency response system for immediate help</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Smartphone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Automated Medicine Dispensing</span>
                    <p className="text-gray-400 text-sm">Smart pill dispenser with scheduled reminders and dosage tracking</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Wifi className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Caregiver Monitoring</span>
                    <p className="text-gray-400 text-sm">Real-time notifications and remote monitoring for family caregivers</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Healthcare?</h3>
              <p className="text-gray-300 mb-6">
                Join us in revolutionizing healthcare technology and making a difference in communities worldwide.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;