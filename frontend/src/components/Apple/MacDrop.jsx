import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { NavLink } from 'react-router-dom'

const MacDrop = () => {
    const {macDrop,setMacDrop} = useContext(SearchContext)
  return (
    // <div onMouseEnter={()=>setMacDrop(false)} onMouseLeave={()=>setMacDrop()} className={`iphone absolute right-0 left-0 top-12 transition-all h-[450px] 
    // ${macDrop ? 'opacity-100' : 'opacity-0'}`}>
    <div
  onMouseEnter={() => setMacDrop(true)}
  onMouseLeave={() => setMacDrop(false)}
  className={`iphone absolute  h-[450px] right-0 left-0 top-0 w-full transition-all duration-300 ease-in-out z-10
    ${macDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
       <div className='flex  pl-60 items-center text-white'>
            <div className='flex gap-32 pt-6'>
                <div className='flex flex-col gap-2'>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}>  <p className='text-[12px] text-slate-500 mb-2'>Explore Mac</p> </NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Explore all Mac</p> </NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>MacBook Air</p> </NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>MacBook Pro</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}>  <p className='text-2xl font-semibold text-slate-200'>iMac</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-2xl font-semibold text-slate-200'>Mac Mini</p> </NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Mac Studio</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-2xl font-semibold text-slate-200'>Mac Pro</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Displays</p></NavLink>
                </div>

                <div className='flex flex-col '>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>More from Mac</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-[12px] text-slate-200'>Mac Support</p></NavLink>
            </div>
                
            </div>
          
       </div>
    </div>
  )
}

export default MacDrop