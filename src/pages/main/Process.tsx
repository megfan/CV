import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Process: React.FC = () => {

    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className='sticky top-0 z-20 bg-white mainPage gridPage w-full h-full'
            id="process">
            <div className='z-10 h-auto w-full text-sm items-start relative'>
                <header className='w-full mb-20'>
                                  <motion.span className='text-gray-400'
                                      initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                      transition={{ duration: .5, delay: .2 }}
                                  >Intellectual growth should commence at birth and cease only at death - Albert Einstein</motion.span>
                                  <motion.h1 className='lg:text-4xl text-2xl font-bold mb-12 mt-6 relative tittle text-white'
                                      initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                      transition={{ duration: .5, delay: .3 }}
                                  >How it
                                      <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> started </span></motion.h1>
                                  <motion.p
                                      className='text-justify text-gray-400 '
                                      initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                      transition={{ duration: .5, delay: .4 }}
                                  >Before I ever wrote a line of code, I was learning how to see.
                                      From emergency medicine to fine arts, from photo labs to creative studios—each
                                      step taught me to notice the details, trust the process, and stay curious.
                                      Somewhere along the way, curiosity became craft, and craft became code.
                                      The journey was never linear—but that's what made it mine.
                                  </motion.p>
                              </header>
            </div>
            <div className='z-10 flex flex-col text-darkPrimary lg:-ml-20 mt-10 lg:col-start-4 col-start-2 col-end-6 lg:row-start-2 row-start-1 text-sm '>
               
            </div>
          
        </div>
    )
}