import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { SearchContext } from '../context/SearchContext'

const SearchBox = () => {

  const {showSearch, setShowSearch} = useContext(SearchContext)

  return showSearch ? (
   <div className='border-t border-b py-6 px-6 bg-gray-100  flex items-center justify-center'>
    <div className='inline-flex bg-gray-200 border-gray-800 items-center justify-between rounded-full px-5 mr-5 py-1 w-3/4 sm:w-1/2'>
      <input type="text" placeholder='Search' className='outline-none  bg-inherit'/>
      <img src={assets.search_icon} className='w-3 flex' alt="" />
    </div>
    <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='w-3 cursor-pointer' alt="" />

   </div>
  ) : null
}

export default SearchBox