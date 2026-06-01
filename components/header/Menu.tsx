"use client";
import { MenuInterface } from "@/app/types/Menu"
import { trackEvent } from "@/app/utils/Analytics";
import { useRouter } from "next/navigation";

export const Menu = ({menu_list}:{menu_list:MenuInterface[]})=>{
   //initialise router
   const router = useRouter();
   const goto = (url:string) =>{
      trackEvent(`Navigating to ${url}`)
      router.push(url);
   }

   return (
      <nav className="space-x-8 text-sm font-light tracking-wide">
         {menu_list.map((item, k) => (
            <button key={k} onClick={() => goto(item.url)} className="hover:text-[#00FF88] transition-colors duration-300">
               {item.name}
            </button>
         ))}
      </nav>
   )
}