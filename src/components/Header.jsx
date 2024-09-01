import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/slices/miscSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../redux/slices/searchSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchTerm]) {
        setSuggestions(searchCache[searchTerm]);
      } else {
        getSearchSuggestion();
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const getSearchSuggestion = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchTerm);
    const json = await response.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchTerm]: json[1],
      })
    );
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

      <div className="col-span-10 flex justify-center items-center relative">
        <input
          type="text"
          className="w-1/2 border border-gray-300 py-2 px-4 rounded-l-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={() => setSuggestions([])}
        />
        <button className="bg-blue-500 text-white px-3 py-[6px] rounded-r-full shadow-sm hover:bg-blue-600 transition duration-300">
          <CiSearch size={30} color="black" />
        </button>
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute top-full left-56 w-1/2 bg-white shadow-lg border border-gray-300 rounded-md mt-1 z-50">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                >
                  <CiSearch size={20} /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* User */}
      <div className="flex justify-end col-span-1 mr-2">
        <FaRegCircleUser size={40} />
      </div>
    </div>
  );
};

export default Header;
