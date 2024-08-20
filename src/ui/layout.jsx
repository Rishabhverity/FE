import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="overflow-y-scroll max-h-screen w-full">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;
