import React, { useRef } from 'react';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import "../../../styles/educationPage.css";
import education from '../../../assets/edu.jpg';
import { educationArray } from './educationData';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
    const ref = useRef(null);
 
    return (
        <div className='z-10 sticky top-0 bg-darkPrimary h-[110vh] w-full flex justify-between'
            id="education" ref={ref}>
            <div className='lg:w-1/2 w-full h-full flex flex-col justify-center items-center lg:p-30 p-12 '>
                <header className='w-full lg:mb-20 mb-10 lg:text-base text-sm'>
                    <motion.span className='text-gray-400'
                        initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}
                    >Intellectual growth should commence at birth and cease only at death - Albert Einstein</motion.span>
                    <motion.h1 className='lg:text-4xl text-2xl font-bold lg:mb-12 mt-6 relative tittle text-white'
                        initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .3 }}
                    >How it
                        <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> started </span></motion.h1>
                    <motion.p
                        className='text-justify text-gray-400 lg:inline hidden'
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
                <main className='z-10 w-full flex flex-col text-white text-xl justify-between relative'>
                    {educationArray.map((e, index) => {
                        return <motion.div className='educationSection'
                            initial={{y: 40, opacity: 0 }}
                            whileInView={{y: 0, opacity: 1 }}
                            transition={{
                            duration: 0.45,
                            delay: (index / 10) + .7,
                            }}>
                        <p>{e.data}</p>
                        <h2 className={e.isTitle ? 'text-primary' : ''}>{e.name}</h2>
                        <p>{e.school}</p>
                    </motion.div>
                    })}
                </main>
            </div>
            <div className='w-1/2 h-full bg-pink-400 lg:flex hidden relative items-end justify-end overflow-hidden'>
                <ParallaxPicFrame
                    styles={'educationImg top-0 right-0 w-full h-2/3 bg-bottom absolute'}
                    src={education} />
            </div>
        </div>
    )
}