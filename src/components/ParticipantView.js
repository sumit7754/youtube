import LiveChat from './LiveChat';
import { useParticipant } from '@videosdk.live/react-sdk';
import React, { useMemo, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const ParticipantView = (props) => {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } = useParticipant(props.participantId);

  // Creating a video stream and memoizing it
  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) => console.error('micRef.current.play() failed', error));
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div className="py-8 bg-black">
      <div className="flex  text-white">
        {/* Video on the left side */}
        <div className="w-3/4 ">
          <h1 className="text-3xl md:text-5xl text-yellow-500 text-center mt-20 leading-relaxed md:leading-snug">
            Youtube Live Stream
          </h1>

          <div className=" top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            {webcamOn && (
              <ReactPlayer
                playsinline
                pip={false}
                light={false}
                controls={false}
                muted={true}
                playing={true}
                url={videoStream}
                height={'600px'}
                width={'900px'}
                style={{ backgroundColor: 'black' }}
                onError={(err) => {
                  console.log(err, 'participant video error');
                }}
              />
            )}
          </div>
        </div>

        {/* Live Chat on the right side */}
        <div className="w-1/4">
          <div className="text-center">
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantView;
