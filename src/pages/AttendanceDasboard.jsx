import React from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import { attendanceData } from "../data/attendance";


function Attendance() {
  
  
  // return (
  //   <div className='flex flex-row'>
  //   <Sidebar/>
  //   <div>
        
  //       <Header />
        
  //   </div>
  //   </div>
     const [selectedClient, setSelectedClient] = useState(null);
     const [showModal, setShowModal] = useState(false);
   
     const handleRowClick = (client) => {
       setSelectedClient(client);
       setShowModal(true);
     };
   
     const toggleAttendance = (index) => {
       const updatedAttendance = [...selectedClient.attendance];
       updatedAttendance[index].present = !updatedAttendance[index].present;
       setSelectedClient({ ...selectedClient, attendance: updatedAttendance });
     };
   
     return (
      
       <div className="p-8 ml-[275px] mt-[90px]">
         <h2 className="text-2xl font-semibold text-gray-700 mb-6">Attendance</h2>
         <div className="overflow-x-auto">
           <table className="min-w-full bg-white border border-gray-200 shadow-md">
             <thead>
               <tr className="bg-blue-50">
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Client Name</th>
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Designation</th>
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Email</th>
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Date of Training</th>
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Participants</th>
                 <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Trainer Name</th>
               </tr>
             </thead>
             <tbody>
               {attendanceData.map((client, index) => (
                 <tr
                   key={index}
                   className="hover:bg-blue-100 cursor-pointer"
                   onClick={() => handleRowClick(client)}
                 >
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.client_name}</td>
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.designation}</td>
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.email}</td>
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.date_of_training}</td>
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.number_of_participants}</td>
                   <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{client.trainer_name}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
   
         {showModal && (
           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
             <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance for {selectedClient.client_name}</h3>
               <div className="overflow-x-auto">
                 <table className="min-w-full bg-white border border-gray-200 shadow-md">
                   <thead>
                     <tr className="bg-blue-50">
                       <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">S. No.</th>
                       <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Name</th>
                       <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">ID</th>
                       <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">Present/Absent</th>
                     </tr>
                   </thead>
                   <tbody>
                     {selectedClient.attendance.map((student, index) => (
                       <tr key={index} className="hover:bg-blue-50">
                         <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{student.s_no}</td>
                         <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{student.name}</td>
                         <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{student.id}</td>
                         <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">
                           <label className="inline-flex items-center">
                             <input
                               type="checkbox"
                               className="form-checkbox text-blue-600"
                               checked={student.present}
                               onChange={() => toggleAttendance(index)}
                             />
                             <span className="ml-2">{student.present ? "Present" : "Absent"}</span>
                           </label>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <div className="mt-4 text-right">
                 <button
                   onClick={() => setShowModal(false)}
                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                 >
                   Close
                 </button>
               </div>
             </div>
           </div>
         )}
       </div>
     );
   }
  

export default Attendance;