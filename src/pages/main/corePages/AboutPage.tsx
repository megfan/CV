import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutPage: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "start end"]
    });

    const paralax1 = useTransform(scrollYProgress, [1,0], ["100%", "0"]);
    const paralaxBgText = useTransform(scrollYProgress, [1,0], ["-100%", "100%"]);

    return (
    <div
        ref={ref}
        className='bg-white mainPage gridPage w-full relative' 
        id="about">
       <div className='z-10 h-auto w-1/4 flex items-start col-start-2 col-end-7 row-start-2 row-end-6 relative'>
            <img src={'assets/AboutMe.jpg'} className="z-10" alt="aboutMe" />
            <motion.div 
                style={{ y: paralax1 }}
                className='bg-primary h-96 w-24 p-12 col-start-1 absolute top-0 left-0 -ml-10 mt-4'/>
        </div>
        <div className='z-10 flex flex-col text-darkPrimary -ml-20 mt-10 col-start-4 col-end-6 row-start-2 text-sm '>
            <span className='text-gray-400'>From Photography to Frontend Innovation</span>
            <h1 className='text-2xl font-bold mb-12 mt-6 relative tittle'>My 
                <span className='text-primary text-4xl font-[Titillium] lowercase italic'> creative </span>evolution</h1>
            <p className='leading-loose text-justify'>What started as a passion for photography and media arts soon evolved into visual design and, ultimately, frontend development. Over the years, my focus has shifted from crafting static visuals to building dynamic, interactive digital experiences across diverse industries. With six years in frontend development and 14 in graphic design, I bring a blend of creativity and technical expertise to every project. Experienced in agency work, startup consulting, and developing solutions for businesses and consumers, I thrive on collaboration and continuous learning, always pushing my skills to the next level.</p>
            <button className='py-4 px-6 buttonMovingRight mt-10 uppercase font-bold text-white tracking-wider text-xs bg-primary w-fit'>photography / soon</button>
        </div>
        <motion.p  
            style={{ y: paralaxBgText }} 
            className='text-[10rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black '>
                Words about
        </motion.p>
    </div>
    )
}