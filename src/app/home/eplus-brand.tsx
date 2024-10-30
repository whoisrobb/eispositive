import ContentShell from "@/components/shells/content-shell"
import VideoComponent from "./_components/video-component"
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";

const p1 = "The Vision Behind E+: A Message from Our Founder"
const p2 = "Dive deep into the origins, inspiration, and transformative mission of E+ as our creator shares the journey and vision that drive our commitment to spreading positivity and sparking change across the globe."
const name = "~Bill Mann"

const EplusBrand = () => {
    const container = useRef(null);

    const title = useSplitPara(p1, container);
    const subtitle = useSplitPara(p2, container);
    const bill = useSplitPara(name, container);
    
  return (
    <ContentShell
        title="E+ brand film"
    >
        <div className="flex md:flex-row flex-col gap-8" ref={container}>
            <div className="">
                <VideoComponent
                    source="2DareqxOliXdYm5ugVPTqLuXsedI3mikzVPRJTwj2vF04M76"
                    className="lg:w-[40rem] md:w-[22rem] w-[full] lg:h-[25rem] h-[13.5rem]"
                    autoplay={true}
                />
            </div>

            <div className="space-y-4">
                <h1 className="md:text-4xl text-xl font-anton leading-tight flex flex-wrap gap-x-2">{title}</h1>
                <p className="text-muted-foreground leading-tight flex flex-wrap gap-x-2">{subtitle}</p>
                <p className="font-anton leading-tight flex flex-wrap gap-x-1">{bill}</p>
            </div>
        </div>
    </ContentShell>
  )
}

export default EplusBrand