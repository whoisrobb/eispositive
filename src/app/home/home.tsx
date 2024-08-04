import Intro from './intro';
import { motion } from 'framer-motion';
import { VideoCarousel } from './video-carousel';

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
  return (
    <div className='space-y-8'>
      <div className="h-screen flex py-4 items-center justify-center">

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

          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-accent-foreground to-transparent" />
          <LandingContent />
        </motion.div>
      </div>

      <Intro />
      <VideoCarousel />
      
    </div>
  )
}

export default Home

const LandingContent = () => {
  return (
    <div className="absolute lg:bottom-4 lg:left-4 bottom-1/2 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:translate-y-0 -translate-y-1/2 text-background space-y-4">
      <h1 className="font-anton uppercase w-full lg:text-[10.7vw] whitespace-nowrap text-4xl">
        Everything is Positive
      </h1>
    </div>
  )
}