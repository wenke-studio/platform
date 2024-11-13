import { IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import { ThemeModeToggle } from "./theme/theme-mode-toggle";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export const Settings = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconSettings />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <p className="text-foreground">settings</p>
        <ThemeModeToggle />
      </DrawerContent>
    </Drawer>
  );
};
