import Intro from './intro';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { VideoCarousel } from './video-carousel';
import { useRef } from 'react';
import BlogSection from './blog-section';
import EplusBrand from './eplus-brand';

const variants = {
  initial: {
    opacity: 0,
    y: '50px'
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const Home = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const offset = useTransform(scrollYProgress, [0, 1], [100, -150]);

  return (
    <div className='space-y-8'>
      <div ref={container} className="h-screen flex py-4 items-center justify-center">

        <motion.div
          className="overflow-hidden rounded-lg h-full w-full relative"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: .5 }}
        >
          <video
            src={'https://utfs.io/f/c20f12da-a96b-4693-9301-de8b73169790-2imfzt.mp4'}
            className='object-cover h-[100%] w-[100%]'
            autoPlay
            loop
            muted
          />

          <div className="absolute top-0 bottom-0 right-0 lg:left-0 bg-gradient-to-t lg:from-accent-foreground lg:to-transparent" />
          <LandingContent offset={offset} />
        </motion.div>
      </div>
      
      <div className="space-y-72">
        <Intro />
        <VideoCarousel />
      </div>

      <EplusBrand />
      <BlogSection />
      
    </div>
  )
}

export default Home


type LandingContentProps = {
  offset: MotionValue<number>;
}

const LandingContent = ({ offset }: LandingContentProps) => {

  return (
    <div className="absolute lg:bottom-4 lg:left-4 bottom-1/2 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:translate-y-0 -translate-y-1/2 text-background space-y-4">
      <motion.h1 style={{ y: offset }} className="font-anton uppercase w-full lg:text-[10.7vw] whitespace-nowrap text-4xl">
        Everything is Positive
      </motion.h1>
    </div>
  )
}