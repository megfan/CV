import React from 'react';
import '../../styles/MainPage.css';
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const MenuBar: React.FC = () => {

    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)    ;
        if (latest > 0 && !scrolled) {
            setScrolled(true);
        } else if (latest === 0) {
            setScrolled(false);
        }
    })

    return (
    <div className='sticky w- m-0 p-0 z-30 right-0 top-0 h-20 bg-darkPrimary inset-0 grid justify-between items-center grid-cols-6'>
         <button className=' bg-darkSec classicText btnWIthBorders col-start-1 col-end-2'>scroll down</button>
         <nav className='col-start-2 col-end-5 ml-20'>
            <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                <li className='menuBarItem'><HashLink smooth to={'#'}>start</HashLink></li>
                <li className='menuBarItem'><HashLink smooth to={'#about'}>about</HashLink></li>
                <li className='menuBarItem'><HashLink smooth to={'#education'}>education</HashLink></li>
                <li className='menuBarItem'><HashLink smooth to={'#experience'}>experience</HashLink></li>
                <li className='menuBarItem'><HashLink smooth to={'#skills'}>skills</HashLink></li>
            </ul>
        </nav>
        <button className='btnWIthBorders classicText col-end-7'>contact</button>
    </div>
    )
}