import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { NavLink } from 'react-router-dom'

const SupportDrop = () => {
    const  {supportDrop,setSupportDrop} = useContext(SearchContext)
  return (
    <div
    onMouseEnter={() => setSupportDrop(true)} onMouseLeave={() => setSupportDrop(false)}
    className={`iphone absolute  h-[320px] right-0 left-0 top-0 w-full transition-all duration-300 ease-in-out z-10
      ${supportDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    
    <div className='flex  pl-60 items-center text-white'>
          <div className='flex gap-24 pt-6'>
              <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-[12px] text-slate-500 mb-2'>Explore Support</p> </NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPhone</p> </NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Mac</p> </NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPad</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-2xl font-semibold text-slate-200'>Music</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] font-semibold text-slate-200'>Explore Support</p> </NavLink>
                  

              </div>

              <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>Get Help</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Community</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Check Coverage</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Contact Us</p></NavLink>

          </div>
          <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>Helpful Topics</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Apple Account and Password</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Billing & Subscriptions</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>Find My</p></NavLink>


          </div>
              
                        </div>
                      
                  </div>
    
    </div>
  )
}

export default SupportDrop