import React from 'react';
import { TfiReload } from "react-icons/tfi";
import { SlOptionsVertical } from "react-icons/sl";
import { MdArrowDropDownCircle } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='absolute z-10 flex items-center justify-between w-[100%] px-6 bg-gradient-to-r from-blue-200'>
      <h1 className='text-3xl font-bold font-vibe'>CNAPP Dashboard</h1>
      <div>
        
      
<div style={{ display: 'flex' }}>

  <button className=" bg-gradient-to-r from-blue-500 hover:bg-blue-700 transition duration-200 ease-in-out text-white  py-2 px-7 rounded-md mr-2 border-2 border-blue-500 outline">
  <TfiReload size='18px' color='black'/>
</button>

  <button className="bg-gradient-to-r from-blue-500 hover:bg-blue-700 transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded mr-2 border-2 border-blue-500 outline"><SlOptionsVertical color='black' /></button>
 
  <button className="bg-gradient-to-r from-blue-500 hover:bg-blue-700 transition duration-200 ease-in-out text-gray-700 font-semibold py-2 px-4 rounded flex items-center  font-vibe  border-2 border-blue-500 ">
  <MdArrowDropDownCircle className="mr-2  " />
  Last 2 days
  <RiArrowDropDownFill  color='black' className="ml-2  " />
</button>

</div>


      </div>
    </div>
  );
};

export default Navbar;

