import React, { useRef, useEffect } from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import LiveChat from './LiveChat'; // Import LiveChat component
import Hls from 'hls.js'; // Make sure to import the Hls library

function ViewerView() {
  // State to store downstream url and current HLS state
  const playerRef = useRef(null);
  // Getting the hlsUrls
  const { hlsUrls, hlsState } = useMeeting();

  // Playing the HLS stream when the downstreamUrl is present and it is playable
  useEffect(() => {
    const initializeHlsPlayer = () => {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          autoStartLoad: true,
          defaultAudioCodec: 'mp4a.40.2',
        });
        hls.loadSource(hlsUrls.downstreamUrl);
        hls.attachMedia(playerRef.current);
      } else if (playerRef.current) {
        playerRef.current.src = hlsUrls.downstreamUrl;
        playerRef.current.play().catch((error) => {
          console.error('Player play failed', error);
        });
      }
    };

    if (hlsUrls.downstreamUrl && hlsState === 'HLS_PLAYABLE') {
      initializeHlsPlayer();
    }
  }, [hlsUrls.downstreamUrl, hlsState]);

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="text-3xl md:text-5xl text-yellow-500 text-center mb-8 leading-relaxed md:leading-snug">
        Enjoy the Live Stream
      </div>

      {/* Showing message if HLS is not started or is stopped by HOST */}
      {hlsState !== 'HLS_PLAYABLE' ? (
        <div className="text-center">
          <p>Please Click Go Live Button to start HLS</p>
        </div>
      ) : (
        hlsState === 'HLS_PLAYABLE' && (
          <div className="flex justify-center">
            <div className="w-3/4">
              <video
                ref={playerRef}
                id="hlsPlayer"
                autoPlay
                controls
                className="w-full h-full"
                playsInline
                muted
                onError={(err) => {
                  console.log(err, 'hls video error');
                }}
              ></video>
            </div>
            {/* Live Chat on the right side */}
            <div className="w-1/4">
              <LiveChat />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ViewerView;
