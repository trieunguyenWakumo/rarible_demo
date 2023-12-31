import React from 'react'
import { IoAddCircleSharp } from 'react-icons/io5';
import Wallet from './wallet.tsx/WalletTransfer';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='sticky top-0 z-30 flex  md:h-20  backdrop-opacity-30 backdrop-invert-0 bg-white/95 flex-wrap justify-between items-center'>
      {/* content 1 */}
      <div className='flex flex-wrap justify-between items-center'>
         {/* logo */}
        <div className='mr-7'>
          <Link href={''} >
            <div className='flex flex-wrap items-center'>
              {/* logo */}
              <div className='mr-3 bg-yellow-300 p-3 rounded-lg ' >
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.7927 3.74115C18.7927 5.56401 17.7277 6.47067 16.5308 6.78561C17.9633 7.21508 19 8.38897 19 10.25V13.6667H13.5337V10.4218C13.5337 9.42924 12.9494 9.0284 11.9504 9.0284H5.46627V13.6667H0V0H12.9871C16.248 0 18.7927 0.706239 18.7927 3.74115ZM5.46871 3.81832H12.8585V3.81891C12.8695 3.81852 12.8806 3.81832 12.8917 3.81832C13.3998 3.81832 13.8118 4.23545 13.8118 4.75C13.8118 5.26455 13.3998 5.68168 12.8917 5.68168C12.8806 5.68168 12.8695 5.68148 12.8585 5.68109V5.68168H5.46871V3.81832Z" fill="black"></path></svg>
              </div>
               {/* title */}
              <div>
