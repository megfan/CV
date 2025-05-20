import React from 'react';
import { HashLink } from "react-router-hash-link";
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {


    return (
        <div className='z-30 bg-darkPrimary h-auto xl:h-auto flex flex-col justify-between w-full relative'
            id="contact">
            <header className='bg-darkSec w-full lg:h-40 no-wrap flex lg:flex-row flex-col py-4'>
                <motion.button className='bg-darkSec text-white font-normal lg:text-2xl lg:px-20 px-5 py-5 lg:w-2/3'
                    initial={{ x: -80, filter: "blur(2px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ duration: .5 }}>
                    Ready to talk about
                    <span className='text-primary lg:text-4xl font-[Titillium] lowercase italic'> your </span> project?
                </motion.button>
                <div className='lg:w-1/3 flex justify-center items-center no-wrap btnWIthBorders'>
                    <motion.button className='lg:py-6 py-2 px-8 font-bold text-primary transition-all hover:text-white hover:bg-primary
                 tracking-widest text-base bg-darkSec border-primary w-fit border-2'
                 onClick={() => window.location.href = 'mailto:megfa@yahoo.com'}
                     initial={{ scale: .8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: .3, type: "spring", stiffness: 100  }}>
                       Email Me
                    </motion.button>
                </div>
            </header>
            <main className='h-full w-full flex lg:flex-row flex-col lg:sticky'>
                <div className='z-10 flex flex-col lg:items-start items-center justify-center text-darkPrimary lg:p-32 xl:p-72 p-10 text-sm lg:w-1/2 h-full bg-white'>
                    <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>
                        <span className='text-primary text-4xl font-[Titillium] italic'>Contact </span>details</h1>
                    <p className='leading-loose text-justify mb-10'>Have an idea for a website and need an experienced developer or designer? Get in touch! Together, we’ll create a modern and functional project tailored to your needs. Drop me a message, and let’s discuss the details!</p>

                    <a href={require('../../../assets/CV.pdf')} type='button' target="_blank" rel="noreferrer" download={'CV'}
                        className='w-40 py-4 px-12 uppercase font-bold text-white tracking-wider text-xs bg-primary'>
                        resume
                    </a>
                </div>
                <div className='z-10 flex flex-col bg-darkPrimary lg:p-20 p-10 lg:text-normal text-sm lg:w-1/2 items-center justify-center'>
                    <div className='flex'>
                        <div className='lg:mr-16 mr-4 text-gray-500'>
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
                    <button className='w-40 py-4 px-6 mt-12 uppercase font-bold text-white tracking-wider text-xs bg-primary'>
                        <a
                            href={"https://megfoto.wixsite.com/mfantom"}
                            target="_blank"
                            rel="noreferrer"
                        >portfolio</a>
                    </button>
                </div>
            </main>
            <footer className='bg-darkSec w-full h-28 min-h-28 no-wrap flex text-white lg:pl-40 items-center justify-between'>
                <p className='mt-2 lg:p-0 p-10'>© Małgorzata Staszewska 2025  /  All rights reserved. </p>
                <button className='h-full w-30 -pr-10 bg-primary text-white font-semibold text-xs font-[Poppins] tracking-widest'>
                    <HashLink smooth to={'#'}>TOP</HashLink>
                </button>
            </footer>
        </div>
    )
}