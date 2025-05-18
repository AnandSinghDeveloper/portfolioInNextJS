"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full bg-transparent text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-4xl leading-none font-bold"><span className="text-[#5918DF] text-3xl">{`<`} </span>Anand <span className="text-3xl text-[#5918DF]">{`/>`}</span></Link>
        <div className="hidden md:flex space-x-4 text-xl font-bold">
          <Link href="/">Home <span className=" opacity-50">   /{`>`} </span></Link>
          <Link href="/about">About <span className="opacity-50">  /{`>`}</span></Link>
          <Link href="/lab">Lab <span className="opacity-50">  /{`>`} </span></Link>
          <Link href="/contact">Contact <span className="opacity-50"> /{`>`}</span></Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/lab">Lab</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}