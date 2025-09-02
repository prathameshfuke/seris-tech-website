import React from 'react';
import { ArrowRight, Shield, Brain, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Healthcare</span>
            <br />
            <span className="text-gray-300">Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Leveraging artificial intelligence to deliver innovative healthcare solutions for communities and seniors, 
            saving lives and improving quality of life through smart, accessible technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 
                         text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 
                         transform hover:scale-105 hover:shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 
                         px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI Technology</h3>
              <p className="text-gray-400 text-center">Advanced machine learning for predictive healthcare analytics</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white">Early Detection</h3>
              <p className="text-gray-400 text-center">Proactive monitoring to prevent health crises before they occur</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white">Community Focus</h3>
              <p className="text-gray-400 text-center">Accessible solutions designed for communities and seniors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;