"use client";
import React from "react";
import { StickyScroll } from "./ui/Stickyroll";


const content = [
  {
    title: "Security",
    description:
      "Individual devices to data centers - get the right security posture with best practices across your IT & apps ecosystem.",
    content: (
      <div
        className="h-full w-full font-bold bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       Security
      </div>
    ),
  },
  {
    title: "Cloud",
    description:
      "Think beyond your horizon. Wherever you are on your cloud journey, we will help you scale at an optimal rate of acceleration.",
    content: (
      <div className="h-full w-full font-bold  flex items-center justify-center text-white">
       Cloud
      </div>
    ),
  },
  {
    title: "Infrastructure ",
    description:
      "From end-user devices to complex networks - standardize, stabilize, optimize, future-proof & manage your IT infrastructure.",
    content: (
      <div
        className="h-full font-bold w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
   Infrastructure 
      </div>
    ),
  },
  

];
export function StickyScrollRevealDemo() {
  return (
    <section >
     
      <div>
      <div className='justify-center text-center '>
                <h2 className=" text-2xl md:text-5xl lg:text-6xl tracking-wider font-semibold text-white "> Scale With <span className="racking-wider bg-gradient-to-r text-transparent from-blue-500 via-indigo-500 to-purple-500 bg-clip-text">
                CRABTREE
               </span></h2>
            </div>

      (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
      </div>
   
    </section>
   
  );
}
