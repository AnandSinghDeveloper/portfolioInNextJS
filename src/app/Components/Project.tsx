import React from 'react'
import { PinContainer } from '@/app/Components/ui/3d-pin'
import { ProjectCardsData } from '@/app/config/config'


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
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {project.description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
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
