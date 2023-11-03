import { NavLink } from "react-router-dom";
import {
  MdLightMode,
  MdNotifications,
  MdMessage,
  MdHelp,
  MdSearch,
  MdDarkMode,
  MdMenu,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../state";

const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center px-2 sm:px-8 sm:py-4 mb-5 bg-slate-200 dark:bg-slate-700">
      <div className="sm:text-xl font-bold text-blue-600 dark:text-gray-200 hover:text-blue-300 transition delay-100">
        <NavLink to="/home">SocioSpace</NavLink>
      </div>

      <div className="flex items-center bg-slate-100 rounded-md p-2 h-6 my-1 sm:h-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-24 sm:w-56 lg:w-80 focus:outline-none bg-slate-100 text-xs"
        />
        <MdSearch />
      </div>

      <div className="sm:invisible">
        <MdMenu
          cursor="pointer"
          size={20}
          color={mode === "dark" ? "lightgray" : "blue"}
        />
      </div>

      <div className="invisible sm:visible sm:flex sm:justify-end sm:gap-5 dark:text-slate-100 text-blue-600">
        {mode === "light" ? (
          <MdLightMode
            size={20}
            onClick={() => dispatch(setMode())}
            cursor="pointer"
          />
        ) : (
          <MdDarkMode
            size={20}
            onClick={() => dispatch(setMode())}
            cursor="pointer"
          />
        )}
        <MdMessage size={20} />
        <MdNotifications size={20} />
        <MdHelp size={20} />
      </div>
    </div>
  );
};

export default NavBar;
