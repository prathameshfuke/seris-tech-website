import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Seris Tech</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a healthcare technology startup dedicated to transforming lives through innovative AI solutions. 
              Our mission is to make advanced healthcare accessible to everyone, especially underserved communities and seniors.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl border border-slate-600/30 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To leverage artificial intelligence in delivering innovative healthcare solutions that save lives and 
                improve quality of life for communities and seniors through smart, accessible technology that bridges 
                healthcare gaps and empowers better health outcomes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl border border-slate-600/30 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the leading force in AI-driven healthcare innovation, creating a world where advanced 
                healthcare technology is universally accessible, particularly for vulnerable populations who need 
                it most, ensuring no one is left behind in the digital health revolution.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-900" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Innovation</h4>
              <p className="text-gray-400">
                Pioneering cutting-edge AI solutions that push the boundaries of what's possible in healthcare technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Accessibility</h4>
              <p className="text-gray-400">
                Ensuring our solutions are designed for everyone, with special focus on underserved communities and seniors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-slate-900" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Impact</h4>
              <p className="text-gray-400">
                Measuring success by lives improved and communities empowered through our healthcare innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;