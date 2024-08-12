import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoJSProps {
    options: any;
    onReady?: (player: any) => void;
}

export const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any | null>(null);

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current?.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay || false);
            player.src(options.sources || []);
        }
    }, [options, onReady]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div data-vjs-player className="w-full h-full">
            <div ref={videoRef} className="w-full h-full" />
        </div>
    );
};

export default VideoJS;
