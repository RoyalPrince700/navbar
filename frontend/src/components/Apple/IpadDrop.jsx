import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { Link } from 'react-router-dom'

const IpadDrop = () => {
    const {ipadDrop,setIpadDrop} = useContext(SearchContext)

  return (
    <div onMouseLeave={()=>setIpadDrop(false)} className={`bg-blue-600 absolute  right-0 left-0 top-12 transition-all h-[370px] 
    ${ipadDrop ? 'opacity-100' : 'opacity-0'}`}>
      <Link to={'/'} className='cursor-pointer'>hello</Link>
        IpadDrop
        
        <button onClick='/' className='p-4 bg-white rounded-sm '>
          hello
        </button>
        </div>
  )
}

export default IpadDrop