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
import SelectCom from "./SelectCom";

import WindowWidth from "./WindowWidth";

const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const width = WindowWidth();

  return (
    <div className="flex justify-between items-center px-4 py-4 bg-lightModeDivBg dark:bg-darkModeDivBg">
      <div className="text-xl font-bold text-blue-500  hover:text-blue-100 transition delay-100">
        <NavLink to="/home">SocioSpace</NavLink>
      </div>

      {width >= 1024 && (
        <div className="flex items-center dark:text-darkModeText bg-lightModeBg dark:bg-darkModeInput rounded-md p-2 my-1 h-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 focus:outline-none bg-lightModeBg dark:bg-darkModeInput text-xs"
          />
          <MdSearch
            cursor="pointer"
            color={mode === "dark" ? "white" : "black"}
          />
        </div>
      )}

      <div className="lg:invisible">
        <MdMenu
          cursor="pointer"
          size={20}
          color={mode === "dark" ? "lightgray" : "blue"}
        />
      </div>

      {width >= 1024 && (
        <div className="items-center md:flex md:justify-end md:gap-5 dark:text-white">
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

          <div className="relative bg-lightModeBg dark:bg-darkModeInput rounded-md">
            <SelectCom />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
