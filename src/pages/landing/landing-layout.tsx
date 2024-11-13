import { Logo } from "@/components/misc/logo";
import { Settings } from "@/components/settings";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  return (
    <Box className="min-h-dvh max-w-screen-xl mx-auto">
      <header className="min-h-16 flex between center px-4 gap-4">
        <div className="flex start middle">
          <Logo />
        </div>
        <div className="flex end middle gap-4">
          <Settings />
          <Button variant="outline">Sign in</Button>
        </div>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="min-h-16 p-4">
        <div className="flex flex-col center middle">
          <Logo />
          <p>© 2024 Wenke Studio</p>
          <p>
            made by <a href="https://github.com/wenke-lai">Wenke Lai</a>
          </p>
        </div>
      </footer>
    </Box>
  );
};
