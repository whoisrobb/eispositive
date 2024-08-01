import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        // opacity: 0,
        y: '100%'
    },
    animate: (index: number) => ({
        // opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
};

type SplitBy = 'letter' | 'word';

const useSplitText = (text: string, splitBy: SplitBy = 'letter') => {
  // Ensure text is a string
  if (typeof text !== 'string') {
    console.error('useSplitText: expected text to be a string.');
    return [];
  }

  // Split the text based on the splitBy parameter
  return React.useMemo(() => {
    const elements = splitBy === 'letter' 
      ? text.split('') 
      : text.split(' ').map((word, index, array) => word + (index < array.length - 1 ? ' ' : ''));

    return elements.map((char, index) => (
      <motion.div
        key={index}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={index + 1}
        // transition={{ duration: 2 }}
      >
        {splitBy === 'letter' && char === ' ' ? '\u00A0' : char}
      </motion.div>
    ));
  }, [text, splitBy]);
}

export default useSplitText;
