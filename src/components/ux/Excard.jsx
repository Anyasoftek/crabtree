"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../ui/Outside";
import automation from "../../../public/automation.jpg"
import cloud from "../../../public/cloud.jpg"
import ima from "../../../public/ima.jpg"
import services from "../../../public/services.jpg"
import security from "../../../public/security.jpg"
import filed from "../../../public/filed.jpg"

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid  place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-200 text-xl">
                    {active.title}
                  </motion.h3>
                 
                </div>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4 ">
      {cards.map((card, index) => (
        <motion.div
        whileHover={{
            boxShadow: "0 0 20px rgba(59, 130, 246, 1), 0 0 10px rgba(59, 130, 246, 0.7)",
            borderColor: "rgba(59, 130, 246, 1)", // Change border color on hover
          }}
          transition={{
            duration: 0.6,
            repeatType: "reverse", // Glow and glow down effect
          }}
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
         
          onClick={() => setActive(card)}
          className="p-4 flex flex-col  rounded-xl cursor-pointer ">
          <div className="flex gap-4 flex-col   w-full">
            <motion.div
             className="  hover:border-white  border-transparent border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300 flex-col ease-in-out rounded-xl" layoutId={`image-${card.title}-${id}`}>
            <div className="w-72 h-72 flex flex-col text-center justify-center items-center mx-auto">
        <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {card.title}
        </span>
        <motion.span
          className="font-normal text-center text-white/30 mt-2"
          whileHover={{
            x: [0, -5, 5, -5, 5, 0], // Shaking effect for the "Click to know more" text
          }}
          transition={{
            duration: 0.6, // Duration for shaking animation
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Click to know more
        </motion.span>
      </div>
              {/* <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full  rounded-lg object-cover object-top" /> */}
            </motion.div>
           
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    
    title: "Cloud Services",
    src: cloud,
   
    content: () => {
      return (
        (<p>When it comes to cloud-based infrastructure, we believe in making cloud solutions limitless and 360-degree vision is not just a phrase, but a reality.
            Our approach is to put your business needs first and keep all the flow of information between the customer, employees, associates, or anyone else, a seamless process.
            
            We also focus on keeping the assets that are being used for optimal delivery, hassle-free, and with minimal disruptions.
            
            Embrace the power of cloud solutions and innovate to develop a larger range of products and services to offer.
            
            Transform your organization into one that is integrated to deliver a cohesive force, with the power of cloud solutions.
                  </p>)
      );
    },
  },
  {
   
    title: "Security Solutions",
    src: security,
   
    content: () => {
      return (
        (<p>Just the way the business landscape is ever evolving, so is the emerging threat landscape.
            We believe that being proactive is primary and resilience is secondary when it comes to securing IT infrastructure.Our No Compromise approach to secure critical business assets follow global threat developments and prepares fences and firewalls in real time.
            Our onsite and remotely-managed solutions ensure that the best standards for incident management operating procedures minimize disruptions.
                  </p>)
      );
    },
  },

  {
  
    title: "Infrastructure Management Service",
    src: ima,
   
    content: () => {
      return (
        (<p>CrabTree’s IT infrastructure management – Delivering service as a positive experience
            We build a lights on always running infrastructure
            You need an intelligent automated IT infra system that can monitor and manage and be able to predict, respond to dynamic business needs, protect and self-heal. So wherever you are on your journey, we will help you standardize, stabilize, optimize and manage your IT infrastructure for future growth and transformation, increasing value to your business.
            
            We deliver an all-encompassing IT asset & infrastructure management that include computing, networking, storage, data, security and cloud-based services with the right mix of people process and technology.
            
            CrabTree adopts a multi-mode delivery model without compromising the business needs of our customers while also keeping the IT infra up and running thereby ensuring the highest availability of infra to the users.
                  </p>)
      );
    },
  },
  {
 
    title: "Proffesonal services",
    src: services,
   
    content: () => {
      return (
        (<p>The return on Human Capital is directly proportional to it being deployed intelligently.
            Market disruptions and volatility, escalating risks and accelerating behavioral changes, anything that has not been faced before requires human intervention. CrabTree is here to help you manage the challenges of recruiting high-performing IT professionals.
            The key role of Professional Services is to take a technical solution and tailor it to ensure it works for your business in a way that meets your overall technology strategy and wider business goals. Quite often, a business will invest in an ‘out-of-the-box’ product without the knowledge of how to use it effectively. The Professional Services team at CrabTree is on hand to understand the challenges faced by the business and optimize the technology to fix those problems.
                  </p>)
      );
    },
  },
  {
 
    title: "Intelligent Automation",
    src: automation,
   
    content: () => {
      return (
        (<p>CrabTree's mobile software application, Mobizone, provides our field engineers access to the resources they need to collaborate effectively and in line with operational needs.

        Tracking progress of a task is critical and this application gives us the ability to monitor attendance, presence and progress.
        
        The engineers’ journey from job assignment, arrival on site, time spent there, problem diagnosis, solution implemented, departure from site, parts used, defective parts collected, distance traveled etc. are all tracked and recorded. Mobizone enables the central Customer Experience Team to analyze the performance of field engineers and deviations from expected locations and actions through a map-based, color-coded visualization interface. This enables them to pass on instructions in real time to make a change for improvements.
                  </p>)
      );
    },
  },
  {
   
    title: "Field Services",
    src: filed,
    
    content: () => {
      return (
        (<p>Technology combined with automation and advanced analytics is used to provide increased productivity, reduced turnaround time (TAT) and go to market (GTM) - creating a gratifying and productive customer experience with added value creation for OEMs and customers.
        Based on our experience in field operations, we are helping our customers with transformative gains in labor costs, performance and productivity.
        
        Many times, you might have found the burden of maintenance and deployment on your IT team. If that is the case, Smart Field Services (SFS) can provide you access to industry expertise and retain responsibility for the functionality of the IT services and equipment of the service provider. Our IT field services experts handle on-site services and repairs for your company’s products, taking the weight off your IT team’s shoulders.
                  </p>)
      );
    },
  },
];
