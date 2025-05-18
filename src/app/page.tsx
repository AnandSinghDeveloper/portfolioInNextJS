  "use client";

import React from "react";
import { Timeline } from './Components/ui/timeline';
import Bainer from './Components/Bainer';
import { Roboto_Condensed } from "next/font/google";


const Home = () => {

  return (
    <div className={"relative w-full h-full font-Roboto_Condensed "}>    
        <Timeline  data={[ {title: "Start />", content: (<Bainer />)} ]} />  

        <div className="Home-page absolute top-0 z-[-1] left-0 w-full h-screen bg-cover">
        </div> 
       
    </div>
  
  
  )
}

export default Home
