import ContentShell from "@/components/shells/content-shell"
import useSplitPara from "../hooks/useSplitPara";
import { useRef } from "react";

const text = "At E+ TV, we don't just deliver content; we curate experiences. Using data-driven insights, we personalize your viewing journey, ensuring every narrative speaks directly to your soul and fuels your personal growth. Whether you’re looking to overcome adversity, build meaningful relationships, or achieve financial stability, our original programming is tailored to guide you at every stage of your journey.";

const Approach = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    
  return (
    <ContentShell
        title="Our unique approach"
    >
        <div className="w-full flex justify-center items-center">
            <div ref={container} className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <p className="text-4xl leading-tight flex flex-wrap gap-x-2">
                    {paragraph}
                </p>
            </div>
        </div>
    </ContentShell>
  )
}

export default Approach