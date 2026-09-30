import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Info, Layers, ShieldAlert, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const imgWonders = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788209/7wonders_laqpqd.jpg';
const imgWedding = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788210/boda_uk5fvk.jpg';
const imgRadiology = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788209/diag_afxfui.jpg';
const imgGoodShop = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788209/goodshop_kww3uo.jpg';
const imgIkigai = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788210/iiki_sdhkul.jpg';
const imgNewNorth = 'https://res.cloudinary.com/dcncyxhku/image/upload/f_auto,q_auto,w_1000/v1790788210/new_hcihmk.jpg';

const GithubIcon = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "w-5 h-5"}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();
  // Global States
  const [showArchModal, setShowArchModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "IKIGAI Technology",
      subtitle: t('projects.ikigai.subtitle'),
      description: t('projects.ikigai.desc'),
      tech: ["React", "Vite", "Tailwind CSS", "Aesthetics & Glassmorphism"],
      liveUrl: "https://ikigai-technology.com",
      image: imgIkigai,
      features: [t('projects.ikigai.f1'), t('projects.ikigai.f2'), t('projects.ikigai.f3'), t('projects.ikigai.f4'), t('projects.ikigai.f5')],
      accent: "from-red-500/20 to-orange-600/10",
      type: "ikigai"
    },
    {
      id: 2,
      title: "Radiología López",
      subtitle: t('projects.radiology.subtitle'),
      description: t('projects.radiology.desc'),
      tech: ["React", "Node.js", "PostgreSQL", "DICOM Processing"],
      liveUrl: "https://www.diagnosticolopez.com/login",
      image: imgRadiology,
      features: [t('projects.radiology.f1'), t('projects.radiology.f2'), t('projects.radiology.f3'), t('projects.radiology.f4'), t('projects.radiology.f5')],
      accent: "from-orange-500/20 to-amber-600/10",
      isPrivate: true,
      type: "radiology"
    },
    {
      id: 3,
      title: "New North E-Commerce",
      subtitle: t('projects.newnorth.subtitle'),
      description: t('projects.newnorth.desc'),
      tech: ["React", "Vite", "Tailwind CSS", "Global State Manager"],
      liveUrl: "https://www.newnorth.com.ar",
      image: imgNewNorth,
      features: [t('projects.newnorth.f1'), t('projects.newnorth.f2'), t('projects.newnorth.f3'), t('projects.newnorth.f4'), t('projects.newnorth.f5')],
      accent: "from-amber-500/20 to-red-600/10",
      isPrivate: false
    },
    {
      id: 4,
      title: "Invitación de Boda - J&J",
      subtitle: t('projects.wedding.subtitle'),
      description: t('projects.wedding.desc'),
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
      liveUrl: "https://julieta-y-julio-invitacion-boda.vercel.app/#inicio",
      image: imgWedding,
      features: [t('projects.wedding.f1'), t('projects.wedding.f2'), t('projects.wedding.f3'), t('projects.wedding.f4'), t('projects.wedding.f5')],
      accent: "from-red-600/20 to-rose-700/10",
      isPrivate: false
    },
    {
      id: 5,
      title: "Good Shop Premium",
      subtitle: t('projects.goodshop.subtitle'),
      description: t('projects.goodshop.desc'),
      tech: ["React", "Vite", "Tailwind CSS", "SEO"],
      liveUrl: "https://goodshop-premium.vercel.app",
      image: imgGoodShop,
      features: [t('projects.goodshop.f1'), t('projects.goodshop.f2'), t('projects.goodshop.f3'), t('projects.goodshop.f4'), t('projects.goodshop.f5')],
      accent: "from-orange-600/20 to-red-700/10",
      isPrivate: false
    },
    {
      id: 6,
      title: "7 Wonders Score Calculator",
      subtitle: t('projects.wonders.subtitle'),
      description: t('projects.wonders.desc'),
      tech: ["React", "Tailwind CSS", "Vite", "Local Storage"],
      liveUrl: "https://drive.google.com/drive/folders/1PRYu9EbtG7Zv65NpDbXkQZqcMJ1bXr9U?usp=drive_link",
      image: imgWonders,
      features: [t('projects.wonders.f1'), t('projects.wonders.f2'), t('projects.wonders.f3'), t('projects.wonders.f4'), t('projects.wonders.f5')],
      accent: "from-amber-600/20 to-orange-700/10",
      isPrivate: false
    }
  ];

  const handleScrollToProject = (index) => {
    const anchor = document.getElementById(`project-anchor-${index}`);

    if (anchor) {
      // Offset applied via style={top: ...} for position: sticky
      const stickyOffset = 100 + index * 48;

      // Calculate absolute position of the anchor in the document
      const absoluteTop = anchor.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: absoluteTop - stickyOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 relative bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/5 text-sm font-bold text-accent-teal font-brand mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t('projects.title1')} <span className="bg-gradient-to-r from-accent-teal via-accent-blue to-accent-violet bg-clip-text text-transparent">{t('projects.title2')}</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base font-light">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Stack (Sticky Folders) */}
        <div id="projects-container" className="flex flex-col w-full max-w-5xl mx-auto relative pb-20 pt-10">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              {/* Invisible anchor to calculate precise scroll position regardless of sticky state */}
              <div id={`project-anchor-${index}`} className="w-full h-0 pointer-events-none" aria-hidden="true"></div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                key={project.id}
                id={`project-card-${index}`}
                className={`sticky w-full ${index === projects.length - 1 ? 'mb-0' : 'mb-12 sm:mb-24'}`}
                style={{ top: `calc(100px + ${index * 40}px)` }}
              >
                {/* Tab Handle */}
                <div
                  onClick={() => handleScrollToProject(index)}
                  className="h-10 w-40 sm:w-48 bg-[#171717] border-t border-l border-r border-white/10 rounded-t-xl flex items-center px-5 relative z-20 shadow-lg cursor-pointer hover:brightness-125 hover:-translate-y-1 transition-all duration-300 group"
                  style={{
                    clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
                    marginBottom: '-1px'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 pointer-events-none`}></div>
                  <span className="relative z-10 text-xs font-bold text-gray-300 tracking-widest font-mono">
                    PROJECT 0{index + 1}
                  </span>
                </div>

                {/* Folder Body */}
                <div className="w-full bg-[#171717] border border-white/10 rounded-b-2xl rounded-tr-2xl shadow-2xl relative z-10 px-5 sm:px-10 pb-6 sm:pb-8 pt-12 sm:pt-14 min-h-[400px]">

                  {/* Glow Background */}
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${project.accent} blur-[120px] opacity-20 pointer-events-none rounded-full`}></div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10 h-full">

                    {/* Text Details Column */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.accent}`}></span>
                        <span className="text-[11px] uppercase font-bold tracking-widest text-gray-400">
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed font-light">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-6 text-sm text-gray-400">
                        {project.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-accent-teal flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((badge) => (
                          <span
                            key={badge}
                            className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 uppercase tracking-widest"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto flex gap-4 items-center">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-accent-violet hover:bg-accent-violet-hover text-white transition-all duration-300 shadow-lg shadow-accent-violet/20 hover:shadow-accent-violet/40 hover:-translate-y-0.5"
                        >
                          <span>{t('projects.btnVisit')}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>

                        {project.isPrivate && (
                          <button
                            onClick={() => setShowArchModal(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 cursor-pointer"
                          >
                            <Info className="w-4 h-4" />
                            <span>{t('projects.btnInfo')}</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className="hidden lg:flex flex-1 lg:max-w-[45%] flex-col justify-center mt-8 lg:mt-0">
                      {/* Wrapper sin overflow-hidden para que las cintas sobresalgan */}
                      <div className="w-full relative h-[250px] sm:h-[350px] lg:h-auto lg:aspect-video">

                        {/* Fake tape effects matching reference style */}
                        <div className="absolute top-4 -left-4 w-16 h-5 bg-white/20 backdrop-blur-md rotate-[-25deg] z-30 rounded shadow-sm"></div>
                        <div className="absolute top-4 -right-4 w-16 h-5 bg-white/20 backdrop-blur-md rotate-[25deg] z-30 rounded shadow-sm"></div>

                        {/* Contenedor de la imagen (con overflow-hidden para el borde redondeado) */}
                        <div className="w-full h-full bg-[#0a0a0a]/80 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl group">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-left-top transition-transform duration-700 ease-in-out group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* NDA Video/Simulator Modal (Diagnostics Portal info) */}
      {showArchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/5 bg-dark-card">
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-accent-violet w-5 h-5" />
                <h3 className="font-heading text-lg font-bold text-white">
                  Diagnostics Spooler Architecture
                </h3>
              </div>
              <button
                onClick={() => setShowArchModal(false)}
                className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 bg-dark-bg/95 text-left space-y-4 text-sm text-gray-300 leading-relaxed font-light">
              <div className="p-4 rounded-lg bg-accent-violet/5 border border-accent-violet/20 flex items-start gap-3 mb-2">
                <Info className="text-accent-violet w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                  This system integrates medical equipment (DICOM outputs) directly with a patient records management system in real time, bypassing manual study upload latency.
                </p>
              </div>

              <h4 className="font-heading font-bold text-white text-base">Key Architecture Implementations</h4>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm">
                <li><strong className="text-white">DICOM Listener Node:</strong> Background script listening on port 104 for Agfa modalities.</li>
                <li><strong className="text-white">Robust Spooling Pipeline:</strong> DICOM files are read, parsed, converted to previews, and compressed into TLS chunks.</li>
                <li><strong className="text-white">PostgreSQL Record Mapping:</strong> Maps study metadata to local doctor spools.</li>
                <li><strong className="text-white">Secure HIPAA-compliant Storage:</strong> Files are stored inside high-grade storage groups with encrypted signatures.</li>
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 border-t border-white/5 bg-dark-card">
              <button
                onClick={() => setShowArchModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-accent-violet hover:bg-accent-violet-hover text-white transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
