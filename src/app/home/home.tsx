import { Button } from '@/components/ui/button';
import eipositive from '../../../public/videos/eispositive.mp4';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Intro from './intro';
import ShopLanding from './shop';

const Home = () => {
  return (
    <div>
      <div className="h-screen flex py-4 items-center justify-center">

        <div className="overflow-hidden rounded-lg h-full w-full relative">
          <video
            src={eipositive}
            className='object-cover h-[100%] w-[100%]'
            autoPlay
            loop
            muted
          />

          <LandingContent />
        </div>
      </div>
      <Intro />
      <ShopLanding />
    </div>
  )
}

export default Home

const LandingContent = () => {
  return (
    <div className="absolute lg:bottom-8 bottom-16 left-4 max-w-[60rem] space-y-4">
      <h1 className="font-anton lg:text-8xl md:text-6xl text-4xl">
        Everything is Positive
      </h1>

      <p className="">
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