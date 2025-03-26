import React from 'react';
import logo from '../../images/logo.svg';
import '../../styles/MainPage.css'

export const SideBar: React.FC = () => {

    return (
    <div className='sticky z-10 top-0 left-0 h-screen w-24 min-w-24 relative inset-0 bg-darkSec flex flex-col justify-between items-center'>
       <div className='flex flex-col items-center'>
          <img src={logo} alt="logo" className='h-8 mt-8'/>
         <button className='burger w-8 tracking-[.5em] text-gray-500 hover:text-white capitalize mt-5 font-semibold text-xs font-[Poppins] tracking-widest'>
         <div className=' mt-8 mb-4 flex flex-col items-start'>
            <span className='burgerItem w-full'/>
            <span className='burgerItem w-2/3'/>
            <span className='burgerItem w-0'/>
         </div>
          <div>MENU</div>
         </button>
        </div>
        <button className='w-full h-30 bg-primary text-white font-semibold text-xs font-[Poppins] tracking-widest'>SHARE</button>
    </div>
    )
}