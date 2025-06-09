"use client";

import React from "react";
import Bainer from "./Components/Bainer";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import { ShootingStars } from "./Components/ui/shooting-stars";
import { StarsBackground } from "./Components/ui/stars-background";
import Skills from "./Components/Skills";
import SkillsGlobe from "./Components/SkillsGlobe";
import Footer from "./Components/Footer";


const Home = () => {
  return (
    <main className=" w-[100%] h-full bg-[#0c0c0d]">

     <div className="fixed right-5 z-50 bottom-10  ">
      <div className="items-center flex  gap-4">
        <span className="bg-[#5918df] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl px-4 py-1.5">Get In Touch</span>
         <div className=" chatbot w-15  h-15 rounded-full shadow-xl border border-[#5918df] "> 
      </div>
      
      </div>
     </div>

      {/* <TracingBeam className=" w-full h-full"> */}
        {/* Hero/Banner Section */}
        <section className="w-full h-screen flex items-center justify-center  px-4 lg:px-12">
          <Bainer />
        </section>
        {/* About Me Section */}
        <section className="w-full py-10 px-4 lg:px-12 " id="about">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section className="w-full h-full py-10 px-4 lg:px-12  " id="skills">
          <h1 className="p-10 text-2xl lg:text-3xl font-bold w-full h-full">
            {" "}
            Skills <span className="text-[#5918df]"> {"/>"} </span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-start  items-center lg:gap-30 w-full ">
           <div className="w-40%"> <SkillsGlobe /> </div>
           <div className="w-60%"> <Skills /> </div>
          </div>
        </section>
        {/* Projects Section */}

        <section className="w-full py-10 px-12 " id="projects">
          <Project />
        </section>
        <section className="w-full py-5 px-4 " id="contact">
          <Footer />
        </section>
      {/* </TracingBeam> */}
       <ShootingStars />
      <StarsBackground /> 
    </main>
  );
};

export default Home;
