import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

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
