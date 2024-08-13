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
        <div className="flex gap-8" ref={container}>
            <div className="">
                <VideoComponent
                    source="https://utfs.io/f/a84cba26-9acd-4516-8ef7-cb14e4a1cd0d-iksgw4.mp4" 
                    className="w-[40rem] h-[25rem]"
                />
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl font-anton leading-tight flex flex-wrap gap-x-2">{title}</h1>
                <p className="text-muted-foreground leading-tight flex flex-wrap gap-x-2">{subtitle}</p>
                <p className="font-anton leading-tight flex flex-wrap gap-x-1">{bill}</p>
            </div>
        </div>
    </ContentShell>
  )
}

export default EplusBrand