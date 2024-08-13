import Magnetic from "@/components/elements/magnetic";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect, HTMLAttributes } from 'react';
import VideoModal from "./video-modal";
import { cn } from "@/utils/utils";

type VideoComponentProps = HTMLAttributes<HTMLDivElement> & {
  source: string;
};

const VideoComponent = ({ source, className }: VideoComponentProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  return (
    <VideoModal
      videoSrc={`https://utfs.io/f/${source}`}
      // videoSrc="https://www.youtube.com/watch?v=CTMxkDgYIkI"
    >
    <div
      className={cn("h-36 w-64 overflow-hidden rounded relative border", className)}
      onMouseEnter={() => {
        setIsPlaying(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsPlaying(false);
        setIsHovered(false);
      }}
    >
      <video
        ref={videoRef}
        src={`https://utfs.io/f/${source}`}
        className="object-cover h-[100%] w-[100%]"
        loop
        muted
      />
      <div
        className={`absolute h-16 aspect-square rounded-full top-[2.5rem] left-[6rem] transition-transform duration-300 ${
          isHovered ? 'scale-100' : 'scale-0'
        }`}
      >
        <Magnetic>
          <Button className="h-16 aspect-square rounded-full  flex items-center justify-center">
            Play
          </Button>
        </Magnetic>
      </div>
    </div>
    </VideoModal>
  );
};

export default VideoComponent;
