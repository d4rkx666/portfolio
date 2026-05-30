import { getContacts } from "@/app/repository/ContactInformation"

export const Footer = () =>{
   const {github, linkedin} = getContacts();
   return (
      <footer className="pt-12 border-t border-gray-800 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span className="text-[#00FF88]">◆</span>
          <span>SYSTEM_READY</span>
        </div>
        <div className="flex gap-6">
          <a href={github} target="_blank" className="hover:text-[#00FF88] transition-colors">
              Github
         </a>
         <a href={linkedin} target="_blank" className="hover:text-[#00FF88] transition-colors">
            Linkedin
         </a>
        </div>
      </footer>
   )
}