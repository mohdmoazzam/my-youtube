import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/slices/miscSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

const WatchVid = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(closeSidebar()));
  }, []);

  return (
    <>
      <div className="px-1 py-2 overflow-x-auto scrollbar-custom w-full">
        <div className="flex">
          <div className="flex flex-col" style={{ flex: "0 0 800px" }}>
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
            <CommentsContainer />
          </div>

          <div className="w-full overflow-hidden ml-1">
            <LiveChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchVid;
