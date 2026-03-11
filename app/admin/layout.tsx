import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
       <AdminSidebar />
        <SidebarInset>
          <main className="flex-1 flex flex-col bg-gray-50">
            {children}
          </main>
        </SidebarInset>
   </SidebarProvider>
  );
}