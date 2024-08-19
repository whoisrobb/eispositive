import useSplitText from "../hooks/useSplitText";
import { motion } from "framer-motion";

type PageShellProps = {
    title: string;
    subtitle: string;
    type: 'video' | 'image';
    source: string;
};

const variants = {
    initial: {
        opacity: 0,
        // y: '100%'
    },
    animate: {
        opacity: 1,
        // y: 0
    }
};

const mediaVariants = {
    initial: {
      opacity: 0,
      y: '50px'
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

const PageShell = ({ title, subtitle, type, source }: PageShellProps) => {
    const titleText = useSplitText(title, "letter");
    
  return (
    <div>
        <div className="md:h-[75vh] h-[50vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-[50rem] space-y-4">
                <div
                    // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                    className="font-anton lg:text-8xl text-6xl uppercase clip-polygon flex justify-center"
                >
                    {titleText}
                </div>
                <motion.p
                    className="text-muted-foreground clip-polygon"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: .7 }}
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>

        <div className="">
            <motion.div
                className="overflow-hidden rounded-lg md:h-full h-[75vh] w-full"
                variants={mediaVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: .5, delay: 0.8 }}
            >
                {type === 'video' ?
                <video
                    src={source}
                    className='object-cover h-[100%] w-[100%]'
                    autoPlay
                    loop
                    muted
                />
                :
                <img
                    src={source}
                    className='object-cover h-[100%] w-[100%]'
                />}
            </motion.div>

        </div>

        {/* <div className="absolute top-48 left-0 h-96 w-full -z-10">
            <img
                src={'https://utfs.io/f/cc802fe8-212a-4e39-aa4b-ff0de700dd27-wdv566.png'}
                className="h-full w-full opacity-25 object-cover"
                alt=""
            />
        </div> */}
    </div>
  )
}

export default PageShell