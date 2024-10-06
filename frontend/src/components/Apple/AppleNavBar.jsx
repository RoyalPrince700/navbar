import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { SearchContext } from '../../context/SearchContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const AppleNavBar = () => {
    const { setMacDrop, setIpadDrop , setIphoneDrop,setSupportDrop,setBuyDrop,setAppleSearch,setMacMobile } = useContext(SearchContext);
    const [appleMobile,setAppleMobile] = useState(false)

      // Add/Remove 'overflow-hidden' to/from body when mobile nav is opened/closed
      useEffect(() => {
        if (appleMobile) {
            document.body.classList.add('overflow-x-hidden');
        } else {
            document.body.classList.add('overflow-x-hidden');
        }
    }, [appleMobile]);

    return (
     
            <div className='flex items-center justify-between z-50 text-slate-300  py-3 px-4 sm:px-[5vw] md:px-[8vw] lg:px-[17vw]'>
                <Link to='/'>
                    <img src={assets.appleLogo} className='h-4' alt="" />
                </Link>

                <div className='lg:flex hidden justify-between w-2/3'>
                        {/* Mac Dropdown */}
                        <div 
                    onMouseEnter={() => {
                        setMacDrop(true)
                        setIpadDrop(false)
                        setIphoneDrop(false)
                        setSupportDrop(false)
                        setBuyDrop(false)
                        setAppleSearch(false)
                    }}
                   
                    className='relative'
                >
                    <NavLink to='/' onClick={()=>setMacDrop(false)}>
                        <p className='text-[12px]'>Mac</p>
                    </NavLink>
                  
                </div>

                {/* iPad Dropdown */}
                <div 
                     onMouseEnter={() => {
                        setMacDrop(false)
                        setIpadDrop(true)
                        setIphoneDrop(false)
                        setSupportDrop(false)
                        setBuyDrop(false)
                        setAppleSearch(false)
                    }}
                   
                    className='relative'
                >
                       <NavLink to='/' onClick={()=>setIpadDrop(false)}>
                        <p className='text-[12px]'>iPad</p>
                    </NavLink>
                 
                </div>

                {/* iPhone Dropdown */}
                <div 
                   onMouseEnter={() => {
                    setMacDrop(false)
                    setIpadDrop(false)
                    setIphoneDrop(true)
                    setSupportDrop(false)
                    setBuyDrop(false)
                    setAppleSearch(false)
                }} 
                  
                    className='relative'
                >
                      <NavLink to='/' onClick={()=>setIphoneDrop(false)}>
                        <p className='text-[12px]'>iPhone</p>
                    </NavLink>
                   
                </div>

                <div 
                   onMouseEnter={() => {
                    setMacDrop(false)
                    setIpadDrop(false)
                    setIphoneDrop(false)
                    setSupportDrop(true)
                    setBuyDrop(false)
                    setAppleSearch(false)
                }}
                  
                    className='relative'
                >
                  <NavLink to='/' onClick={()=>setSupportDrop(false)}>
                    <p className='text-[12px]'>Support</p>
                </NavLink>
                </div>
              

                <div 
                    onMouseEnter={() => {
                        setMacDrop(false)
                        setIpadDrop(false)
                        setIphoneDrop(false)
                        setSupportDrop(false)
                        setBuyDrop(true)
                        setAppleSearch(false)
                    }}
                  
                    className='relative'
                >
                 <NavLink to='/' onClick={()=>setBuyDrop(false)}>
                    <p className='text-[12px]'>Where to Buy</p>
                </NavLink>
                </div>

                </div>
             
             <div className='flex gap-8 items-center'>
                    
                    <MdOutlineSearch 
                    
                    onClick={()=>setAppleSearch(true)} className='text-2xl cursor-pointer' /> 
             <RxHamburgerMenu onClick={()=>setAppleMobile(true)} className='lg:hidden cursor-pointer text-xl text-white'/>

             </div>


                     {/* Mobile Menu with Slide-in Effect */}
            <div 
                className={`fixed top-0 left-0 w-full overflow-x-hidden overflow-hidden pt-4 iphone h-screen z-20 transition-transform duration-500 ease-in-out
                            ${appleMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                          
            >
                {/* Close Button */}
                <RxCross2 onClick={() => setAppleMobile(false)} className='text-2xl absolute right-0 cursor-pointer'/>
              
                <div className='pt-7 pl-10 flex flex-col gap-3 justify-between w-2/3'>
                        {/* Mac Dropdown */}
                        <div 
                
                    className='relative'
                >
                    <NavLink to='/' onClick={()=>setMacMobile(true)}>
                        <p className='font-semibold text-3xl text-white'>Mac</p>
                    </NavLink>
                  
                </div>

                {/* iPad Dropdown */}
                <div 
                    
                   
                    className='relative'
                >
                       <NavLink to='/' onClick={()=>setIpadDrop(false)}>
                        <p className='font-semibold text-3xl text-white'>iPad</p>
                    </NavLink>
                 
                </div>

                {/* iPhone Dropdown */}
                <div 
                
                  
                    className='relative'
                >
                      <NavLink to='/' onClick={()=>setIphoneDrop(false)}>
                        <p className='font-semibold text-3xl text-white'>iPhone</p>
                    </NavLink>
                   
                </div>

                <div 
                  
                  
                    className='relative'
                >
                  <NavLink to='/' onClick={()=>setSupportDrop(false)}>
                    <p className='font-semibold text-3xl text-white'>Support</p>
                </NavLink>
                </div>
              

                <div 
                 
                  
                    className='relative'
                >
                 <NavLink to='/' onClick={()=>setBuyDrop(false)}>
                    <p className='font-semibold text-3xl text-white'>Where to Buy</p>
                </NavLink>
                </div>

                </div>
            </div>

            </div>        
       
    );
};

export default AppleNavBar;
