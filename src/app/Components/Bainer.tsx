'use client';
import React from 'react'
import { ContainerTextFlip } from './ui/container-text-flip';

const Bainer = () => {
  return (
    <div className=' font-robotoCondensed'>
     <div>
      <h1 className="text-2xl md:text-5xl font-bold mb-3 text-neutral-500 dark:text-neutral-100">
          Hi, My name is <span className='text-[#5918df] '>Anand Singh</span>    
      </h1>
      <h1 className="text-2xl md:text-5xl  font-bold mb-3 text-neutral-500 dark:text-neutral-100">
         I design and develop <span className=' '> <ContainerTextFlip words={["WebApps","Mobile Apps","UI/UX Design","Frontend", "Backend" ,"Full Stack" ]} /></span> 
      </h1>
      
      <h3 className=' text-sm mt-10 lg:text-xl opacity-30  '>Let me show you ....</h3>
     </div>
    </div>
  )
}

export default Bainer
