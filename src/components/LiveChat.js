import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        }),
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="w-full mr-4">
      {/* Chat messages */}
      <div className="flex w-full mt-4 ml-2 p-2 h-[500px] border border-black text-black bg-gray-200 overflow-y-scroll flex-col-reverse">
        {chatMessage.map((item, index) => (
          <ChatMessage key={index} name={item.name} message={item.message} />
        ))}
      </div>

      {/* Chat input form */}
      <form
        className="p-2 m-2 border border-black bg-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Sumit',
              message: liveMessage,
            }),
          );
          setLiveMessage('');
        }}
      >
        <input
          type="text"
          className="w-80 border border-gray-500 p-2 text-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="px-2 ml-2 bg-blue-500 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
