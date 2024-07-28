import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type SiteShellProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
}

const SiteShell = ({ className, children }: SiteShellProps) => {
  return (
    <div className={cn("lg:px-12 md:px-6 px-3 w-full", className)}>
        {children}
    </div>
  )
}

export default SiteShell