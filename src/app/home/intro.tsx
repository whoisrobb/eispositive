import ContentShell from "@/components/shells/content-shell";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    const isInView = useInView(description);

  return (
    <ContentShell
        title="Who we are"
    >

    <div ref={description} className="relative lg:h-screen h-[175vh] flex items-center justify-center">
        <div className="space-y-4 flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
            {/* <div className="lg:max-w-[30rem] w-full text-2xl clip-polygon flex flex-wrap">
                {paragraph1}
            </div> */}

            <p className="text-4xl leading-tight flex flex-wrap gap-x-2">
                {p1.split(" ").map((word, index) => (
                    <span className="relative inline-flex overflow-hidden" key={index}>
                        <motion.span
                            variants={slideUp}
                            custom={index}
                            animate={isInView ? 'open' : 'closed'}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </p>


            <p className="text-muted-foreground leading-tight flex flex-wrap gap-x-2">
                {p2.split(" ").map((word, index) => (
                    <span className="relative inline-flex overflow-hidden" key={index}>
                        <motion.span
                            variants={slideUp}
                            custom={index}
                            animate={isInView ? 'open' : 'closed'}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    </div>
    
    </ContentShell>
  )
}

export default Intro