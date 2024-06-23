import React from 'react'
import Image from 'next/image'
import financials from "../../public/images/financials.png"
import { ContainerScroll } from './ui/container-scroll-animation'
import Download from '../../public/images/Download.png'

const Financials = () => {
  return (
    <div className="w-full flex justify-center items-center -p-50 relative">
        <ContainerScroll>
            <Image src={financials} alt="" className="w-[50vw]" />  
        </ContainerScroll>
        <div className='right-10 align-middle absolute bg-white rounded-lg'>
            <div className='hover:opacity-80 text-black bg-violet-800 flex justify-between items-center h-12 px-2 rounded-t-lg'>
                <span className='text-lg text-white w-[90px] font-semibold'>FY22-23</span>
                <span className="flex-grow text-center text-white font-semibold mr-2">ANNUAL REPORT</span>
                <div className='w-[2px] bg-gray-300 h-full mr-2'></div>
                <button className='text-black pr-0 mr-0 w-[40px] flex items-center justify-center'><Image className='object-fit' width="30" src={Download} alt=""/></button>
            </div>
            <div className='hover:bg-gray-200 text-black flex justify-between items-center h-12 px-2 border-y-[1px] border-black'>
                <span className='text-lg text-violet-700 w-[90px] text-center font-bold'>Q4</span>
                <span className="flex-grow test-sm text-center mr-2">QUARTERLY REPORT</span>
                <div className='w-[2px] bg-gray-900 h-full mr-2'></div>
                <button className='text-black pr-0 mr-0 w-[40px] flex items-center justify-center'><Image className='object-fit' width="30" src={Download} alt=""/></button>
            </div>
            <div className='hover:bg-gray-200 text-black flex justify-between items-center h-12 px-2 rounded-b-lg'>
                <span className='text-lg text-violet-700 w-[90px] text-center font-bold'>Q4</span>
                <span className="flex-grow test-sm text-center mr-2">QUARTERLY INVESTOR PRESENTATION</span>
                <div className='w-[2px] bg-gray-900 h-full mr-2'></div>
                <button className='text-black pr-0 mr-0 w-[40px] flex items-center justify-center'><Image className='object-fit' width="30" src={Download} alt=""/></button>
            </div>
        </div>
      </div>
  )
}

export default Financials