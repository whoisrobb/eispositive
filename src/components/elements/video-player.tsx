import VideoJS from './video-js';

type VideoPlayerProps = {
    videoSrc: string;
};

const VideoPlayer = ({ videoSrc }: VideoPlayerProps) => {

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoSrc,
            type: 'video/mp4'
        }]
    };
    const handlePlayerReady = (player: videojs.VideoJsPlayer) => {
        console.log('Player is ready:', player);
    };

    return (
        <div className="container mx-auto rounded-xl overflow-hidden p-0">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            {/* <iframe
                src={videoSrc}
                className="size-full rounded-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
        </div>
    );
};

export default VideoPlayer;
