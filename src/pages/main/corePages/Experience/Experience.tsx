import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../../../styles/MainPage.css';
import {experienceDataRight} from './experienceData';
import {experienceDataLeft} from './experienceData';

export const Experience: React.FC = () => {
      const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start start", "end start"]
        });
    
        const paralaxTxt = useTransform(scrollYProgress, [0,1], ["200%", "-200%"]);
       

    return (
    <div className='bg-white experiencePage w-full relative pt-40' id="experience"  ref={ref}>
        <span className='relative bg-gray-300 col-start-3 row-start-1 row-end-19 z-20 h-full w-[1px]'/>
       
       <div className='h-auto w-1/4 flex items-start col-start-2 col-end-6 row-start-1 row-end-6 relative'>
            <img src={'assets/work1.jpg'} className="z-10" alt="aboutMe" />
            <div className='bg-primary h-60 w-24 p-12 col-start-1 absolute -top-10 left-0 -ml-10'/>
        </div>

        <div className='flex flex-col text-darkPrimary -ml-20 my-10 col-start-4 col-end-6 row-start-1 text-sm '>
            <span className='text-gray-400'>The most difficult thing is the decision to act, <br/> the rest is merely tenacity - Amelia Earhart</span>
            <h1 className='text-2xl font-bold mb-12 mt-6 relative tittle'>How it
            <span className='text-primary text-4xl font-[Titillium] lowercase italic'> develops </span></h1>
        </div>
        <div className='col-start-3 col-end-7 row-start-3 mr-24 z-10'>
            {experienceDataRight.map((e, idx) => {
                console.log(idx, e.title)
                return <section className='relative flex flex-col' key={idx}>
                    <div className='flex items-start text-2xl group'>
                        <div className='flex flex-col text-gray-600 items-start justify-start'>
                            <div className={(e.employee ? 'bg-lightGray my-4 ' : 'pl-12 ') +  'px-12 pt-8 flex flex-col'}>
                                <p className=' text-gray-400 text-sm mb-4'>{e.duration}</p>
                                <h1 className={(e.employee ? 'titleBeforeDecorationRight' : '')}>{e.title}</h1>
                                <span className='text-sm text-gray-500'>{e.subtitle}</span>
                                <span className='text-sm text-primary italic font-[Titillium] font-bold pb-8'>{e.link}</span>
                            </div>
                                <div className='p-4 text-sm w-4/5 ml-16 text-transparent group-hover:text-gray-400 group-hover:bg-[#ffffff78] group-hover:-translate-x-5 duration-300 '>
                                    {e.description}
                                    <p className='mt-4'>{e.technologies}</p>
                                </div>
                        </div>
                         {e.employee && e.pic ? <img src={e.pic} alt='' className='h-full w-[30rem] my-4'/> : null}
                  </div>
                </section>
            })}
        </div>
        <div className='col-start-1 col-end-3 row-start-5'>
            {experienceDataLeft.map((e, idx) => {
                return <section className='relative flex flex-col ml-8' key={idx}>
                  <div className='ml-auto flex flex-col items-end text-gray-600 text-2xl group '>
                    <div className={(e.employee ? 'bg-lightGray' : null) + ' p-8 flex flex-col'}>
                        <p className=' text-gray-400 text-sm mb-4'>{e.duration}</p>
                        <h1 className={(e.employee ? 'titleBeforeDecorationLeft' : '')}>{e.title}</h1>
                        <span className='text-sm text-gray-500'>{e.subtitle}</span>
                        <span className='text-sm text-primary italic font-[Titillium] font-bold'>{e.link}</span>
                    </div>
                    <div className='p-4 text-sm ml-6 mr-1 mb-4 text-transparent group-hover:text-gray-400 group-hover:-translate-x-5 duration-300 '>
                    {e.description}
                        <p className='mt-4'>{e.technologies}</p>
                    </div>
                 </div>
                </section>
            })}
        </div>


        <motion.p  
            style={{ y: paralaxTxt }} 
            className='text-[10rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black '>
               Working & envolve
        </motion.p>
        <div className='z-20 bg-gradient-to-t to-transparent from-white col-start-1 col-end-7col-start-1 col-end-7 h-auto mb-0 '/>
        <motion.div  
            style={{ y: paralaxTxt }} 
            className='ml-40 w-full col-start-1 col-end-6 row-start-2 row-end-7 flex flex-col align-start'>
            <p className='text-[12rem]  text-[#b6b6b61f] font-black uppercase'> Working & envolve</p>
            <div className='w-40 h-20 bg-[#b6b6b61f] self-end'/>
            <div className='w-40 h-20 mt-20 pt-40 bg-[#b6b6b61f] self-start'/>
        </motion.div>
    </div>
    )
}