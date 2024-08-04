import { motion, useInView } from 'framer-motion';
import { MutableRefObject } from 'react';

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

const useSplitPara = (text: string, ref: MutableRefObject<null>, delay?: number) => {
    const isInView = useInView(ref);

  return text.split(" ").map((word, index) => (
    <span className="relative inline-flex overflow-hidden" key={index}>
        <motion.span
            variants={slideUp}
            custom={index}
            animate={isInView ? 'open' : 'closed'}
            className="inline-block"
            transition={{ delay: delay ? delay : 0 }}
        >
            {word}
        </motion.span>
    </span>
    ))
}

export default useSplitPara