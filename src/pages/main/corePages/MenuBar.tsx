import React,  {useRef, useState} from 'react';
// import '../../../styles/mainPage.css';
import '../../../styles/menuBar.css';
import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link";
import { ContactBar } from "./Contact/ContactBar";


export const MenuBar: React.FC = () => {
    const ref = useRef(null)
    const [openContact, setOpenContact] = useState(false);

    return (<>
        <motion.div className='sticky w-full m-0 p-0 z-30 right-0 top-0 h-20 bg-darkPrimary inset-0 grid
            justify-between items-center grid-cols-6 '
                    initial={{top: 0}}
                    ref={ref}
        >
            <button className='pl-16 w-auto relative flex flex-col items-start justify-center bg-darkSec classicText geologicalData 
            btnWIthBorders font-semibold col-start-1 col-end-2'>
                <span>based in warsaw / poland</span>
                <span>52°13′N  / 21°00′ E </span>
            </button>
            <nav className='col-start-2 col-end-5 ml-20'>
                <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                    <li className='menuBarItem'><HashLink smooth to={'#'}>start</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#about'}>about</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#education'}>education</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#experience'}>experience</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#skills'}>skills</HashLink></li>
                    <li className='menuBarItem'><HashLink smooth to={'#contact'}>contact</HashLink></li>
                </ul>
            </nav>
            <button className='btnWIthBorders font-semibold classicText col-end-7' onClick={() => setOpenContact(true)}>
                Contact
            </button>
        </motion.div>
        
        <ContactBar open={openContact} setOpen={setOpenContact}/>
      </>
    )
}