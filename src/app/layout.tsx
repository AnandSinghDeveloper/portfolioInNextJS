"use client";
import Navbar from "../app/Components/Navbar";
import Footer from "../app/Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import "./globals.css";
import { Roboto_Condensed } from 'next/font/google'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
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
      <body className={robotoCondensed.className }  >
        <CustomCursor />
        <Navbar />
         <FloatingNavDemo />
        
      <AppCacheProvider>{children}</AppCacheProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}