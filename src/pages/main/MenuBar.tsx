import React,  {useRef} from 'react';
import '../../styles/MainPage.css';
import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link";

export const MenuBar: React.FC = () => {
    const ref = useRef(null)

    return (<>
        <motion.div className='sticky w-full m-0 p-0 z-30 right-0 top-0 h-20 bg-darkPrimary inset-0 grid
            justify-between items-center grid-cols-6 '
                    initial={{top: 0}}
                    ref={ref}
        >
            <button className=' bg-darkSec classicText btnWIthBorders font-semibold col-start-1 col-end-2'>scroll down</button>
            <nav className='col-start-2 col-end-5 ml-20'>
                <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                    <li className='menuBarItem'><HashLink smooth to={'#'}>start</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#about'}>about</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#education'}>education</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#experience'}>experience</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#skills'}>skills</HashLink></li>
                </ul>
            </nav>
            <div  className='classicText geologicalData'>
            <span>based in warsaw / poland</span>
            <span>52°13′N  / 21°00′ E </span>
        </div >
            <button className='btnWIthBorders font-semibold classicText col-end-7'>contact</button>
        </motion.div>
      </>
    )
}