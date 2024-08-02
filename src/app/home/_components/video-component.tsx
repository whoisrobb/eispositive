import Magnetic from "@/components/elements/magnetic";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

type VideoComponentProps = {
  source: string;
};

const VideoComponent = ({ source }: VideoComponentProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div
      className="h-36 w-64 overflow-hidden rounded relative group"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
        <video
            ref={videoRef}
            src={`https://utfs.io/f/${source}`}
            className="object-cover h-[100%] w-[100%]"
            loop
            muted
        />

        <div
            className="absolute scale-0 top-[2.5rem] left-[6rem] group-hover:scale-100 transition-transform duration-300"
        >
        <Magnetic>
            <Button className="h-16 aspect-square rounded-full  flex items-center justify-center">
                Play
            </Button>
        </Magnetic>
      </div>

    </div>
  );
};

export default VideoComponent;
