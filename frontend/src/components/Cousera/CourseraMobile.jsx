import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineSearch } from 'react-icons/md'
import { assets } from '../../assets/assets'
import { RxCross1 } from 'react-icons/rx'

const CourseraMobile = () => {
    const {hambugDrop,setHambugDrop} = useContext(SearchContext)
  return (
    <div className='relative'>
   

    {/* hambugger */}
    <div className={`bg-black  left-0 top-0 mb-16 bottom-0  h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
      ${hambugDrop ? 'w-[100vw]' : 'w-0'}`}>
      {/* logo and cross */}
      <div>
        <div className='flex items-center justify-center pt-3'>
          <img src={assets.courseraLogo} className='h-4 ' alt="" />
        </div>
        <div className=''>
            <RxCross1 onClick={()=>setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-2'/>
        </div>
        <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5'/>
      </div>

      <div>
        <div className='flex justify-center px-6 gap-8 flex-col '>
          Explore
          fun
        </div>
        <div className='flex flex-col gap-3'>
          For Businesses
          For Government
          For Universities
        </div>
        <div>
          Get our app
        </div>
      </div>



    </div>
   </div>
  )
}

export default CourseraMobile