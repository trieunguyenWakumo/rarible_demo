"use client"
import React, { useState } from 'react'
import ListCollections from './ListCollections'

const Collections = () => {
  const [isOpen, setOpen] = useState(false)
  const [isTextH1,setTextH1] = useState(false)
  const [isIcon,setIcon] = useState(false)
  const changeTextButton = () =>{
   if(isOpen == false ) {
    setOpen(true)
    
   } else setOpen(false)
  }
  
  const colorTextCollections = isOpen ? "text-gray-400" : " text-black";
  const colorTextMarketplace = !isOpen ? "text-gray-400" : " text-black";
  //

  const ButtonGroup = () =>{
    const changeCollectionTextH1 = () =>{
      if(isTextH1== false){
        setTextH1(true)
      }else
      setTextH1(false)
      
     }
    const changeCollectionIcon = () =>{
      if(isIcon == false ) {
       setIcon(true)
      } else setIcon(false)
     }
    const colorButtonText = isTextH1 ? "bg-white  text-black" : "  bg-gray-100  ";
    const colorButtonIcon = !isIcon ? "bg-white  text-black" : "  bg-gray-100  ";
    return (
      <>
         <div className='flex flex-wrap mb-[48px] '>
     <div className='flex flex-wrap p-[2px] bg-gray-100 mr-10 rounded-xl text-gray-200 '>
      <button  onClick={changeCollectionTextH1} className={`font-medium rounded-xl ${colorButtonText} pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}>1H</button>
      <button  className={`font-medium rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`}>1D</button>
      <button  className={`font-medium rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}>7D</button>
      <button  className={`font-medium rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}>30D</button>
     </div>
     <div className='flex flex-wrap p-[2px] bg-gray-100 rounded-xl mr-10  text-gray-200'>
      <button onClick={changeCollectionIcon} className={` ${colorButtonIcon} rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black `}
      ><svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="sc-beqWaB sc-iAEyYk eoueJ"><path   d="M17 12.1471L11.9997 4L7.00146 12.1471L11.9997 15.0839L17 12.1471ZM17 13.0803L11.9998 15.979L6.99818 13.0775L11.9998 19.9972L17 13.0803Z" fill="currentColor"></path></svg></button>
      <button  className={` rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`}
      
      >
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={"sc-beqWaB sc-iAEyYk eoueJ"}><path d="M16.0738 9.34485C15.7786 9.16444 15.3948 9.16444 15.0701 9.34485L12.7675 10.728L11.2029 11.6301L8.90037 13.0132C8.60516 13.1936 8.2214 13.1936 7.89668 13.0132L6.06642 11.9307C5.77122 11.7503 5.56458 11.4196 5.56458 11.0587V8.92389C5.56458 8.56307 5.7417 8.23233 6.06642 8.05192L7.86715 6.99953C8.16236 6.81912 8.54612 6.81912 8.87084 6.99953L10.6716 8.05192C10.9668 8.23233 11.1734 8.56307 11.1734 8.92389V10.307L12.738 9.37492V7.99179C12.738 7.63096 12.5609 7.30021 12.2362 7.1198L8.90037 5.13531C8.60516 4.9549 8.2214 4.9549 7.89668 5.13531L4.50184 7.1198C4.17712 7.30021 4 7.63096 4 7.99179V11.9909C4 12.3517 4.17712 12.6824 4.50184 12.8628L7.89668 14.8473C8.19187 15.0277 8.57564 15.0277 8.90037 14.8473L11.2029 13.4943L12.7675 12.5622L15.0701 11.2091C15.3653 11.0287 15.7491 11.0287 16.0738 11.2091L17.8745 12.2615C18.1697 12.4419 18.3764 12.7726 18.3764 13.1334V15.2683C18.3764 15.6291 18.1993 15.9598 17.8745 16.1402L16.0738 17.2227C15.7786 17.4031 15.3948 17.4031 15.0701 17.2227L13.2694 16.1703C12.9742 15.9899 12.7675 15.6591 12.7675 15.2983V13.9152L11.2029 14.8473V16.2304C11.2029 16.5912 11.3801 16.922 11.7048 17.1024L15.0996 19.0869C15.3948 19.2673 15.7786 19.2673 16.1033 19.0869L19.4982 17.1024C19.7933 16.922 20 16.5912 20 16.2304V12.2314C20 11.8706 19.8228 11.5398 19.4982 11.3594L16.0738 9.34485Z" fill="currentColor"></path></svg>
      </button>
      <button  className={` rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}
      >
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="sc-beqWaB sc-iAEyYk eoueJ"><path d="M14.0681 19.5608C13.0032 19.5608 12.2276 19.2934 11.7403 18.7587C11.2535 18.2241 11.0099 17.6476 11.0099 17.0298C11.0099 16.804 11.0522 16.6139 11.1372 16.4595C11.2201 16.3071 11.3404 16.1808 11.4857 16.0939C11.6329 16.0047 11.814 15.9603 12.0293 15.9603C12.2447 15.9603 12.4256 16.0047 12.573 16.0939C12.7202 16.183 12.8363 16.305 12.9213 16.4595C13.0062 16.6139 13.0486 16.804 13.0486 17.0298C13.0486 17.3031 12.9863 17.5258 12.8618 17.6982C12.7371 17.8706 12.5899 17.9833 12.42 18.037C12.5674 18.2506 12.7996 18.4021 13.1167 18.4913C13.4338 18.5865 13.751 18.6339 14.0681 18.6339C14.5097 18.6339 14.909 18.5092 15.2659 18.2597C15.6226 18.01 15.8861 17.6417 16.056 17.1546C16.226 16.6674 16.3109 16.1147 16.3109 15.4967C16.3109 14.8254 16.2173 14.2519 16.0305 13.7767C15.8491 13.2955 15.5802 12.939 15.2233 12.7072C14.8774 12.4788 14.4768 12.3583 14.0681 12.3598C13.7961 12.3598 13.4565 12.4786 13.0486 12.7163L12.3011 13.1084V12.7163L15.6652 8.01058H11.0099V12.8943C11.0099 13.2984 11.0948 13.6311 11.2647 13.8926C11.4346 14.1541 11.6951 14.2848 12.0464 14.2848C12.3179 14.2848 12.5786 14.1897 12.8279 13.9994C13.0787 13.8075 13.297 13.5726 13.4734 13.3046C13.4961 13.2508 13.5244 13.2123 13.5583 13.1884C13.5889 13.1602 13.6281 13.1444 13.6688 13.144C13.7311 13.144 13.8046 13.1767 13.8897 13.2422C13.9691 13.337 14.0086 13.447 14.0086 13.5717C13.9989 13.6557 13.9847 13.7391 13.966 13.8214C13.7737 14.273 13.5073 14.6175 13.1675 14.8551C12.8367 15.0899 12.4458 15.2142 12.0464 15.2117C11.0382 15.2117 10.3414 15.0037 9.95643 14.588C9.57143 14.1718 9.37881 13.6073 9.37881 12.8945V8.01058H7V7.10136H9.37881V5.03395L8.83513 4.46308V4H10.4151L11.0096 4.32067V7.10136L17.1603 7.08368L17.772 7.72527L14.0002 11.6823C14.2286 11.5868 14.469 11.5268 14.7138 11.5041C15.1215 11.5041 15.5802 11.6408 16.09 11.9141C16.6053 12.1815 17.0018 12.55 17.2791 13.019C17.5567 13.4826 17.7351 13.9282 17.8144 14.356C17.8994 14.7839 17.942 15.164 17.942 15.4967C17.942 16.2574 17.7889 16.9643 17.4832 17.6181C17.1773 18.2715 16.713 18.7587 16.09 19.0796C15.467 19.4005 14.7929 19.5608 14.0681 19.5608Z" fill="currentColor"></path></svg>
      </button>
      <button  className={` rounded-xl pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`} 
      >
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="sc-beqWaB sc-iAEyYk eoueJ"><path   d="M5.64031 18.0427H4L9.02886 12.3187C9.19073 12.1382 9.19073 11.862 9.02886 11.6815L4.04317 6H5.61873L10.6368 11.724C10.7663 11.8939 10.7879 12.1382 10.6476 12.2974C9.33102 13.7948 5.64031 18.0427 5.64031 18.0427ZM18.9678 6H17.3923L11.0469 13.2745C10.885 13.455 10.8742 13.7417 11.0361 13.9223L11.2087 14.1346L14.6081 18.0427H16.2484L12.5685 13.8267C12.4066 13.6355 12.4174 13.3594 12.5793 13.1789L18.9678 6ZM13.7339 13.3912C13.7015 13.5399 13.7339 13.7098 13.8418 13.8266C14.7591 14.878 17.5109 18.0426 17.5109 18.0426H19.0002L14.3059 12.7009L13.885 13.1576C13.8202 13.2213 13.7663 13.3062 13.7339 13.3912ZM6.87061 6H8.38142C8.38142 6 11.0901 9.18589 12.0613 10.1629C12.2232 10.3222 12.1908 10.524 12.0505 10.6833C11.5326 11.2886 11.5218 11.2992 11.5218 11.2992L6.87061 6ZM12.9138 9.69564L16.1404 6H14.608L12.9246 7.93277L12.4389 8.49562C12.2771 8.67615 12.2663 8.95226 12.4282 9.14341C12.5469 9.28147 12.9138 9.69564 12.9138 9.69564ZM6.88135 18.0426L10.108 14.3469L10.5828 14.8991C10.7447 15.0903 10.7339 15.3664 10.5721 15.5469L10.0864 16.1098L8.40296 18.0426H6.88135Z" fill="currentColor"></path></svg>
      </button>
     </div>
     <div className=' flex flex-wrap items-center'>
    <p className='font-medium mr-4'>Floor price</p>
    <div className='flex flex-wrap items-center '>
      <input placeholder='Min' className='rounded-lg mr-2 w-20 bg-gray-100  pr-[12px] pl-[12px] pt-[6px] pb-[6px] hover:bg-white' />
      <div className='bg-gray-400 mr-2 w-3 h-[1px]'></div>
      <input placeholder='Max' className='rounded-lg mr-2 w-20 bg-gray-100  pr-[12px] pl-[12px] pt-[6px] pb-[6px] hover:bg-white' />
    </div>
    <div className='rounded-lg  bg-gray-100  w-16 pr-[16px] pl-[16px] pt-[6px] pb-[6px]'>
      <p>ETH</p>
    </div>
     </div>
     </div>
      </>
    )
  }
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
      <a>
        <button className='text-black px-[22px] py-[10px] font-semibold text-sm leading-6 flex w-full justify-center items-center p rounded-xl bg-[#16161a0a]' >View all collections</button>
      </a>
    </div>
  )
}

export default Collections