import React from 'react';
import '../../styles/MainPage.css'

export const MenuBar: React.FC = () => {

    return (
    <div className='sticky w- m-0 p-0 z-30 right-0 top-0 h-20 bg-darkPrimary inset-0 grid justify-between items-center grid-cols-6'>
         <button className=' bg-darkSec classicText btnWIthBorders col-start-1 col-end-2'>scroll down</button>
         <nav className='col-start-2 col-end-5 ml-20'>
            <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                <li className='menuBarItem'><a>start</a></li>
                <li className='menuBarItem'><a>about</a></li>
                <li className='menuBarItem'><a>resume</a></li>
                <li className='menuBarItem'><a>reviews</a></li>
            </ul>
        </nav>
        <button className='btnWIthBorders classicText col-end-7'>contact</button>
    </div>
    )
}