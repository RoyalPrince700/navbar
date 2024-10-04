import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'

const NavBar = () => {

  const {setShowSearch,setVisible,} = useContext(SearchContext)
  return (
    <div className=' flex items-center py-7 font-medium justify-between border-b sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
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
        <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
         



        <Link to='/login' className='group relative'>
        <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='absolute right-0 pt-9 group-hover:block hidden '>
            <div className='bg-gray-50 w-36 flex flex-col px-5 gap-2 py-3 rounded text-gray-400'>
                <p className='hover:text-black cursor-pointer'>My Profile</p>
                <p className='hover:text-black cursor-pointer'>My Orders</p>
                <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </Link>

        <Link to='/cart' className='relative'>
        <img className='w-5 cursor-pointer' src={assets.cart_icon} alt="" />
          <p className='absolute bg-black text-white w-4 text-center text-[8px] leading-4 right-[-5px] bottom-[-5px] aspect-square items-center rounded-full'>10</p>
        </Link>


        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='sm:hidden w-5' alt="" />
      </div>

          {/*------mobile version----------  */}
        {/* <div className={`absolute bg-white right-0 bottom-0 top-0 transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 px-2 py-5'>
              <div onClick={()=>setVisible(false)} className='flex gap-4 p-3 items-center'>
                <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                <p>Back</p>
              </div>


              <NavLink onClick={()=>setVisible(false)} to='/' className='border px-6 py-3'>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)} to='/collection' className='border px-6 py-3'>COLLECTION</NavLink>
              <NavLink onClick={()=>setVisible(false)} to='/about' className='border px-6 py-3'>ABOUT</NavLink>
              <NavLink onClick={()=>setVisible(false)} to='/contact' className='border px-6 py-3'>CONTACT</NavLink>
            </div>
        </div> */}

    </div>
  )
}

export default NavBar