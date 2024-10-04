
import React, { useState } from 'react'
import { IoTime } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { RiVidiconLine } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";


 
const AttendanceTable = () => {
    // Initial state for the table rows
    const [rows, setRows] = useState([
      { sNo: 1, name: 'John', id: 'B101', present: '', comment: '' },
      { sNo: 2, name: 'Joseph', id: 'B102', present: '', comment: '' },
      { sNo: 3, name: 'Kate', id: 'B103', present: '', comment: '' }
    ]);
  
    // Handler to add a new row
    const addRow = () => {
      setRows([
        ...rows,
        {
          sNo: rows.length + 1, // Increment serial number
          name: '', // Default empty values
          id: '',
          present: '',
          comment: ''
        }
      ]);
    };
  
    // Handler to update row data
    const handleRowChange = (index, key, value) => {
      const updatedRows = [...rows];
      updatedRows[index][key] = value;
      setRows(updatedRows);
    };
  



return (
    <div className='ml-[270px] mt-[90px]'>
<div className='text-black font-serif text-6xl text-center ms-5  '><u>More Details</u>
<h1 className='text-left mt-10 text-4xl flex '> <IoTime className='mr-4'/><u>Time</u>: 9:00 PM </h1>
<h1 className='text-left mt-10 text-4xl flex'> <MdOutlineDateRange className='mr-4'/><u>Date</u>: 1st Oct 2024-2nd Oct 2024</h1>
<h2 className='text-left mt-10 text-4xl flex'><RiVidiconLine className='mr-4'/><u>Mode</u>: Offline</h2>
<h2 className='text-left mt-10 text-4xl flex'><IoPeople className='mr-4'/><u>Number Of Students</u>: 20</h2>
<h2 className='text-center mt-10 text-4xl mb-8'><u>Attendance</u></h2>




<div className=' flex justify-center items-stretch'>
<table class="table-auto text-2xl bg-neutral-200">
<thead>
<tr className='py-4 bg-gradient-to-t from-neutral-400 to-neutral-50 ...' >
  <th className='border-separate border border-slate-600 ... p-10'>s.No</th>
  <th className='border border-slate-600 ... p-10 '>Name</th>
  <th className='border border-slate-600 ... p-10'>ID</th>
  <th className='border border-slate-600 ... p-10'>Present/Absent</th>
  <th className='border border-slate-600 ... p-10'>Remark</th>

</tr>
</thead>
<tbody>
{rows.map((row, index) => (
          <tr key={index}>
            <td className='border border-slate-600 p-10'>{row.sNo}</td>
            <td className='border border-slate-600 p-10'>
              <input
                type='text'
                value={row.name}
                onChange={(e) => handleRowChange(index, 'name', e.target.value)}
                className='w-full'
              />
            </td>
            <td className='border border-slate-600 p-10'>
              <input
                type='text'
                value={row.id}
                onChange={(e) => handleRowChange(index, 'id', e.target.value)}
                className='w-full'
              />
            </td>
            <td className='border border-slate-600 p-10'>
              <input
                type='radio'
                name={`attendance-${index}`}
                value='present'
                checked={row.present === 'present'}
                onChange={() => handleRowChange(index, 'present', 'present')}
              /> Present
              <input
                type='radio'
                name={`attendance-${index}`}
                value='absent'
                checked={row.present === 'absent'}
                onChange={() => handleRowChange(index, 'present', 'absent')}
              /> Absent
            </td>
            <td className='border border-slate-600 p-10'>
              <textarea
                value={row.comment}
                onChange={(e) => handleRowChange(index, 'comment', e.target.value)}
                rows='2'
                cols='15'
                className='w-full'
                placeholder='Comment here...'
              />
            </td>
          </tr>
        ))}
      </tbody>
      </table>
</div>
<button
        onClick={addRow}
        className='mt-4 p-3 bg-gray-400 text-black rounded text-base hover:bg-gray-500'
      >
        Add More Names
      </button>

    </div>
   </div>
  )
}
// export default MoreDetails;
export default AttendanceTable;