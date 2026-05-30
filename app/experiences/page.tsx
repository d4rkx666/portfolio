'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { experiences_repository } from '../repository/Experiences';
import TimelineCard from '@/components/experiences/TimelineCard';
import Loader from '@/components/Loader';

export default function Experience() {
  
  // database
  const {data:experiences, loading:loadingExperiences} = experiences_repository();

  const [expandedIds, setExpandedIds] = useState<Set<number>>(
    new Set(experiences.filter(e => e.stackType === 'core' && e.type === "exp").map(e => e.id))
  );

  const [legacyExpanded, setLegacyExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pdfSize, setPdfSize] = useState(0);

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  // Scroll-activated timeline line
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreExperiences = useMemo(() => {
    return experiences.filter(e => e.stackType === 'core' && e.type === "exp").sort((a, b) => b.id - a.id);
  }, [experiences]);

  const legacyExperiences = useMemo(() => {
    return experiences.filter(e => e.stackType === 'legacy' && e.type === "exp").sort((a, b) => b.id - a.id);
  }, [experiences]);

  const personalProjects = useMemo(()=>{
    return experiences.filter(e => e.type === "personal").sort((a, b) => b.id - a.id);
  },[experiences])

  useEffect(()=>{
    async function pdf_size() {
      const response = await fetch("/felix_catzin_full-stack_resume.pdf");
      const contentLength = response.headers.get("content-length");
      if (contentLength) {
        return Number(contentLength); // bytes
      }

      const blob = await response.blob();
      return blob.size;
    }

    pdf_size().then(s =>{
      const size = Number((s / 1024).toFixed(0));
      setPdfSize(size);
    });
  },[])
  

  if(loadingExperiences){
    return <Loader fullPage message="booting portfolio" minDuration={200} />;
  }

  return (
    <div className="space-y-12" ref={timelineRef}>
      {/* Section header with scanline effect */}
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-[#00FF88]"></div>
          <h2 className="text-3xl font-light tracking-wide text-white">Experience Log</h2>
          <div className="flex-1 w-px h-px bg-gradient-to-r from-[#00FF88]/20 to-transparent"></div>
        </div>
        
        {/* Subtitle with system info */}
        <div className="flex items-center gap-4 mt-3 ml-16">
          <span className="text-[10px] font-mono text-gray-600">[</span>
          <span className="text-[10px] font-mono text-gray-500">system_uptime: 10 years</span>
          <span className="text-[10px] font-mono text-gray-600">]</span>
          <span className="text-[10px] font-mono text-gray-600">[</span>
          <span className="text-[10px] font-mono text-gray-500">core_ecosystems: Java · Node.js</span>
          <span className="text-[10px] font-mono text-gray-600">]</span>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line - fills with scroll */}
        <div className="absolute left-[1.15rem] top-0 bottom-0 w-px bg-gray-800 overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-[#00FF88] via-[#4C1D95] to-[#00FF88] transition-all duration-200"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Core experiences */}
        <div className="space-y-6">
          <div className="ml-8 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border-l-2 border-[#00FF88] bg-[#00FF88]/5">
              <span className="text-[#00FF88] text-xs font-mono tracking-wider">PRIMARY_NODES</span>
              <span className="text-gray-600 text-[10px] font-mono">[ active ]</span>
            </div>
          </div>

          {coreExperiences.map((exp, idx) => (
            <TimelineCard
              key={exp.id}
              experience={exp}
              isExpanded={expandedIds.has(exp.id)}
              onToggle={() => toggleExpand(exp.id)}
              isHovered={hoveredId === exp.id}
              onHover={setHoveredId}
              index={idx}
            />
          ))}
        </div>

        {/* Legacy experiences - collapsible section */}
        <div className="mt-8 ml-8">
          <button
            onClick={() => setLegacyExpanded(!legacyExpanded)}
            className="group flex items-center gap-3 w-full mb-4"
          >
            <div className={`w-4 h-4 border border-gray-700 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:border-[#00FF88]/50 ${legacyExpanded ? 'bg-[#00FF88]/10' : ''}`}>
              <span className={`text-[#00FF88] text-xs transition-transform duration-300 ${legacyExpanded ? 'rotate-90' : ''}`}>&gt;</span>
            </div>
            <span className="text-xs font-mono text-gray-500 tracking-wider group-hover:text-[#00FF88]/70 transition-colors">LEGACY_MODULES</span>
            <span className="text-[10px] font-mono text-gray-600">[{legacyExperiences.length} entries]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </button>

          {legacyExpanded && (
            <div className="space-y-4 pl-6 border-l border-gray-800/50 ml-1">
              {legacyExperiences.map((exp, idx) => (
                <TimelineCard
                  key={exp.id}
                  experience={exp}
                  isExpanded={expandedIds.has(exp.id)}
                  onToggle={() => toggleExpand(exp.id)}
                  isHovered={hoveredId === exp.id}
                  onHover={setHoveredId}
                  index={idx}
                  isLegacy
                />
              ))}
            </div>
          )}
        </div>

        {/* Personal Projects section */}
        <div className="mt-12 ml-8">
          <button
            onClick={() => setProjectsExpanded(!projectsExpanded)}
            className="group flex items-center gap-3 w-full mb-4"
          >
            <div className={`w-4 h-4 border border-gray-700 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:border-[#00FF88]/50 ${projectsExpanded ? 'bg-[#00FF88]/10' : ''}`}>
              <span className={`text-[#00FF88] text-xs transition-transform duration-300 ${projectsExpanded ? 'rotate-90' : ''}`}>&gt;</span>
            </div>
            <span className="text-xs font-mono text-gray-500 tracking-wider group-hover:text-[#00FF88]/70 transition-colors">PERSONAL_PROJECTS</span>
            <span className="text-[10px] font-mono text-gray-600">[{personalProjects.length} entries]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </button>

          {projectsExpanded && (
            <div className="space-y-4 pl-6 border-l border-gray-800/50 ml-1">
              {personalProjects.map((exp, idx) => (
                <TimelineCard
                  key={exp.id}
                  experience={exp}
                  isExpanded={expandedIds.has(exp.id)}
                  onToggle={() => toggleExpand(exp.id)}
                  isHovered={hoveredId === exp.id}
                  onHover={setHoveredId}
                  index={idx}
                  isProject
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PDF Download Button */}
      <div className="flex justify-center pt-8 mt-8 mb-8 border-t border-gray-800">
        <a
          href="/felix_catzin_full-stack_resume.pdf"
          download
          className="group relative px-8 py-3 border border-gray-700 hover:border-[#00FF88]/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <div className="relative flex items-center gap-3 text-sm tracking-wide">
            <span className="text-gray-400 group-hover:text-[#00FF88] transition-colors">⌘</span>
            <span className="text-gray-400 group-hover:text-[#00FF88] transition-colors">download_full_cv.pdf</span>
            <span className="text-gray-600 text-xs">[{pdfSize}KB]</span>
          </div>
        </a>
      </div>
    </div>
  );
}