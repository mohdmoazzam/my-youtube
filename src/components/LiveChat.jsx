import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux/slices/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat?.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="mr-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-x-auto scrollbar-custom flex flex-col-reverse">
        <div>
          {chatMessages?.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage?.name}
              message={chatMessage?.message}
            />
          ))}
        </div>
      </div>

      <form
        className="w-full p-1 mr-2 border border-gray-500 bg-white rounded-lg flex items-center gap-2 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessages({ name: "Md Moazzam", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-3/4 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
