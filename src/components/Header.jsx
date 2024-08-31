import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi";
import { FcSearch } from "react-icons/fc";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slices/miscSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col py-2 my-2 shadow-lg items-center">
      {/* Hamburger */}
      <div className="flex gap-3 col-span-1 ml-1">
        <GiHamburgerMenu
          size={40}
          onClick={() => toggleSidebarHandler()}
          className="cursor-pointer"
        />
        <TfiYoutube size={40} className="cursor-pointer" />
      </div>

      {/* Search */}
      <div className="col-span-10 flex justify-center items-center">
        <input
          type="text"
          className="w-1/2 border border-gray-300 py-2 px-4 rounded-l-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white px-3 py-[6px] rounded-r-full shadow-sm hover:bg-blue-600 transition duration-300">
          <FcSearch size={30} />
        </button>
      </div>

      {/* User */}
      <div className="flex justify-end col-span-1 mr-2">
        <FaRegCircleUser size={40} />
      </div>
    </div>
  );
};

export default Header;
