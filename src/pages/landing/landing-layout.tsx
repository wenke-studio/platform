import { ThemeModeToggle } from "@/components/theme/theme-mode-toggle";
import { Box } from "@/components/ui/box";
import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  return (
    <Box className="min-h-dvh max-w-screen-xl mx-auto">
      <header className="min-h-16 border-b flex justify-end items-center px-4">
        <ThemeModeToggle />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="min-h-16 border-t flex justify-center items-center px-4">
        <p>© 2024 Wenke Studio</p>
      </footer>
    </Box>
  );
};
