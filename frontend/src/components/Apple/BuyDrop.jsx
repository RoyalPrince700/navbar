import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Link, NavLink } from 'react-router-dom'

const BuyDrop = () => {
    const {buyDrop,setBuyDrop} = useContext(SearchContext)
  return (
    <div
    onMouseEnter={() => setBuyDrop(true)} onMouseLeave={() => setBuyDrop(false)}
    className={`iphone absolute  h-[250px] right-0 left-0 top-0 w-full transition-all  duration-300 ease-in-out z-10
      ${buyDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}> 

<div className='flex  pl-64 items-center pt-6 text-white'>
           
                <div className='flex flex-col gap-2'>
                    <NavLink to='/' onClick={()=>setBuyDrop(false)}>  <p className='text-[12px] text-slate-300 mb-2'>Explore</p> </NavLink>
                    <NavLink to='/' onClick={()=>setBuyDrop(false)}> <p className='text-2xl font-semibold text-slate-200'>Authorized Resellers</p> </NavLink>
                    <NavLink to='/' onClick={()=>setBuyDrop(false)}> <p className='text-2xl font-semibold text-slate-200 mb-8'>Service & Support</p> </NavLink>
                    <NavLink to='/' onClick={()=>setBuyDrop(false)}><p className='text-[12px] text-slate-200'>Billing & Subscriptions</p></NavLink>
                 
                </div>

              
                
            </div>
          
      </div>

  
  )
}

export default BuyDrop