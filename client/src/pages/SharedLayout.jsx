import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

function SharedLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
