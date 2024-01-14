import React, { useDebugValue, useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        }),
      );
    }, 10000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">
      <div className=" flex w-full ml-2 p-2 h-[500px] border border-black  bg-slate-100 overflow-y-scroll flex-col-reverse">
        {chatMessage.map((item, index) => (
          <ChatMessage key={index} name={item.name} message={item.message} />
        ))}
      </div>

      <form
        className=" p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Sumit',
              message: liveMessage,
            }),
          );
        }}
      >
        <input
          type="text"
          className=" w-80 border border-gray-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="button" // Prevent the form from submitting
          className="px-2 mx-2 bg-slate-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
