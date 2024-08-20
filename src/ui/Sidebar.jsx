import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { PiBook } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import Trainers from "../pages/Trainers";

function Sidebar() {
  return (
    <div className="flex flex-col bg-blue-50 h-screen w-72 shadow-lg">
      <div className="flex items-center px-4 py-4 mb-4">
        <img src="/image.png" alt="logo" className="h-12" />
      </div>

      <div className="flex flex-col gap-2 px-2 text-lg flex-grow">
        <Link
          to="/"
          className="flex items-center gap-3 py-3 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800"
        >
          <BsHouse className="text-blue-500" size={20} />
          Home
        </Link>
        <Link
          to="/Trainers"
          element={<Trainers />}
          className="flex items-center gap-3 py-3 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800"
        >
          <SlPeople className="text-blue-500" size={20} />
          Trainers
        </Link>
        <Link
          to="/Accounts"
          className="flex items-center gap-3 py-3 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800"
        >
          <PiBook className="text-blue-500" size={20} />
          Accounts
        </Link>
        <Link
          to="/Attendance"
          className="flex items-center gap-3 py-3 px-4 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800"
        >
          <FaPeopleGroup className="text-blue-500" size={20} />
          Attendance
        </Link>
      </div>

      <div className="px-2 py-3">
        <Link
          to="/Logout"
          className="flex items-center gap-3 py-3 px-4 rounded-md text-red-600 hover:bg-red-100 hover:text-red-800"
        >
          <CiLogout className="text-red-600" size={20} />
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
