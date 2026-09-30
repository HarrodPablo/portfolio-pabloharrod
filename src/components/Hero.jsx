import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const profileImg = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_800/v1790788227/pefil_htd8os.jpg';
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
      className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-32 pb-16 overflow-hidden bg-dark-bg"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Decorative ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="text-left flex flex-col items-start">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-accent-blue font-semibold text-sm tracking-widest uppercase font-sans">
                {t('hero.greeting')} {t('hero.name')}
              </span>
            </motion.div>

            {/* Main Headline (H1) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight flex flex-col"
            >
              <span className="text-white">Full-Stack</span>
              <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">
                Software Engineer
              </span>
            </motion.h1>

            {/* Subheadline (Body) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-base sm:text-lg text-gray-400 mb-8 leading-relaxed font-sans"
            >
              {t('hero.descPart1')}
              <span className="text-gray-300 font-medium">{t('hero.descRobust')}</span>
              {t('hero.descPart2')}
              <span className="text-gray-300 font-medium">{t('hero.descScalable')}</span>
              {t('hero.descPart3')}
              <span className="text-gray-300 font-medium">{t('hero.descEfficient')}</span>
              {t('hero.descPart4')}
            </motion.p>

            {/* Core Stack Badges (Replacing Social Media) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {coreTech.map((tech) => (
                <div
                  key={tech.name}
                  style={{ backgroundColor: tech.bg, borderColor: tech.border }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium text-gray-200 hover:scale-105 hover:border-white/20 transition-all duration-300 shadow-md cursor-default group"
                  title={tech.name}
                >
                  {tech.icon}
                  <span className="hidden sm:inline">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary: View Projects */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold text-white bg-accent-blue hover:bg-accent-blue-hover transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase tracking-wide cursor-pointer"
              >
                <span>{t('hero.viewProjects')}</span>
              </a>

              {/* Secondary: Download CV */}
              <a
                href={language === 'es' ? cvES : cvEN}
                download={language === 'es' ? 'Pablo_Harrod_CV_ES.pdf' : 'Pablo_Harrod_CV_EN.pdf'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wide cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t('hero.downloadCV')}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Avatar with Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Avatar Container with Single Thick Border and Floating Effect */}
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full ripple-container animate-float">
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full p-[8px] sm:p-[12px] bg-gradient-to-br from-red-500 to-orange-700 shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img
                    src={profileImg}
                    alt="Pablo Harrod"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
