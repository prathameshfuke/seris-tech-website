import React from 'react';
import { Heart, Mail, Linkedin, Twitter } from 'lucide-react';
import logo from '../logo/logo.jpg'; // Correct import

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={logo}
                  alt="Seris Tech Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Seris Tech
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leveraging AI to deliver innovative healthcare solutions for communities and seniors, 
                with the goal of saving lives and improving quality of life through smart, accessible technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/seris-tech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:prathameshfuke@icloud.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('home');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('products');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">HealthSentinel</span></li>
                <li><span className="text-gray-400">AgeWell</span></li>
                <li><span className="text-gray-400">AI Analytics</span></li>
                <li><span className="text-gray-400">Early Detection</span></li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Seris Tech. All rights reserved. Saving lives through AI innovation.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Healthcare Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
