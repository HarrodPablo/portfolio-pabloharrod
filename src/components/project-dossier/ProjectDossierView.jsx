import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  ExternalLink,
  FolderOpen,
  Globe,
  Info,
  Layout,
  Maximize2,
  PlayCircle,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  X
} from 'lucide-react';
import React from 'react';
import LineSidebar from '../LineSidebar';
import { FolderTabVertical, PaperclipSVG } from './FolderElements';

export default function ProjectDossierView({
  projects,
  selectedProject,
  activeSectionsList,
  sidebarItems,
  activeSection,
  activeRoleTab,
  setActiveRoleTab,
  activeCaptureIdx,
  setActiveCaptureIdx,
  onBackToStack,
  onOpenProject,
  onScrollToSection,
  onOpenArchModal,
  t
}) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') {
        setActiveCaptureIdx((prev) => Math.max(0, prev - 1));
      }
      if (e.key === 'ArrowRight') {
        const total = selectedProject.images ? selectedProject.images.length : 1;
        setActiveCaptureIdx((prev) => Math.min(total - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedProject.images, setActiveCaptureIdx]);

  const fmtIdx = (id) => {
    const idx = activeSectionsList.findIndex((s) => s.id === id);
    return String(idx + 1).padStart(2, '0');
  };

  return (
    <motion.div
      key={`mosby-open-${selectedProject.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full"
    >
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
        <button
          onClick={onBackToStack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-accent-violet/20 border border-white/10 hover:border-accent-violet/40 text-xs sm:text-sm font-bold text-white transition-all duration-300 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-accent-violet group-hover:-translate-x-0.5 transition-transform" />
          <span>{t('projects.backToProjects')}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs text-gray-400 mr-1">
            {t('projects.fileLabel')} #{selectedProject.code} / 0{projects.length}
          </span>
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-accent-violet hover:bg-accent-violet-hover text-white transition-all shadow-lg shadow-accent-violet/25 cursor-pointer"
          >
            <span>{t('projects.btnVisit')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          {selectedProject.mirrorUrl && (
            <a
              href={selectedProject.mirrorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-accent-teal" />
              <span>{t('projects.btnMirror')}</span>
            </a>
          )}
          {selectedProject.githubUrl && (
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-accent-teal" />
              <span>GitHub</span>
            </a>
          )}
          {selectedProject.isPrivate && (
            <button
              onClick={onOpenArchModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
            >
              <Info className="w-4 h-4 text-accent-teal" />
              <span>{t('projects.btnInfo')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Giant Condensed Uppercase Title */}
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-violet font-bold block mb-1.5">
            {selectedProject.subtitle}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none"
            >
              {selectedProject.title}
            </motion.h1>
            {selectedProject.inProgressBadge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-gradient-to-r from-amber-400 to-orange-500 text-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 flex-shrink-0 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>{selectedProject.inProgressBadge}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Section Index Pills */}
      <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-4 mb-5 no-scrollbar">
        {sidebarItems.map((label, idx) => (
          <button
            key={label}
            onClick={() => onScrollToSection(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap border transition-all cursor-pointer ${
              activeSection === idx
                ? 'bg-accent-violet text-white border-accent-violet shadow-md'
                : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
            }`}
          >
            0{idx + 1}. {label}
          </button>
        ))}
      </div>

      {/* Main 3-Part Layout */}
      <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8 relative">
        {/* LEFT COLUMN: Sticky LineSidebar */}
        <aside className="hidden lg:block w-56 xl:w-64 sticky top-28 self-start pt-4 flex-shrink-0">
          <div className="mb-4 pl-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 block">
              {t('projects.fileLabel')} #{selectedProject.code} — INDEX
            </span>
          </div>
          <LineSidebar
            items={sidebarItems}
            accentColor="#ea580c"
            textColor="#a3a3a3"
            markerColor="#525252"
            showIndex
            showMarker
            proximityRadius={100}
            maxShift={24}
            falloff="smooth"
            markerLength={42}
            markerGap={0}
            tickScale={0.5}
            scaleTick
            itemGap={20}
            fontSize={0.96}
            smoothing={100}
            defaultActive={activeSection}
            onItemClick={(index) => onScrollToSection(index)}
          />

          <div className="mt-10 p-4 rounded-2xl bg-[#141414] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
              <span>{t('projects.fileLabel')}</span>
              <span className="text-accent-violet font-bold">#{selectedProject.code}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {selectedProject.subtitle}
            </p>
            <button
              onClick={onBackToStack}
              className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <FolderOpen className="w-3.5 h-3.5 text-accent-violet" />
              <span>{t('projects.backToProjects')}</span>
            </button>
          </div>
        </aside>

        {/* CENTER + RIGHT: Colored Folder Cover + Inner Binder Sheet + Right Vertical Tabs */}
        <div className="flex-1 min-w-0 w-full flex items-start">
          {/* Outer Colored Folder Cover */}
          <div
            style={{ backgroundColor: selectedProject.folderColor }}
            className="flex-1 min-w-0 p-3 sm:p-6 md:p-8 rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-2xl shadow-2xl transition-colors duration-500 relative"
          >
            {/* Inner Dark Perforated Binder Page (#141414) */}
            <div className="w-full bg-[#141414] text-gray-100 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.65)] border border-white/10 relative pl-10 sm:pl-16 pr-5 sm:pr-10 md:pr-12 py-8 sm:py-12 space-y-16">
              {/* Vertical Binder Margin Line */}
              <div className="select-none pointer-events-none absolute top-0 bottom-0 left-8 sm:left-12 w-[1px] bg-white/[0.07]" />

              {/* 3 Binder Punch Holes on the Left Margin */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-2.5 sm:left-4 flex flex-col justify-between py-16 sm:py-24">
                {[0, 1, 2].map((holeIdx) => (
                  <span
                    key={holeIdx}
                    style={{ backgroundColor: selectedProject.folderColor }}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.65)] block"
                  />
                ))}
              </div>

              {/* =================================================
                  SECTION 01: OVERVIEW & CHALLENGE
                 ================================================= */}
              <div id="sec-overview" className="scroll-mt-32 space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column: Photo held by Metallic Paperclip + Executive Metadata */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="relative pt-2">
                      <PaperclipSVG className="absolute -top-6 right-5 z-30 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] pointer-events-none" />

                      <div className="w-full aspect-[4/3] bg-[#0a0a0a] border border-white/15 shadow-xl overflow-hidden group">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Executive Metadata below Photo */}
                    <div className="font-mono text-xs space-y-3 text-gray-300 pt-2 border-t border-white/10">
                      <div>
                        <span className="font-bold text-white block">
                          {t('projects.fileLabel')}:
                        </span>
                        <span className="text-gray-400">
                          #{selectedProject.code} — {selectedProject.title}
                        </span>
                      </div>

                      {selectedProject.client && (
                        <div>
                          <span className="font-bold text-white block">
                            {t('projects.labelClient')}:
                          </span>
                          <span className="text-gray-300">{selectedProject.client}</span>
                        </div>
                      )}

                      {selectedProject.role && (
                        <div>
                          <span className="font-bold text-white block">
                            {t('projects.labelRole')}:
                          </span>
                          <span className="text-accent-teal">{selectedProject.role}</span>
                        </div>
                      )}

                      <div>
                        <span className="font-bold text-white block">
                          {t('projects.labelStatus')}:
                        </span>
                        <span className={selectedProject.inProgress ? 'text-amber-400 font-semibold flex items-center gap-1.5' : 'text-emerald-400 font-semibold'}>
                          {selectedProject.inProgress && (
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          )}
                          {selectedProject.status || t('projects.statusLabel')}
                        </span>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2.5">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-violet hover:bg-accent-violet-hover text-white font-sans font-bold text-xs shadow-md transition-all"
                        >
                          <span>{t('projects.btnVisit')}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {selectedProject.mirrorUrl && (
                          <a
                            href={selectedProject.mirrorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-sans font-bold text-xs transition-all"
                          >
                            <Globe className="w-3.5 h-3.5 text-accent-teal" />
                            <span>{t('projects.btnMirror')}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Editorial Drop-Cap Text */}
                  <div className="md:col-span-7 space-y-5">
                    <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                        {fmtIdx('sec-overview')}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                        {t('projects.secOverview')}
                      </h3>
                    </div>

                    <p className="text-gray-200 text-base sm:text-[17px] leading-relaxed font-light first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-heading first-letter:font-black first-letter:float-left first-letter:mr-3.5 first-letter:leading-none first-letter:text-accent-violet">
                      {selectedProject.description}
                    </p>

                    {!selectedProject.problem && (
                      <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed font-light">
                        {t('projects.engNoteDesc')}
                      </p>
                    )}

                    {/* Problem / Solution / Impact Cards */}
                    {selectedProject.problem && (
                      <div className="space-y-4 pt-2">
                        <div className="p-4 sm:p-5 rounded-xl bg-red-500/[0.06] border border-red-500/20 space-y-1.5">
                          <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                            <AlertTriangle className="w-4 h-4" />
                            <span>{t('projects.labelProblem')}</span>
                          </div>
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                            {selectedProject.problem}
                          </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-xl bg-accent-violet/[0.07] border border-accent-violet/25 space-y-1.5">
                          <div className="flex items-center gap-2 text-accent-violet font-mono text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            <span>{t('projects.labelSolution')}</span>
                          </div>
                          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-light">
                            {selectedProject.solution}
                          </p>
                        </div>

                        {selectedProject.impact && (
                          <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 space-y-1.5">
                            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                              <TrendingUp className="w-4 h-4" />
                              <span>{t('projects.labelImpact')}</span>
                            </div>
                            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-light">
                              {selectedProject.impact}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* =================================================
                  SECTION 02 (Optional): VIDEO WALKTHROUGH
                 ================================================= */}
              {selectedProject.videoUrl && (
                <div id="sec-video" className="scroll-mt-32 space-y-6 relative z-10">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                      {fmtIdx('sec-video')}
                    </span>
                    <PlayCircle className="w-5 h-5 text-accent-violet" />
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {t('projects.secVideo')}
                    </h3>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-black overflow-hidden shadow-2xl aspect-video">
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* =================================================
                  SECTION 03: INTERACTIVE GALLERY & ROLE MODULES
                 ================================================= */}
              <div id="sec-gallery" className="scroll-mt-32 space-y-10 relative z-10">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                    {fmtIdx('sec-gallery')}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {t('projects.secGallery')}
                  </h3>
                </div>

                {/* Interactive Role Modules Tabs */}
                {selectedProject.roles && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400">
                      <Users className="w-4 h-4 text-accent-teal" />
                      <span>{t('projects.labelRoleModules')}</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.roles.map((r, rIdx) => (
                        <button
                          key={r.badge}
                          type="button"
                          onClick={() => setActiveRoleTab(rIdx)}
                          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-2 ${
                            activeRoleTab === rIdx
                              ? 'bg-accent-violet text-white border-accent-violet shadow-lg shadow-accent-violet/25'
                              : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current" />
                          <span>{r.badge}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Role Content Card */}
                    {selectedProject.roles[activeRoleTab] && (
                      <div className="p-5 sm:p-7 rounded-2xl bg-black/45 border border-white/10 space-y-5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                            {selectedProject.roles[activeRoleTab].title}
                          </h4>
                          <span className="font-mono text-xs px-2.5 py-1 rounded bg-accent-teal/15 text-accent-teal border border-accent-teal/30 font-bold">
                            {selectedProject.roles[activeRoleTab].badge}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {selectedProject.roles[activeRoleTab].items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5"
                            >
                              <div className="flex items-center gap-2 font-heading text-sm sm:text-base font-bold text-accent-teal">
                                <CheckCircle2 className="w-4 h-4 text-accent-violet flex-shrink-0" />
                                <span>{item.head}</span>
                              </div>
                              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light pl-6">
                                {item.body}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive Screenshot Gallery with Tabs & Captions */}
                <div className="space-y-4 pt-2">
                  {selectedProject.capturesMeta && selectedProject.capturesMeta.length > 1 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.capturesMeta.map((cap, cIdx) => (
                        <button
                          key={cap.label}
                          type="button"
                          onClick={() => setActiveCaptureIdx(cIdx)}
                          className={`px-3.5 py-2 rounded-lg font-mono text-xs font-semibold border transition-all cursor-pointer ${
                            activeCaptureIdx === cIdx
                              ? 'bg-white/15 text-white border-accent-violet'
                              : 'bg-black/40 text-gray-400 border-white/10 hover:text-white'
                          }`}
                        >
                          {cap.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Active Capture Frame */}
                  <div className="relative pt-3">
                    <div className="absolute top-1 left-4 w-16 h-5 bg-white/20 backdrop-blur-md rotate-[-22deg] z-30 rounded shadow-sm pointer-events-none" />
                    <div className="absolute top-1 right-4 w-16 h-5 bg-white/20 backdrop-blur-md rotate-[22deg] z-30 rounded shadow-sm pointer-events-none" />

                    <div className="rounded-xl border border-white/15 bg-[#0a0a0a] overflow-hidden shadow-2xl group">
                      <div className="px-4 py-2.5 bg-[#1a1a1a] border-b border-white/10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[11px] font-mono text-gray-400 truncate max-w-md hidden sm:inline-block">
                          {selectedProject.liveUrl}
                        </span>

                        <div className="flex items-center gap-2">
                          {selectedProject.images && selectedProject.images.length > 1 && (
                            <div className="flex items-center gap-1 font-mono text-xs text-gray-400 mr-1 sm:mr-2">
                              <button
                                type="button"
                                disabled={activeCaptureIdx === 0}
                                onClick={() => setActiveCaptureIdx((prev) => Math.max(0, prev - 1))}
                                className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                title="Anterior"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                              </button>
                              <span>
                                {activeCaptureIdx + 1}/{selectedProject.images.length}
                              </span>
                              <button
                                type="button"
                                disabled={activeCaptureIdx === selectedProject.images.length - 1}
                                onClick={() => setActiveCaptureIdx((prev) => Math.min(selectedProject.images.length - 1, prev + 1))}
                                className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                title="Siguiente"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => setIsLightboxOpen(true)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-xs font-mono text-accent-violet transition-colors cursor-pointer"
                            title="Pantalla Completa / Zoom"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span className="hidden sm:inline">Zoom</span>
                          </button>
                        </div>
                      </div>

                      {/* Uncropped Scrollable Container for Tall / Composite images */}
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative w-full max-h-[640px] overflow-y-auto bg-[#0a0a0a] cursor-zoom-in group/img select-none"
                      >
                        <img
                          src={
                            (selectedProject.images && selectedProject.images[activeCaptureIdx]) ||
                            selectedProject.image
                          }
                          alt={`${selectedProject.title} preview`}
                          className="w-full h-auto block transition-transform duration-300 ease-out group-hover/img:scale-[1.008]"
                        />
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white font-mono text-xs flex items-center gap-1.5 pointer-events-none">
                          <Maximize2 className="w-3.5 h-3.5 text-accent-violet" />
                          <span>Click para pantalla completa</span>
                        </div>
                      </div>

                      {selectedProject.capturesMeta &&
                        selectedProject.capturesMeta[activeCaptureIdx] && (
                          <div className="p-4 bg-[#111111] border-t border-white/10 flex items-start gap-3">
                            <span className="font-mono text-xs font-bold text-accent-violet flex-shrink-0">
                              [FIG. 0{activeCaptureIdx + 1}]
                            </span>
                            <p className="text-xs sm:text-sm text-gray-300 font-light">
                              {selectedProject.capturesMeta[activeCaptureIdx].caption}
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SECTION 04 (When present): ARCHITECTURE & DATA FLOW
                 ================================================= */}
              {selectedProject.archPoints && (
                <div id="sec-arch" className="scroll-mt-32 space-y-6 relative z-10">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                      {fmtIdx('sec-arch')}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {t('projects.secArchitecture')}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.archPoints.map((pt, pIdx) => (
                      <div
                        key={pt.title}
                        className="p-5 sm:p-6 rounded-2xl bg-black/45 hover:bg-white/[0.03] border border-white/10 hover:border-accent-violet/35 transition-all duration-300 space-y-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                            0{pIdx + 1}
                          </span>
                          <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                            {pt.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light pl-1">
                          {pt.desc || pt.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =================================================
                  SECTION 05: KEY ENGINEERING HIGHLIGHTS
                 ================================================= */}
              <div id="sec-features" className="scroll-mt-32 space-y-6 relative z-10">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                    {fmtIdx('sec-features')}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {t('projects.secFeatures')}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div
                      key={feat}
                      className="p-4 sm:p-5 rounded-xl bg-black/40 hover:bg-white/[0.04] border border-white/10 hover:border-accent-violet/30 transition-all duration-300 flex items-start gap-4 group"
                    >
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/5 text-accent-teal border border-white/10 flex-shrink-0 mt-0.5">
                        0{fIdx + 1}
                      </span>
                      <p className="flex-1 text-gray-200 text-sm sm:text-base leading-relaxed">
                        {feat}
                      </p>
                      <CheckCircle2 className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  SECTION 06: FULL CATEGORIZED TECH STACK
                 ================================================= */}
              <div id="sec-tech" className="scroll-mt-32 space-y-6 relative z-10">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                    {fmtIdx('sec-tech')}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {t('projects.secTech')}
                  </h3>
                </div>

                {selectedProject.stackFull ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Frontend */}
                    <div className="p-5 rounded-2xl bg-black/45 border border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-accent-violet font-mono text-xs font-bold uppercase tracking-wider">
                        <Layout className="w-4 h-4" />
                        <span>{t('projects.catFrontend')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stackFull.frontend.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="p-5 rounded-2xl bg-black/45 border border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-accent-teal font-mono text-xs font-bold uppercase tracking-wider">
                        <Server className="w-4 h-4" />
                        <span>{t('projects.catBackend')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stackFull.backend.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Database & Storage */}
                    <div className="p-5 rounded-2xl bg-black/45 border border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <Database className="w-4 h-4" />
                        <span>{t('projects.catDatabase')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stackFull.database.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Infrastructure & Deploy */}
                    <div className="p-5 rounded-2xl bg-black/45 border border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{t('projects.catInfra')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stackFull.infra.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((badge) => (
                      <div
                        key={badge}
                        className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-accent-violet/15 border border-white/10 hover:border-accent-violet/40 text-xs sm:text-sm font-mono font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                      >
                        <Cpu className="w-4 h-4 text-accent-violet" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Engineering & Architecture Note */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-600/5 to-transparent border border-amber-500/30 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                          {t('projects.engNoteTitle')}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                        {t('projects.engNoteDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer inside Binder Page */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={onBackToStack}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 text-accent-violet" />
                    <span>{t('projects.backToProjects')}</span>
                  </button>

                  <div className="flex flex-wrap items-center gap-3">
                    {selectedProject.mirrorUrl && (
                      <a
                        href={selectedProject.mirrorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                      >
                        <Globe className="w-4 h-4 text-accent-teal" />
                        <span>{t('projects.btnMirror')}</span>
                      </a>
                    )}
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-accent-violet hover:bg-accent-violet-hover text-white transition-all shadow-lg shadow-accent-violet/25 cursor-pointer"
                    >
                      <span>{t('projects.btnVisit')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT EDGE: Vertical S-Curve Folder Tabs */}
          <div className="hidden sm:flex flex-col items-start pt-6 sticky top-24 self-start">
            {projects.map((proj) => (
              <FolderTabVertical
                key={proj.id}
                color={proj.folderColor}
                title={proj.title}
                code={proj.code}
                isActive={proj.id === selectedProject.id}
                inProgressBadge={proj.inProgressBadge}
                onClick={() => onOpenProject(proj.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
          >
            {/* Top Bar of Lightbox */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl flex items-center justify-between pb-3 border-b border-white/10 text-white"
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-sm sm:text-base font-bold text-white">
                  {selectedProject.title}
                </span>
                {selectedProject.capturesMeta && selectedProject.capturesMeta[activeCaptureIdx] && (
                  <span className="font-mono text-xs text-accent-violet font-semibold hidden md:inline">
                    — {selectedProject.capturesMeta[activeCaptureIdx].label}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="flex items-center gap-2 font-mono text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <button
                      type="button"
                      disabled={activeCaptureIdx === 0}
                      onClick={() => setActiveCaptureIdx((prev) => Math.max(0, prev - 1))}
                      className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span>
                      {activeCaptureIdx + 1} / {selectedProject.images.length}
                    </span>
                    <button
                      type="button"
                      disabled={activeCaptureIdx === selectedProject.images.length - 1}
                      onClick={() => setActiveCaptureIdx((prev) => Math.min(selectedProject.images.length - 1, prev + 1))}
                      className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Siguiente"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Cerrar (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Viewer in Lightbox */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex-1 w-full max-w-6xl my-4 flex items-center justify-center overflow-auto"
            >
              <img
                src={
                  (selectedProject.images && selectedProject.images[activeCaptureIdx]) ||
                  selectedProject.image
                }
                alt={`${selectedProject.title} preview`}
                className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Bottom Caption in Lightbox */}
            {selectedProject.capturesMeta && selectedProject.capturesMeta[activeCaptureIdx] && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl text-center bg-black/70 border border-white/10 p-3 rounded-xl"
              >
                <p className="text-xs sm:text-sm text-gray-200 font-light">
                  <span className="font-mono text-accent-violet font-bold mr-2">
                    [FIG. 0{activeCaptureIdx + 1}]
                  </span>
                  {selectedProject.capturesMeta[activeCaptureIdx].caption}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

