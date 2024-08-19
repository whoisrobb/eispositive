import ContentShell from "@/components/shells/content-shell";
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";

const p1 = '"Everything is Positive" is a movement dedicated to empowering individuals and fostering self-sustainable communities. E+ is more than a brand; it\'s a call to turn negatives into positives and inspire collective growth.'
const p2 = 'Join the E+Positive Movement by sharing your story and connecting with others. We provide a safe platform for members to share experiences and hear from one another, helping us all become agents of change in our communities.'

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i: number) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

const Intro = () => {
    const description = useRef(null);

    const paragraph1 = useSplitPara(p1, description);
    const paragraph2 = useSplitPara(p2, description);

  return (
    <ContentShell
        title="Who we are"
        className="relative"
    >
    <div className="absolute top-0 left-0 h-[50%] w-full -z-10">
        <img
            src={'https://utfs.io/f/cc802fe8-212a-4e39-aa4b-ff0de700dd27-wdv566.png'}
            className="h-full w-full opacity-25 object-cover"
            alt=""
        />
    </div>

    <div ref={description} className="relative h-screen flex items-center justify-center">
        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
            <p className="text-4xl leading-tight flex flex-wrap gap-x-2">
                {paragraph1}
            </p>

            <p className="text-muted-foreground leading-tight flex flex-wrap gap-x-2">
                {paragraph2}
            </p>
        </div>
    </div>
    
    </ContentShell>
  )
}

export default Intro