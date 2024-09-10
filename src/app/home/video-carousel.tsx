import Marquee from "@/components/magicui/marquee";
import VideoComponent from "./_components/video-component";
import ContentShell from "@/components/shells/content-shell";
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";
import { motion, useScroll, useTransform } from "framer-motion";

const videos = [
    'c45dbb92-95d1-4590-830c-4d91baa1c870-719jk6.mp4',
    '55bf195c-9f43-44a4-b861-295d021747ca-8kfxxf.mp4',
    '08aabf66-2594-4e7d-a223-c6778c7687a6-6s5o5o.mp4',
    'e4d62ca5-a961-4c3c-b805-2a3be924c24a-ykepcp.mp4',
    'be95f006-3195-4278-86ef-9b5cd79cf7e3-jemj3c.mp4',
    'a7f25ea3-1a2c-4a29-a00e-da5e786e9e2f-lcxy80.mp4',
    'a6c2328a-0f7d-4b79-bfed-e1f8ec11c4f4-6hgn0y.mp4',
    'ede4a29d-ec73-427d-a1d1-37ddbb757194-64hpi1.mp4',
    '2dc43480-40fa-4954-9317-760530962fe9-rnjdbp.mp4',
    'e3c4e324-257e-45d3-949e-0fcd4e89cc53-xdjjck.mp4'
]

const text = "Discover stories of resilience and hope as our community shares how they've embraced positivity. From overcoming challenges to finding joy in everyday moments, these testimonials celebrate the power of a positive mindset in transforming life's experiences."

const firstRow = videos.slice(0, videos.length / 2);
const secondRow = videos.slice(videos.length / 2);


export function VideoCarousel() {
    const container = useRef(null);
    const scrollContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const paragraph = useSplitPara(text, container);
    const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3])
  return (
    <ContentShell
        title="E+ Testimonials"
    >
        <div ref={container} className="leading-tight flex flex-wrap gap-x-2 text-muted-foreground">{paragraph}</div>

        <div className="">
        <div ref={scrollContainer} className="relative p-0 h-screen origin-top">
            <motion.div style={{ scale: scale3 }} className="sticky top-0 flex items-center justify-center">
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
                    <Marquee pauseOnHover repeat={5} className="[--duration:20s]">
                        {firstRow.map((video) => (
                        <VideoComponent key={video} source={video} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover repeat={5} className="[--duration:20s]">
                        {secondRow.map((video) => (
                        <VideoComponent key={video} source={video} />
                        ))}
                    </Marquee>
                </div>
            </motion.div>
        </div>
        </div>
    </ContentShell>
  );
}
