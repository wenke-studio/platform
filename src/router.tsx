import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import { LandingLayout } from "./pages/landing/landing-layout";
import { LandingPage } from "./pages/landing/landing-page";
import { Playground } from "./pages/playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  // playground only available in dev mode
  import.meta.env.DEV
    ? {
        path: "/playground",
        element: <Playground />,
      }
    : {},
]);

export default router;
