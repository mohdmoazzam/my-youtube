import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux/slices/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
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
    <div className="mr-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-x-auto scrollbar-custom flex flex-col-reverse">
      {chatMessages?.map((chatMessage, index) => (
        <ChatMessage
          key={index}
          name={chatMessage?.name}
          message={chatMessage?.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
