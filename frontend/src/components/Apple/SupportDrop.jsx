import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const SupportDrop = () => {
    const  {supportDrop,setSupportDrop} = useContext(SearchContext)
  return (
    <div onMouseLeave={()=>setSupportDrop(false)} className={`bg-green-600 absolute right-0 left-0 top-12 transition-all h-[300px] ${supportDrop ? 'opacity-100' : 'opacity-0'}`}>
       
    IphoneDrop</div>
  )
}

export default SupportDrop