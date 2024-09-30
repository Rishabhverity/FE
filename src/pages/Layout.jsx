import { Outlet } from "react-router-dom";
import Header from "./trainerHeader";
import Sidebar from "./trainerSidebar";

function Layout() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div>
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;