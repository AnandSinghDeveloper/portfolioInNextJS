"use client";

import React from "react";
import Bainer from './Components/Bainer';
import Project from "./Components/Project";
import { TracingBeam } from "./Components/ui/tracing-beam";
import AboutMe from "./Components/AboutMe";
import { ShootingStars } from "./Components/ui/shooting-stars";
import { StarsBackground } from "./Components/ui/stars-background"; 

const Home = () => {
  return (
    <main className="w-full min-h-screen  bg-[#1A1527]">
      <TracingBeam className="w-full font-Roboto_Condensed">
        {/* Hero/Banner Section */}
        <section className="w-full h-screen flex items-center justify-center pt-20 px-4 lg:px-12">
          <Bainer />
        </section>
        {/* About Me Section */}
        <section className="w-full py-10 px-4 lg:px-12 ">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section className="w-full py-10 px-4 lg:px-12 ">
          <Project />
        </section>

        {/* Optional: Add more sections here */}
        {/* {timelineData && (
          <section className="w-full py-20 px-4 lg:px-12">
            <Timeline data={timelineData} />
          </section>
        )} */}
      </TracingBeam>
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Home;