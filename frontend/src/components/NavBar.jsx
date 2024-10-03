import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' flex items-center py-7 font-medium justify-between border-b'>
     <Link to={'/'}><img className='w-36' src={assets.logo} alt="" /></Link> 

     <ul className='sm:flex items-center gap-6 hidden '>

            <NavLink to='/' className='flex items-center flex-col'>
                <p className='cursor-pointer'>HOME</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-black hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex items-center flex-col'>
                <p className='cursor-pointer'>COLLECTION</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-black hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex items-center flex-col'>
                <p className='cursor-pointer'>ABOUT</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-black hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex items-center flex-col'>
                <p className='cursor-pointer'>CONTACT</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-black hidden'/>
            </NavLink>
     </ul>

     <div className='flex items-center gap-5'>
        <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />

        <div className='group relative'>
        <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='absolute right-0 pt-4 group-hover:block hidden '>
            <div className='bg-gray-50 w-36 flex flex-col px-5 gap-2 py-3 rounded text-gray-400'>
                <p className='hover:text-black cursor-pointer'>My Profile</p>
                <p className='hover:text-black cursor-pointer'>My Orders</p>
                <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>

        <div className='relative'>
        <img className='w-5 cursor-pointer' src={assets.cart_icon} alt="" />
          <p className='absolute bg-black text-white w-4 text-center text-[8px] leading-4 right-[-5px] bottom-[-5px] aspect-square items-center rounded-full'>10</p>
        </div>
      </div>

    </div>
  )
}

export default NavBar