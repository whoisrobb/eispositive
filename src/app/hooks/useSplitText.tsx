import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: '100%',
  },
  animate: (index: number) => ({
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.05 * index,
    },
  }),
};

type SplitBy = 'letter' | 'word';

const useSplitText = (text: string, splitBy: SplitBy = 'letter') => {
  // Ensure text is a string
  if (typeof text !== 'string') {
    console.error('useSplitText: expected text to be a string.');
    return null;
  }

  // Split the text based on the splitBy parameter
  const elements = React.useMemo(() => {
    if (splitBy === 'letter') {
      return text.split('');
    } else {
      return text.split(' ').reduce((acc, word, index, array) => {
        acc.push(word);
        // Add a space after each word except the last one
        if (index < array.length - 1) {
          acc.push(' ');
        }
        return acc;
      }, [] as string[]);
    }
  }, [text, splitBy]);

  return (
    <div style={{ display: 'inline-block' }}>
      {elements.map((char, index) => (
        <motion.div
          key={index}
          style={{ display: 'inline-block' }}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index + 1}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.div>
      ))}
    </div>
  );
};

export default useSplitText;
