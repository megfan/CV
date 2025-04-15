import React, { useRef } from 'react';
import '../../../../styles/mainPage.css';
import { motion, spring, useScroll, useTransform } from 'framer-motion';
import { developerSkillsCol1, developerSkillsCol2 } from './skillsData';
import { ParallaxPicFrame } from '../../../../components/parallaxPicFrame';

export const Skills: React.FC = () => {


    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const paralax1 = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
    const bg = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 40deg, rgb(235, 235, 235) 40deg 360deg)"
    const bg1In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 340deg, rgb(235, 235, 235) 340deg 360deg)"
    const bg2In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 350deg, rgb(235, 235, 235) 350deg 360deg)"
    const bg3In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 210deg, rgb(235, 235, 235) 210deg 360deg)"
    const bg4In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 190deg, rgb(235, 235, 235) 190deg 360deg)"
    const bg5In = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 200deg, rgb(235, 235, 235) 200deg 360deg)"

    return (
        <div className='w-full relative h-auto flex flex-col items-start justify-start py-40'
            id="skills"
            ref={ref}>
            <header className=' w-full flex items-start justify-between'>
                <div className='z-10 p-30 w-full bg-darkPrimary h-[45vh] flex-col text-white items-start text-sm'>
                    <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span>
                    <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>My
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> developer's </span>and design skills</h1>
                    <motion.p
                        whileInView={{ x: "25%" }}
                        initial={{ x: "100%" }}
                        transition={{
                            type: "tween",
                            duration: 1,
                        }}
                        className='text-[12rem] ml-32 text-[#acacac1f] font-black z-10 top-50 absolute rotate-90'>
                        Skills
                    </motion.p>
                </div>
                <ParallaxPicFrame styles={'w-2/3 h-[70vh] bg-center m-0 brightness-90 relative overflow-hidden'}
                    src={'assets/skill.jpg'} />
            </header>
            <main className='px-30 my-20 gridPage w-full h-screen'>
                <section className='col-start-1 col-end-6 row-start-1 row-end-3 w-full h-full'>
                    <h1 className='text-2xl font-bold my-5 pl-10 relative h-[30px] beforeVertical'>Developer skills</h1>
                    <div className='ml-10 mt-30 col-start-1 col-end-6 row-start-2 row-end-4 flex justify-between'>
                        <div className='w-1/2'>
                            {developerSkillsCol1.map((e, idx) => {
                                return <div className='flex items-center font-sm uppercase text-base mb-2' key={e.name}>
                                    <h2 className='w-1/2 text-right mr-4'>{e.name}</h2>
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
                                    <h2 className='text-sm text-primary font-bold'>{e.percent}%</h2>
                                </div>
                            })}
                        </div>
                        <div className='w-1/2'>
                            {developerSkillsCol2.map((e, idx) => {
                                return <div className='flex items-center font-sm uppercase text-base mb-2' key={e.name}>
                                    <h2 className='w-1/2 text-right mr-4'>{e.name}</h2>
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
                                    <h2 className='text-sm text-primary font-bold'>{e.percent}%</h2>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
                <section className='mt-30 col-start-2 col-end-6 row-start-4 row-end-5 w-full h-full relative'>
                    <h1 className='text-2xl font-bold pl-10 -ml-20 relative h-[30px] beforeVertical col-start-1 row-start-1'>
                        Designer skills</h1>
                    <div className='mt-30 flex w-full justify-between'>
                        <div className='flex flex-col items-center justify-center'>
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
                        <div className='flex flex-col items-center justify-center'>
                        <motion.div className="chart"
                            initial={{ background: bg}}
                            whileInView={{ background: bg2In }}
                            transition={{
                                duration: 1.3,
                            }}/>
                            <span>Illustartor</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <motion.div className="chart"
                            initial={{ background: bg}}
                            whileInView={{ background: bg3In }}
                            transition={{
                                duration: 1.3,
                            }}/>
                            <span>InDesign</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <motion.div className="chart"
                            initial={{ background: bg}}
                            whileInView={{ background: bg4In }}
                            transition={{
                                duration: 1.3,
                            }}/>
                            <span>After Effect</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <motion.div className="chart"
                            initial={{ background: bg}}
                            whileInView={{ background: bg5In }}
                            transition={{
                                duration: 1.3,
                            }}/>
                            <span>Figma</span>
                        </div>
                    </div>
                </section>
                <span className='gridVisibileItem col-start-1' />
                <span className='gridVisibileItem col-start-2' />
                <span className='gridVisibileItem col-start-3' />
                <span className='gridVisibileItem col-start-4' />
                <span className='gridVisibileItem col-start-5' />
                <span className='gridVisibileItem col-start-6' />
                <motion.div
                    style={{ y: paralax1 }}
                    className='w-auto col-start-1 col-end-6 row-start-2 row-end-7 flex flex-col align-start'>
                    <p className='text-[12rem]  text-[#b6b6b61f] font-black uppercase'>Achievements</p>
                    <div className='w-40 h-20 bg-[#b6b6b61f] self-end' />
                    <div className='w-40 h-20 mt-20 pt-40 bg-[#b6b6b61f] self-start' />
                </motion.div>
            </main>
        </div>
    )
}