import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { SearchContext } from '../../context/SearchContext';

const AppleNavBar = () => {
    const { setMacDrop, setIpadDrop , setIphoneDrop,setSupportDrop,setBuyDrop } = useContext(SearchContext);

    return (
        <div className='iphone py-4 px-4 sm:px-[5vw] md:px-[8vw] lg:px-[17vw]'>
            <div className='flex items-center justify-between text-slate-300'>
                <Link to='/'>
                    <img src={assets.appleLogo} className='h-4' alt="" />
                </Link>

                {/* Mac Dropdown */}
                <div 
                    // onMouseEnter={() => {
                    //     setMacDrop(true)
                    //     setIpadDrop(false)
                    //     setIphoneDrop(false)
                    //     setSupportDrop(false)
                    //     setBuyDrop(false)
                    // }}
                   
                    className='relative'
                >
                   
                        <p className='text-[12px]'>Mac</p>
                  
                  
                </div>

                {/* iPad Dropdown */}
                <div 
                     onMouseEnter={() => {
                        setMacDrop(false)
                        setIpadDrop(true)
                        setIphoneDrop(false)
                        setSupportDrop(false)
                        setBuyDrop(false)
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
                    }}
                  
                    className='relative'
                >
                 <NavLink to='/' onClick={()=>setBuyDrop(false)}>
                    <p className='text-[12px]'>Where to Buy</p>
                </NavLink>
                </div>

                <MdOutlineSearch className='text-2xl' />
            </div>
        </div>
    );
};

export default AppleNavBar;
