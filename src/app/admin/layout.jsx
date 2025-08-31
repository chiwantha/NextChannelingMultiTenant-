import Navbar from "@/components/admin/navbar/Navbar";
import AdminSidebar from "@/components/admin/sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// Async layout for server-side auth check
const AdminLayout = async ({ children }) => {
  // Get session server-side
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if no session
    redirect("/auth/adm-login");
  }
  return (
    <SidebarProvider>
      <Navbar />
      <div className="mx-auto px-2 max-w-7xl">
        <div className="flex  gap-4">
          <div className="w-48 fixed sm:sticky z-40">
            <AdminSidebar
              name={session?.user?.name}
              role={session?.user?.role}
            />
          </div>
          <div className="flex-1 z-30">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
