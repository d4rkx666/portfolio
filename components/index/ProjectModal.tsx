'use client';

import { Project } from '@/app/types/Project';
import { useEffect } from 'react';
import "./ProjectModal.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  
   // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop #ffffff*/}
      <div 
        className="fixed inset-0 bg-[#0A0A0F]/10 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-3xl bg-[#111115] border border-gray-800 shadow-2xl animate-in zoom-in duration-300">
          {/* Header */}
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00FF88] via-[#4C1D95] to-transparent" />
            <div className="flex justify-between items-start p-6 pb-0">
              <div>
                <h2 className="text-2xl font-light tracking-wide text-white mb-1">
                  {project.company_name}
                </h2>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#00FF88] font-mono text-xs">{project.professional_title}</span>
                  <span className="text-gray-600 text-xs">●</span>
                  <span className="text-gray-500 text-xs font-mono">{project.work_type}</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-[#00FF88] transition-colors duration-300"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Duration */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-600">[</span>
              <span className="text-[#00FF88]/70">{project.duration.start}</span>
              <span className="text-gray-600">—</span>
              <span className="text-[#00FF88]/70">{project.duration.end}</span>
              <span className="text-gray-600">]</span>
            </div>

            {/* Description */}
            {project.full_description.split("\n").map((text, k) => <p key={k} className="text-gray-300 text-sm leading-relaxed">{text}</p>)}

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <div>
                <div className="font-mono text-[10px] text-gray-500 mb-3 tracking-wider">&sol;&sol; tech_stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs text-gray-400 border border-gray-800 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* URL */}
            {project.url_project && (
              <div className="pt-2">
                <a 
                  href={project.url_project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-[#00FF88] transition-colors duration-300"
                >
                  <span className="text-[#00FF88]">↗</span>
                  <span>visit_project</span>
                </a>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800/50 flex justify-end">
            <button 
              onClick={onClose}
              className="text-xs font-mono text-gray-500 hover:text-[#00FF88] transition-colors duration-300 tracking-wider"
            >
              [ close ]
            </button>
          </div>
        </div>
      </div>
    </>
  );
}