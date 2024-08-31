import React from "react";

const VideoCard = ({ info }) => {
  console.log("Info", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 m-2 w-64 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-t-lg w-full object-cover"
      />
      <ul className="p-2">
        <li className="font-semibold py-2 text-lg text-gray-800 leading-tight">
          {title}
        </li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-sm mt-1">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
