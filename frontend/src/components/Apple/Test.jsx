<div 
className={`fixed left-0 w-full bg-blue-500 z-20 transition-transform duration-500 ease-in-out
            ${appleMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
style={{
    top: '64px', // Adjust based on the height of your navbar
    height: 'calc(100vh - 64px)' // Full height minus the navbar height
}}
></div>


import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { SearchContext } from '../../context/SearchContext';
import { RxHamburgerMenu } from "react-icons/rx";

const AppleNavBar = () => {
    const { setMacDrop, setIpadDrop, setIphoneDrop, setSupportDrop, setBuyDrop, setAppleSearch } = useContext(SearchContext);
    const [appleMobile, setAppleMobile] = useState(false);

    // Add/Remove 'overflow-hidden' to/from body when mobile nav is opened/closed
    useEffect(() => {
        if (appleMobile) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [appleMobile]);

    return (
        <div className='flex items-center justify-between text-slate-300 py-3 px-4 sm:px-[5vw] md:px-[8vw] lg:px-[17vw]'>
            <Link to='/'>
                <img src={assets.appleLogo} className='h-4' alt="Apple Logo" />
            </Link>

            <div className='lg:flex hidden justify-between w-2/3'>
                {/* Mac Dropdown */}
                <div 
                    onMouseEnter={() => {
                        setMacDrop(true);
                        setIpadDrop(false);
                        setIphoneDrop(false);
                        setSupportDrop(false);
                        setBuyDrop(false);
                        setAppleSearch(false);
                    }}
                    className='relative'
                >
                    <NavLink to='/' onClick={() => setMacDrop(false)}>
                        <p className='text-[12px]'>Mac</p>
                    </NavLink>
                </div>

                {/* Other dropdowns similar to Mac dropdown */}
                {/* ... */}

            </div>

            <div className='flex gap-8 items-center'>
                <MdOutlineSearch onClick={() => setAppleSearch(true)} className='text-2xl cursor-pointer' />
                <RxHamburgerMenu onClick={() => setAppleMobile(!appleMobile)} className='lg:hidden cursor-pointer text-xl text-white' />
            </div>

            {/* Tab & Mobile Menu */}
            <div className={`absolute top-0 left-0 h-screen w-full bg-blue-500 transition-opacity duration-300 ease-in-out 
                            ${appleMobile ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
                {/* Add close button or menu items here */}
                <button 
                    className="absolute top-4 right-4 text-white text-xl" 
                    onClick={() => setAppleMobile(false)}>
                    Close
                </button>
                {/* Add your mobile menu content here */}
            </div>
        </div>
    );
};

export default AppleNavBar;






<div>
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