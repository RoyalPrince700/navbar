import React, { useContext, useRef, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { MdOutlineSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const { appleSearch, setAppleSearch } = useContext(SearchContext);
    const inputRef = useRef(null);

    // Focus the input field when the search bar becomes visible
    useEffect(() => {
        if (appleSearch && inputRef.current) {
            inputRef.current.focus();
        }
    }, [appleSearch]);

    return (
        <div onMouseLeave={()=>setAppleSearch(false)} className={` h-[150px] hidden lg:block z-10 iphone ${appleSearch ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex text-center pt-12'>
                <div className='inline-flex items-center pl-64 text-center gap-3'>
                    <MdOutlineSearch className='text-2xl text-slate-300' />
                   
                    <input
                        ref={inputRef} // Attach ref to input
                        type="text"
                        placeholder="Search apple.com"
                        className='text-2xl text-white font-semibold border-none bg-inherit focus:outline-none' // Ensure no outline hides the cursor
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
