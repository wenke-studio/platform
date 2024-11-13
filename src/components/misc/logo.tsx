import { IconSquareRoundedLetterV } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <IconSquareRoundedLetterV
      className={cn("text-red-500 min-w-10 min-h-10", className)}
    />
  );
};
