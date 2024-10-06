import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Link, NavLink } from 'react-router-dom'

const IpadDrop = () => {
    const {ipadDrop,setIpadDrop} = useContext(SearchContext)

  return (
    <div
        onMouseEnter={() => setIpadDrop(true)}
        onMouseLeave={() => setIpadDrop(false)}
        className={`iphone absolute  h-[350px] right-0 left-0 top-0 w-full transition-all duration-300 ease-in-out z-10
          ${ipadDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className='flex  pl-60 items-center text-white'>
                        <div className='flex gap-32 pt-6'>
                            <div className='flex flex-col gap-2'>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}>  <p className='text-[12px] text-slate-500 mb-2'>Explore iPad</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Explore all iPad</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPad Pro</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>iPad Air</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}>  <p className='text-2xl font-semibold text-slate-200'>iPad</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}><p className='text-2xl font-semibold text-slate-200'>iPad Mini</p> </NavLink>
                            </div>

                            <div className='flex flex-col '>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>More from iPad</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}><p className='text-[12px] text-slate-200'>iPad Support</p></NavLink>
                        </div>
                            
                        </div>
                      
                  </div>
        </div>
  )
}

export default IpadDrop