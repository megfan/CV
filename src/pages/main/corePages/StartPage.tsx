import React from 'react';
import personWithComp from '../../../assets/personWithComp.jpg';
import laptop from '../../../assets/laptop.jpg';
import '../../../styles/MainPage.css'

export const StartPage: React.FC = () => {

    return (
    <div className='mainPage bg-darkPrimary w-full m-0 p-0'>
        <div  className='classicText geologicalData'>
         <span>based in warsaw / poland</span>
         <span>52°13′N  / 21°00′ E </span>
        </div >
        <div className='col-start-2 col-end-5 row-start-2 row-end-5 z-10 flex flex-col justify-center w-full'> 
          <div className='flex items-center w-full'>
            <h1 className='font-semibold text-5xl font-[Poppins] leading-[5rem]'>
                Hi there! <br/>
                I'm Meg Staszewska <br/>
                <span className='text-primary'>Developer and Designer</span> <br/>
            </h1>
          </div>
          <div className='buttonMovingRight py-4 px-6 mt-4 bg-[#ffffff21] w-fit uppercase text-sm tracking-widest' >
              I create web and graphic design
          </div>
        </div>
        <div className='h-full self-end flex items-center col-start-3 col-end-7 row-start-2 row-end-6'>
            {/* <img src={personWithComp} className="personWithComp" alt="personWithComp" /> */}
            <img src={laptop} className="personWithComp" alt="personWithComp" />
        </div>
        <span className='gridVisibileItem col-start-1'/>
        <span className='gridVisibileItem col-start-2'/>
        <span className='gridVisibileItem col-start-3'/>
        <span className='gridVisibileItem col-start-4'/>
        <span className='gridVisibileItem col-start-5'/>
        <span className='gridVisibileItem col-start-6'/>
    </div>
    )
}