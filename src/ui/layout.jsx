import { Outlet } from "react-router-dom";
import Sidebar from "../components/trainerSidebar"

import { useState } from "react";
import Header from "../components/trainerHeader";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  
  return (
    <div className="flex flex-row">
       {/* Sidebar (hidden by default on small screens) */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      

      <div className="overflow-y-scroll max-h-screen w-full">
        <Header toggleSidebar={toggleSidebar} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>{<Outlet searchTerm={{ searchTerm }} setSearchTerm={{ setSearchTerm }} />}</div>
        </div>
        </div>
    //</div>
  );
}

export default Layout;
