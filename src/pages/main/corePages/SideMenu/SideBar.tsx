import React,  {useRef, useState} from 'react';
import '../../../../styles/MainPage.css';
import { SideMenu } from "./SideMenu";

export const SideBar: React.FC = () => {

      const [openMenu, setOpenMenu] = useState(false);

    return (<>
    <div className='sticky z-100 top-0 left-0 h-screen w-24 min-w-24 inset-0 bg-darkSec flex flex-col justify-between items-center'>
       <div className='flex flex-col items-center'>
          <img src={"assets/logo.svg"} alt="logo" className='h-8 mt-8'/>
         <button className='cursor-pointer burger w-8 text-gray-500 hover:text-white capitalize mt-5 font-semibold text-xs font-[Poppins] tracking-widest'
            onClick={() => setOpenMenu(true)}>
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
    <SideMenu open={openMenu} setOpen={setOpenMenu}/>
    </>
    )
}