import React, { useState } from 'react';
import '../../../styles/sideBar.css';
import { SideMenu } from "./SideMenu";
import logo from "../../../assets/logoPink.png";

export const SideBar: React.FC = () => {

   const [openMenu, setOpenMenu] = useState(false);
   const isDesktop = window.innerWidth >= 1280;

   return (<>
      {isDesktop
         ? (
              <div className='fixed top-0 left-0 z-50 py-0 px-12 bg-transparent flex  items-center justify-between w-full'> 
                  <img src={logo} alt="logo" className='h-8 mt-8' />
                  <button className='cursor-pointer burger w-8 text-gray-500 hover:text-white capitalize mt-5 font-semibold text-xs font-[Poppins] tracking-widest'
                     onClick={() => setOpenMenu(!openMenu)}>
                     <div className=' mt-8 mb-4 flex flex-col items-start'>
                        <span className={'burgerItem w-full ' + (openMenu ? 'activeFirst' : '')} />
                        <span className={'burgerItem ' + (openMenu ? 'w-0' : 'w-2/3')} />
                        <span className={'burgerItem w-0 ' + (openMenu ? 'activeSec' : '')} />
                     </div>
                  </button>
            </div>
         ) : (
            <div className='fixed top-0 left-0 z-50 px-2 bg-darkThird'>
               <img src={logo} alt="logo" className='h-4 mt-4' />
               <button className='cursor-pointer burger w-5 text-gray-500 hover:text-white capitalize xl:mt-5 m-0 font-semibold text-xs font-[Poppins] tracking-widest'
                  onClick={() => setOpenMenu(!openMenu)}>
                  <div className=' mt-4 mb-2 flex flex-col items-start'>
                     <span className={'burgerItem w-full ' + (openMenu ? 'activeFirst' : '')} />
                     <span className={'burgerItem ' + (openMenu ? 'w-0' : 'lg:w-2/3 w-full')} />
                     <span className={'burgerItem lg:w-0 w-full ' + (openMenu ? 'activeSec' : '')} />
                  </div>
               </button>
            </div>
         )}
      <SideMenu open={openMenu} setOpen={setOpenMenu} />
   </>
   )
}