import React,  {useEffect, useRef, useState} from 'react';
import '../../styles/menuBar.css';
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { ContactBar } from "../main/Contact/ContactBar";
import logo from "../../assets/logoPink.png";


export const MenuGallery: React.FC = () => {
    const ref = useRef(null)
    const [openContact, setOpenContact] = useState(false);

    useEffect(() => {
        console.log(window.location.hash)
    }, [window.location.hash])

    return (<>
        <motion.div className='sticky w-full m-0 p-0 z-40 right-0 top-0 h-20 bg-darkPrimary inset-0 xl:grid hidden
            justify-between items-center grid-cols-8 '
                    initial={{top: 0}}
                    ref={ref}
        >
            <img src={logo} alt="logo" className='h-6 w-auto px-8 fill-primary' />
           
            <nav className='col-start-2 col-end-6 ml-10'>
                <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                    <li className='menuBarItem'><Link  to={'startPage'} spy >start</Link></li>
                    <li className='menuBarItem'><Link  to={'about'} spy >about</Link></li>
                    <li className='menuBarItem'><Link  to={'experience'} spy >experience</Link></li>
                    <li className='menuBarItem'><Link  to={'skills'}>skills</Link></li>
                    <li className='menuBarItem'><Link  to={'gallery'}>gallery</Link></li>
                    <li className='menuBarItem'><Link  to={'contact'}>contact</Link></li>
                </ul>
            </nav>
            <button className='btnWIthBorders font-semibold classicText col-end-9' onClick={() => setOpenContact(true)}>
                Contact
            </button>
        </motion.div>
        
        <ContactBar open={openContact} setOpen={setOpenContact}/>
      </>
    )
}