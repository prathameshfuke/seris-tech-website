import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to revolutionize healthcare with AI? Let's discuss how our solutions can transform your community's health outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're passionate about partnering with healthcare organizations, government agencies, and communities 
                  to implement AI-driven solutions that save lives and improve health outcomes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">prathameshfuke@icloud.com</p>
                    <p className="text-sm text-gray-400">Co-Founder</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-white font-medium">Headquarters</p>
                    <p className="text-gray-300">Innovation Hub</p>
                    <p className="text-sm text-gray-400">Healthcare Technology District</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-gray-300">Within 24 hours</p>
                    <p className="text-sm text-gray-400">Business inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 p-8 rounded-xl border border-slate-600/30 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white 
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                             transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white 
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                             transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white 
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                             transition-all duration-200"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white 
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                             transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your healthcare technology needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 
                           text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                           transform hover:scale-105 disabled:opacity-50 disabled:transform-none 
                           flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 p-4 rounded-lg border border-emerald-400/20">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or email us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;