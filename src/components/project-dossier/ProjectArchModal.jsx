import { Info, ShieldAlert, X } from 'lucide-react';
import React from 'react';

export default function ProjectArchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/5 bg-dark-card">
          <div className="flex items-center gap-2">
            <ShieldAlert className="text-accent-violet w-5 h-5" />
            <h3 className="font-heading text-lg font-bold text-white">
              Orthanc PACS & Agfa DR100E — Security & NDA Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-dark-bg/95 text-left space-y-4 text-sm text-gray-300 leading-relaxed font-light">
          <div className="p-4 rounded-lg bg-accent-violet/5 border border-accent-violet/20 flex items-start gap-3 mb-2">
            <Info className="text-accent-violet w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-300">
              Due to medical confidentiality (HIPAA / Patient Data Protection), live patient records require credentials. All full-stack architectural details are documented in the dossier below.
            </p>
          </div>

          <h4 className="font-heading font-bold text-white text-base">
            Core PACS & Proxy Security Highlights
          </h4>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm">
            <li>
              <strong className="text-white">Agfa DR100E & Orthanc Sync:</strong> Direct ingestion of 16-bit raw DICOM buffers with custom windowing to WebP.
            </li>
            <li>
              <strong className="text-white">Express Reverse Proxy (/api/orthanc/pacs/*):</strong> Dynamic HTML rewriting for Stone Web Viewer and streaming WADO-RS buffers without exposing PACS credentials.
            </li>
            <li>
              <strong className="text-white">StudyInstanceUID Gatekeeper:</strong> Real-time PostgreSQL ownership verification before serving any DICOM instance.
            </li>
            <li>
              <strong className="text-white">Hybrid RBAC Auth:</strong> Supports Bearer JWT, Query Tokens, Referer validation, and strict httpOnly cookies.
            </li>
          </ul>
        </div>

        <div className="flex justify-end p-4 border-t border-white/5 bg-dark-card">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-accent-violet hover:bg-accent-violet-hover text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

