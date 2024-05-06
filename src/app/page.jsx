"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{ duration: 1 }}
    >
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
    {/*IMAGE CONTAINER*/}
    <div className="h-full w-full lg:h-full lg:w-1/2 relative">
      <Image src="/caribou.png" alt="" fill className="object-contain"/>
    </div>
      {/*TEXT CONTAINER*/}
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
      {/*TITLE*/}
      <h1 className="text-4xl md:text-6xl font-bold">Let Us Design Together</h1>
      {/*DESCRIPTION*/}
      <p className="md:text-xl">The heart and soul of my design are honesty, passion, and poise. Honesty in design is like a signature. 
        It is what makes a design authentically yours. Passion is the fuel that keeps us burning through late night 
        projects, endless revisions, and onto the next wonderful creation. And Poise? It&lsquo;s the grace with which we 
        handle every challenge, having empathy during bad days, and delivering stunning visuals. These aren&lsquo;t just values, 
        they are the essence of who I am as a designer and as an individual. These are what drive me to create designs that 
        speak, resonate, and inspire. Staying true, keeping my passion, and designing with elegance.</p>

        {/*BUTTONS*/}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </div>
      </div>
  </div>
  </motion.div>
  );
};

export default Homepage;
