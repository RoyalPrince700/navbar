import React from 'react'
import { assets } from '../../assets/assets'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const CourseraNavBar = () => {
  return (
    <div className='py-3 border-b bg-white px-4 flex items-center justify-between sm:px-[31vw] md:px-[3vw] lg:px-[4vw]'>
        <div className='flex items-center gap-2'>
          <img src={assets.courseraLogo} className='h-5' alt="" />

          {/* explore button */}
            <button className='text-blue-800 ml-2 font-semibold border flex items-center gap-2 border-blue-800 py-2 px-3 rounded'>Explore 
                <span><MdOutlineKeyboardArrowDown className='text-xl text-blue-500'/></span></button>

                {/* serach */}
                <div className='flex w-full'>
                     <div className='flex justify-between pl-3 pr-1 border rounded-full w-[475px] py-1'>
                         <input type="text" placeholder='What do you want to learn?' className='border-none text-sm w-full text-black' />
                            <div className='bg-blue-800 p-2 rounded-full'>
                                <CiSearch className='text-white  text-xl'/>
                            </div>

                     </div>

                 </div>
        </div>

        <div className='flex gap-5 items-center font-thin text-[14px]'>
            <p>Online Degrees</p>
            <p>Find your New Career</p>
            <p className='text-blue-800 font-normal'>Log In</p>
            <button className='text-blue-800 font-semibold border border-blue-800 py-2 px-2 rounded'>Join for Free</button>
        </div>
       

    </div>
  )
}

export default CourseraNavBar