import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const NavDropDown = () => {
  const { dropVisible, setDropVisible, dropdownRef } = useContext(SearchContext); // Access the dropdownRef from context

  return (
    <div
      ref={dropdownRef} // Attach the ref to the dropdown container
      className={`absolute left-[1080px] pt-0 transition-all ${
        dropVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
    >
      <div className="bg-gray-50 w-60 flex flex-col px-2 py-3 rounded text-gray-400">
        <NavLink
          to="/"
          onClick={() => setDropVisible(false)} // Close dropdown on click
          className="border-b gap-4 flex flex-col items-center"
        >
          <button className="bg-orange-500 hover:bg-orange-700 shadow-sm items-center text-white mb-1 py-2 px-16 font-semibold rounded">
            SIGN IN
          </button>
          <hr className="border-none bg-gray-300 w-full h-[0.5px]" />
        </NavLink>

        <NavLink
          to="/"
          onClick={() => setDropVisible(false)} // Close dropdown on click
          className="text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer"
        >
          <CgProfile className="text-3xl" />
          <p>My Account</p>
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setDropVisible(false)} // Close dropdown on click
          className="text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer"
        >
          <FiShoppingBag className="text-3xl" />
          <p>Orders</p>
        </NavLink>
        <NavLink
          to="/"
          onClick={() => setDropVisible(false)} // Close dropdown on click
          className="text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer"
        >
          <img src={assets.like} className="h-6 text-gray-600" alt="" />
          <p>Saved Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavDropDown;
