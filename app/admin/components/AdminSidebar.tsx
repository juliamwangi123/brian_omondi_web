"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Image,
  BarChart2,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: MessageSquare, label: "Feedback", href: "/admin/feedback" },
  { icon: FileText, label: "Content", href: "/admin/content" },
  { icon: Image, label: "Gallery", href: "/admin/gallery" },
  { icon: BarChart2, label: "Analytics", href: "/admin/analytics" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="!sticky border-r border-[#d4a017]/20 w-60" style={{ background: "#0d2b14" }}>
      <div className="px-5 py-6 border-b border-[#d4a017]/20">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{
              background: "linear-gradient(135deg, #d4a017, #e8b830)",
              color: "#0d2b14",
              fontFamily: "Georgia, serif",
              fontWeight: 900,        
            }}
          >
            B
          </div>
          <div>
            <div
              className="text-white text-sm"
              style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}  
            >
              Campaign CMS
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Mumias West 2027
            </div>
          </div>
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ icon: Icon, label, href }) => {
                const isActive = pathname === href;
                return (
                  <SidebarMenuItem key={href} className="px-3 py-1.5"> 
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        href={href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "10px 14px",
                          borderRadius: 10,
                          cursor: "pointer",
                          background: isActive ? "rgba(212,160,23,0.15)" : "transparent",
                          borderLeft: isActive ? "3px solid #d4a017" : "3px solid transparent", 
                          transition: "all 0.15s",
                          color: isActive ? "#d4a017" : "rgba(255,255,255,0.6)",
                        }}
                      >
                        <Icon size={18} color={isActive ? "#d4a017" : "rgba(255,255,255,0.5)"} /> 
                        <span style={{ fontSize: 13, fontWeight: isActive ? 700 : 500 }}>  
                          {label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t border-[#d4a017]/20 mt-auto">
        <button
          className="flex items-center gap-3 text-sm w-full"  
          style={{
            color: "rgba(255,255,255,0.4)",
            padding: "10px 14px",          
            borderRadius: 10,              
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </Sidebar>
  );
}