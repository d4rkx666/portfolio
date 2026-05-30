import { MenuInterface } from "@/app/types/Menu";
import { Menu } from "./Menu";
import { getName } from "@/app/repository/ContactInformation";
export const Header = ({menu}:{menu:MenuInterface[]})=>{
   const {name} = getName();
   return (
      <header className="flex justify-between items-center border-b border-[#00FF88]/20 pb-6 mb-5">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#00FF88] flex items-center justify-center">
               <span className="text-[#00FF88] font-mono">&lt;/&gt;</span>
            </div>
            <span className="text-zinc-300">
               {name}
            </span>
         </div>
         <Menu menu_list={menu} />
      </header>
   );
}