"use client";
import Navbar from "../app/Components/Navbar";
import CustomCursor from "./Components/CustomCursor";
import "./globals.css";
import { Roboto_Condensed } from 'next/font/google'
import { FloatingNavDemo } from "../app/Components/Floatnav";






const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'], 
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className} >
<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Magenta Orb Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
    <CustomCursor  />
        <Navbar />
         <FloatingNavDemo />
        
        {children}
        
</div>
       
         {/* <CustomCursor  />
        <Navbar />
         <FloatingNavDemo />
        
        {children} */}
      </body>
    </html>
  );
}