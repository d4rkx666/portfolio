import { MenuInterface } from "@/app/types/Menu"

export const Menu = ({menu_list}:{menu_list:MenuInterface[]})=>{
   return (
      <nav className="space-x-8 text-sm font-light tracking-wide">
         {menu_list.map((item, k) => (
            <a key={k} href={item.url} className="hover:text-[#00FF88] transition-colors duration-300">
               {item.name}
            </a>
         ))}
      </nav>
   )
}