import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
