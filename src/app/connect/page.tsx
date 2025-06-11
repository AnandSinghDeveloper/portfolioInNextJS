"use client";

import React from "react";
import { GiChemicalArrow } from "react-icons/gi";

const Page = () => {
  return (
    <div className="text-white w-full h-screen flex items-center justify-center relative bg-[#020617]">
      {/* Grid + Radial Background */}
      <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      <div className="flex flex-col items-center z-5">
        {/* Heading */}
        <h1 className="text-4xl font-bold border-b-2 border-[#5918df] py-5 px-4">
          GET IN TOUCH
        </h1>

        {/* Inputs */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-center">
          <h2 className="text-xl lg:text-2xl flex items-center">
            Hi, my name is
            <input
              type="text"
              placeholder="Your Name"
              className="ml-3 bg-transparent border-b-2 border-gray-400 focus:border-[#5918df] outline-none transition w-40"
            />
          </h2>

          <h2 className="text-xl lg:text-2xl flex items-center">
            and my email is
            <input
              type="email"
              placeholder="you@example.com"
              className="ml-3 bg-transparent border-b-2 border-gray-400 focus:border-[#5918df] outline-none transition w-60"
            />
          </h2>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="px-6 lg:px-10 py-3 text-2xl font-semibold flex items-center gap-2 rounded-full bg-[#5918df] hover:bg-[#4b14c7] transition">
            Next
            <GiChemicalArrow className="rotate-[320deg]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
