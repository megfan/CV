import React, { useRef } from 'react';
import '../../../styles/MainPage.css';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

export const Skills: React.FC = () => {

    
    const ref = useRef(null);
      const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start start", "end 80%"]
        });

    const paralaxScale = useTransform(scrollYProgress, [0,1], ["0", "95%"]);

    return (
    <div className='w-full relative h-screen flex flex-col items-start justify-start pt-40' id="skills" ref={ref}>

        <header className=' w-full flex items-start justify-between'>
            <div className=" w-full h-[40vh] bg-center m-0 brightness-90"
                style={{
                    backgroundImage: `url(assets/skill.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
            />
            <div className='z-10 p-30 w-full bg-darkPrimary h-[45vh] flex-col text-white items-start text-sm'>
                <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span>
                <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>My 
                    <span className='text-primary text-4xl font-[Titillium] lowercase italic'> developer's </span>and design skills</h1>
                <p className='text-[12rem] ml-32 text-[#acacac1f] font-black z-10 top-50 absolute rotate-90'>Skills</p>
            </div>
        </header>
        <main className='px-20 gridPage w-full '>
            <h1 className='text-2xl font-bold mt-20 pl-10 relative h-[30px] beforeVertical col-start-1 row-start-1'>Developer skills</h1>
            <section className='w-full col-start-2 row-start-2 col-end-4 flex flex-col'>
                <div className='flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>JAVASCRIPT / TYPESCRIPT</h2>
                        <h2>95%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[95%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>REACT</h2>
                        <motion.h2 
                        >95%</motion.h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <motion.div 
                         whileInView={{ width: "95%" }}
                         initial={{ width: 0 }}
                           transition={{
                            type: "tween",
                               duration: 1,
                           }}
                            className='relative bg-primary w-[95%] h-2 my-3 '/>
                        {/* <div className='bg-darkPrimary w-full h-2 my-3 '/> */}
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>Mobx</h2>
                        <h2>90%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[90%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>Redux</h2>
                        <h2>85%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[85%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>GraphQL</h2>
                        <h2>85%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[85%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                
               
            </section>
            <section className='w-full col-start-5 row-start-2 col-end-7 flex flex-col'>
                <div className='flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>JAVASCRIPT / TYPESCRIPT</h2>
                        <h2>95%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[95%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>REACT</h2>
                        <h2>95%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[95%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>Mobx</h2>
                        <h2>90%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[90%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>Redux</h2>
                        <h2>85%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[85%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                <div className='mt-8 flex flex-col w-full font-medium text-base'>
                    <div className='flex justify-between'>
                        <h2>GraphQL</h2>
                        <h2>85%</h2>
                    </div>
                    <div className='relative w-full h-2'>
                        <div className='absolute bg-primary w-[85%] h-2 my-3 '/>
                        <div className='bg-darkPrimary w-full h-2 my-3 '/>
                    </div>
                </div>
                
               
            </section>
                <span className='gridVisibileItem col-start-1'/>
                <span className='gridVisibileItem col-start-2'/>
                <span className='gridVisibileItem col-start-3'/>
                <span className='gridVisibileItem col-start-4'/>
                <span className='gridVisibileItem col-start-5'/>
                <span className='gridVisibileItem col-start-6'/>
        </main>
    </div>
    )
}