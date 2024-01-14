import React, { useState } from 'react';
import { MeetingProvider, Constants } from '@videosdk.live/react-sdk';
import ViewerView from './ViewerView';
import SpeakerView from './SpeakerView';

const Welcome = () => {
  const [mode, setMode] = useState(null);

  if (!mode) {
    return (
      <div>
        <button onClick={() => setMode(Constants.modes.CONFERENCE)}>Speaker</button>
        <button onClick={() => setMode(Constants.modes.VIEWER)}>VIEWER</button>
      </div>
    );
  }

  return (
    <MeetingProvider
      config={{
        meetingId: 'sb82-41sl-04v4',
        micEnabled: true,
        webcamEnabled: true,
        name: "Sumit's Org",
        mode,
      }}
      joinWithoutUserInteraction
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1Mjc0ZjY1Yi0yOWI4LTQ3NWUtODZlZS02YWIzMWY3YzgyYjQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTIxMjc2OCwiZXhwIjoxNzA1Mjk5MTY4fQ.7mRzO_SZwRcH5rI7rNykVQ5_M1vZYhfrxUxNwOou8wM"
    >
      {mode === Constants.modes.CONFERENCE ? <SpeakerView /> : <ViewerView />}
    </MeetingProvider>
  );
};

export default Welcome;
