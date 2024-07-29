import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type SiteShellProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
}

const SiteShell = ({ className, children }: SiteShellProps) => {
  return (
    <div className={cn("lg:px-8 md:px-4 px-2 w-full", className)}>
        {children}
    </div>
  )
}

export default SiteShell