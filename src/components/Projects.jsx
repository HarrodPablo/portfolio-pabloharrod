import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProjectsData } from '../data/projectsData';
import ProjectArchModal from './project-dossier/ProjectArchModal';
import ProjectCabinet from './project-dossier/ProjectCabinet';
import ProjectDossierView from './project-dossier/ProjectDossierView';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [hoveredFolderId, setHoveredFolderId] = useState(7);
  const [activeSection, setActiveSection] = useState(0);
  const [activeRoleTab, setActiveRoleTab] = useState(0);
  const [activeCaptureIdx, setActiveCaptureIdx] = useState(0);
  const [showArchModal, setShowArchModal] = useState(false);
  const isManualScroll = useRef(false);
  const sectionTopRef = useRef(null);

  const projects = getProjectsData(t);
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  // Dynamic 6-section Case Study structure (hides Video if videoUrl is null, and Architecture if archPoints is null)
  const activeSectionsList = selectedProject
    ? [
        { id: 'sec-overview', label: t('projects.secOverview') },
        ...(selectedProject.videoUrl
          ? [{ id: 'sec-video', label: t('projects.secVideo') }]
          : []),
        { id: 'sec-gallery', label: t('projects.secGallery') },
        ...(selectedProject.archPoints
          ? [{ id: 'sec-arch', label: t('projects.secArchitecture') }]
          : []),
        { id: 'sec-features', label: t('projects.secFeatures') },
        { id: 'sec-tech', label: t('projects.secTech') }
      ]
    : [];

  const sidebarItems = activeSectionsList.map((s) => s.label);

  const scrollToProjectsTop = (smooth = true) => {
    const section = document.getElementById('projects');
    if (section) {
      const navbarOffset = 76;
      const targetY = section.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  const handleOpenProject = (id) => {
    setSelectedProjectId(id);
    setActiveSection(0);
    setActiveRoleTab(0);
    setActiveCaptureIdx(0);
    scrollToProjectsTop(true);
  };

  const handleBackToStack = () => {
    setSelectedProjectId(null);
    setTimeout(() => {
      scrollToProjectsTop(true);
    }, 50);
  };

  useEffect(() => {
    if (selectedProjectId !== null) {
      const timer = setTimeout(() => {
        scrollToProjectsTop(true);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [selectedProjectId]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    isManualScroll.current = true;
    const secObj = activeSectionsList[index];
    const el = secObj ? document.getElementById(secObj.id) : null;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        isManualScroll.current = false;
      }, 750);
    } else {
      isManualScroll.current = false;
    }
  };

  // Scroll-spy for updating LineSidebar active index when scrolling manually
  useEffect(() => {
    if (!selectedProjectId || activeSectionsList.length === 0) return;

    const handleScroll = () => {
      if (isManualScroll.current) return;
      const offset = window.innerHeight * 0.38;
      let current = 0;

      for (let i = 0; i < activeSectionsList.length; i++) {
        const sec = document.getElementById(activeSectionsList[i].id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= offset) {
            current = i;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId, activeSectionsList.length]);

  return (
    <section
      id="projects"
      className={`relative bg-dark-bg overflow-x-clip transition-all duration-300 ${
        selectedProject ? 'pt-6 sm:pt-8 pb-16 lg:pb-24' : 'py-16 lg:py-24'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div ref={sectionTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <ProjectCabinet
              projects={projects}
              hoveredFolderId={hoveredFolderId}
              setHoveredFolderId={setHoveredFolderId}
              onOpenProject={handleOpenProject}
              t={t}
            />
          ) : (
            <ProjectDossierView
              projects={projects}
              selectedProject={selectedProject}
              activeSectionsList={activeSectionsList}
              sidebarItems={sidebarItems}
              activeSection={activeSection}
              activeRoleTab={activeRoleTab}
              setActiveRoleTab={setActiveRoleTab}
              activeCaptureIdx={activeCaptureIdx}
              setActiveCaptureIdx={setActiveCaptureIdx}
              onBackToStack={handleBackToStack}
              onOpenProject={handleOpenProject}
              onScrollToSection={scrollToSection}
              onOpenArchModal={() => setShowArchModal(true)}
              t={t}
            />
          )}
        </AnimatePresence>
      </div>

      <ProjectArchModal
        isOpen={showArchModal}
        onClose={() => setShowArchModal(false)}
      />
    </section>
  );
}
