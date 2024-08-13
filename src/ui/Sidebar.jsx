import { Link } from "react-router-dom"
import { BsHouse } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { PiBook } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";


function Sidebar() {
  return (
      <div className="flex flex-col bg-slate-300 h-dvh ">
           <div className="flex items-center px-5 py-4 m-3 ml-5">
          <img src="/image.png" alt='logo' className="h-12" />
          </div>
          
          <div className="flex flex-col pl-3 gap-2 w-60 m-4 text-xl"> 
              <Link className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-2 items-center">
                  <BsHouse  fontSize={20}/>Home</Link>
              <Link className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center">
                  <SlPeople  fontSize={20}/>Trainers</Link>
              <Link className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center">
                  <PiBook  fontSize={20} /> Accounts</Link>
              <Link className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center">
                  <FaPeopleGroup fontSize={20} /> Attendance</Link>
              
                  <div className="">
                 <Link className="hover:bg-gray-100 py-2 px-5 rounded-md flex gap-1 items-center text-red-600">
                      <CiLogout color="red" fontSize={20} /> Log Out</Link>
              </div>
          </div>
    </div>
  )
}

export default Sidebar