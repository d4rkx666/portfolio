import { ExperienceItem } from "@/app/types/Experience";

export default function TimelineCard({
  experience, 
  isExpanded, 
  onToggle, 
  isHovered, 
  onHover,
  index,
  isLegacy = false,
  isProject = false
}: { 
  experience: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  index: number;
  isLegacy?: boolean;
  isProject?: boolean;
}) {
  return (
    <div 
      className={`relative group transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
      onMouseEnter={() => onHover(experience.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Timeline node */}
      <div className="absolute left-0 top-6 -translate-x-1/2">
        <div className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 ${
          isExpanded 
            ? 'border-[#00FF88] bg-[#00FF88]/20 shadow-[0_0_12px_rgba(0,255,136,0.3)]' 
            : 'border-gray-700 bg-[#111115] group-hover:border-[#00FF88]/50'
        }`}>
          <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
            isExpanded ? 'bg-[#00FF88] animate-pulse' : 'bg-gray-700 group-hover:bg-[#00FF88]/50'
          }`} />
        </div>
        {/* Connecting line from node to card */}
        <div className={`absolute top-3 left-6 w-4 h-px transition-all duration-300 ${
          isExpanded ? 'bg-[#00FF88]/50' : 'bg-gray-800 group-hover:bg-[#00FF88]/30'
        }`} />
      </div>

      {/* Card */}
      <div className={`ml-8 transition-all duration-300 ${
        isExpanded ? 'opacity-100' : 'opacity-90 hover:opacity-100'
      }`}>
        <div className={`
          relative bg-gradient-to-br from-[#111115] to-[#0D0D12] 
          border transition-all duration-500 overflow-hidden
          ${isExpanded 
            ? 'border-[#00FF88]/30 shadow-[0_4px_20px_rgba(0,255,136,0.05)]' 
            : 'border-gray-800 hover:border-[#00FF88]/20'
          }
          ${isLegacy ? 'border-l-4 border-l-gray-700' : ''}
          ${isProject ? 'border-l-4 border-l-[#4C1D95]/50' : ''}
        `}>
          {/* Animated gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 transition-all duration-700 ${
            isHovered ? 'group-hover:to-[#4C1D95]/5' : ''
          }`} />
          
          {/* Glitch line effect on hover */}
          <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00FF88] via-transparent to-transparent transition-transform duration-500 origin-left ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`} />

          {/* Header */}
          <div 
            className="relative p-5 cursor-pointer"
            onClick={onToggle}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                {/* Company with animated indicator */}
                <div className="flex items-center gap-2 mb-1">
                  {isProject ? (
                    <span className="text-[#4C1D95] text-xs font-mono tracking-wider">[PROJECT]</span>
                  ) : (
                    <span className={`text-[10px] font-mono tracking-wider px-1.5 py-0.5 border ${
                      isLegacy 
                        ? 'border-gray-700 text-gray-500' 
                        : 'border-[#00FF88]/30 text-[#00FF88] bg-[#00FF88]/5'
                    }`}>
                      {experience.stackType === 'core' ? 'CORE_NODE' : 'LEGACY'}
                    </span>
                  )}
                  {experience.endDate === 'present' && !isProject && (
                    <span className="text-[10px] font-mono text-[#00FF88] animate-pulse">● ACTIVE</span>
                  )}
                </div>
                
                <h3 className="text-xl font-light text-white tracking-tight group-hover:text-[#00FF88]/90 transition-colors">
                  {experience.company}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                  <span className="text-sm text-gray-400">{experience.title}</span>
                  <span className="text-gray-600 text-xs">●</span>
                  <span className="text-xs font-mono text-gray-500">
                    {experience.startDate} — {experience.endDate}
                  </span>
                  <span className="text-gray-600 text-xs">●</span>
                  <span className="text-xs text-gray-500">{experience.location}</span>
                </div>
              </div>
              
              {/* Expand/collapse indicator */}
              <div className={`transform transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isExpanded 
                    ? 'border-[#00FF88]/50 text-[#00FF88]' 
                    : 'border-gray-700 text-gray-600 group-hover:border-[#00FF88]/30 group-hover:text-[#00FF88]/50'
                }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tech tags preview (always visible) */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {experience.technologies.slice(0, isExpanded ? 6 : 3).map((tech, i) => (
                <span 
                  key={i}
                  className={`text-[10px] font-mono px-2 py-0.5 transition-colors duration-300 ${
                    isExpanded 
                      ? 'text-[#00FF88]/70 border border-[#00FF88]/20 bg-[#00FF88]/5' 
                      : 'text-gray-600 border border-gray-800 group-hover:border-[#00FF88]/20'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && experience.technologies.length > 3 && (
                <span className="text-[10px] font-mono text-gray-600">+{experience.technologies.length - 3}</span>
              )}
            </div>
          </div>

          {/* Expanded content - animated height */}
          <div className={`transition-all duration-500 ease-in-out ${
            isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="p-5 pt-0 border-t border-gray-800/50 mt-2">
              {/* Description with system bullet style */}
              <div className="space-y-2 mb-4">
                {experience.description.map((desc, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                    <span className="text-[#00FF88] text-xs mt-0.5">◆</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Highlights/metrics - special visual treatment */}
              {experience.highlights && experience.highlights.length > 0 && (
                <div className="mt-4 p-3 bg-[#00FF88]/5 border-l-2 border-[#00FF88]">
                  <div className="text-[10px] font-mono text-[#00FF88] tracking-wider mb-2">KEY_METRICS</div>
                  <div className="space-y-1">
                    {experience.highlights.map((highlight, i) => (
                      <div key={i} className="text-xs text-gray-400 font-mono">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All tech tags when expanded */}
              <div className="mt-4 pt-3 border-t border-gray-800/50">
                <div className="text-[10px] font-mono text-gray-500 mb-2 tracking-wider">// tech_stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-400 px-2 py-0.5 border border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}