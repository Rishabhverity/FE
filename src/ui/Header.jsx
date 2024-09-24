import { IoMenu } from "react-icons/io5";
import NotificationDropdown from "./Notification";

function Header({toggleSidebar}) {
  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between shadow-md">

       <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-3xl text-gray-800 focus:outline-none"
          >
            <IoMenu color="white" />
          </button>
      </div>
      
      <div className="ml-[70rem]">
        <NotificationDropdown />
        </div>
    </header>
  );
}

export default Header;