<svg width="84" height="20" viewBox="0 0 84 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="rgba(4, 4, 5, 1)"><path fillRule="evenodd" clipRule="evenodd" d="M62.8394 13.0771C62.8394 17.0643 60.5283 19.8088 56.6072 19.8088C54.9972 19.8088 53.5171 19.1356 52.8679 18.0999V19.6016H49.5961V1.27072H52.8679V8.00241C53.621 7.01855 55.0232 6.34538 56.6591 6.34538C60.5283 6.34538 62.8394 9.08984 62.8394 13.0771ZM52.6602 13.0771C52.6602 15.4332 54.0365 16.9866 56.1398 16.9866C58.2172 16.9866 59.5935 15.4332 59.5935 13.0771C59.5935 10.721 58.2172 9.16751 56.1398 9.16751C54.0365 9.16751 52.6602 10.721 52.6602 13.0771Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.1866 19.6016L12.19 11.4977C13.9817 10.6174 15.0464 8.88271 15.0464 6.83731C15.0464 3.57503 12.7353 1.47785 9.17781 1.47785H0.5L0.525967 19.6016H4.05751V12.1709H8.58057L12.0838 19.6016H16.1866ZM4.05751 4.50711H8.6325C10.4502 4.50711 11.4889 5.38741 11.4889 6.83731C11.4889 8.28721 10.4502 9.14162 8.6325 9.14162H4.05751V4.50711Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M26.9328 6.55251H30.2047V19.6016H26.9328V18.0999C26.2836 19.1356 24.8294 19.8088 23.1935 19.8088C19.2725 19.8088 16.9614 17.0643 16.9614 13.0771C16.9614 9.08984 19.2725 6.34538 23.1416 6.34538C24.7775 6.34538 26.1797 7.01855 26.9328 8.00241V6.55251ZM20.2073 13.0771C20.2073 15.4332 21.5835 16.9866 23.6609 16.9866C25.7643 16.9866 27.1405 15.4332 27.1405 13.0771C27.1405 10.721 25.7643 9.16751 23.6609 9.16751C21.5835 9.16751 20.2073 10.721 20.2073 13.0771Z"></path><path d="M41.7722 6.55251L41.5645 9.71122C41.0971 9.50409 40.4739 9.40053 39.9026 9.40053C38.0589 9.40053 36.397 10.9281 36.397 14.8118V19.6016H33.1252V6.55251H36.397V8.93449C37.0462 7.4587 38.76 6.34538 40.344 6.34538C40.8114 6.34538 41.3827 6.42305 41.7722 6.55251Z"></path><path d="M46.6865 19.6016H43.4147V6.55251H46.6865V19.6016Z"></path><path d="M65.0587 19.6016H68.3306V1.27072H65.0587V19.6016Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M83.5746 12.6369C83.5746 9.60766 81.4193 6.34538 77.0049 6.34538C72.6684 6.34538 70.539 9.68533 70.539 13.0771C70.539 16.4688 72.8501 19.8088 77.1866 19.8088C80.2508 19.8088 82.5359 18.3589 83.263 15.8992L80.1988 15.0707C79.8613 16.3393 78.7706 17.0643 77.2386 17.0643C75.3689 17.0643 74.0965 15.8992 73.8109 13.9315H83.5226C83.5486 13.6726 83.5746 13.103 83.5746 12.6369ZM73.8888 11.5495C74.2523 9.78889 75.3949 8.83093 77.0049 8.83093C78.9005 8.83093 79.9132 9.99602 80.069 11.5495H73.8888Z"></path><path d="M43.0271 1.94336C43.0271 1.11493 43.6987 0.443359 44.5271 0.443359H45.6004C46.4288 0.443359 47.1004 1.11493 47.1004 1.94336V3.0166C47.1004 3.84503 46.4288 4.5166 45.6004 4.5166H44.5271C43.6987 4.5166 43.0271 3.84503 43.0271 3.0166V1.94336Z"></path></g></svg>              </div>
            </div>
          </Link>
        </div>

         {/* search */}
        <div >
          <div className='flex mr-10  rounded-xl bg-gray-100  pr-[12px] pl-[12px] pt-[6px] pb-[6px] w-[20em]   ' >
            <input className='bg-gray-100 w-[20em] ' placeholder='Search for collections ,NFTs or user'/>
          </div>
        </div>


         {/* list  */}
        <div className='flex flex-wrap text-gray-500 leading-6' >
          <Link className='mr-[22px] font-bold ' href={''}><p>Explore</p></Link>
          <Link className='mr-[22px] font-bold' href={''}><p>Create</p></Link>
          <Link className='mr-[22px] font-bold' href={''}><p>Seller</p></Link>
        </div>
      </div >
       {/* content 2 */}
      <div className='flex flex-wrap justify-between items-center'>
         {/* +Marketplace */}
         <div>
          
          <Link className='flex flex-wrap justify-between items-center bg-clip-text  text-transparent bg-gradient-to-r from-indigo-500  via-orange-500 to-white' href={''}>
{/*icon*/}
<div className='mr-1'>
<IoAddCircleSharp   color='#a855f7' width= '16px' height="16px"  />
</div>
<p className='inline-block mr-[22px] font-bold'>
Marketplace
</p>
          </Link>

         </div>
         {/* connectWallet */}
        <div  className='flex flex-wrap mr-10'>
         <Wallet />
        </div>
         {/* icon Store  */}
        <div>
          <Link href={''}>
          <svg viewBox="0 0 32 32" fill="none" width="32" height="32" xmlns="http://www.w3.org/2000/svg" className="sc-beqWaB sc-iAEyYk fApLcB"><path fillRule="evenodd" clipRule="evenodd" d="M16 3C13.2386 3 11 5.23858 11 8H9C6.79086 8 5 9.79086 5 12V23C5 25.2091 6.79086 27 9 27H23C25.2091 27 27 25.2091 27 23V12C27 9.79086 25.2091 8 23 8H21C21 5.23858 18.7614 3 16 3ZM19 8C19 6.34315 17.6569 5 16 5C14.3431 5 13 6.34315 13 8H19ZM11 10H9C7.89543 10 7 10.8954 7 12V23C7 24.1046 7.89543 25 9 25H23C24.1046 25 25 24.1046 25 23V12C25 10.8954 24.1046 10 23 10H21H11ZM13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12H21C21 14.7614 18.7614 17 16 17C13.2386 17 11 14.7614 11 12H13Z" fill="currentColor"></path></svg>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default Header