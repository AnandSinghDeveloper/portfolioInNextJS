"use client";
import React from "react";
import { CodeBlock } from "./ui/code-block";

const AboutMe = () => {
  const code = `class AnandSingh {
// I can, because I did.
// My vast variety of skills is continuously expanding.
constructor() {
   this.name = 'Anand Singh'
   this.dayOfBirthTimestamp = Date.parse('2005-03-01')
    this.email = 'anandsingh23112005@gmail.com'
  }
   workExperience() {
     return [
               { '2025-now' : 'Full-stack Developer/At Ishrey Consulting& Placement Services }
           ]
   }
       education() {
         return [
              { '2024-2025': 'Full stack Developer course'- "Dice Academy" },

       ]
`;

  return (
    <div className=" w-full h-full ">
      <h1 className="p-5 text-2xl lg:text-3xl font-bold"> About Me <span className='text-[#5918df]'> {'/>'} </span></h1>
      <CodeBlock 
        language="jsx"
        filename="AboutMe.jsx"
        highlightLines={[16, 11, 5, 7]}
        code={code}
        
      />
    </div>
  );
};

export default AboutMe;
