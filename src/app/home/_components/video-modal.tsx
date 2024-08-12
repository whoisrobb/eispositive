import VideoPlayer from "@/components/elements/video-player";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type VideoModalProps = {
    children: ReactNode;
    videoSrc: string
}

const VideoModal = ({ children, videoSrc }: VideoModalProps) => {
  return (
    <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="sr-only">Video Player</DialogTitle>
            </DialogHeader>
            <VideoPlayer videoSrc={videoSrc} />
        </DialogContent>
    </Dialog>
  )
}

export default VideoModal