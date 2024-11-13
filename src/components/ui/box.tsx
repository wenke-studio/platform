import * as React from "react";

import { cn } from "@/lib/utils";

const Box = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "w-full h-full bg-background text-foreground overflow-hidden",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Box.displayName = "Box";

export { Box };
