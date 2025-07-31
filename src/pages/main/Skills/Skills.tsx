import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import blocks from "../../../assets/blocks.jpg";
import clouds from "../../../assets/clouds.jpg";
import cloudsPalm from "../../../assets/cloudsPalm.jpg";
import fale from "../../../assets/fale.jpg";
import languages from "../../../assets/languages.jpg";
import tools from "../../../assets/tools.jpg";
import { backendSkills, designSkills, frontendSkills, languagesSkills, services, testingToolsSkills } from './skillsData';

export const Skills: React.FC = () => {

    const ref = useRef(null);
    const bg = "conic-gradient( from 0deg at 50% 50%, var(--primary) 0deg 40deg, rgb(235, 235, 235) 40deg 360deg)"

    const isDesktop = window.innerWidth >= 1280;

    return (
        <div className='z-10 bg-white w-full relative h-auto flex flex-col items-start justify-start'
            id="skills"
            ref={ref}>
            <header className='z-10 bg-darkPrimary top-20 h-[30vh] w-full flex flex-col text-white items-center justify-center px-10 text-center'>
                <motion.h1 className='lg:text-2xl text-base font-bold relative'
                    initial={{ x: 40, filter: "blur(20px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ duration: .5 }}>My
                    <span className='text-primary lg:text-4xl text-lg font-[Titillium] lowercase italic'> programming </span>and design skills</motion.h1>
                <span className='h-0.5 w-16 bg-primary my-4' />
                <motion.span className='text-gray-400 lg:text-base text-sm'
                    initial={{ x: -40, filter: "blur(20px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ duration: .5 }}
                >The only source of knowledge is experience - Albert Einstein</motion.span>
            </header>
            <main className=' w-full h-auto z-10 flex justify-between bg-white'>
                <motion.div className='w-full' whileInView={{ top: 100 }}>
                    <section className='skillSection'>
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? 140 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>01</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Designer skills</h1>
                                <p className='contentBoxDescritionText'>Experienced in creating impactful visuals
                                    across digital and print media, with a strong eye for composition, branding, and user-centered design.</p>
                            </motion.div>
                            <div className='contentBoxCircles'>
                                {designSkills.map((e, index) => {
                                    return <div className='flex flex-col items-center justify-center mx-5 lg:mb-0 mb-10 hover:scale-110 duration-300 uppercase text-gray-500' key={index}>
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
                        </div>
                        {isDesktop ? <motion.img src={clouds} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}
                    </section>
                    <section className='skillSection'>
                        {isDesktop ? <motion.img src={fale} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? 140 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>02</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Front-end development skills</h1>
                                <p className='contentBoxDescritionText'>Focused on building responsive, user-friendly
                                    websites and interfaces, combining clean code with modern front-end technologies.</p>
                            </motion.div>
                            <div className='contentBoxGraph'>
                                {frontendSkills.map((e, idx) => {
                                    return <div className='contentBoxGraphLine' key={e.name}>
                                        <h2 className='contentBoxGraphHeader'>{e.name}</h2>
                                        <div className='contentBoxGraphContent'>
                                            <div className='contentBoxGraphContentDiv' />
                                            <motion.div className='contentBoxGraphContentMotionDiv'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='contentBoxGraphContentTitle'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>

                    </section>
                    <section className='skillSection'>
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? 140 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>03</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Back-end development skills</h1>
                                <p className='contentBoxDescritionText'>Skilled in developing robust, scalable server-side
                                    logic and APIs, ensuring performance, security, and smooth integration with front-end applications.</p>
                            </motion.div>
                            <div className='contentBoxGraph'>
                                {backendSkills.map((e, idx) => {
                                    return <div className='contentBoxGraphLine' key={e.name}>
                                        <h2 className='contentBoxGraphHeader'>{e.name}</h2>
                                        <div className='contentBoxGraphContent'>
                                            <div className='contentBoxGraphContentDiv' />
                                            <motion.div className='contentBoxGraphContentMotionDiv'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='contentBoxGraphContentTitle'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                         {isDesktop ? <motion.img src={languages} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}

                    </section>
                    <section className='skillSection'>
                         {isDesktop ? <motion.img src={tools} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? 140 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>04</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Testing & Tools</h1>
                                <p className='contentBoxDescritionText'>Confident in using modern tools and workflows to manage projects,
                                    optimize performance, and ensure code quality. Well-versed in debugging, structured processes, and efficient team collaboration.</p>
                            </motion.div>
                            <div className='contentBoxGraph'>
                                {testingToolsSkills.map((e, idx) => {
                                    return <div className='contentBoxGraphLine' key={e.name}>
                                        <h2 className='contentBoxGraphHeader'>{e.name}</h2>
                                        <div className='contentBoxGraphContent'>
                                            <div className='contentBoxGraphContentDiv' />
                                            <motion.div className='contentBoxGraphContentMotionDiv'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='contentBoxGraphContentTitle'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>

                    </section>
                    <section className='skillSection'>
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? 140 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>05</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Languages</h1>
                                <p className='contentBoxDescritionText'>Skilled in clear, professional communication with clients—both
                                    written and verbal. Comfortable discussing ideas, gathering feedback, and explaining technical details in an accessible way.</p>
                            </motion.div>
                            <div className='contentBoxGraph'>
                                {languagesSkills.map((e, idx) => {
                                    return <div className='contentBoxGraphLine' key={e.name}>
                                        <h2 className='contentBoxGraphHeader'>{e.name}</h2>
                                        <div className='contentBoxGraphContent'>
                                            <div className='contentBoxGraphContentDiv' />
                                            <motion.div className='contentBoxGraphContentMotionDiv'
                                                whileInView={{ width: e.percent, x: 0 }}
                                                initial={{ width: "0%", x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ width: e.percent }}
                                            />
                                        </div>
                                        <h2 className='contentBoxGraphContentTitle'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                          {isDesktop ? <motion.img src={cloudsPalm} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}

                    </section>
                    <section className='skillSection'>
                          {isDesktop ? <motion.img src={blocks} className="motionImage"
                            initial={{ y: 0 }}
                        /> : null}
                        <div className='contentBox'>
                            <motion.div className='contentBoxDescrition'
                                initial={{ x: isDesktop ? isDesktop ? 140 : 0 : 0, filter: "blur(20px)" }}
                                whileInView={{ x: 0, filter: "blur(0px)" }}
                                transition={{ duration: .5 }}>
                                <span className='contentBoxDescritionPinkLine'>06</span>
                                <h1 className='contentBoxDescritionTitle beforeVertical'>Services</h1>
                                <p className='contentBoxDescritionText'>Offering tailored design and development solutions —
                                    from brand identity and UI/UX design to front-end implementation and website optimization —
                                    to help businesses stand out and grow online.</p>
                            </motion.div>
                            <div className='w-full flex lg:flex-row h-[50vh] flex-col items-start justify-center mt-20 pb-24 px2'>
                                {services.map((e, idx) => {
                                    return <div className='flex flex-col items-center w-full h-[40vh] font-light uppercase 
                                lg:text-base text-[10px] mb-2 hover:scale-110 duration-300' key={e.name}>
                                        <div className='relative lg:flex hidden w-16 h-full mr-2'>
                                            <div className='absolute bg-[#e5e5e5] h-full w-16 top-0' />
                                            <motion.div className='absolute bg-primary h-full w-16 bottom-0'
                                                whileInView={{ height: e.percent, y: 0 }}
                                                initial={{ height: "0%", y: 0 }}
                                                transition={{
                                                    duration: 1,
                                                }}
                                                style={{ height: e.percent }}
                                            />
                                        </div>
                                        <motion.p className='w-auto text-center text-gray-500 pt-4 text-sm whitespace-nowrap'>{e.name}</motion.p>
                                        <h2 className='contentBoxGraphContentTitle'>{e.percent}%</h2>
                                    </div>
                                })}
                            </div>
                        </div>

                    </section>
                </motion.div>
            </main>
        </div>
    )
}