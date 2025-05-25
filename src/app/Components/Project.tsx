import React from 'react'
import { PinContainer } from '@/app/Components/ui/3d-pin'
import { ProjectCardsData } from '@/app/config/config'
import Image from 'next/image'
import {motion } from 'framer-motion'


const Project = () => {
  
  return (
    <div>
      <h1 className='p-10 text-2xl  lg:text-3xl font-bold'> Projects <span className='text-[#5918df]'> {'/>'} </span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[75vw] lg:grid-cols-3 gap-4'>
    {
      ProjectCardsData.map((project, index) => {
        return(
           <PinContainer key={index}
        title="Live Projects"
        href="#"
      >
        <div className="flex basis-full  flex-col   text-slate-100/50 w-[60vw] md:w-[30vw]  lg:w-[22vw]  h-[15rem] ">
         <div className='flex  justify-between w-full'>
           <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {project.title}
          </h3>
            <button className=" relative px-1 py-0.5 rounded-full">
           <span className=" font-normal flex items-center justify-center rounded-full text-sm italic ">
            {project.category}
          </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#b2b1b5] to-transparent  h-px" />
        </button>
         
         </div>
          <div className="text-base h-12 overflow-y-auto  font-normal">
            <span className="text-slate-500  ">
              {project.description}
            </span>
          </div>
          <motion.div
             

          className='flex items-center justify-center     gap-3 tachstack '>
            {
            project.techStack.map((tach , index)=>{
              return <button className={ `  ${ tach == 'JavaScript' ? 'border-[#fdf3eb55] text-[#e59b1b]' : 
                    tach == 'Redux-Toolkit' ? 'border-[#fedeff1f] text-[#C173C6]' :
                    tach === 'MongoDB' ? 'border-[#effaf71c] text-[#6ED3B8]' :
                    tach === 'Node.js'? 'border-[#effaf738] text-[#6ED3B8]' :
                    tach == 'Express' ? 'border-[#fdf3eb28] text-[#e59b1b]' :
                    'border-[#edecfc3b] text-[#5550E0]'} border px-2 text-[12px] font-mono   rounded-full` } key={index}>{tach}</button>
            })
          }
          </motion.div>
        I<Image src={project.image} alt="project" width={200} height={100}  className='w-full h-30 object-cover rounded-2xl'/>
        </div>
      </PinContainer>
        )
      })
    }

    </div>
    </div>
  )
}

export default Project
