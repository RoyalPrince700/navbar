import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const BuyDrop = () => {
    const {buyDrop,setBuyDrop} = useContext(SearchContext)
  return (
    <div onMouseLeave={()=>setBuyDrop(false)} className={`bg-yellow-600 absolute right-0 left-0 top-12 transition-all h-[280px] ${buyDrop ? 'opacity-100' : 'opacity-0'}`}>
       
    IphoneDrop</div>
  )
}

export default BuyDrop