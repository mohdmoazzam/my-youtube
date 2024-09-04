import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start mt-2">
      <img
        src="https://yt4.ggpht.com/ytc/AIdro_l4k42UWYQUhsK9Qf6vRxSUA6BmA1jCHkuxZzqDsTiyo3g=s64-c-k-c0x00ffffff-no-rj"
        alt="avatar"
        className="rounded-full h-8"
      />
      <div>
        <span className="font-bold">{name} </span>
        <span className="break-words">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
