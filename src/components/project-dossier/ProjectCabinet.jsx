import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, Layers } from 'lucide-react';
import React from 'react';
import { FolderTabHorizontal } from './FolderElements';

export default function ProjectCabinet({
  projects,
  hoveredFolderId,
  setHoveredFolderId,
  onOpenProject,
  t
}) {
  return (
    <motion.div
      key="mosby-cabinet"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Section Heading */}
      <div className="text-center mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/5 text-sm font-bold text-accent-teal font-brand mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('projects.badge')}</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          {t('projects.title1')}{' '}
          <span className="bg-gradient-to-r from-accent-teal via-accent-blue to-accent-violet bg-clip-text text-transparent">
            {t('projects.title2')}
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base font-light">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Mosby's Files Flush Stacked Folder Cabinet */}
      <div
        className="w-full max-w-6xl mx-auto flex flex-col pt-4 pb-12"
        onMouseLeave={() => setHoveredFolderId(7)}
      >
        {projects.map((project, index) => {
          const isExpanded = hoveredFolderId === project.id;
          const isLast = index === projects.length - 1;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredFolderId(project.id)}
              className={`relative w-full select-none ${
                index === 0 ? 'mt-0' : '-mt-[42px]'
              }`}
              style={{ zIndex: index + 1 }}
            >
              {/* Top S-Curved Folder Tab */}
              <div className="w-full flex items-end pointer-events-none">
                <div className="pointer-events-auto">
                  <FolderTabHorizontal
                    color={project.folderColor}
                    title={project.title}
                    code={project.code}
                    offsetClass={project.tabOffset}
                    isHovered={isExpanded}
                    inProgressBadge={project.inProgressBadge}
                    onClick={() => onOpenProject(project.id)}
                  />
                </div>
              </div>

              {/* Solid Horizontal Folder Bar & Expandable Drawer Body */}
              <div
                onClick={() => onOpenProject(project.id)}
                style={{ backgroundColor: project.folderColor }}
                className={`w-full relative cursor-pointer transition-shadow duration-300 shadow-[0_-6px_24px_rgba(0,0,0,0.35)] ${
                  isLast ? 'rounded-b-xl' : ''
                }`}
              >
                <div
                  className={`px-5 sm:px-8 flex items-center justify-end min-h-[56px] sm:min-h-[60px] ${
                    !isExpanded && !isLast ? 'pb-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-white/95 font-mono text-xs sm:text-sm tracking-tight ml-auto pl-4">
                    {project.inProgressBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-amber-400 text-black uppercase tracking-wider shadow-sm flex items-center gap-1.5 flex-shrink-0 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span>{project.inProgressBadge}</span>
                      </span>
                    )}
                    <span className="truncate max-w-[210px] sm:max-w-none">
                      {project.subtitle}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-white flex-shrink-0 transition-transform duration-300" />
                    ) : (
                      <ChevronLeft className="w-4 h-4 text-white/80 flex-shrink-0 transition-transform duration-300" />
                    )}
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-6 sm:px-12 pt-4 ${
                      isLast ? 'pb-12 sm:pb-16' : 'pb-16 sm:pb-20'
                    } flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8`}
                  >
                    <div className="max-w-xl space-y-5">
                      <p className="font-mono text-xs sm:text-[14px] text-white/95 leading-relaxed tracking-normal">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {project.tech.map((badge) => (
                          <span
                            key={badge}
                            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-black/25 text-white/90 border border-white/15"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end lg:self-auto">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/45 border border-white/20 font-mono text-xs font-bold text-white transition-all">
                        <span>{t('projects.clickToInspect')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

