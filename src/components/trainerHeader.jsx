import React, { useState } from 'react';
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FiGrid } from "react-icons/fi";
import { LuCalendarCheck } from "react-icons/lu";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("card"); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  // Initial notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Notification 1", completed: false },
    { id: 2, text: "Notification 2", completed: false },
    { id: 3, text: "Notification 3", completed: false },
  ]);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Mark notification as completed
  const handleComplete = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, completed: true } : n
    ));
  };

  // Remove notification
  const handleRemove = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Handle View Change (Card/Calendar)
  const handleViewChange = (newView) => {
    setView(newView);
    setIsDropdownOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return ( 
    <>
      <header className='fixed top-0 right-0 z-50 flex justify-between p-3 border w-[78rem] h-[95px] items-center bg-gradient-to-r from-blue-300 to-blue-600'>
        {/* Notifications Section */}
        <ul className='flex gap-3 text-black'>
          <li 
            className='flex items-center cursor-pointer hover:underline'
            onClick={toggleModal}
          >
            <MdNotificationsActive className='mr-2' />
            Notifications
          </li>
        </ul>

        

        {/* View Option */}
        <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              View: {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg w-40">
                <ul>
                  <li
                    onClick={() => handleViewChange('card')}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    <Link to="/"><FiGrid className='flex items-center gap-2 size-5 ' /> Card</Link>
                  </li>
                  <li
                    onClick={() => handleViewChange('calendar')}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                  <Link to="/Calendar"><LuCalendarCheck className='flex size-5'/> Calendar</Link>

                    
                  </li>
                </ul>
              </div>
            )}
        
      </div>
      </header>

      {/* Notifications Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="mb-4 text-xl font-bold">Notifications</h2>
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li key={notification.id} className="p-2 bg-gray-100 rounded-md flex justify-between items-center">
                  <span className={notification.completed ? 'line-through' : ''}>
                    {notification.text}
                  </span>
                  <div className="flex space-x-2">
                    {!notification.completed && (
                      <button 
                        className="text-green-500"
                        onClick={() => handleComplete(notification.id)}
                      >
                        <AiOutlineCheck />
                      </button>
                    )}
                    <button 
                      className="text-red-500"
                      onClick={() => handleRemove(notification.id)}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button 
              className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-500"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
    </>
  );
}

export default Header;
                      
