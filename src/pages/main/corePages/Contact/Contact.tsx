import React from 'react';
import '../../../../styles/MainPage.css';
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router';

export const ContactPage: React.FC = () => {


    return (
    <div
        className='bg-darkPrimary h-auto mt-20 w-full relative' 
        id="contact">
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
                <button className='w-40 py-4 px-6 buttonMovingRight mt-12 uppercase font-bold text-white tracking-wider text-xs bg-primary'>
                <a
                    href={"https://megfoto.wixsite.com/mfantom"}
                    target="_blank"
                    >portfolio</a>
                    </button>
            </div>
        </main>
        <footer className='bg-darkSec w-full h-30 no-wrap flex text-white pl-40 items-center justify-between'>
            <p>© Małgorzata Staszewska 2025  /  All rights reserved. </p>
            <button className='h-full w-30 bg-primary text-white font-semibold text-xs font-[Poppins] tracking-widest'>
                <HashLink smooth to={'#'}>TOP</HashLink>
            </button>
        </footer>
    </div>
    )
}