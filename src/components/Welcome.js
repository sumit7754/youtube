import React, { useState } from 'react';
import { MeetingProvider, Constants } from '@videosdk.live/react-sdk';
import ViewerView from './ViewerView';
import SpeakerView from './SpeakerView';

const Welcome = () => {
  const [mode, setMode] = useState(null);

  if (!mode) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to YouTube Live</h1>
        <div className="space-y-4">
          <button
            onClick={() => setMode(Constants.modes.CONFERENCE)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start as Speaker
          </button>
          <button
            onClick={() => setMode(Constants.modes.VIEWER)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Join as Viewer
          </button>
        </div>
      </div>
    );
  }

  return (
    <MeetingProvider
      config={{
        meetingId: '242r-qvn5-sudk',
        micEnabled: true,
        webcamEnabled: true,
        name: "sjjodhpur15's Org",
        mode,
      }}
      joinWithoutUserInteraction
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzMDM3ZWY5Yi1kNzQ3LTQyN2EtYjJjYy1lYzUwOWJmNjc2MGUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTMzMDgzOSwiZXhwIjoxNzA1NDE3MjM5fQ.voFBY8Q_Q5DpAlpnNpOh2zM90ZXX_qJHNLAZpPfh8EA"
    >
      {mode === Constants.modes.CONFERENCE ? <SpeakerView /> : <ViewerView />}
    </MeetingProvider>
  );
};

export default Welcome;
