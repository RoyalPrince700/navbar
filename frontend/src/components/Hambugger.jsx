import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { SearchContext } from '../context/SearchContext'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FiShoppingBag } from 'react-icons/fi';
import { BsChatLeftDots } from "react-icons/bs";
import { LuTicket } from "react-icons/lu";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { CiApple } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { MdStars } from "react-icons/md";


const Hambugger = () => {
const {mobileVisible,setMobileVisible} = useContext(SearchContext)

  return (
    <div className={`bg-white  left-0 top-0 mb-16 bottom-0  h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 ${mobileVisible ? 'w-[85vw]' : 'w-0'}`}>
        <div className='px-5 md:px-10 flex items-center  gap-6'>
            <img src={assets.cross_icon} onClick={() => setMobileVisible(false)} className='h-4 cursor-pointer' alt="" />
            <img src={assets.jumialogo} className='w-28' alt="" />   
        </div>
<hr className='border-none h-[0.5px] w-full bg-gray-200 mb-2' />


        {/* Mobile Menu Items */}
     <div className="overflow-y-auto h-[calc(100vh-64px)]"> {/* Adjust height based on your header/footer */}     
        <NavLink to="/" className='flex items-center justify-between mb-2 md:px-10' onClick={() => setMobileVisible(false)}>
                <p className="py-2 px-5 hover:text-orange-500 text-gray-500 ">NEED HELP?</p>
                <IoIosArrowForward className='text-xl text-gray-500'/>

                </NavLink>
            <hr className='border-none h-[0.5px] w-full mb-2 bg-gray-200' />

            <NavLink to="/" className='flex items-center justify-between mb-2 md:px-10' onClick={() => setMobileVisible(false)}>
                <p className="py-2 px-5 hover:text-orange-500 text-gray-500 ">MY JUMIA ACCOUNT</p>
                <IoIosArrowForward className='text-xl text-gray-500'/>

                </NavLink>

                <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <FiShoppingBag className="text-3xl" />
                    <p>Orders</p>
                 </NavLink>

                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <BsChatLeftDots className="text-3xl" />
                    <p>Pending Reviews</p>
                 </NavLink>

                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <LuTicket className="text-3xl" />
                    <p>Voucher</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-6 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <img src={assets.like} className='w-7' alt="" />
                    <p>Saved Items</p>
                 </NavLink>
            <hr className='border-none h-[0.5px] w-full mb-2 bg-gray-200' />

            <div className='flex justify-between px-5 items-center py-2'>
                <p className='text-gray-400 text-[14px]'>OUR CATEGORIES</p>
                <p className='text-orange-500'>See All</p>
            </div>
            <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <IoPhonePortraitSharp className="text-3xl" />
                    <p>Phone and Tablet</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <FiTv className="text-3xl" />
                    <p>Appliances</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <FiTv className="text-3xl" />
                    <p>Electronics</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <CiApple className="text-3xl" />
                    <p>Supermarket</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <GiLipstick className="text-3xl" />
                    <p>Health & Beauty</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdOutlineHomeWork className="text-3xl" />
                    <p>Home & Office</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <CiHome className="text-3xl" />
                    <p>Power</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <LuTicket className="text-3xl" />
                    <p>Computing</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <GiClothes className="text-3xl" />
                    <p>Women's Fashion</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <GiClothes className="text-3xl" />
                    <p>Men's Fashion</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <GiClothes className="text-3xl" />
                    <p>Baby Products</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <LuTicket className="text-3xl" />
                    <p>Gaming</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <LuTicket className="text-3xl" />
                    <p>Sporting Goods</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <FiTv className="text-3xl" />
                    <p>Automobile</p>
                 </NavLink>

                 <hr className='border-none h-[0.5px] w-full mb-2 bg-gray-200' />

                 
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdStars className="text-3xl" />
                    <p>J-Force</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdStars className="text-3xl" />
                    <p>Pay Airtime & Bills</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdStars className="text-3xl" />
                    <p>Pay Electricity & Bills</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdStars className="text-3xl" />
                    <p>Pay Internet Bills</p>
                 </NavLink>
                 <NavLink
                    to="/" onClick={() => setMobileVisible(false)} // Close dropdown on click
                    className="text-gray-500 font-normal hover:font-semibold flex items-center gap-2  py-5 px-5 hover:bg-orange-400 hover:text-black cursor-pointer"
                    >
                      <MdStars className="text-3xl" />
                    <p>Buy Data</p>
                 </NavLink>

                 <hr className='border-none h-[0.5px] w-full mb-2 bg-gray-200' />
            <div className='flex px-5 text-gray-500 py-5 gap-3 flex-col'>
                <p>Sell on Jumia</p>
                <p>Service Center</p>
                <p>Contact Us</p>
            </div>

    {/* Add more mobile menu items here as needed */}
    </div>

    

  </div>
  )
}

export default Hambugger