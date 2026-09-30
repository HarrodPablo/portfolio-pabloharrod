import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={(e) => handleLinkClick(e, '#home')}>
            <span className="font-brand font-bold text-2xl tracking-wide bg-gradient-to-r from-white via-gray-100 to-accent-blue bg-clip-text text-transparent group-hover:glow-text-blue transition-all duration-300">
              Pablo Harrod <span className="font-sans font-bold text-base text-accent-violet select-none">| Dev</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-violet group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggleTheme}
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent-blue text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
                <button 
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/5 border border-white/10 hover:border-accent-blue text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {t('nav.lang')}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-border focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 glass-panel border-b border-dark-border mx-4 rounded-xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-border/50 border-l-2 border-transparent hover:border-accent-blue transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { toggleTheme(); setIsOpen(false); }}
            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-md text-base font-bold text-gray-300 hover:text-white hover:bg-dark-border/50 transition-all duration-200 cursor-pointer"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <span>{isLightMode ? (language === 'es' ? 'Modo Oscuro' : 'Dark Mode') : (language === 'es' ? 'Modo Claro' : 'Light Mode')}</span>
          </button>
          <button 
            onClick={() => { toggleLanguage(); setIsOpen(false); }}
            className="w-full text-left block px-4 py-3 rounded-md text-base font-bold text-accent-blue hover:text-white hover:bg-dark-border/50 transition-all duration-200 cursor-pointer"
          >
            {t('nav.lang')}
          </button>
        </div>
      </div>
    </nav>
  );
}
