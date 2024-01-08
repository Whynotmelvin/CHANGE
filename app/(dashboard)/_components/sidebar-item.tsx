"use client"

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps{
    icon:LucideIcon;
    href: string;
    label: string;


}
const SidebarItem = ({icon: Icon,label,href}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === '/' && href === '/' ) || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = ()=>{
        router.push(href);
        // this is where you are 
    }
    return ( <div>
        Sidebar Item
    </div> );
}
 
export default SidebarItem;