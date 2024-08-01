import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Intro from './intro';
import ShopLanding from './shop';
import Featured from './_components/featured';
import { CarouselComponent } from './_components/carousel';
import { CarouselItem } from '@/components/ui/carousel';
import CollectionCard from '../_components/collection-card';
import ProductCard from '../_components/product-card';
import { motion } from 'framer-motion';

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
            src={'https://utfs.io/f/87297fba-a156-42bb-8b84-f02284499d67-k2j0s8.mp4'}
            className='object-cover h-[100%] w-[100%]'
            autoPlay
            loop
            muted
          />

          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
          <LandingContent />
        </motion.div>
      </div>
      <Intro />
      <ShopLanding />

      <Featured
        title='Featured collections'
        subtitle='Browse our handpicked collections'
      >
        <div className="flex justify-center">
          <CarouselComponent className='w-[calc(100%-6rem)]'>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <CollectionCard className='lg:w-96 md:w-80 w-[15rem]' />
              </div>
            </CarouselItem>
            ))}
          </CarouselComponent>
        </div>
      </Featured>

      <Featured
        title='Featured products'
        subtitle='Browse our handpicked product items'
      >
        <div className="flex justify-center">
          <CarouselComponent className='w-[calc(100%-6rem)]'>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard className='lg:w-96 md:w-80 w-[15rem]' />
              </div>
            </CarouselItem>
            ))}
          </CarouselComponent>
        </div>
      </Featured>
    </div>
  )
}

export default Home

const LandingContent = () => {
  return (
    <div className="absolute lg:bottom-8 bottom-16 left-4 max-w-[60rem] text-[#fcfcfc] space-y-4">
      <h1 className="font-anton lg:text-8xl md:text-6xl text-4xl">
        Everything is Positive
      </h1>

      <p className="leading-tight">
        "Everything is Positive” is about empowering people, thus enabling their communities to become self-sustainable. “Everything is Positive” AKA (E+) is not just a brand but a movement.
      </p>

      <Button
        variant="expandIcon"
        Icon={ArrowRightIcon}
        iconPlacement="right"
        className='bg-primary'
      >
        Join us
      </Button>
    </div>
  )
}