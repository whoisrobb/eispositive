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
        <div className="container mx-auto p-4">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    );
};

export default VideoPlayer;
