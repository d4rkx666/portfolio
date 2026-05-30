import { Project } from "@/app/types/Project"

interface ProjectCardProps {
   project: Project
   onClickEvent: ()=>void
}

export const ProjectCard = ({project, onClickEvent}: ProjectCardProps) =>{
   return (
      <div className="group relative bg-[#111115] border border-gray-800 hover:border-[#00FF88]/30 transition-all duration-500 overflow-hidden" onClick={onClickEvent}>
                  
         {/* Effect for the hover */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/0 via-[#00FF88]/0 to-[#4C1D95]/0 group-hover:to-[#4C1D95]/10 transition-all duration-700" />
         
         <div className="p-8 relative z-10">
            <div className="flex justify-between items-start mb-4">
               <span className="text-[#00FF88] font-mono text-sm tracking-wider">{project.work_type}</span>
               <div className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-[#00FF88]/50 flex items-center justify-center transition-all duration-300">
               <span className="text-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
               </div>
            </div>
            <h3 className="text-2xl font-light text-white mb-3 tracking-tight">{project.professional_title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.sumary}</p>
            <div className="flex flex-wrap gap-2">
               {project.technologies.map((tag, i) => (
               <span key={i} className="text-xs text-gray-500 border border-gray-800 px-2 py-1">
                  {tag}
               </span>
               ))}
            </div>
         </div>
         
         {/* another effect when hovering*/}
         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#00FF88] via-[#4C1D95] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
   )
}