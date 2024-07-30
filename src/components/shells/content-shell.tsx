import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { Separator } from "../ui/separator";

type ContentShellProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

const ContentShell = ({ title, subtitle, children, className }: ContentShellProps) => {
  return (
    <div
        className={cn('', className)}
    >
        <Separator />
        <div className="my-4">
            <h1 className="font-anton uppercase text-3xl">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {children}
    </div>
  )
}

export default ContentShell