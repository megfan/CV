import React, { useRef } from 'react';
import '../../../styles/MainPage.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StartPage: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const paralax1 = useTransform(scrollYProgress, [0,1], ["0", "100%"]);

    return (
    <div 
        ref={ref}
        className='mainPage gridPage bg-darkPrimary w-full m-0 p-0'>
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
       
        <motion.div className=" h-full col-start-3 col-end-7 row-start-2 row-end-5 bg-center"
                style={{
                    backgroundImage: `url(assets/laptop.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: paralax1
                }}
            />
        <span className='gridVisibileItem col-start-1'/>
        <span className='gridVisibileItem col-start-2'/>
        <span className='gridVisibileItem col-start-3'/>
        <span className='gridVisibileItem col-start-4'/>
        <span className='gridVisibileItem col-start-5'/>
        <span className='gridVisibileItem col-start-6'/>
    </div>
    )
}