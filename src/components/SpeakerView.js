import { useMeeting, Constants, useParticipant } from '@videosdk.live/react-sdk';
import { useState, useRef, useEffect, useMemo } from 'react';

import ParticipantView from './ParticipantView';
import Controls from './Controls';

const SpeakerView = () => {
  const [joined, setJoined] = useState(null);
  const { participants } = useMeeting();
  // meeting
  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      setJoined('JOINED');
      if (mMeetingRef.current.localParticipant.mode == 'CONFERENCE') {
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
            {Speaker.map((participant) => (
              // { creeating a card }
              <ParticipantView participantId={participant.id} key={participant.id} />
            ))}
          </div>
          <Controls />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpeakerView;
