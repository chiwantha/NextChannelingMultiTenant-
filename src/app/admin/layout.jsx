import Navbar from "@/components/admin/navbar/Navbar";
import AdminSidebar from "@/components/admin/sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

// Async layout for server-side auth check
const AdminLayout = async ({ children }) => {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="mx-auto px-2 max-w-7xl">
        <div className="flex max-h-screen gap-4">
          <div className="w-44 fixed sm:sticky top-[70px] z-40">
            <AdminSidebar />
          </div>
          <div className="flex-1 z-30">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
