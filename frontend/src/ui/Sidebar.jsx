
import { Link, useNavigate } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { PiBook } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

function Sidebar({ isOpen, toggleSidebar }) {

  
    const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      // Send a request to the backend to clear the token
      await axios.post('http://localhost:5000/TrainingApp/users/logout', {}, { withCredentials: true });
  
      // Redirect to login page after logout
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
  

  return (
    <>
      {/* Background Overlay for Small Screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`h-screen fixed inset-y-0 left-0 bg-sky-100 w-64 p-6 shadow-lg z-50 transition-transform duration-300 lg:transform-none lg:relative lg:inset-0 lg:w-64 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        {/* Close Button for Mobile Devices */}
        <button
          className="lg:hidden absolute top-4 right-4 text-sky-600 hover:text-sky-800 text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          <RxCross2 />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-4 py-4 mb-4">
            <Link to="/assigner">
              <img src="/image.png" alt="logo" className="h-12" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 px-2 text-lg flex-grow">
            <Link
              to="/assigner"
              className="flex items-center gap-3 py-3 px-4 rounded-md text-sky-700 hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200"
            >
              <BsHouse className="text-sky-600" size={20} />
              Home
            </Link>
            <Link
              to="/assigner/Trainers"
              className="flex items-center gap-3 py-3 px-4 rounded-md text-sky-700 hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200"
            >
              <SlPeople className="text-sky-600" size={20} />
              Trainers
            </Link>
            <Link
              to="/assigner/Accounts"
              className="flex items-center gap-3 py-3 px-4 rounded-md text-sky-700 hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200"
            >
              <PiBook className="text-sky-600" size={20} />
              Accounts
            </Link>
            <Link
              to="/assigner/Attendance"
              className="flex items-center gap-3 py-3 px-4 rounded-md text-sky-700 hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200"
            >
              <FaPeopleGroup className="text-sky-600" size={20} />
              Attendance
            </Link>
          </div>

          {/* Logout Button at the Bottom */}
          <div className="mt-auto px-2 py-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 py-3 px-4 rounded-md text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors duration-200"
            >
              <CiLogout className="text-red-600" size={20} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;