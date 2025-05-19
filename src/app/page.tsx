  "use client";

import React from "react";
import { Timeline } from './Components/ui/timeline';
import Bainer from './Components/Bainer';
import Project from "./Components/Project";
import { TracingBeam } from "./Components/ui/tracing-beam";


const Home = () => {

  return (
    <div className={" top-0 Home-page w-full font-Roboto_Condensed "}>    
        {/* <Timeline  data={[ {title: "Start />", content: (<Bainer />)} ]} />   */}


       <TracingBeam className="px-2 p-t10 "> <Bainer /> <Project /></TracingBeam>

       
        
       
    </div>
  
  
  )
}

export default Home
