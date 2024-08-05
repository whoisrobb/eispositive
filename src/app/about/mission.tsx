import ContentShell from "@/components/shells/content-shell"
import useSplitPara from "../hooks/useSplitPara";
import { useRef } from "react";

const text = 'At Everything is Positive, our mission is simple yet profound: to foster a global community that radiates good vibes and uplifting energy. We believe that positivity is a powerful force that can transcend cultural and societal barriers, bringing people together in a shared journey toward a brighter future. Through fashion, videos, and music, we aim to inspire individuals to embrace the power of a positive mindset.';

const Mission = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    
  return (
    <ContentShell
        title="Our mission"
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

export default Mission