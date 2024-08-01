import { cn } from "@/utils/utils";
import { HTMLAttributes } from "react";
import ContentShell from "@/components/shells/content-shell";

const Intro = () => {
  return (
    <ContentShell
        title="Who we are"
    >

    <div className="relative lg:h-screen h-[175vh] py-24 flex justify-center">
        <div className="max-w-[35rem] w-full h-full text-center space-y-4">
            <div className="">
                <h1 className="md:text-3xl text-2xl font-anton">
                    Grow & Connect With Others
                </h1>
                <p className="">
                    As we continue to share our stories and turn a negative into a positive, the E+Positive Movement is growing. Share your story and be a part of the E+Positive community.
                </p>
            </div>

            <div className="">
                <h1 className="md:text-3xl text-2xl font-anton">
                    Change Your Mindset
                </h1>
                <p className="">
                    We equip our members with a safe platform to share their stories and hear of others, so that we can all become the agents of change in our community.
                </p>
            </div>
        </div>

        <PageImage className="md:w-[17rem] w-[10rem] lg:h-[17rem] h-[10rem] md:bottom-[5rem] lg:bottom-[1rem] bottom-[7rem] lg:right-[30rem] right-1" image={'https://utfs.io/f/608ca480-8967-43e6-92aa-bd96104b80bb-3tf0py.jpg'} />
        <PageImage className="md:w-[17rem] w-[14rem] h-[25rem] lg:right-4 right-1 md:bottom-[20rem] lg:bottom-[4rem] bottom-[28rem]" image={'https://utfs.io/f/cf834e1e-6960-467e-9491-237033d88029-3tf0pz.jpg'} />
        <PageVideo className="md:w-[17rem] w-[10rem] h-[20rem] lg:left-4 md:bottom-[5rem] bottom-[7rem] left-1" video={'https://utfs.io/f/23bbe487-7eab-4ad2-98e5-64184f191ba2-xwc79j.mp4'} />
    </div>
        
    </ContentShell>
  )
}

export default Intro


type PageImageProps = HTMLAttributes<HTMLDivElement> & {
    image: string;
}

const PageImage = ({ image, className }: PageImageProps) => {
    return (
        <div className={cn('absolute rounded-xl overflow-hidden', className)}>
            <img
                className='h-full w-full object-cover'
                src={image}
            />
        </div>
    )
}

type PageVideoProps = HTMLAttributes<HTMLDivElement> & {
    video: string;
}

const PageVideo = ({ video, className }: PageVideoProps) => {
    return (
        <div className={cn('absolute rounded-lg overflow-hidden', className)}>
            <video
                className='h-full w-full object-cover'
                src={video}
                autoPlay
                loop
                muted
            />
        </div>
    )
}