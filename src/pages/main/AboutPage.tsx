import React, { useRef } from 'react';
import { motion} from 'framer-motion';
import aboutMe from '../../assets/aboutMe.jpg';
import { Link } from "react-router";

export const AboutPage: React.FC = () => {

    const targetRef = useRef(null);
    const isDesktop = window.innerWidth >= 1280;

    return (
        <div
            ref={targetRef}
            className='relative bg-white h-[100vh] gridPage w-full'
            id="about">
            <div className='z-10 mt-10 h-auto lg:w-1/4 lg:flex hidden items-start col-start-2 col-end-7 lg:row-start-2 row-start-1 row-end-6 relative'>
                <motion.img
                    src={aboutMe}
                    className="z-10"
                    alt="aboutMe"
                    initial={{ y: 240}}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 2.5 }} />
                <motion.div
                    initial={{ y: 240 }}
                    whileInView={{ y: -80 }}
                    transition={{ duration: 2.5 }}
                    className='bg-primary h-96 w-24 p-12 absolute top-0 left-0 -ml-10 mt-4' />
            </div>
            <div className='z-10 flex flex-col text-darkPrimary lg:-ml-20 mt-40 lg:col-start-4 col-start-2 col-end-6 lg:row-start-2 row-start-1 text-sm '>
                <motion.span className='text-gray-400'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .2 }}
                >From Photography to Frontend Innovation</motion.span>
                <motion.h1 className='lg:text-4xl text-2xl font-bold mb-12 mt-6 relative tittle'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .4 }}
                >My creative
                    <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> evolution </span></motion.h1>
                <motion.p
                    className='leading-loose text-justify'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .5 }}
                >What began as a journey in saving lives slowly transformed into a pursuit of creating beauty and logic through art and code.
                    From emergency rooms to creative studios, from life-or-death decisions to designing digital experiences—each step taught me
                    something new about problem-solving, precision, and creativity. Over time, I moved from the urgency of medicine to the art
                    of design, and eventually, to the language of code. Now, I blend the skills of empathy, creativity, and technical expertise
                    to craft seamless, meaningful digital experiences.</motion.p>
                <Link  to={{
                    pathname: "/gallery",
                }}>
                <motion.button className='py-4 px-6 lg:block hidden mt-10 uppercase font-bold text-white tracking-wider text-xs bg-primary w-fit'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .8 }}
                >photography / soon</motion.button>
                </Link>
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
    )
}