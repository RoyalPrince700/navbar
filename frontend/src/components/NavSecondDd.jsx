import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { CgProfile } from 'react-icons/cg'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { IoHelpCircleOutline } from "react-icons/io5";
import { BsChatLeftDots } from "react-icons/bs";




const NavDropDownSecond = () => {


const {dropVisibleSecond,setDropVisibleSecond} = useContext(SearchContext)




  return (
   
    <div className={`absolute left-[1250px] pt-0 transition-all ${dropVisibleSecond ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                            <div className='bg-gray-50 w-48 flex flex-col    rounded text-gray-400'>
                               

                                    <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                           
                                                <p >Help Center</p>
                                    </NavLink>
                                    <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                          
                                                <p >Place an order</p>
                                    </NavLink>
                                    <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                          
                                                <p >Payment Options</p>
                                    </NavLink>
                                    <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                          
                                          <p >Track an order</p>
                              </NavLink>
                              <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                          
                                          <p >Cancel an order</p>
                              </NavLink>
                              <NavLink to='/' onClick={()=>setDropVisibleSecond(false)} className='text-gray-600 font-normal hover:font-semibold flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>
                                          
                                          <p >Return and refund</p>
                              </NavLink>
                              <NavLink to='/' onClick={()=>setDropVisible(false)} className=' gap-3 flex flex-col '>
                              <hr className='border-none bg-gray-300 w-44 h-[0.5px]'/>
             <button  className='bg-orange-500 hover:bg-orange-700 shadow-sm flex w-44 gap-3 justify-center items-center text-white mb-1 py-2  
             font-semibold rounded'><BsChatLeftDots/>LIVE CHAT</button>
                               
                                </NavLink>
                                </div>

                        </div>
  )
}

export default NavDropDownSecond