import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SearchContext } from '../context/SearchContext';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const JumiaNavBar = () => {
  const {
    dropVisible,
    arrowRotated,
    toggleDropdown,
    arrowRotatedSecond,
    toggleDropdownSecond,
    dropdownRef, // Get dropdownRef from the context
    dropdownRefSecond, // Get dropdownRefSecond from the context
  } = useContext(SearchContext);

  return (
    <div className="w-full bg-white shadow-md flex flex-col">
      <div className="sm:px-[5vw] md:px-[7vw] lg:px-[10vw] px-6 flex items-center justify-between">
        
        <div className='flex items-center gap-3 sm:gap-7'>
        <GiHamburgerMenu className='lg:hidden flex text-3xl'/>

            <img src={assets.jumialogo} className="w-28 lg:w-36 lg:min-w-36" alt="" />
        </div>
     

         {/* tab and mobile */}

      <div className="lg:hidden flex items-center gap-5 md:gap-8">
          {/* Account dropdown */}
          <ul onClick={() => toggleDropdown(true)}>
            <div ref={dropdownRef} className="relative group"> {/* Attach dropdownRef here */}
              <div className="font-semibold flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                <CgProfile className="text-3xl" />
              
              </div>
            </div>
          </ul>

                {/* cart */}
          <div className='flex items-center gap-3 hover:text-orange-500 cursor-pointer'>
                  <div className='relative'>
                        <MdOutlineShoppingCart className='text-2xl'/>
                    <p className='absolute top-[-6px] right-[-5px] text-white text-[10px] px-1 font-bold  bg-orange-500 aspect-square rounded-full leading-4 text-center'>1</p>
                  </div>
                 
          </div>
        </div>

            {/* search bar */}
        <div className="lg:flex w-3/4 gap-2 mr-4 ml-20 hidden">
          <div className="inline-flex py-2 px-3 border border-gray-400 rounded items-center w-[35vw]">
            <ImSearch className="text-gray-500" />
            <input
              type="text"
              className="w-full font-semibold outline-none bg-inherit pl-3"
              placeholder="Search products, brands and categories"
            />
          </div>
          <button className="bg-orange-500 shadow-lg text-white py-2 px-4 font-semibold rounded">
            SEARCH
          </button>
        </div>
        <div className="lg:flex items-center gap-3 hidden">
          {/* Account dropdown */}
          <ul onClick={() => toggleDropdown(true)}>
            <div ref={dropdownRef} className="relative group"> {/* Attach dropdownRef here */}
              <div className="font-semibold flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                <CgProfile className="text-3xl" />
                <p>Account</p>
                <MdKeyboardArrowDown
                  className={`transition-transform duration-300 ${
                    arrowRotated ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </ul>

          {/* Help dropdown */}
          <ul onClick={() => toggleDropdownSecond(true)}>
            <div ref={dropdownRefSecond} className="relative group"> {/* Attach dropdownRefSecond here */}
              <div className="font-semibold flex items-center gap-2 hover:text-orange-500 cursor-pointer">
                <IoHelpCircleOutline className="text-3xl" />
                <p>Help</p>
                <MdKeyboardArrowDown
                  className={`transition-transform duration-300 ${
                    arrowRotatedSecond ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </ul>
                {/* cart */}
          <div className='flex items-center gap-3 hover:text-orange-500 cursor-pointer'>
                  <div className='relative'>
                        <MdOutlineShoppingCart className='text-2xl'/>
                    <p className='absolute top-[-6px] right-[-5px] text-white text-[10px] px-1 font-bold  bg-orange-500 aspect-square rounded-full leading-4 text-center'>1</p>
                  </div>
                  <p className='font-semibold'> Cart</p>
          </div>
        </div>

         
      </div>

     
  {/* search bar */}
  <div className="lg:hidden w-full gap-2  flex pb-2 ml-5">
          <div className="inline-flex py-1 px-3 border border-gray-400 rounded-full items-center w-[90vw]">
            <ImSearch className="text-gray-500" />
            <input
              type="text"
              className="w-full font-semibold text-sm outline-none bg-inherit pl-3"
              placeholder="Search products, brands and categories"
            />
          </div>
         
        </div>

        

    </div>
  );
};

export default JumiaNavBar;
