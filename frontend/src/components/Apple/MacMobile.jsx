import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { RxCross2 } from 'react-icons/rx'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const MacMobile = () => {
    const {macMobile,setMacMobile,setAppleMobile} = useContext(SearchContext)
  return (
    <div 
    className={`fixed top-0 left-0 w-full overflow-x-hidden overflow-hidden pt-4 iphone h-screen z-20 transition-transform 
        duration-500 ease-in-out
                ${macMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
              
>
    {/* Close Button */}
    <div className='flex justify-between px-2'>

    <RxCross2 onClick={() => setAppleMobile(false)} className='text-2xl text-white absolute right-0 cursor-pointer'/>
    <MdKeyboardArrowLeft onClick={() => setMacMobile(false)} className='text-2xl text-white absolute  cursor-pointer'/>
 
    </div>


    </div>
  )
}

export default MacMobile