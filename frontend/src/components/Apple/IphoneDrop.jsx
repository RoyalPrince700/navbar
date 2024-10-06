import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { NavLink } from 'react-router-dom'

const IphoneDrop = () => {
    const {iphoneDrop,setIphoneDrop} = useContext(SearchContext)
  return (
    <div
    onMouseEnter={() => setIphoneDrop(true)}
    onMouseLeave={() => setIphoneDrop(false)}
    className={`iphone absolute  h-[380px] right-0 left-0 top-0 w-full transition-all duration-300 ease-in-out z-10
      ${iphoneDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className='flex  pl-60 items-center text-white'>
                        <div className='flex gap-24 pt-6'>
                            <div className='flex flex-col gap-2'>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-[12px] text-slate-500 mb-2'>Explore iPhone</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Explore all iPhone</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPhone 15 Pro</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPhone 15</p></NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-2xl font-semibold text-slate-200'>iPhone 14</p></NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-2xl font-semibold text-slate-200'>iPhone 13</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-2xl font-semibold text-slate-200'>iPhone SE</p> </NavLink>

                            </div>

                            <div className='flex flex-col '>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>More from iPhone</p></NavLink>
                                <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[12px] text-slate-200'>iPhone Support</p></NavLink>
                        </div>
                            
                        </div>
                      
                  </div>
        
        </div>
  )
}

export default IphoneDrop