import { useMeeting, Constants, useParticipant } from '@videosdk.live/react-sdk';
import { useState, useRef, useEffect } from 'react';

import ParticipantView from './ParticipantView';
import Controls from './Controls';

const SpeakerView = () => {
  const [joined, setJoined] = useState(null);
  const { participants } = useMeeting();

  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      setJoined('JOINED');
      if (mMeetingRef.current.localParticipant.mode === Constants.modes.CONFERENCE) {
        mMeetingRef.current.localParticipant.pin();
      }
    },
  });

  const mMeetingRef = useRef(mMeeting);
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const Speaker = [...participants.values()].filter((item) => {
    return item.mode === Constants.modes.CONFERENCE;
  });

  return (
    <div>
      {joined && joined === 'JOINED' ? (
        <div>
          <div>
            {Speaker.length > 0 ? (
              // Render ParticipantView cards
              <ParticipantView participantId={Speaker[0].id} key={Speaker[0].id} />
            ) : (
              // Shimmer loading state
              <div className="animate-pulse flex space-x-4">
                <div className="bg-gray-300 h-24 w-24 rounded-full"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            )}
          </div>
          <Controls />
        </div>
      ) : (
        // Shimmer loading state while joining the meeting
        <div className="animate-pulse flex space-x-4">
          <div className="bg-gray-300 h-24 w-24 rounded-full"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerView;
