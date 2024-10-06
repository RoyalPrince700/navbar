import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Link, NavLink } from 'react-router-dom'

const MacDrop = () => {
    const {macDrop,setMacDrop} = useContext(SearchContext)
  return (
    <div onMouseLeave={()=>setMacDrop()} className=' iphone absolute right-0 left-0 top-12 transition-all h-[450px] 
 
    '>
       <div className='flex  pl-60 items-center text-white'>
       <p className='text-white'>hello</p> <Link to={'/'} className='text-white'>hello</Link>
            <div className='flex gap-28 pt-6'>
                <p >Hello</p>  <Link to='/'>hello</Link>
                <div className='flex flex-col gap-2'>
                    <Link to='/contact' className='cursor-pointer'>  <p className='text-[12px] text-slate-500 mb-2 cursor-pointer'>Explore Mac</p> </Link>
                    <Link to='/about' > <p className='text-2xl font-semibold text-slate-200 cursor-pointer'>Explore all Mac</p> </Link>
                    <Link to='/' onClick={()=>setMacDrop(true)}> <p className='text-2xl font-semibold text-slate-200'>MacBook Air</p> </Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>MacBook Pro</p></Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}>  <p className='text-2xl font-semibold text-slate-200'>iMac</p></Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}><p className='text-2xl font-semibold text-slate-200'>Mac Mini</p> </Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Mac Studio</p></Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}><p className='text-2xl font-semibold text-slate-200'>Mac Pro</p></Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Displays</p></Link>
                </div>

                <div className='flex flex-col '>
                    <Link to='/' onClick={()=>setMacDrop(false)}> <p className='text-[12px] text-slate-500 mb-3'>More from Mac</p></Link>
                    <Link to='/' onClick={()=>setMacDrop(false)}><p className='text-[12px] text-slate-200'>Mac Support</p></Link>
            </div>
                
            </div>
          
       </div>
     
    </div>
  )
}

export default MacDrop