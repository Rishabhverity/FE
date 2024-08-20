import NotificationDropdown from "./Notification";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between shadow-md">
      <div className="flex-1 mx-4 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white text-gray-800 rounded-full py-2 pl-10 pr-4 border border-blue-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <AiOutlineSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>

      <NotificationDropdown />
    </header>
  );
}

export default Header;
