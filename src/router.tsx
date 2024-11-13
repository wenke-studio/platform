import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import { LandingLayout } from "./pages/landing/landing-layout";
import { Playground } from "./pages/playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ index: true, element: <Playground /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
