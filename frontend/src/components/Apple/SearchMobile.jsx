import React, { useContext, useRef, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { MdOutlineSearch } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const SearchMobile = () => {
    const { appleSearchMobile, setAppleSearchMobile } = useContext(SearchContext);
    const inputRef = useRef(null);

    // Focus the input field when the search bar becomes visible
    useEffect(() => {
        if (appleSearchMobile && inputRef.current) {
            inputRef.current.focus();
        }
    }, [appleSearchMobile]);
  return (
    <div 
    // className={` h-[150px] absolute z-10 iphone 
    // ${appleSearchMobile ? 'opacity-100' : 'opacity-0'}`}
    className={`fixed top-0 left-0 w-full overflow-x-hidden pb-10 pt-4 iphone h-screen z-20 transition-transform 
        duration-500 ease-in-out
                ${appleSearchMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
                    <RxCross2 onClick={() => setAppleSearchMobile(false)} 
                    className='text-2xl text-white absolute right-2 top-2 cursor-pointer'/>

            <div className='flex   text-center pt-12'>
                <div className='flex items-center justify-center  text-center gap-2'>
                    <MdOutlineSearch className='text-2xl text-slate-300' />
                   
                    <input
                        ref={inputRef} // Attach ref to input
                        type="text"
                        placeholder="Search"
                        className='text-2xl text-white font-bold border-none bg-inherit w-1/2 focus:outline-none' // Ensure no outline hides the cursor
                    />
                </div>
            </div>
        </div>
  )
}

export default SearchMobile