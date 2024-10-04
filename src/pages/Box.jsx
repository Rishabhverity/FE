import React from 'react'
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";

 function Box() {
  return (
    <div className=' flex-row ml-[270px]  flex-wrap space-x-10 items-center grid grid-cols-3 gap-4 '>
     <article className="bg-white border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-4 grid-cols-1 ms-40 max-w-64 max-h-64 mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>1:00PM</time>
        <h2 className='font-bold text-[22px]'>CLASS NAME 01 </h2>
        <p>Mode: ON/OFF <br />
        No. of students :</p>
        <button type='button ' className='border ring-slate-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500 '>
        <Link to="/trainer-dashboard/MoreDetails" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center  ">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article>
     <div>
     <article className="bg-white  border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-4 grid-cols-1 ms-20 max-w-64 max-h-64 mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>3:00PM</time>
        <h2 className='font-bold text-[22px]'> CLASS NAME 02</h2>
        <p>Mode: ON/OFF <br />
        No. of students : </p>
        <button type='button ' className='border ring-stone-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500'>
        <Link to="/trainer-dashboard/MoreDetails3" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article>
     

    </div>
    <div>
     <article className="bg-white  border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-4 grid-rows-2 ms-10 max-w-64 max-h-64 mt-10  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>4:00PM</time>
        <h2 className='font-bold text-[22px]'> CLASS NAME 03</h2>
        <p>Mode: ON/OFF<br />
        No. of students :</p>
        <button type='button ' className='border ring-stone-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500 '>
        <Link to="/trainer-dashboard/MoreDetails4" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center ">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article>
     

    </div>




    <div className='flex flex-wrap'>
     <article className="bg-white border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-3 grid-cols-1 ms-[115px] max-w-64 max-h-64 mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>5:00PM</time>
        <h2 className='font-bold text-[22px]'> CLASS NAME 04</h2>
        <p>Mode: ON/OFF<br />
        No. of students :</p>
        <button type='button ' className='border ring-stone-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500'>
        <Link to="/trainer-dashboard/MoreDetails5" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article> 
    

    </div>
    <div>
     <article className="bg-white border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-4 grid-cols-1 ms-20 max-w-64 max-h-64 mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>7:00PM</time>
        <h2 className='font-bold text-[22px]'> CLASS NAME 05</h2>
        <p>Mode: ON/OFF <br />
        No. of students : </p>
        <button type='button ' className='border ring-stone-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500'>
        <Link to="/trainer-dashboard/Moredetails7" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article>
     

    </div>
    <div>
     <article className="bg-white border-8 border-blue-600 rounded-lg shadow-md p-4 w-96 h-96 grid gap-x-8 gap-y-4 grid-cols-1 ms-10 max-w-64 max-h-64 mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ...">
        <time className='font-bold text-[36px] text-center'>9:00PM</time>
        <h2 className='font-bold text-[22px]'> CLASS NAME 06</h2>
        <p>Mode: ON/OFF<br />
        No. of students :</p>
        <button type='button ' className='border ring-stone-100 bg-gradient-to-r from-blue-700 to-blue-300 ... text-white hover:bg-slate-500'>
        <Link to="/trainer-dashboard/MoreDetails9" className="hover:bg-slate-500 py-2 px-5 rounded-md flex gap-2 items-center">
        <CgDetailsMore  fontSize={20}/>More Details</Link></button>
     </article>
     

    </div>



    </div>
    
  )
}


export default Box;



