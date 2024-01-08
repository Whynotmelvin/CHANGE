"use client"

import { LucideIcon } from "lucide-react";

interface SidebarItemProps{
    icon:LucideIcon;
    href: string;
    label: string;


}
const SidebarItem = ({icon: Icon,label,href}: SidebarItemProps) => {
    return ( <div>
        Sidebar Item
    </div> );
}
 
export default SidebarItem;