import { motion } from "motion/react";
import React, { useRef, useState } from 'react';
import { Link } from "react-scroll";
import '../../styles/menuBar.css';
import { ContactBar } from "./Contact/ContactBar";


export const MenuBar: React.FC = () => {
    const ref = useRef(null)
    const [openContact, setOpenContact] = useState(false);

    return (<>
        <motion.div className='sticky w-full m-0 p-0 z-40 right-0 top-0 h-20 bg-darkPrimary inset-0 xl:grid hidden
            justify-between items-center grid-cols-6 '
                    initial={{top: 0}}
                    ref={ref}
        >
            <button className='pl-16 w-auto relative flex flex-col items-start justify-center bg-darkSec classicText geologicalData 
            btnWIthBorders font-semibold col-start-1 col-end-2'>
                <span>based in warsaw / poland</span>
                <span>52°13′N  / 21°00′ E </span>
            </button>
            <nav className='col-start-2 col-end-5 ml-10'>
                <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                    <li className='menuBarItem'><Link  to={'startPage'} spy >start</Link></li>
                    <li className='menuBarItem'><Link  to={'about'} spy >about</Link></li>
                    <li className='menuBarItem'><Link  to={'experience'} spy >experience</Link></li>
                    <li className='menuBarItem'><Link  to={'skills'}>skills</Link></li>
                    <li className='menuBarItem'><Link  to={'gallery'}>gallery</Link></li>
                    <li className='menuBarItem'><Link  to={'contact'}>contact</Link></li>
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