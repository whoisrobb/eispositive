import Marquee from "@/components/magicui/marquee";
import VideoComponent from "./_components/video-component";
import ContentShell from "@/components/shells/content-shell";
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";
import { motion, useScroll, useTransform } from "framer-motion";

const videos = [
    "K2JG7booRLTIvVDiarVkdQpg6lzq5o4OA7GKj8uZBHTM9Xha",
    "K2JG7booRLTIVBldTmHff4MOAogF0HxEQcGTRB6nWle7iNd8",
    "K2JG7booRLTIvnGXTrkdQpg6lzq5o4OA7GKj8uZBHTM9XhaI",
    "K2JG7booRLTILG1NI2Q63SjoZdecbUOABXsJQYt5WfEwCpVx",
    "K2JG7booRLTIvVGAZbXkdQpg6lzq5o4OA7GKj8uZBHTM9Xha",
    "K2JG7booRLTIcPulomcznlD0A6ZoOaQThYgG5wFX3ejUJI7R",
    "K2JG7booRLTIe08DBlkcHQgf7sM4eFY6k2lcWXqab0VpE9nj",
    "K2JG7booRLTIpSVeq7lQot7fXvD3U2rHRGzOj8sc0YIdZuF1",
    "K2JG7booRLTIYSoguuILkU0qVH2WdEFwK7Rp1aBzZnIMvjrQ",
    "K2JG7booRLTIu0wpEpjONKt9d7E8rpY0c2BCzUQvH5ojeVWJ",
    "K2JG7booRLTIVJyx6qff4MOAogF0HxEQcGTRB6nWle7iNd8D",
    "K2JG7booRLTINxkZGHALItJKSr5xjeChTOAb1QGz9WF3fBNM",
    "9zzuOFM1O2SWtRxoU59RSEsqucZhXGpN2UIl7ezwVrK1xfao",
    "9zzuOFM1O2SWu8r8tpROafqA4HZSgYnTXBREmih96F0kGe2b",
    "9zzuOFM1O2SWAKtHSb2vUzNVeyRhn38auQIrdPH0xKBYWXDM",
    "9zzuOFM1O2SWxb798ESLzBqpZPwSy7R5nuaj4gWbFvT61Gif",
    "9zzuOFM1O2SWekQj0dvGyzsW9l8EZQSJPxdV42M0whUT5u6q",
    "9zzuOFM1O2SWngYYZ6B8vMbqhVEya9NPUpL05HnRdYsuSBQC",
    "9zzuOFM1O2SWngtacyi8vMbqhVEya9NPUpL05HnRdYsuSBQC",
    "9zzuOFM1O2SWckos6V5RkgM9VmALeSZOJrC4yfjtIdBp2QR0",
    "9zzuOFM1O2SW6TpB9axox0rfm7EyhtKLOY9w8XceikJQFnP3",
]

// const videos = [
//     'c45dbb92-95d1-4590-830c-4d91baa1c870-719jk6.mp4',
//     '55bf195c-9f43-44a4-b861-295d021747ca-8kfxxf.mp4',
//     '08aabf66-2594-4e7d-a223-c6778c7687a6-6s5o5o.mp4',
//     'e4d62ca5-a961-4c3c-b805-2a3be924c24a-ykepcp.mp4',
//     'be95f006-3195-4278-86ef-9b5cd79cf7e3-jemj3c.mp4',
//     'a7f25ea3-1a2c-4a29-a00e-da5e786e9e2f-lcxy80.mp4',
//     'a6c2328a-0f7d-4b79-bfed-e1f8ec11c4f4-6hgn0y.mp4',
//     'ede4a29d-ec73-427d-a1d1-37ddbb757194-64hpi1.mp4',
//     '2dc43480-40fa-4954-9317-760530962fe9-rnjdbp.mp4',
//     'e3c4e324-257e-45d3-949e-0fcd4e89cc53-xdjjck.mp4'
// ]

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
