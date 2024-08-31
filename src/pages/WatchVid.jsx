import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/slices/miscSlice";
import { useSearchParams } from "react-router-dom";

const WatchVid = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(closeSidebar()));
  }, []);
  return (
    <div className="-ml-20 px-5 py-5 overflow-x-auto scrollbar-custom">
      <iframe
        width="800"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVid;
