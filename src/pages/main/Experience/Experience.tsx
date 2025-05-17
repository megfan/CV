import React, { useRef } from 'react';
import '../../../styles/experiencePage.css';
import { experienceData } from './experienceData';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import { motion } from 'framer-motion';


export const Experience: React.FC = () => {
    const ref = useRef(null);
    const isDesktop = window.innerWidth >= 1280;

    const alumbrados = experienceData['alumbrados'];
    const onwelo = experienceData['onwelo'];
    const coders = experienceData['coders'];
    const imm = experienceData['imm'];
    const fakturownia = experienceData['fakturownia'];
    const closi = experienceData['closi'];
    const granatowi = experienceData['granatowi'];
    const others = experienceData['others'];

    return (<>
        <div className='z-20 bg-white xl:pr-20 lg:pr-40 gridPage w-full h-auto relative m-0 p-0 overflow-hidden' id="experience" ref={ref}>
            {/* {isDesktop ? ( */}
            <div className='bg-white h-auto flex flex-col w-full lg:pt-40 lg:pr-20 col-start-1 lg:col-start-2 px-10 lg:px-0 col-end-8 row-start-1 row-end-8'>
                <span className='lg:absolute hidden top-0 lg:left-0 -left-5 bg-gray-300 z-20 h-full w-[1px] col-start-2' />
                <motion.div className='flex flex-col text-darkPrimary lg:ml-50 text-sm mt-20 lg:mt-0'
                    initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .2 }}>
                    <h1 className='lg:text-4xl text-2xl font-bold mb-12 relative tittle'>How it
                        <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> develops </span></h1>
                    <span className='text-gray-400'>The most difficult thing is the decision to act, the rest is merely tenacity - Amelia Earhart</span>
                </motion.div>
                <div className='z-10 w-full'>
                    {/* alumbrados */}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='bg-lightGray titleBox'>
                            <p className=' duration'>{alumbrados?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{alumbrados?.title}</h1>
                            <span className='titleLink text-primary'>{alumbrados?.link}</span>
                        </div>
                        <div className='mt-30 h-auto w-1/3 lg:flex hidden items-center justify-center relative mx-10'>
                            <ParallaxPicFrame src={alumbrados?.pic ?? ''} styles={'object-cover bottom-0 w-1/2 h-2/3 bg-center absolute'} />
                        </div>
                        <div className='descriptionBox'>
                            <h1 className='descriptionTitle'>{alumbrados?.subtitle}</h1>
                            <p className='descriptionTxt'>{alumbrados?.description}</p>
                            <p className='descriptionTechnologies'>{alumbrados?.technologies}</p>
                        </div>
                    </motion.div>

                    {/* onwelo */}
                    <motion.div className='flex flex-col text-gray-600 text-2xl items-start justify-start w-full mt-15 lg:pr-30 relative h-auto'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='bg-primary titleBox text-white'>
                            <p className=' text-white text-sm mb-4'>{onwelo?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{onwelo?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{onwelo?.link}</span>
                        </div>
                        <div className='containerBox'>
                            {onwelo?.children?.map((e, idx) => {
                                return <motion.div className='descriptionBox lg:mr-12'
                                    initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: .5, delay: .2 * idx }}>
                                    <p className=' duration'>{e.duration}</p>
                                    <h1 className='descriptionTitle'>{e.title}</h1>
                                    <h2 className='descriptionSubtitle'>{e.subtitle}</h2>
                                    <p className='descriptionTxt lg:text-base text-sm'>{e.description}</p>
                                    <p className='descriptionTechnologies'>{e.technologies}</p>
                                </motion.div>
                            })}
                        </div>
                    </motion.div>

                    {/* coders */}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='titleBox bg-lightGray'>
                            <p className=' duration'>{coders?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{coders?.title}</h1>
                            <span className='titleLink text-primary'>{coders?.link}</span>
                        </div>
                        <div className='photoParallaxContainer'>
                            <ParallaxPicFrame src={coders?.pic ?? ''} styles={'photoParallax lg:translate-y-80'} />
                        </div>
                        <div className='descriptionBox'>
                            <h1 className='descriptionTitle'>{coders?.subtitle}</h1>
                            <p className='descriptionTxt'>{coders?.description}</p>
                            <p className='descriptionTechnologies'>{coders?.technologies}</p>
                        </div>
                    </motion.div>

                    {/* imm*/}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='bg-primary text-white titleBox'>
                            <p className=' text-sm mb-4'>{imm?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{imm?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{imm?.link}</span>
                        </div>
                        <div className='descriptionBox'>
                            <h1 className='descriptionTitle'>{imm?.subtitle}</h1>
                            <p className='descriptionTxt'>{imm?.description}</p>
                            <p className='descriptionTechnologies'>{imm?.technologies}</p>
                        </div>
                        <div className='photoParallaxContainer'>
                            <ParallaxPicFrame src={imm?.pic ?? ''} styles={'photoParallax'} />
                        </div>
                    </motion.div>

                    {/* fakturownia */}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='titleBox bg-lightGray'>
                            <p className=' duration'>{fakturownia?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{fakturownia?.title}</h1>
                            <span className='titleLink text-primary'>{fakturownia?.link}</span>
                        </div>
                        <div className='text-base h-full text-gray-400 lg:w-2/3 lg:mr-10 pt-4'>
                            <h1 className='descriptionTitle'>{fakturownia?.subtitle}</h1>
                            <p className='descriptionTxt'>{fakturownia?.description}</p>
                            <p className='descriptionTechnologies'>{fakturownia?.technologies}</p>
                        </div>
                    </motion.div>

                    {/* closi */}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='bg-primary text-white titleBox'>
                            <p className=' text-sm mb-4'>{closi?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{closi?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{closi?.link}</span>
                        </div>
                        <div className='descriptionBox'>
                            <h1 className='descriptionTitle'>{closi?.subtitle}</h1>
                            <p className='descriptionTxt'>{closi?.description}</p>
                            <p className='descriptionTechnologies'>{closi?.technologies}</p>
                        </div>
                        <div className='photoParallaxContainer'>
                            <ParallaxPicFrame src={closi?.pic ?? ''} styles={'photoParallax'} />
                        </div>
                    </motion.div>

                    {/* grnatowi */}
                    <motion.div className='containerBox'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='titleBox bg-lightGray'>
                            <p className=' duration'>{granatowi?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{granatowi?.title}</h1>
                            <span className='titleLink text-primary'>{granatowi?.link}</span>
                        </div>
                        <div className='photoParallaxContainer'>
                            <ParallaxPicFrame src={granatowi?.pic ?? ''} styles={'photoParallax translate-y-48'} />
                        </div>
                        <div className='descriptionBox'>
                            <h1 className='descriptionTitle'>{granatowi?.subtitle}</h1>
                            <p className='descriptionTxt'>{granatowi?.description}</p>
                            <p className='descriptionTechnologies'>{granatowi?.technologies}</p>
                        </div>
                    </motion.div>

                    {/* others */}
                    <motion.div className='flex  text-gray-600 text-xl items-start justify-start w-full lg:my-40 my-20 h-auto'
                        initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: .5, delay: .2 }}>
                        <div className='bg-lightGray lg:p-12 p-4 flex lg:w-1/3 lg:mr-10 relative'>
                            <h1 className='titleBeforeDecoration'>{others?.title}</h1>
                            <button className='absolute lg:-right-40 -right-20 lg:top-auto top-16 hover:translate-x-12 duration-300'>
                                <a href={require('../../../assets/CV.pdf')} type='button' target="_blank" rel="noreferrer" download={'CV'}
                                    className='w-40 py-4 px-12 uppercase font-bold text-white tracking-wider text-xs bg-primary'>
                                    download resume
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
            {isDesktop && <>
                <span className='gridVisibileItem col-start-1' />
                <span className='gridVisibileItem col-start-2' />
                <span className='gridVisibileItem col-start-3' />
                <span className='gridVisibileItem col-start-4' />
                <span className='gridVisibileItem col-start-5' />
                <span className='gridVisibileItem col-start-6' />
            </>}
        </div>
    </>
    )
}