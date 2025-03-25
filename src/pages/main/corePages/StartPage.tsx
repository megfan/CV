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
        className='mainPage gridPage bg-darkPrimary w-full m-0 p-0 relative overflow-hidden '>
        <div  className='classicText geologicalData'>
            <span>based in warsaw / poland</span>
            <span>52°13′N  / 21°00′ E </span>
        </div >
        <div className='col-start-2 col-end-5 row-start-2 row-end-5 z-10 flex flex-col justify-center w-full'> 
          <div className='flex items-center w-full'>
            <h1 className='font-semibold text-5xl font-[Poppins] leading-[5rem] drop-shadow-[(-18px 17px 20px 0px rgba(0,0,0, 1))]'>
                Hi there! <br/>
                I'm Meg Staszewska <br/>
                <span className='text-primary'>Developer and Designer</span> <br/>
            </h1>
          </div>
          <div className='buttonMovingRight py-4 px-6 mt-4 bg-[#ffffff21] w-fit uppercase text-sm tracking-widest' >
              I create web and graphic design
          </div>
        </div>
       
        {/* <motion.div className=" h-full col-start-3 col-end-7 row-start-2 row-end-5 bg-center"
                style={{
                    backgroundImage: `url(assets/laptop.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: paralax1
                }}
                whileHover={{ scale: 1.1,  rotate: 3 }}
                whileTap={{ scale: 0.8 }}
            /> */}

        {/* <motion.div 
            className="w-full h-auto inset-0 z-0 absolute top-0 left-0"
            style={{
                backgroundImage: `url(assets/bg3.jpg)`,
                backgroundPosition: "top",
                backgroundSize: "cover",
            }}
        /> */}
         <motion.div 
            className="w-[40rem] h-[23rem] inset-0 z-20 absolute margin-auto col-start-4 row-start-2 drop-shadow-2xl"
            style={{
                backgroundImage: `url(assets/view-3d-cloud.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        />
          {/* <motion.div 
            className="w-[40rem] h-[24rem] inset-0 z-20 absolute margin-auto col-start-3 row-start-2"
            style={{
                backgroundImage: `url(assets/xx.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        /> */}

        <span className='gridVisibileItem col-start-1'/>
        <span className='gridVisibileItem col-start-2'/>
        <span className='gridVisibileItem col-start-3'/>
        <span className='gridVisibileItem col-start-4'/>
        <span className='gridVisibileItem col-start-5'/>
        <span className='gridVisibileItem col-start-6'/>
    </div>
    )
}