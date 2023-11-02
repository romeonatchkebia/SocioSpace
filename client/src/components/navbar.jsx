import { NavLink } from "react-router-dom";
import {
  MdLightMode,
  MdNotifications,
  MdMessage,
  MdHelp,
  MdSearch,
  MdDarkMode,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../state";

const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center pl-8 pr-8 pt-4 pb-4 bg-slate-200 dark:bg-slate-700 ">
      <div className="flex gap-8">
        <div className="text-lg font-bold text-blue-500 hover:text-blue-300">
          <NavLink to="/home">SocioSpace</NavLink>
        </div>

        <div className="flex items-center bg-slate-100 rounded-md p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-16 md:w-32 lg:w-56 focus:outline-none bg-slate-100 text-xs"
          />
          <MdSearch />
        </div>
      </div>

      <div className="flex justify-end gap-5 dark:text-slate-100">
        {mode === "light" ? (
          <MdLightMode size={20} onClick={() => dispatch(setMode())} />
        ) : (
          <MdDarkMode size={20} onClick={() => dispatch(setMode())} />
        )}
        <MdMessage size={20} />
        <MdNotifications size={20} />
        <MdHelp size={20} />
      </div>
    </div>
  );
};

export default NavBar;
