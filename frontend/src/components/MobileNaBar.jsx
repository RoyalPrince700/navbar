import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'



const MobileNaBar = () => {

  const {visible,setVisible} = useContext(SearchContext)

  return (
    <div className={`absolute bg-white right-0 bottom-0 top-0 transition-all ${visible ? 'w-full' : 'w-0'}`}>
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
        </div>
  )
}

export default MobileNaBar