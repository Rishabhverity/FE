import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { FaPeopleGroup } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BsPersonLinesFill } from "react-icons/bs";



function Sidebar () {
  return (
    <div className='bg-gradient-to-t from-blue-500 to-blue-50 ... fixed top-0 left-0 h-full flex flex-row '>
    <aside style={sidebarStyle}>
    
    <Link to="/">
          <img src='./verity.png' alt="Logo" />
        </Link>


    <div className="flex flex-col pl-3 gap-2 w-55 m-4 text-xl"> 
              <Link to="/" className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-2 items-center">
                  <BsHouse  fontSize={20}/>Home</Link>

              <Link to="/attendance"  className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center">
                  <FaPeopleGroup fontSize={20} /> Attendance</Link>

                  <Link to="/Profile"  className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center">
                  <BsPersonLinesFill  fontSize={20} /> Profile</Link>

                  <div className="absolute inset-x-25 bottom-10 ">
                 <Link to="/logout" className="hover:bg-gray-100 py-2 px-5 rounded-md  gap-1 items-center text-red-600 flex  ">
                      <CiLogout color="red" fontSize={20} /> Log Out</Link>
              </div>
              </div>
    </aside>
    </div>
  );
};

const sidebarStyle = {
  width: '270px',
  backgroundColor: 'bg-gradient-to-r from-indigo-500 ...',
  height: '120vh',
  padding: '15px',
  boxSizing: 'border-box',
  
  left: '0',
  top: '0'
};

const listStyle = {
  listStyleType: 'none',
  padding: '0'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  display: 'block',
  padding: '10px 0',
  fontSize: '20px',
};



export default Sidebar;