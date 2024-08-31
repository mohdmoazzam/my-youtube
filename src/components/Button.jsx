import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-6 py-2 m-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out">
      {name}
    </button>
  );
};

export default Button;
