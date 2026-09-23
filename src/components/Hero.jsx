import React from 'react';
import { ArrowDown, FileText, Code2, Database, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import cvES from '../assets/cv/pablo_harrod_developer-ES.pdf';
import cvEN from '../assets/cv/pablo_harrod_developer_EN.pdf';

export default function Hero() {
  const { t, language } = useLanguage();
  const coreTech = [
    { name: 'React', icon: <img src="/react.svg" className="w-5 h-5 object-contain" alt="React" />, bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)' },
    { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs/white" className="w-5 h-5 object-contain" alt="Next.js" />, bg: 'rgba(255, 255, 255, 0.05)', border: 'rgba(255, 255, 255, 0.2)' },
    { name: 'Node.js', icon: <img src="/nodejs.svg" className="w-5 h-5 object-contain" alt="Node.js" />, bg: 'rgba(52, 211, 153, 0.1)', border: 'rgba(52, 211, 153, 0.3)' },
    { name: 'Prisma', icon: <img src="https://cdn.simpleicons.org/prisma/white" className="w-5 h-5 object-contain" alt="Prisma" />, bg: 'rgba(255, 255, 255, 0.05)', border: 'rgba(255, 255, 255, 0.2)' },
    { name: 'PostgreSQL', icon: <img src="/postgresql.svg" className="w-5 h-5 object-contain" alt="PostgreSQL" />, bg: 'rgba(129, 140, 248, 0.1)', border: 'rgba(129, 140, 248, 0.3)' },
    { name: 'Tailwind', icon: <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" className="w-5 h-5 object-contain" alt="Tailwind CSS" />, bg: 'rgba(56, 178, 172, 0.1)', border: 'rgba(56, 178, 172, 0.3)' },
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-24 overflow-hidden bg-dark-bg"
    >
      {/* Premium background grid & lighting effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Decorative ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl animate-float-slow"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating tech badge banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/5 mb-8 animate-float shadow-lg hover:border-white/10 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-ping"></span>
          <span className="text-xs sm:text-sm font-medium text-accent-teal-hover tracking-wide font-brand">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-none px-2 sm:px-0">
          <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 tracking-normal font-brand">
            {t('hero.greeting')}
          </span>
          <span className="bg-gradient-to-r from-white via-gray-100 to-accent-blue bg-clip-text text-transparent drop-shadow-sm">
            {t('hero.name')}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed font-light px-4 sm:px-0">
          {t('hero.descPart1')}<span className="text-white font-normal border-b border-accent-teal/40">{t('hero.descRobust')}</span>{t('hero.descPart2')}<span className="text-white font-normal border-b border-accent-blue/40">{t('hero.descScalable')}</span>{t('hero.descPart3')}<span className="text-white font-normal border-b border-accent-violet/40">{t('hero.descEfficient')}</span>{t('hero.descPart4')}
        </motion.p>

        {/* Core Stack Badge Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 max-w-3xl mx-auto px-2 sm:px-0">
          {coreTech.map((tech) => (
            <div
              key={tech.name}
              style={{ backgroundColor: tech.bg, borderColor: tech.border }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm font-medium text-gray-200 hover:scale-105 hover:border-white/20 transition-all duration-300 shadow-md cursor-default group"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Call to Actions (CTAs) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:from-accent-blue/90 hover:to-accent-violet/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{t('hero.viewProjects')}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
          
          <a
            href={language === 'es' ? cvES : cvEN}
            download={language === 'es' ? 'Pablo_Harrod_CV_ES.pdf' : 'Pablo_Harrod_CV_EN.pdf'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-gray-300 hover:text-white glass-panel border border-white/10 hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-accent-teal" />
            <span>{t('hero.downloadCV')}</span>
          </a>
        </motion.div>

      </div>

      {/* Elegant down indicator at the bottom of the section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity duration-300">
        <a href="#projects" onClick={handleScrollToProjects}>
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </a>
      </div>
    </section>
  );
}
