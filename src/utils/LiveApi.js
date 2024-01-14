export const authToken = '5274f65b-29b8-475e-86ee-6ab31f7c82b4';

export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
