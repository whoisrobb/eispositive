import { cn } from "@/utils/utils";
import { HTMLAttributes, ReactNode } from "react";
import { Separator } from "../ui/separator";
import useSplitText from "@/app/hooks/useSplitText";

type ContentShellProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

const ContentShell = ({ title, subtitle, children, className }: ContentShellProps) => {
  const titleText = useSplitText(title, "letter");
  return (
    <div
        className={cn('', className)}
    >
        <Separator />
        <div className="my-4">
            <div className="font-anton uppercase text-3xl flex clip-polygon">{titleText}</div>
            <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {children}
    </div>
  )
}

export default ContentShell