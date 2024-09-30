import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar

function SimpleCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dropdownInfo, setDropdownInfo] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  // Event data for specific dates
  const dateInfo = {
    'Sat Sep 14 2024': "Meeting with client XYZ at 2 PM",
    'Sun Sep 15 2024': 'Project deadline for ABC',
    'Tue Sep 17 2024': 'Team lunch at 12:30 PM',
    
    
    // Add more dates and corresponding information here
  };

  // Handle date selection
  const handleDateClick = (value, event) => {
    const clickedDate = value.toDateString(); // Format date as string

    // Check if clicked date has information
    const info = dateInfo[clickedDate] || 'No events for this date';

    // Set the dropdown info and position
    setDropdownInfo({
      date: clickedDate,
      info: info, // Use the actual info here
    });

    // Set dropdown position based on the clicked event
    setDropdownPosition({
      x: event.clientX,
      y: event.clientY,
    });

    // Set the selected date
    setSelectedDate(value);
  };

  // Function to add class to event dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toDateString();
      if (dateInfo[formattedDate]) {
        return 'bg-yellow-300 text-black font-bold rounded-full'; // Tailwind classes to highlight event dates
      }
      
    }
    return null; // No class for other dates
  };

  return (
    <div className="calendar-container relative flex justify-center items-center  ml-[700px] h-screen">
      <Calendar
        onClickDay={(value, event) => handleDateClick(value, event)}
        value={selectedDate}
        tileClassName={tileClassName} // Apply Tailwind class for event dates
        className="w-full max-w-xl mx-auto p-4 shadow-lg bg-white rounded-md"
      />

      {/* Dropdown with information */}
      {dropdownInfo && (
        <div
          className="bg-white p-4 rounded-lg shadow-lg border mr-[50px]"
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y}px`,
            // position: 'absolute', // Ensure the dropdown is positioned absolutely
          }}
        >
          <h3 className="text-lg font-bold mb-2">{dropdownInfo.date}</h3>
          <p>{dropdownInfo.info}</p>
          <button
            className="mt-2 text-blue-600 hover:underline"
            onClick={() => setDropdownInfo(null)} // Close the dropdown
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default SimpleCalendar;

//h