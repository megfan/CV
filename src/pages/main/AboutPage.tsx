import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MouseMoveTile from '../../components/mouseMoveTile';
import aboutMe from '../../assets/aboutMe.jpg';

export const AboutPage: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "start end"]
    });

    const paralaxImg = useTransform(scrollYProgress, [1, 0], ["100%", "0"]);
    const paralaxBgText = useTransform(scrollYProgress, [1, 0], ["-100%", "100%"]);
    const isDesktop = window.innerWidth >= 1280;

    return (
        <div
            ref={ref}
            className='bg-white mainPage gridPage w-full relative'
            id="about">
            <div className='z-10 h-auto lg:w-1/4 lg:flex hidden items-start col-start-2 col-end-7 lg:row-start-2 row-start-1 row-end-6 relative'>
                <MouseMoveTile children={<img src={aboutMe} className="z-10" alt="aboutMe" />} />
                <motion.div
                    style={{ y: paralaxImg }}
                    className='bg-primary h-96 w-24 p-12 absolute top-0 left-0 -ml-10 mt-4' />
            </div>
            <div className='z-10 flex flex-col text-darkPrimary lg:-ml-20 mt-10 lg:col-start-4 col-start-2 col-end-6 lg:row-start-2 row-start-1 text-sm '>
                <motion.span className='text-gray-400'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .4 }}
                >From Photography to Frontend Innovation</motion.span>
                <motion.h1 className='lg:text-4xl text-2xl font-bold mb-12 mt-6 relative tittle'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .6 }}>My creative
                    <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> evolution </span></motion.h1>
                <motion.p className='leading-loose text-justify'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .8 }}
                >What started as a passion for photography and media arts soon evolved into visual design and,
                    ultimately, frontend development. Over the years, my focus has shifted from crafting static visuals to building dynamic, interactive
                    digital experiences across diverse industries. With six years in frontend development and 14 in graphic design, I bring a blend of
                    creativity and technical expertise to every project. Experienced in agency work, startup consulting, and developing solutions for
                    businesses and consumers, I thrive on collaboration and continuous learning, always pushing my skills to the next level.</motion.p>
                <motion.button className='py-4 px-6 lg:block hidden mt-10 uppercase font-bold text-white tracking-wider text-xs bg-primary w-fit'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .8 }}
                >photography / soon</motion.button>
            </div>
            <motion.p
                style={{ y: paralaxBgText }}
                className='text-[10rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black lg:block hidden'>
                Words about
            </motion.p>
            {isDesktop && <>
                <span className='gridVisibileItem col-start-1' />
                <span className='gridVisibileItem col-start-2' />
                <span className='gridVisibileItem col-start-3' />
                <span className='gridVisibileItem col-start-4' />
                <span className='gridVisibileItem col-start-5' />
                <span className='gridVisibileItem col-start-6' />
            </>}
        </div>
    )
}