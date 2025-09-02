import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/src/logo/logo.jpg" 
              alt="Seris Tech Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Seris Tech
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* LinkedIn Link */}
          <div className="hidden md:flex">
            <a 
              href="https://linkedin.com/company/seris-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800/90 backdrop-blur-md rounded-lg text-center">
            <div className="flex flex-col space-y-4 px-4 items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Contact
              </button>
              <a 
                href="https://linkedin.com/company/seris-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;