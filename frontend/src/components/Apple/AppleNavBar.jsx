import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdOutlineSearch } from 'react-icons/md';
import { SearchContext } from '../../context/SearchContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";



const AppleNavBar = () => {
    const { setMacDrop, setIpadDrop , setIphoneDrop,setSupportDrop,setBuyDrop,setAppleSearch,setMacMobile,appleSearchMobile, setAppleSearchMobile } = useContext(SearchContext);
    const [appleMobile,setAppleMobile] = useState(false)
    const [appleMacMobile,setAppleMacMobile] = useState(false)
    const [appleIpadMobile,setAppleIpadMobile] = useState(false)
    const [appleIphoneMobile,setAppleIphoneMobile] = useState(false)
    const [appleSupportMobile,setAppleSupportMobile] = useState(false)
    const [appleBuyMobile,setAppleBuyMobile] = useState(false)




    const [arrowVisible,setArrowVisible] = useState(false)
    const [arrowVisibleIpad,setArrowVisibleIpad] = useState(false)
    const [arrowVisibleIphone,setArrowVisibleIphone] = useState(false)
    const [arrowVisibleSuppport,setArrowVisibleSupport] = useState(false)
    const [arrowVisibleBuy,setArrowVisibleBuy] = useState(false)





      // Add/Remove 'overflow-hidden' to/from body when mobile nav is opened/closed
      useEffect(() => {
        if (appleMobile) {
            document.body.classList.add('overflow-x-hidden');
        } else {
            document.body.classList.add('overflow-x-hidden');
        }
    }, [appleMobile]);

    return (
     
            <div className='flex items-center iphone justify-between z-50 text-slate-300  py-3 px-4 sm:px-[5vw] md:px-[8vw] lg:px-[17vw]'>
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
                    
                    onClick={()=>{
                        setAppleSearch(true)
                        setMacDrop(false)
                        setIpadDrop(false)
                        setIphoneDrop(false)
                        setSupportDrop(false)
                        setBuyDrop(false)
                        
                        }} className='text-2xl cursor-pointer lg:flex hidden' /> 
                         
                          <MdOutlineSearch onClick={()=>setAppleSearchMobile(true)} className='text-2xl lg:hidden cursor-pointer'/>
             <RxHamburgerMenu onClick={()=>setAppleMobile(true)} className='lg:hidden cursor-pointer text-xl text-white'/>

             </div>


                     {/* Mobile Menu with Slide-in Effect */}
            <div 
                className={`fixed top-0 left-0 w-full overflow-x-hidden overflow-hidden pt-4 iphone h-screen z-20 transition-transform duration-500 ease-in-out
                            ${appleMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                          
            >
                {/* Close Button */}
                <RxCross2 onClick={() => setAppleMobile(false)} className='text-2xl absolute right-0 cursor-pointer'/>
              
                <div className='pt-7 pl-10 flex flex-col gap-3 justify-between w-full'>
                        {/* Mac Dropdown */}
                        <div onMouseEnter={()=>setArrowVisible(true)} onMouseLeave={()=>setArrowVisible(false)}
                
                    className='relative pr-2'
                >
                    <NavLink className='flex items-center justify-between  ' to='/' onClick={()=>setAppleMacMobile(true)}>
                        <p className='font-semibold text-3xl text-white'>Mac</p>
                        <MdKeyboardArrowRight  className={`text-3xl transition-all ${arrowVisible ? 'opacity-100' : 'opacity-0'}`}/>
                    </NavLink>
                  
                </div>

                {/* iPad Dropdown */}
             
                <div onMouseEnter={()=>setArrowVisibleIpad(true)} onMouseLeave={()=>setArrowVisibleIpad(false)}
                
                className='relative pr-2'
            >
                <NavLink className='flex items-center justify-between  ' to='/' onClick={()=>setAppleIpadMobile(true)}>
                    <p className='font-semibold text-3xl text-white'>iPad</p>
                    <MdKeyboardArrowRight  className={`text-3xl transition-all ${arrowVisibleIpad ? 'opacity-100' : 'opacity-0'}`}/>
                </NavLink>
              
                  </div>

                {/* iPhone Dropdown */}
                
             
                  <div onMouseEnter={()=>setArrowVisibleIphone(true)} onMouseLeave={()=>setArrowVisibleIphone(false)}
                
                className='relative pr-2'
            >
                <NavLink className='flex items-center justify-between  ' to='/' onClick={()=>setAppleIphoneMobile(true)}>
                    <p className='font-semibold text-3xl text-white'>iPhone</p>
                    <MdKeyboardArrowRight  className={`text-3xl transition-all ${arrowVisibleIphone ? 'opacity-100' : 'opacity-0'}`}/>
                </NavLink>
              
                  </div>

                {/* support Dropdown */}
                <div onMouseEnter={()=>setArrowVisibleSupport(true)} onMouseLeave={()=>setArrowVisibleSupport(false)}
                
                className='relative pr-2'
            >
                <NavLink className='flex items-center justify-between  ' to='/' onClick={()=>setAppleSupportMobile(true)}>
                    <p className='font-semibold text-3xl text-white'>Support</p>
                    <MdKeyboardArrowRight  className={`text-3xl transition-all ${arrowVisibleSuppport ? 'opacity-100' : 'opacity-0'}`}/>
                </NavLink>
              
                  </div>

                 {/* support Dropdown */}
                 <div onMouseEnter={()=>setArrowVisibleBuy(true)} onMouseLeave={()=>setArrowVisibleBuy(false)}
                
                className='relative pr-2'
            >
                <NavLink className='flex items-center justify-between  ' to='/' onClick={()=>setAppleBuyMobile(true)}>
                    <p className='font-semibold text-3xl text-white'>Where to Buy</p>
                    <MdKeyboardArrowRight  className={`text-3xl transition-all ${arrowVisibleBuy ? 'opacity-100' : 'opacity-0'}`}/>
                </NavLink>
              
                  </div>

            </div>
            </div>

                        {/* mac mobile dropdown */}
            <div 
                    className={`fixed top-0 left-0 w-full overflow-x-hidden pb-10 pt-4 iphone h-screen z-20 transition-transform 
                        duration-500 ease-in-out
                                ${appleMacMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                            
                >
                    {/* Close Button */}
                    <div className='flex justify-between px-2'>
                      

                    <RxCross2 onClick={() => {setAppleMobile(false),setAppleMacMobile(false)}} className='text-2xl text-white absolute right-0 cursor-pointer'/>
                    <MdKeyboardArrowLeft onClick={() => setAppleMacMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
                
                    <div className='flex  pl-8 items-center text-white'>
        <div className='flex flex-col gap-10 pt-6'>
            <div className='flex flex-col gap-2'>
                <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Explore all Mac</p> </NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>MacBook Air</p> </NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>MacBook Pro</p></NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}>  <p className='text-3xl font-semibold text-slate-200'>iMac</p></NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-3xl font-semibold text-slate-200'>Mac Mini</p> </NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Mac Studio</p></NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-3xl font-semibold text-slate-200'>Mac Pro</p></NavLink>
                <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Displays</p></NavLink>
            </div>

                <div className='flex flex-col '>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}> <p className='text-[18px] text-slate-500 mb-4'>More from Mac</p></NavLink>
                    <NavLink to='/' onClick={()=>setMacDrop(false)}><p className='text-[18px] text-slate-200'>Mac Support</p></NavLink>
            </div>
                
            </div>
          
       </div>
                    </div>


                 </div>

                   {/* ipad mobile dropdown */}
            <div 
                    className={`fixed top-0 left-0 w-full overflow-x-hidden pb-10 pt-4 iphone h-screen z-20 transition-transform 
                        duration-500 ease-in-out
                                ${appleIpadMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                            
                >
                    {/* Close Button */}
                    <div className='flex justify-between px-2'>
                      

                    <RxCross2 onClick={() => {setAppleMobile(false),setAppleIpadMobile(false)}} className='text-2xl text-white absolute right-0 cursor-pointer'/>
                    <MdKeyboardArrowLeft onClick={() => setAppleIpadMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
                
                    <div className='flex  pl-8 items-center text-white'>
                        <div className='flex flex-col gap-10 pt-6'>
                            <div className='flex flex-col gap-2'>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Explore all iPad</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPad Pro</p> </NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPad Air</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}>  <p className='text-3xl font-semibold text-slate-200'>iPad</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}><p className='text-3xl font-semibold text-slate-200'>iPad Mini</p> </NavLink>
                            </div>

                            <div className='flex flex-col '>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}> <p className='text-[18px] text-slate-500 mb-3'>More from iPad</p></NavLink>
                                <NavLink to='/' onClick={()=>setIpadDrop(false)}><p className='text-[18px] text-slate-200'>iPad Support</p></NavLink>
                        </div>
                            
                        </div>
                      
                  </div>
                    </div>


                 </div>


                   {/* iphone mobile dropdown */}
                    <div className={`fixed top-0 left-0 w-full overflow-x-hidden pb-10 pt-4 iphone h-screen z-20 transition-transform  duration-500 ease-in-out
                                            ${appleIphoneMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>

                                    {/*------------------- Close Button ----------------------*/}
                        <div className='flex justify-between px-2'>
                                
                                <RxCross2 onClick={() => {setAppleMobile(false),setAppleIphoneMobile(false)}} className='text-2xl text-white absolute right-0 cursor-pointer'/>
                                <MdKeyboardArrowLeft onClick={() => setAppleIphoneMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
                                    
                                <div className='flex  pl-8 items-center text-white'>
                                    <div className='flex flex-col gap-10 pt-6'>
                                        <div className='flex flex-col gap-2'>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Explore all iPhone</p> </NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPhone 15 Pro</p> </NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPhone 15</p></NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-3xl font-semibold text-slate-200'>iPhone 14</p></NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-3xl font-semibold text-slate-200'>iPhone 13</p> </NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-3xl font-semibold text-slate-200'>iPhone SE</p> </NavLink>

                                        </div>

                                        <div className='flex flex-col '>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[18px] text-slate-500 mb-3'>More from iPhone</p></NavLink>
                                            <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>iPhone Support</p></NavLink>
                                    </div>
                                        
                                    </div>
                                
                            </div>
                            </div>


                    </div>

                     {/* support mobile dropdown */}
                     <div className={`fixed pb-10 top-0 left-0 w-full overflow-x-hidden  pt-4 iphone h-screen z-20 transition-transform  duration-500 ease-in-out
                                            ${appleSupportMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>

                                    {/*------------------- Close Button ----------------------*/}
                        <div className='flex justify-between px-2'>
                                
                                <RxCross2 onClick={() => {setAppleMobile(false),setAppleSupportMobile(false)}} className='text-2xl text-white absolute right-0 cursor-pointer'/>
                                <MdKeyboardArrowLeft onClick={() => setAppleSupportMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
                                    
        <div className='flex  pl-8 items-center text-white '>
          <div className='flex flex-col gap-16 pt-6'>
              <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPhone</p> </NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>Mac</p> </NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-3xl font-semibold text-slate-200'>iPad</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}>  <p className='text-3xl font-semibold text-slate-200'>Music</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] font-semibold text-slate-200'>Explore Support</p> </NavLink>
                  

              </div>

              <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[18px] text-slate-500 mb-3'>Get Help</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Community</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Check Coverage</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Contact Us</p></NavLink>

          </div>
          <div className='flex flex-col gap-2'>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}> <p className='text-[18px] text-slate-500 mb-3'>Helpful Topics</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Apple Account and Password</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Billing & Subscriptions</p></NavLink>
                  <NavLink to='/' onClick={()=>setIphoneDrop(false)}><p className='text-[18px] text-slate-200'>Find My</p></NavLink>


          </div>
              
         </div>
                      
     </div>
     </div>


                      </div>

                        {/* Buy mobile dropdown */}
                    <div className={`fixed top-0 left-0 w-full overflow-x-hidden pb-10 pt-4 iphone h-screen z-20 transition-transform  duration-500 ease-in-out
                                            ${appleBuyMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>

                                {/*------------------- Close Button ----------------------*/}
                    <div className='flex justify-between px-2'>
                            
                            <RxCross2 onClick={() => {setAppleMobile(false),setAppleBuyMobile(false)}} className='text-2xl text-white absolute right-0 cursor-pointer'/>
                            <MdKeyboardArrowLeft onClick={() => setAppleBuyMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
                                
              <div className='flex  pl-8 items-center pt-6 text-white'>
           
           <div className='flex flex-col gap-2'>
               <NavLink to='/' onClick={()=>setBuyDrop(false)}> <p className=' text-3xl font-semibold  text-slate-200'>Authorized Resellers</p> </NavLink>
               <NavLink to='/' onClick={()=>setBuyDrop(false)}> <p className='text-3xl font-semibold text-slate-200 mb-8'>Service & Support</p> </NavLink>
               <NavLink to='/' onClick={()=>setBuyDrop(false)}><p className='text-[18px] text-slate-200'>Explore All Ways to Buy</p></NavLink>
            
           </div>

         
           
       </div>
                        </div>


                    </div>





            </div>    
            
    );
};

export default AppleNavBar;
