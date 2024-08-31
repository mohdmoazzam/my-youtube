import { useSelector } from "react-redux";
import {
  FaHome,
  FaFire,
  FaVideo,
  FaTv,
  FaMusic,
  FaFutbol,
  FaGamepad,
  FaFilm,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.misc?.isSidebarOpen);

  return (
    <div
      className={`p-5 shadow-lg bg-gray-100 w-48 h-50vh text-left overflow-y-auto sidebar-transition scrollbar-custom ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <ul className="space-y-3">
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <Link to={"/"} className="flex items-center">
            <FaHome className="mr-2" />
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
              Home
            </span>
          </Link>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaFire className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Shorts
          </span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaVideo className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Videos
          </span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaTv className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Live</span>
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="space-y-3 pt-3">
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaMusic className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Music</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaFutbol className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Sports
          </span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaGamepad className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Gaming
          </span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          <FaFilm className="mr-2" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Movies
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
