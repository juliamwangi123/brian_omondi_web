"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search } from "lucide-react";

export default function AdminNavbar({ title }: { title: string }) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div>
          <div className="text-lg font-bold" style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}>{title}</div>
          <div className="text-xs text-gray-400">Brian Omondi Campaign CMS</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2">
          <Search size={14} className="text-gray-400" />
          <input placeholder="Search..." className="bg-transparent border-none outline-none text-sm text-gray-700 w-40" />
        </div>
        <div className="relative">
          <Bell size={20} className="text-gray-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ background: "#d4a017" }} />
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #1a5c2a, #2d7a40)" }}>
          A
        </div>
      </div>
    </div>
  );
}