import { NavLink, Navigate } from "react-router-dom";
import {
  MdOutlineLightMode,
  MdNotifications,
  MdMessage,
  MdHelp,
  MdSearch,
} from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pl-8 pr-8 pt-4 pb-4 bg-slate-200">
      <div className="flex gap-8">
        <div className="text-lg font-bold">
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

      <div className="flex justify-end gap-5 ">
        <MdOutlineLightMode size={20} onClick={() => Navigate("/profile")} />
        <MdMessage size={20} />
        <MdNotifications size={20} />
        <MdHelp size={20} />
      </div>
    </div>
  );
};

export default NavBar;
