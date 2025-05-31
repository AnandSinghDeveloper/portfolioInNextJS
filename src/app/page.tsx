"use client";

import React from "react";
import Bainer from "./Components/Bainer";
import Project from "./Components/Project";
import { TracingBeam } from "./Components/ui/tracing-beam";
import AboutMe from "./Components/AboutMe";
import { ShootingStars } from "./Components/ui/shooting-stars";
import { StarsBackground } from "./Components/ui/stars-background";
import Skills from "./Components/Skills";
import SkillsGlobe from "./Components/SkillsGlobe";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <main className="w-full  bg-[#28282a]">
      <TracingBeam className=" w-full h-full">
        {/* Hero/Banner Section */}
        <section className="w-full h-screen flex items-center justify-center  px-4 lg:px-12">
          <Bainer />
        </section>
        {/* About Me Section */}
        <section className="w-full py-10 px-4 lg:px-12 ">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section className="w-full h-full py-10 px-4 lg:px-12 ">
          <h1 className="p-10 text-2xl lg:text-3xl font-bold w-full h-full">
            {" "}
            Skills <span className="text-[#5918df]"> {"/>"} </span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-start  items-center justify-between  w-full lg:w-[120%]">
            <SkillsGlobe />
            <Skills />
          </div>
        </section>
        {/* Projects Section */}

        <section className="w-full py-10 px-4 lg:px-8">
          <Project />
        </section>
        <section className="w-full py-10 px-4 lg:px-8">
          <Footer />
        </section>
      </TracingBeam>
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Home;
