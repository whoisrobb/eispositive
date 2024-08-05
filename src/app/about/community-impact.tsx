import ContentShell from "@/components/shells/content-shell"
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";
import Magnetic from "@/components/elements/magnetic";
import { Button } from "@/components/ui/button";

const p1 = "Our community is the heart of Everything is Positive. From uplifting stories shared by our members to collaborative projects that inspire change, we are committed to making a positive impact. Whether it's through charitable initiatives, local events, or simply spreading love and hope online, we're here to make a difference.";
const p2 = "We invite you to join our growing community of positivity enthusiasts. Share your story, connect with like-minded individuals, and help us spread good vibes across the globe. At Everything is Positive, we believe that together, we can create a more joyful and compassionate world.";

const CommunityImpact = () => {
    const container = useRef(null);

    const paragraph1 = useSplitPara(p1, container);
    const paragraph2 = useSplitPara(p2, container);
  return (
    <ContentShell
        title="Community impact"
    >
        <div ref={container} className="relative h-screen flex items-center justify-center">
            <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <p className="text-4xl leading-tight flex flex-wrap gap-x-2">
                    {paragraph1}
                </p>

                <div className="space-y-4">
                    <p className="text-muted-foreground leading-tight flex flex-wrap gap-x-2">
                        {paragraph2}
                    </p>

                    <Magnetic>
                        <Button className="aspect-square h-24 rounded-full">Join us</Button>
                    </Magnetic>
                </div>
            </div>
        </div>
    </ContentShell>
  )
}

export default CommunityImpact