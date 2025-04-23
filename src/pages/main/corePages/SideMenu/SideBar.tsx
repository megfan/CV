import React, { useState } from 'react';
import '../../../../styles/mainPage.css';
import '../../../../styles/sideBar.css';
import { SideMenu } from "./SideMenu";
import logo from "../../../../assets/logo.svg";

export const SideBar: React.FC = () => {

   const [openMenu, setOpenMenu] = useState(false);
   const isDesktop = window.innerWidth >= 1280;

   return (<>
      {isDesktop 
      ? (
      <div className='sticky z-100 top-0 left-0 h-screen w-24 min-w-24 inset-0 bg-darkSec flex flex-col justify-between items-center'>
         <div className='flex flex-col items-center'>
            <img src={logo} alt="logo" className='h-8 mt-8' />
            <button className='cursor-pointer burger w-8 text-gray-500 hover:text-white capitalize mt-5 font-semibold text-xs font-[Poppins] tracking-widest'
               onClick={() => setOpenMenu(!openMenu)}>
               <div className=' mt-8 mb-4 flex flex-col items-start'>
                  <span className={'burgerItem w-full ' + (openMenu ? 'activeFirst' : '')} />
                  <span className={'burgerItem ' + (openMenu ? 'w-0' : 'w-2/3')} />
                  <span className={'burgerItem w-0 ' + (openMenu ? 'activeSec' : '')} />
               </div>
               <div>MENU</div>
            </button>
         </div>
         <button className='w-full h-30 bg-primary text-white font-semibold text-xs font-[Poppins] tracking-widest'>SHARE</button>
      </div>
      ) : (
         <div className='fixed top-0 left-0 z-50 px-4'>
         <img src={logo} alt="logo" className='h-4 mt-8' />
         <button className='cursor-pointer burger w-5 text-gray-500 hover:text-white capitalize xl:mt-5 m-0 font-semibold text-xs font-[Poppins] tracking-widest'
               onClick={() => setOpenMenu(!openMenu)}>
               <div className=' mt-8 mb-4 flex flex-col items-start'>
                  <span className={'burgerItem w-full ' + (openMenu ? 'activeFirst' : '')} />
                  <span className={'burgerItem ' + (openMenu ? 'w-0' : 'w-2/3')} />
                  <span className={'burgerItem w-0 ' + (openMenu ? 'activeSec' : '')} />
               </div>
            </button>
            </div>
      )}
      <SideMenu open={openMenu} setOpen={setOpenMenu} />
   </>
   )
}