import React, { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type SplitTextProps = HTMLAttributes<HTMLDivElement> & {
    text: string;
};

const variants = {
    initial: {
        opacity: 0,
        y: '100%'
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * index
        }
    })
};

const useSplitText = ({ text, className }: SplitTextProps) => {
  // Ensure text is a string
  if (typeof text !== 'string') {
    console.error('useSplitText: expected text to be a string.');
    return [];
  }

  // Split the text into characters and wrap each character in a span
  return React.useMemo(() => {
    return text.split('').map((char, index) => (
        <motion.span
            key={index}
            className={className}
            variants={variants}
            initial='initial'
            animate='animate'
            custom={index + 1}
        >
            {char}
        </motion.span>
    ));
  }, [text, className]);
}

export default useSplitText;
