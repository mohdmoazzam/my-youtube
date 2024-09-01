import React from "react";
import { commentsData } from "../utils/mock";
import { FaRegCircleUser } from "react-icons/fa6";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center mt-3 shadow-sm bg-gray-100 p-2 rounded-md">
      <FaRegCircleUser size={30} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentsList comments={comment?.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
