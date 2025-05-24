"use client";
import React from "react";
import { CodeBlock } from "./ui/code-block";

const AboutMe = () => {
  const code = `class AnandSingh {
  // I can, because I did.
  // My vast variety of skills is continuously expanding.
  constructor() {
    this.name = 'Anand Singh';
    this.dayOfBirthTimestamp = Date.parse('2005-03-01');
    this.email = 'anandsingh23112005@gmail.com';
  }
  
  workExperience() {
    return [
      { '2025-now': 'Full-stack Developer at Ishrey Consulting & Placement Services' }
    ];
  }
  
  education() {
    return [
      { '2024-2025': 'Full stack Developer course at Dice Academy' }
    ];
  }
}`;

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="py-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        About Me <span className="text-[#5918df]">{'/>'}</span>
      </h1>
      <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5">
        <CodeBlock 
          language="javascript"
          filename="AboutMe.js"
          highlightLines={[5, 7, 11, 16]}
          code={code}
        />
      </div>
    </div>
  );
};

export default AboutMe;