"use client"

import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { StickyScrollRevealDemo } from "@/components/Sticky";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <StickyScrollRevealDemo/>
    <CTA/>
    <Footer/>

    
    
    </>
  );
}
