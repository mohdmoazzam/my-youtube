import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 m-2 w-64 h-[330px] bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-t-lg w-full h-40 object-cover"
      />
      <ul className="p-2">
        <li className="font-semibold py-2 text-lg text-gray-800 leading-tight">
          {title.length > 50 ? `${title.substring(0, 50)}...` : title}
        </li>

        <li className="text-blue-600 text-sm">{channelTitle}</li>
        <li className="text-red-500 text-sm">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
