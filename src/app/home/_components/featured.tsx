import ContentShell from "@/components/shells/content-shell";
import { ReactNode } from "react";

type FeaturedProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
}

const Featured = ({ title, subtitle, children }: FeaturedProps) => {
  return (
    <ContentShell
        title={title}
        subtitle={subtitle}
        className=""
    >
        {children}
    </ContentShell>
  )
}

export default Featured