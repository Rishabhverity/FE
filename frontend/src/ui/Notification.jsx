import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";

function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Notification Title 1", message: "This is a notification message." },
    { id: 2, title: "Notification Title 2", message: "This is another notification message." },
    // Add more notifications as needed
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Notifications"
      >
        <AiOutlineBell size={24} />
      </button>

      {isOpen && notifications.length > 0 && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-blue-200 z-10">
          <div className="p-4 text-gray-800 font-bold border-b border-gray-200">
            Notifications
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="p-4 border-b border-gray-200 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-800">{notification.title}</p>
                  <p className="text-gray-600 text-sm">{notification.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="text-red-600 border border-red-300 hover:bg-red-50 hover:text-red-700 rounded-md p-1 transition-colors"
                  aria-label="Remove notification"
                >
                  OK
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;


