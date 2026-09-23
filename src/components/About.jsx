import React, { useState, useEffect } from 'react';
import { User, Database, Cpu, Layout, Code2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('philosophy');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const stats = [
    { label: t('about.stat1Title'), value: t('about.stat1Val'), desc: t('about.stat1Desc'), icon: <Database className="w-5 h-5 text-accent-blue" /> },
    { label: t('about.stat2Title'), value: t('about.stat2Val'), desc: t('about.stat2Desc'), icon: <Cpu className="w-5 h-5 text-accent-violet" /> },
    { label: t('about.stat3Title'), value: t('about.stat3Val'), desc: t('about.stat3Desc'), icon: <Layout className="w-5 h-5 text-emerald-400" /> }
  ];

  const philosophies = React.useMemo(() => ({
    philosophy: {
      title: t('about.codeTitle1'),
      lines: [
        t('about.c1L1'),
        t('about.c1L2'),
        t('about.c1L3'),
        t('about.c1L4'),
        t('about.c1L5'),
        t('about.c1L6'),
        t('about.c1L7'),
        t('about.c1L8')
      ]
    },
    tools: {
      title: t('about.codeTitle2'),
      lines: [
        t('about.c2L1'),
        t('about.c2L2'),
        t('about.c2L3'),
        t('about.c2L4'),
        t('about.c2L5'),
        t('about.c2L6'),
        t('about.c2L7'),
        t('about.c2L8')
      ]
    }
  }), [t]);

  // Reiniciar la escritura al cambiar de pestaña
  useEffect(() => {
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
  }, [activeTab]);

  // Efecto de máquina de escribir
  useEffect(() => {
    if (!isTyping) return;
    const currentLines = philosophies[activeTab].lines;
    
    if (currentLineIndex < currentLines.length) {
      const currentLine = currentLines[currentLineIndex];
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 15); // Velocidad de tipeo por letra
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 150); // Pausa entre líneas
        return () => clearTimeout(timeout);
      }
    }
  }, [isTyping, activeTab, currentLineIndex, currentCharIndex, philosophies]);

  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/5 text-sm font-bold text-accent-blue font-brand mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t('about.title1')} <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">{t('about.title2')}</span>
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left: Engagement Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                {t('about.heading')}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                {t('about.desc')}
              </p>
            </div>

            {/* Stats list */}
            <div className="space-y-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-white/10 transition-colors duration-300">
                  <div className="p-2.5 bg-dark-border/40 rounded-lg flex-shrink-0 flex items-center justify-center h-11 w-11 border border-white/5">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{stat.label}</h4>
                    <p className="text-xs text-accent-blue-hover font-medium mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400 font-light">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Code Editor Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsTyping(true)}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6">
            <div className="rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden glow-violet">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-card border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex bg-dark-border/50 rounded-lg p-0.5 text-xs text-gray-400 border border-white/5">
                  <button 
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-3 py-1 rounded-md transition-colors duration-200 ${activeTab === 'philosophy' ? 'bg-accent-violet text-white font-semibold' : 'hover:text-white'}`}
                  >
                    philosophy.js
                  </button>
                  <button 
                    onClick={() => setActiveTab('tools')}
                    className={`px-3 py-1 rounded-md transition-colors duration-200 ${activeTab === 'tools' ? 'bg-accent-violet text-white font-semibold' : 'hover:text-white'}`}
                  >
                    stack.js
                  </button>
                </div>
                <Code2 className="w-4 h-4 text-gray-500" />
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-6 bg-dark-bg/95 font-mono text-[10px] sm:text-sm text-gray-300 leading-relaxed overflow-x-auto min-h-[200px] sm:min-h-[260px] select-text">
                <div className="text-[10px] text-gray-600 mb-2">// {philosophies[activeTab].title}</div>
                {philosophies[activeTab].lines.map((line, idx) => {
                  if (idx > currentLineIndex) return null;
                  
                  const isCurrentLine = idx === currentLineIndex;
                  const displayedText = isCurrentLine ? line.slice(0, currentCharIndex) : line;
                  
                  return (
                    <div key={idx} className="flex gap-4">
                      <span className="text-gray-600 select-none text-right w-5">{idx + 1}</span>
                      <pre className="text-gray-300 whitespace-pre-wrap font-sans sm:font-mono">
                        {displayedText.includes('const') || displayedText.includes('let') || displayedText.includes('import') || displayedText.includes('Object') ? (
                          <span className="text-accent-violet">{displayedText}</span>
                        ) : displayedText.startsWith('//') ? (
                          <span className="text-emerald-400 font-light italic">{displayedText}</span>
                        ) : (
                          <span>{displayedText}</span>
                        )}
                        {/* Cursor Parpadeante */}
                        {isCurrentLine && (
                          <span className="animate-pulse font-bold text-accent-violet ml-[1px]">|</span>
                        )}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
