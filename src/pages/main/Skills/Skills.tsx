import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { developerSkillsCol1, developerSkillsCol2 } from './skillsData';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import skill from "../../../assets/skill.jpg";

export const Skills: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const paralaxBgTxt = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
    const bg = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 40deg, rgb(235, 235, 235) 40deg 360deg)"
    const bg1In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 340deg, rgb(235, 235, 235) 340deg 360deg)"
    const bg2In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 350deg, rgb(235, 235, 235) 350deg 360deg)"
    const bg3In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 210deg, rgb(235, 235, 235) 210deg 360deg)"
    const bg5In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 200deg, rgb(235, 235, 235) 200deg 360deg)"

    return (
        <div className='w-full relative h-auto flex flex-col items-start justify-start'
            id="skills"
            ref={ref}>
            <header className='bg-darkPrimary w-full flex items-start justify-between h-[40vh]'>
                <div className='z-10 lg:ml-50 -mr-50 lg:p-30 p-12 w-full flex-col text-white text-sm'>
                    <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span>
                    <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>My
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> developer's </span>and design skills</h1>
                </div>
                <ParallaxPicFrame styles={'lg:w-2/3 lg:h-[60vh] h-[40vh] bg-center m-0 lg:brightness-90 brightness-20 lg:relative absolute overflow-hidden'}
                    src={skill} />
            </header>
            <main className='lg:px-30 px-4 lg:my-20 my-15 w-full h-auto z-10 lg:pb-20'>
                <section className='lg:my-30 flex lg:flex-row flex-col w-full h-auto relative items-center'>
                    <div className='lg:w-1/3 w-full beforeVertical relative'>
                        <h1 className='text-2xl pl-10 pb-4 text-darkPrimary'>Designer skills</h1>
                        <p className='pl-10 text-gray-500'>Experienced in creating impactful visuals across digital and print media, with a strong eye for composition, branding, and user-centered design.</p>
                    </div>
                    <div className='lg:mt-30 mt-10 flex flex-wrap lg:w-3/5 lg:mx-auto ml-12 justify-center'>
                        <div className='flex flex-col items-center justify-center mr-10 mb-10'>
                            <motion.div className="chart" style={{
                            }}
                                initial={{ background: bg }}
                                whileInView={{ background: bg1In }}
                                transition={{
                                    duration: 1.3,
                                }}
                            />
                            <span>Photoshop</span>
                        </div>
                        <div className='flex flex-col items-center justify-center flex-wrap mr-10 mb-10'>
                            <motion.div className="chart"
                                initial={{ background: bg }}
                                whileInView={{ background: bg2In }}
                                transition={{
                                    duration: 1.3,
                                }} />
                            <span>Illustartor</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mr-10 mb-10'>
                            <motion.div className="chart"
                                initial={{ background: bg }}
                                whileInView={{ background: bg3In }}
                                transition={{
                                    duration: 1.3,
                                }} />
                            <span>InDesign</span>
                        </div>
                        <div className='flex flex-col items-center justify-center mr-10 mb-10'>
                            <motion.div className="chart"
                                initial={{ background: bg }}
                                whileInView={{ background: bg5In }}
                                transition={{
                                    duration: 1.3,
                                }} />
                            <span>Figma</span>
                        </div>
                    </div>
                </section>
                <motion.div
                    style={{ y: paralaxBgTxt }}
                    className='w-auto -mt-50 absolute flex-col align-start lg:flex hidden'>
                    <p className='text-[12rem]  text-[#b6b6b61f] font-black uppercase break-all'>Achievements</p>
                    <div className='w-40 h-20 bg-[#b6b6b61f] self-end' />
                    <div className='w-40 h-20 mt-20 pt-40 bg-[#b6b6b61f] self-start' />
                </motion.div>
                <section className='w-full h-auto lg:mt-30 mt-10 pr-5'>
                    <div className='h-[30px] lg:w-1/3 relative beforeVertical'>
                        <h1 className='text-2xl pl-10 pb-4 text-darkPrimary'>Developer skills</h1>
                        <p className='pl-10 text-gray-500'>Focused on building responsive, user-friendly websites and interfaces, combining clean code with modern front-end technologies.</p>
                    </div>
                    <div className='lg:ml-10 mt-50 flex justify-between lg:flex-row flex-col'>
                        <div className='lg:w-1/2'>
                            {developerSkillsCol1.map((e, idx) => {
                                return <div className='flex items-center font-sm uppercase lg:text-base text-[10px] mb-2' key={e.name}>
                                    <h2 className='w-1/2 text-right text-gray-500 mr-4'>{e.name}</h2>
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
                        <div className='lg:w-1/2'>
                            {developerSkillsCol2.map((e, idx) => {
                                return <div className='flex items-center font-sm uppercase lg:text-base text-[10px] mb-2' key={e.name}>
                                    <h2 className='w-1/2 text-right text-gray-500 mr-4'>{e.name}</h2>
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
            </main>
        </div>
    )
}