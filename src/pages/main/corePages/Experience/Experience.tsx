import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import '../../../../styles/mainPage.css';
import '../../../../styles/experiencePage.css';
import { experienceData } from './experienceData';
import MouseMoveTile from '../../../../components/mouseMoveTile';
import imm from '../../../../assets/imm.avif';
import { ParallaxPicFrame } from '../../../../components/parallaxPicFrame';


export const Experience: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const paralaxTxt = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
    const isDesktop = window.innerWidth >= 1280;

    const alumbrados = experienceData.find(e => e.order === 1);
    const onwelo = experienceData.find(e => e.order === 2);
    const coders = experienceData.find(e => e.order === 3);
    const imm = experienceData.find(e => e.order === 4);
    const fakturownia = experienceData.find(e => e.order === 5);
    const closi = experienceData.find(e => e.order === 6);
    const granatowi = experienceData.find(e => e.order === 7);


    return (<>
        <div className='gridPage w-full h-auto relative m-0 p-0 overflow-hidden' id="experience" ref={ref}>
            {/* {isDesktop ? ( */}
            <div className='bg-white h-auto flex flex-col w-full pt-40 pr-20 col-start-2 col-end-7 row-start-1 row-end-8'>
                <span className='absolute top-0 left-0 bg-primary z-20 h-full w-[1px] col-start-2' />
                {/* <div className='h-auto w-1/4 flex items-start col-start-2 col-end-6 row-start-1 row-end-6 relative'>
                    <img src={work} className="z-10" alt="aboutMe" />
                    <div className='bg-primary h-60 w-24 p-12 col-start-1 absolute -top-10 left-0 -ml-10' />
                </div> */}
                <div className='flex flex-col text-darkPrimary ml-50 my-10 text-sm'>
                    <h1 className='lg:text-4xl text-2xl font-bold mb-12 relative tittle'>How it
                        <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> develops </span></h1>
                    <span className='text-gray-400'>The most difficult thing is the decision to act, <br /> the rest is merely tenacity - Amelia Earhart</span>
                </div>
                <div className='z-10 w-full mt-20'>
                    {/* alumbrados */}
                    <div className='flex text-gray-600 text-2xl items-start justify-start w-full mb-40 relative h-auto'>
                        <div className='bg-lightGray p-12 flex flex-col w-1/3'>
                            <p className=' text-gray-400 text-sm mb-4'>{alumbrados?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{alumbrados?.title}</h1>
                            <span className='text-sm text-primary italic font-[Titillium] font-bold'>{alumbrados?.link}</span>
                        </div>
                        <div className=' mt-30 h-auto w-1/3 flex items-center justify-center relative mx-10'>
                            <ParallaxPicFrame src={alumbrados?.pic ?? ''} styles={'object-cover bottom-0 w-1/2 h-2/3 bg-center absolute'} />
                        </div>
                        <div className='text-base h-full text-gray-400 w-1/3'>
                            <h1 className='text-2xl text-gray-500 mb-5'>{alumbrados?.subtitle}</h1>
                            <p className='text-justify'>{alumbrados?.description}</p>
                            <p className='mt-4 text-primary font-bold'>{alumbrados?.technologies}</p>
                        </div>
                    </div>

                    {/* onwelo */}
                    <div className='flex flex-col text-gray-600 text-2xl items-start justify-start w-full my-20 pr-30 relative h-auto'>
                        <div className='bg-primary p-12 flex flex-col mr-20 text-white w-1/3'>
                            <p className=' text-white text-sm mb-4'>{onwelo?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{onwelo?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{onwelo?.link}</span>
                        </div>
                        <div className='flex flex-row w-full ml-40 mt-30'>
                            {onwelo?.children?.map(e => {
                                return <div className='text-base h-full text-gray-400 w-1/3 mr-12'>
                                    <p className=' text-gray-400 text-sm mb-4'>{e.duration}</p>
                                    <h1 className='text-2xl text-gray-600'>{e.title}</h1>
                                    <span className='text-sm text-primary italic font-[Titillium] font-bold pb-8'>{e.link}</span>
                                    <h2 className='text-xl text-gray-500 my-5'>{e.subtitle}</h2>
                                    <p className='text-justify'>{e.description}</p>
                                    <p className='mt-4 text-primary font-bold'>{e.technologies}</p>
                                </div>
                            })}
                        </div>
                    </div>

                    {/* coders */}
                    <div className='flex text-gray-600 text-2xl items-start justify-start w-full my-40 relative h-auto'>
                        <div className='bg-lightGray p-12 flex flex-col w-1/3'>
                            <p className=' text-gray-400 text-sm mb-4'>{coders?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{coders?.title}</h1>
                            <span className='text-sm text-primary italic font-[Titillium] font-bold'>{coders?.link}</span>
                        </div>
                        <div className='h-[20rem] w-1/3 flex items-center justify-center relative mx-10 overflow-hidden'>
                            <ParallaxPicFrame src={coders?.pic ?? ''} styles={'object-cover bottom-0 w-2/3 h-full bg-bottom absolute'} />
                        </div>
                        <div className='text-base h-full text-gray-400 w-1/3'>
                            <h1 className='text-2xl text-gray-600 mb-5'>{coders?.subtitle}</h1>
                            <p className='text-justify'>{coders?.description}</p>
                            <p className='mt-4 text-primary font-bold'>{coders?.technologies}</p>
                        </div>
                    </div>

                    {/* imm*/}
                    <div className='flex text-gray-600 text-2xl items-start justify-start w-full my-40 relative h-auto'>
                        <div className='bg-primary text-white p-12 flex flex-col w-1/3 mr-10'>
                            <p className=' text-sm mb-4'>{imm?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{imm?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{imm?.link}</span>
                        </div>
                        <div className='text-base h-full text-gray-400 w-1/3'>
                            <h1 className='text-2xl text-gray-600 mb-5'>{imm?.subtitle}</h1>
                            <p className='text-justify'>{imm?.description}</p>
                            <p className='mt-4 text-primary font-bold'>{imm?.technologies}</p>
                        </div>
                        <div className='h-[20rem] w-1/3 flex items-center justify-center relative mx-10 overflow-hidden'>
                            <ParallaxPicFrame src={imm?.pic ?? ''} styles={'object-cover bottom-0 w-2/3 h-full bg-bottom absolute'} />
                        </div>
                    </div>

                    {/* fakturownia */}
                    <div className='flex text-gray-600 text-2xl items-start justify-start w-full my-40 relative h-auto'>
                        <div className='bg-lightGray p-12 flex flex-col w-1/3 mr-10'>
                            <p className=' text-gray-400 text-sm mb-4'>{fakturownia?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{fakturownia?.title}</h1>
                            <span className='text-sm text-primary italic font-[Titillium] font-bold'>{fakturownia?.link}</span>
                        </div>
                        <div className='text-base h-full text-gray-400 w-2/3 mr-10'>
                            <h1 className='text-2xl text-gray-600 mb-5'>{fakturownia?.subtitle}</h1>
                            <p className='text-justify'>{fakturownia?.description}</p>
                            <p className='mt-4 text-primary font-bold'>{fakturownia?.technologies}</p>
                        </div>
                    </div>

                    {/* closi */}
                    <div className='flex text-gray-600 text-2xl items-start justify-start w-full my-40 relative h-auto'>
                        <div className='bg-primary text-white p-12 flex flex-col w-1/3 mr-10'>
                            <p className=' text-sm mb-4'>{closi?.duration}</p>
                            <h1 className='titleBeforeDecoration'>{closi?.title}</h1>
                            <span className='text-sm italic font-[Titillium] font-bold'>{closi?.link}</span>
                        </div>
                        <div className='text-base h-full text-gray-400 w-1/3'>
                            <h1 className='text-2xl text-gray-600 mb-5'>{closi?.subtitle}</h1>
                            <p className='text-justify'>{closi?.description}</p>
                            <p className='mt-4 text-primary font-bold'>{closi?.technologies}</p>
                        </div>
                        <div className='h-[20rem] w-1/3 flex items-center justify-center relative mx-10 overflow-hidden'>
                            <ParallaxPicFrame src={closi?.pic ?? ''} styles={'object-cover bottom-0 w-2/3 h-full bg-bottom absolute'} />
                        </div>
                    </div>

                </div>
                {/* <div className='z-20 bg-gradient-to-t to-transparent from-white col-start-1 col-end-7col-start-1 col-end-7 h-auto mb-0 ' />
                <motion.div
                    style={{ y: paralaxTxt }}
                    className='ml-40 w-full col-start-1 col-end-6 row-start-2 row-end-7 flex-col align-start lg:flex hidden'>
                    <p className='text-[12rem]  text-[#b6b6b61f] font-black uppercase'> Working <br /> & envolve</p>
                    <div className='w-40 h-20 bg-[#b6b6b61f] self-end' />
                    <div className='w-40 h-20 mt-20 pt-40 bg-[#b6b6b61f] self-start' />
                </motion.div> */}
            </div>

            {/* ) : (
            <div className='w-full h-auto relative'>
                <div className='flex flex-col text-darkPrimary m-10 text-sm '>
                    <h1 className='text-2xl font-bold mb-12 relative tittle'>How it
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> develops </span></h1>
                    <span className='text-gray-400'>The most difficult thing is the decision to act, the rest is merely tenacity - Amelia Earhart</span>
                </div>
                <div>
                    {experienceData.map((e, idx) => {
                        return <section className='relative flex flex-col' key={idx}>
                            <div className='ml-auto flex flex-col items-end text-gray-600 text-2xl group '>
                                <div className={(e.employee ? 'bg-lightGray' : null) + ' p-8 flex flex-col'}>
                                    <p className=' text-gray-400 text-sm mb-4'>{e.duration}</p>
                                    <h1 className={(e.employee ? 'titleBeforeDecorationRight' : '')}>{e.title}</h1>
                                    <span className='text-sm text-gray-500'>{e.subtitle}</span>
                                    <span className='text-base mt-4 text-primary italic font-[Titillium] font-bold'>{e.link}</span>
                                </div>
                                <div className='p-4 text-sm ml-6 mr-1 mb-4 text-gray-400 '>
                                    {e.description}
                                    <p className='mt-4 text-primary font-bold'>{e.technologies}</p>
                                </div>
                            </div>
                        </section>
                    })}
                </div>
            </div>
        )} */}
            {/* {isDesktop && <> */}
            <span className='gridVisibileItem col-start-1' />
            <span className='gridVisibileItem col-start-2' />
            <span className='gridVisibileItem col-start-3' />
            <span className='gridVisibileItem col-start-4' />
            <span className='gridVisibileItem col-start-5' />
            <span className='gridVisibileItem col-start-6' />
            {/* </>} */}
        </div>
    </>
    )
}