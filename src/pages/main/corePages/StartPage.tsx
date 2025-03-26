import React, { useRef } from 'react';
import '../../../styles/MainPage.css';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { cubicBezier } from 'motion';

export const StartPage: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress, scrollXProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const x = useMotionValue(1)
    const paralax1 = useTransform(scrollYProgress, [0,1], ["0", "100%"]);
    const paralaxStatue = useTransform(scrollYProgress, [0,1], ["0", "60%"]);
    const paralaxCar = useTransform(scrollY,
        [0, 150],
        [0, 60],
        { clamp: false });
    const paralaxPaintBrush = useTransform(scrollY,
        [0, 1],
        [0, 2],
        { ease: cubicBezier(0.17, 0.67, 0.83, 0.67)});

    return (
    <div 
        ref={ref}
        className='mainPage gridPage bg-darkPrimary w-full m-0 p-0 relative overflow-hidden '>
        <motion.div className='col-start-2 col-end-5 row-start-2 row-end-5 z-10 flex flex-col justify-center w-full'
         whileHover={{ scale: 1.04,  rotate: -2 }}
        > 
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
        </motion.div >
           <motion.div 
               className="w-full h-auto inset-0 z-0 absolute top-0 left-0 opacity-50"
               style={{
                   backgroundImage: `url(assets/bg3.jpg)`,
                   backgroundPosition: "top",
                   backgroundSize: "cover",
                   y: paralax1,
                   }}
           />
       <motion.div className='relative mt-20 h-full col-start-4 col-end-6 row-start-2 row-end-6 bg-center'
                    whileHover={{ scale: 1.04,  rotate: 2 }}>

        <motion.div className="w-[5rem] h-[13rem] inset-0 z-30 absolute -top-15 right-43 left-auto -rotate-5"
                style={{
                    backgroundImage: `url(assets/statue.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: paralaxStatue
                    }}
            />

         <motion.div 
            className="w-[45rem] h-[23rem] inset-0 z-20 absolute"
            style={{
                backgroundImage: `url(assets/cloud.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                y: paralax1
            }}
            />
          <motion.div 
            className="w-[16rem] h-[10rem] inset-0 z-20 absolute top-12 left-18 rotate-20"
            style={{
                backgroundImage: `url(assets/car1.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                y: paralaxCar
            }}
            />
              <motion.div 
            className="w-[3rem] h-[10rem] inset-0 z-10 absolute top-3 right-26 rotate-20 left-auto"
            style={{
                backgroundImage: `url(assets/PaintBrush.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                y: paralaxPaintBrush
            }}
            />
        
        </motion.div>
        <span className='gridVisibileItem col-start-1'/>
        <span className='gridVisibileItem col-start-2'/>
        <span className='gridVisibileItem col-start-3'/>
        <span className='gridVisibileItem col-start-4'/>
        <span className='gridVisibileItem col-start-5'/>
        <span className='gridVisibileItem col-start-6'/>
    </div>
    )
}