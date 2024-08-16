import ContentShell from "@/components/shells/content-shell"
import useSplitPara from "../hooks/useSplitPara";
import { useRef } from "react";
import ShareForm from "./_components/share-form";

const text = "Your story could be the spark that ignites hope in someone else's life. Whether you've overcome adversity, found joy in small moments, or made a positive impact in your community, we want to hear from you. Share your journey with the E+ community by submitting a video testimonial. Let’s spread positivity, one story at a time."

const ShareYourStory = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    
  return (
    <ContentShell
        title="Share your story"
    >
        <div className="flex flex-col space-y-12 items-center">
            <div className="w-full flex justify-center items-center">
                <div ref={container} className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                    <p className="text-4xl leading-tight flex flex-wrap gap-x-2">
                        {paragraph}
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[45rem] grid place-items-center">
                <ShareForm />
            </div>
        </div>
    </ContentShell>
  )
}

export default ShareYourStory
