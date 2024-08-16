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
    // a6c2328a-0f7d-4b79-bfed-e1f8ec11c4f4-6hgn0y.mp4
  return (
    <ContentShell
        title="E+ brand film"
    >
        <div className="flex md:flex-row flex-col gap-8" ref={container}>
            <div className="">
                <VideoComponent
                    source="a84cba26-9acd-4516-8ef7-cb14e4a1cd0d-iksgw4.mp4"
                    className="lg:w-[40rem] md:w-[22rem] w-[full] lg:h-[25rem] h-[13.5rem]"
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