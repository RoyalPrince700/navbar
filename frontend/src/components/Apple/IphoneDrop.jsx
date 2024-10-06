import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const IphoneDrop = () => {
    const {iphoneDrop,setIphoneDrop} = useContext(SearchContext)
  return (
    <div onMouseLeave={()=>setIphoneDrop(false)} className={`bg-red-600 absolute right-0 left-0 top-12 transition-all h-[350px] ${iphoneDrop ? 'opacity-100' : 'opacity-0'}`}>
       
        IphoneDrop</div>
  )
}

export default IphoneDrop