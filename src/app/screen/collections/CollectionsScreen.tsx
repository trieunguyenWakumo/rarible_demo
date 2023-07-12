"use client"
import React, { useState } from 'react'
import ListCollections from './ListCollections'
import Link from 'next/link'
import ButtonGroup from '../../components/buttonGroup'

const Collections = () => {
  const [isOpen, setOpen] = useState(false)

  const changeTextButton = () =>{
   if(isOpen == false ) {
    setOpen(true)
    
   } else setOpen(false)
  }

  const colorTextCollections = isOpen ? "text-gray-400" : " text-black";
  const colorTextMarketplace = !isOpen ? "text-gray-400" : " text-black";
  //


  return (
    <div>
      <div className='flex flex-wrap mb-[48px]'>
      <button onClick={changeTextButton} className={`font-bold text-xl ${colorTextCollections}  leading-7 mr-5`}>Collections</button>
      <button  onClick={changeTextButton} className={`font-bold text-xl   ${colorTextMarketplace} leading-7 `}>Marketplaces</button>
      </div>
      {/* button group  */}
      <ButtonGroup/>
      {/* collections */}
      <ListCollections/>
      <Link href={''} >
        <button className='text-black px-[22px] py-[10px] font-semibold text-sm leading-6 flex w-full justify-center items-center p rounded-xl bg-[#16161a0a]' >View all collections</button>
      </Link>
    </div>
  )
}

export default Collections