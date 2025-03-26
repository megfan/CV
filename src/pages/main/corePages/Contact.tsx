import React, { useRef } from 'react';
import '../../../styles/MainPage.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ContactPage: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "start end"]
    });
    const { scrollY } = useScroll()

    const paralax1 = useTransform(scrollYProgress, [1,0], ["100%", "0"]);
    const paralaxBgText = useTransform(scrollYProgress, [1,0], ["-100%", "100%"]);

    return (
    <div
        ref={ref}
        className='bg-darkPrimary h-auto mt-20 w-full relative' 
        id="about">
       {/* <div className='z-10 h-auto w-1/4 flex items-start col-start-2 col-end-7 row-start-2 row-end-6 relative'>
            <img src={'assets/AboutMe.jpg'} className="z-10" alt="aboutMe" />
            <motion.div 
                style={{ y: paralax1 }}
                className='bg-primary h-96 w-24 p-12 col-start-1 absolute top-0 left-0 -ml-10 mt-4'/>
        </div>
        <div className='z-10 flex flex-col text-darkPrimary -ml-20 mt-10 col-start-4 col-end-6 row-start-2 text-sm '>
            <span className='text-gray-400'>From Photography to Frontend Innovation</span>
            <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>my 
                <span className='text-primary text-4xl font-[Titillium] lowercase italic'> creative </span>evolution</h1>
            <p className='leading-loose text-justify'>What started as a passion for photography and media arts soon evolved into visual design and, ultimately, frontend development. Over the years, my focus has shifted from crafting static visuals to building dynamic, interactive digital experiences across diverse industries. With six years in frontend development and 14 in graphic design, I bring a blend of creativity and technical expertise to every project. Experienced in agency work, startup consulting, and developing solutions for businesses and consumers, I thrive on collaboration and continuous learning, always pushing my skills to the next level.</p>
            <button className='py-4 px-6 buttonMovingRight mt-10 uppercase font-bold text-white tracking-wider text-xs bg-primary w-fit'>photography / soon</button>
        </div>
        <motion.p  
            style={{ y: paralaxBgText }} 
            className='text-[10rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black '>
                Words about
        </motion.p> */}
        <header className='bg-darkSec w-full h-40 no-wrap flex'>
            <button className='bg-darkSec text-white font-normal btnWIthBorders text-2xl px-20 w-2/3'>Ready to talk about
            <span className='text-primary text-4xl font-[Titillium] lowercase italic'> your </span> project?</button>
            <div className='w-1/3 flex justify-center items-center no-wrap'>
                 <button className='py-6 px-8 font-bold text-primary transition-all hover:text-white hover:bg-primary
                 tracking-widest text-base bg-darkSec border-primary w-fit border-2'>
                CONTACT ME</button>
            </div>
        </header>
        <main className='h-auto w-full flex sticky'>
            <div className='z-10 flex flex-col text-darkPrimary p-40 text-sm w-1/2 h-full bg-white'>
                <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'> 
                    <span className='text-primary text-4xl font-[Titillium] italic'>Contact </span>details</h1>
                <p className='leading-loose text-justify'>Have an idea for a website and need an experienced developer or designer? Get in touch! Together, we’ll create a modern and functional project tailored to your needs. Drop me a message, and let’s discuss the details!</p>
                <button className='w-40 py-4 px-6 buttonMovingRight mt-10 uppercase font-bold text-white tracking-wider text-xs bg-primary'>resume</button>
            </div>
            <div className='z-10 flex flex-col bg-darkPrimary p-20 text-normal w-1/2 items-center justify-center'>
                <div className='flex'>
                    <div className='mr-16 text-gray-500'>
                        <p className='leading-loose text-justify'>Phone</p>
                        <p className='leading-loose text-justify'>Email</p>
                        <p className='leading-loose text-justify'>Adress</p>
                    </div>
                    <div className='text-white'>
                        <p className='leading-loose text-justify'>+48 693 518 447</p>
                        <p className='leading-loose text-justify'>megfa@yahoo.com</p>
                        <p className='leading-loose text-justify'>Warsaw, Poland, Europe</p>
                    </div>
                </div>
                <button className='w-40 py-4 px-6 buttonMovingRight mt-12 uppercase font-bold text-white tracking-wider text-xs bg-primary'>portfolio</button>
            </div>
        </main>
        <footer className='bg-darkSec w-full h-30 no-wrap flex text-white pl-40 items-center justify-between'>
            <p>© Małgorzata Staszewska 2025  /  All rights reserved. </p>
            <button className='h-full w-30 bg-primary text-white font-semibold text-xs font-[Poppins] tracking-widest'>TOP</button>
        </footer>
    </div>
    )
}