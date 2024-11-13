import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { DashboardLayoutSidebar } from "./dashboard-layout-sidebar";

export const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <DashboardLayoutSidebar />
        <main>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
