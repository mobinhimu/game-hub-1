import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
