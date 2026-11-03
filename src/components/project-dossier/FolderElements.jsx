import React from 'react';

/**
 * Horizontal S-Curve Manila Folder Tab (Mosby's Files Cabinet View silhouette)
 */
export function FolderTabHorizontal({ color, title, code, offsetClass, isHovered, onClick, inProgressBadge }) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-end select-none cursor-pointer group ${offsetClass}`}
      style={{ height: '42px', marginBottom: '-1px' }}
    >
      <svg
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 block"
        style={{ marginRight: '-1px' }}
      >
        <path d="M 0 42 C 14 42, 14 0, 28 0 L 28 42 Z" fill={color} />
      </svg>

      <div
        className="h-[42px] px-3 sm:px-5 flex items-center gap-2 sm:gap-2.5 transition-transform duration-300"
        style={{ backgroundColor: color }}
      >
        <span className="font-mono text-[10px] sm:text-xs font-bold text-white/75 tracking-wider">
          {code}
        </span>
        <span
          className={`font-heading text-xs sm:text-[15px] font-bold text-white tracking-tight whitespace-nowrap transition-transform duration-300 ${
            isHovered ? 'translate-x-0.5' : ''
          }`}
        >
          {title}
        </span>
        {inProgressBadge && (
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-black bg-amber-400 text-black uppercase tracking-wider animate-pulse shadow-sm flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-black" />
            <span>WIP</span>
          </span>
        )}
      </div>

      <svg
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 block"
        style={{ marginLeft: '-1px' }}
      >
        <path d="M 0 0 C 14 0, 14 42, 28 42 L 0 42 Z" fill={color} />
      </svg>
    </div>
  );
}

/**
 * Vertical S-Curve Manila Folder Tab on Right Edge (Mosby's Files Opened Dossier silhouette)
 */
export function FolderTabVertical({ color, title, code, isActive, onClick, inProgressBadge }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-start select-none cursor-pointer group transition-transform duration-300 ${
        isActive ? 'z-30 translate-x-0' : 'z-10 hover:translate-x-1 opacity-90 hover:opacity-100'
      }`}
      style={{ marginLeft: '-1px', marginTop: '-10px', marginBottom: '-10px' }}
      title={`${code} — ${title}${inProgressBadge ? ` (${inProgressBadge})` : ''}`}
    >
      <svg
        width="40"
        height="22"
        viewBox="0 0 40 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block flex-shrink-0"
        style={{ marginBottom: '-1px' }}
      >
        <path d="M 0 0 C 0 11, 40 11, 40 22 L 0 22 Z" fill={color} />
      </svg>

      <div
        className="w-[40px] py-3 flex flex-col items-center justify-center gap-1.5"
        style={{ backgroundColor: color }}
      >
        <span
          className="font-mono text-[10px] font-bold text-white/70"
          style={{ writingMode: 'vertical-rl' }}
        >
          {code}
        </span>
        <span
          className={`font-heading text-xs sm:text-[13px] font-bold tracking-wide whitespace-nowrap ${
            isActive ? 'text-white' : 'text-white/90'
          }`}
          style={{ writingMode: 'vertical-rl' }}
        >
          {title}
        </span>
        {inProgressBadge && (
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping mt-1" />
        )}
      </div>

      <svg
        width="40"
        height="22"
        viewBox="0 0 40 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block flex-shrink-0"
        style={{ marginTop: '-1px' }}
      >
        <path d="M 40 0 C 40 11, 0 11, 0 22 L 0 0 Z" fill={color} />
      </svg>
    </button>
  );
}

/**
 * Metallic Paperclip SVG (Mosby's Files top-right of photo)
 */
export function PaperclipSVG({ className = '' }) {
  return (
    <svg
      width="28"
      height="68"
      viewBox="0 0 28 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 8 18 V 52 C 8 58.627 13.373 64 20 64 C 23.314 64 26 61.314 26 58 V 14 C 26 6.268 19.732 0 12 0 C 5.373 0 0 5.373 0 12 V 48 C 0 52.418 3.582 56 8 56 C 12.418 56 16 52.418 16 48 V 18"
        stroke="url(#paperclip-metal)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="paperclip-metal" x1="0" y1="0" x2="28" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="50%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
    </svg>
  );
}

