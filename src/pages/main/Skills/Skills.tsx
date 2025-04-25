"use client"


import React, { useRef, useEffect } from 'react';
import { animate, motion, useScroll, useTransform,useMotionValue } from 'framer-motion';
import { developerSkillsCol1, developerSkillsCol2, designSkills, services } from './skillsData';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import skill from "../../../assets/1.jpg";
import skill2 from "../../../assets/skill.jpg";
import { text } from 'stream/consumers';

export const Skills: React.FC = () => {

    const ref = useRef(null);
    const ref2 = useRef(null);
    const refImg = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const paralaxBgTxt = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
    const bg = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 40deg, rgb(235, 235, 235) 40deg 360deg)"


    return (
        <div className='w-full relative h-auto flex flex-col items-start justify-start'
            id="skills"
            ref={ref}>
            <header className='z-10 w-full flex items-start justify-between h-[40vh] lg:h-[60vh] relative'>
                <div className='bg-darkPrimary z-10 lg:ml-30 lg:p-30 p-12 w-2/5 flex-col text-white text-sm absolute'>
                    <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span>
                    <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>My
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> developer's </span>and design skills</h1>
                </div>
                <ParallaxPicFrame styles={'lg:w-screen lg:h-[60vh] h-[40vh] bg-center m-0 lg:brightness-90 brightness-20 lg:relative absolute overflow-hidden'}
                    src={skill} />
            </header>
            <main className=' w-full h-auto z-10 lg:pb-20 flex justify-between'>
                <div className='w-2/5 sticky'>
                    <motion.img src={skill2} className=" brightness-50 sticky top-0" alt="aboutMe"
                        ref={refImg}
                        initial={{ top: 0 }}
                        whileInView={{ y: 30 }}
                    />
                </div>
                <motion.div className='w-3/5'
                    whileInView={{ top: 100 }}
                >
                    <section className=' p-30 flex flex-col w-full h-auto relative items-start justify-start hover:bg-gray-100'>
                        <div className='lg:w-1/2 ml-30 w-full relative'>
                            <span className='font-bold text-4xl absolute bottom-10 -left-30 text-gray-300'>01</span>
                            <h1 className='text-2xl pb-10 text-darkPrimary beforeVertical'>Designer skills</h1>
                            <p className='text-gray-500 text-justify'>Experienced in creating impactful visuals 
                                across digital and print media, with a strong eye for composition, branding, and user-centered design.</p>
                        </div>
                        <div className='flex flex-wrap justify-center self-end mt-20 mx-auto'>
                            {designSkills.map((e, index) => {
                                return <div className='flex flex-col items-center justify-center mx-5 mb-10' key={index}>
                                    <motion.div className="chart" style={{
                                    }}
                                        initial={{ background: bg }}
                                        whileInView={{ background: e.circle }}
                                        transition={{
                                            duration: 1.3,
                                        }}
                                    />
                                    <span>{e.name}</span>
                                </div>
                            })}

                        </div>
                    </section>
                    
                    <motion.div
                        style={{ y: paralaxBgTxt }}
                        className='w-auto -mt-50 absolute flex-col align-start lg:flex hidden'>
                        <p className='text-[12rem]  text-[#b6b6b61f] font-black uppercase break-all'>Achievements</p>
                        <div className='w-40 h-20 bg-[#b6b6b61f] self-end' />
                        <div className='w-40 h-20 mt-20 pt-40 bg-[#b6b6b61f] self-start' />
                    </motion.div>
                    <section className='w-full h-auto p-20 flex flex-col hover:bg-gray-100'>
                        <div className='lg:w-1/3 relative self-end mr-40 mb-20'>
                            <span className='font-bold text-4xl absolute bottom-20 -left-30 text-gray-300'>02</span>
                            <h1 className='text-2xl pb-8 text-darkPrimary beforeVertical'>Developer skills</h1>
                            <p className='text-gray-500 text-justify'>Focused on building responsive, user-friendly 
                                websites and interfaces, combining clean code with modern front-end technologies.</p>
                        </div>
                        <div className='flex items-start justify-start flex-col'>
                            <div className='w-full'>
                                {developerSkillsCol1.map((e, idx) => {
                                    return <div className='flex items-center  font-sm uppercase lg:text-base text-[10px] mb-2' key={e.name}>
                                        <h2 className='w-1/4 text-right text-gray-500 mr-4'>{e.name}</h2>
                                        <div className='relative w-1/2 h-2 mr-2'>
                                            <div className='absolute bg-[#e5e5e5] w-full h-2 top-0' />
                                            <motion.div className='absolute bg-primary w-full h-2 top-0'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='lg:text-sm text-primary font-bold'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                            <div className='w-full mt-30'>
                                {developerSkillsCol2.map((e, idx) => {
                                    return <div className='flex items-center font-sm uppercase lg:text-base text-[10px] mb-2' key={e.name}>
                                        <h2 className='w-1/3 text-right text-gray-500 mr-4'>{e.name}</h2>
                                        <div className='relative w-1/2 h-2 mr-2'>
                                            <div className='absolute bg-[#e5e5e5] w-full h-2 top-0' />
                                            <motion.div className='absolute bg-primary w-full h-2 top-0'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='lg:text-sm text-primary font-bold'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                    </section>
                    <section className=' py-30 px-20 flex flex-col w-full h-auto relative items-start justify-start hover:bg-gray-100'>
                        <div className='lg:w-1/2 ml-30 w-full relative'>
                            <span className='font-bold text-4xl absolute bottom-10 -left-30 text-gray-300'>03</span>
                            <h1 className='text-2xl pb-10 text-darkPrimary beforeVertical'>Services</h1>
                            <p className='text-gray-500 text-justify'>Offering tailored design and development solutions — 
                                from brand identity and UI/UX design to front-end implementation and website optimization — 
                                to help businesses stand out and grow online.</p>
                        </div>
                            <div className='w-full h-full flex items-start justify-start mt-20'>
                                {services.map((e, idx) => {
                                    return <div className='flex flex-col items-center w-full h-[40vh] font-sm uppercase lg:text-base text-[10px] mb-2' key={e.name}>
                                        <div className='relative w-18 h-full mr-2'>
                                            <div className='absolute bg-[#e5e5e5] h-full w-18 top-0' />
                                            <motion.div className='absolute bg-primary h-full w-18 bottom-0'
                                                whileInView={{ height: e.percent, y: 0 }}
                                                initial={{ height: "0%", y: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ height: e.percent }}
                                            />
                                        </div>
                                        <motion.pre className='w-auto text-center text-gray-500 pt-4 text-sm whitespace-nowrap'>{e.name}</motion.pre>
                                        <h2 className='lg:text-sm text-primary font-bold'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                    </section>
                   
                </motion.div>
            </main>
        </div>
    )
}