"use client";

import React from "react";
import { Timeline } from './Components/ui/timeline';
import Bainer from './Components/Bainer';
import Project from "./Components/Project";
import { TracingBeam } from "./Components/ui/tracing-beam";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#1A1527]">
      <TracingBeam className="w-full font-Roboto_Condensed">
        {/* Hero/Banner Section */}
        <section className="w-full h-screen flex items-center justify-center pt-20 px-4 lg:px-12">
          <Bainer />
        </section>

        {/* Projects Section */}
        <section className="w-full py-10 px-4 lg:px-12 bg-[#1A1527]">
          <Project />
        </section>

        {/* Optional: Add more sections here */}
        {/* {timelineData && (
          <section className="w-full py-20 px-4 lg:px-12">
            <Timeline data={timelineData} />
          </section>
        )} */}
      </TracingBeam>
    </main>
  );
};

export default Home;