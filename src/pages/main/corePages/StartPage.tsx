import React, { useRef } from 'react';
import '../../../styles/MainPage.css';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { cubicBezier } from 'motion';
import { useSpring } from 'motion/react';

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = 30 / 2;

export const StartPage: React.FC = () => {

    const ref = useRef(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollXProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
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
    const paralaxbrushes = useTransform(scrollY,
        [0, 100],
        [0, 60],
        { clamp: false });



        const x = useMotionValue(0);
        const y = useMotionValue(0);
      
        const xSpring = useSpring(x);
        const ySpring = useSpring(y);
      
        const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
      
        const handleMouseMove = (e: any) => {
          if (!ref2.current) return [0, 0];
      
          const rect = ref2.current.getBoundingClientRect();
      
          const width = rect.width;
          const height = rect.height;
      
          const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
          const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
      
          const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
          const rY = mouseX / width - HALF_ROTATION_RANGE;
      
          x.set(rX);
          y.set(rY);
        };
      
        const handleMouseLeave = () => {
          x.set(0);
          y.set(0);
        };
      
    return (
    <div className='mainPage gridPage bg-darkPrimary w-full m-0 p-0 relative overflow-hidden '>
      <motion.div className='col-start-1 col-end-7 row-start-1 row-end-6 relative flex justify-center items-center'
        ref={ref}>
        <motion.div
            ref={ref2}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-[80%] w-[80%] rounded-xl bg-transparent  flex justify-between"
            >
            <div className='flex w-full items-center'>
                <div className='w-1/2 ml-24'>
                        <h1 className='font-semibold text-5xl font-[Poppins] leading-[5rem] drop-shadow-[(-18px 17px 20px 0px rgba(0,0,0, 1))]'>
                            Hi there! <br/>
                            I'm Meg Staszewska <br/>
                            <span className='text-primary'>Developer and Designer</span> <br/>
                        </h1>
                    <div className='buttonMovingRight py-4 px-6 mt-4 bg-[#ffffff21] w-fit uppercase text-sm tracking-widest' >
                        I create web and graphic design
                    </div>
                </div>
                <div className='relative flex h-full mt-20 w-1/2 items-center justify-center '>
                    <motion.div className="w-[5rem] h-[13rem] inset-0 z-30 absolute top-15 right-[40%] left-auto -rotate-5"
                        style={{
                            backgroundImage: `url(assets/statue.png)`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            }}
                    />
                    <motion.div 
                        className="w-[16rem] h-[10rem] inset-0 z-30 absolute top-[30%] left-18 rotate-20"
                        style={{
                            backgroundImage: `url(assets/car.png)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            y: paralaxCar
                        }}
                    />
                    <motion.div className="w-[15rem] h-[3rem] inset-0 z-30 absolute top-[47%] left-[60%] -rotate-40"
                        style={{
                            backgroundImage: `url(assets/brushes.png)`,
                            backgroundPosition: "right",
                            backgroundSize: "cover",
                            y: paralaxbrushes
                            }}
                    />
                    <motion.div 
                        className="w-[3rem] h-[10rem] inset-0 z-10 absolute top-[10%] right-[25%] rotate-20 left-auto"
                        style={{
                            backgroundImage: `url(assets/PaintBrush.png)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            y: paralaxPaintBrush
                        }}
                    />
                    <motion.div 
                        className="w-[45rem] h-[25rem] inset-0 z-20"
                        style={{
                            backgroundImage: `url(assets/cloud.png)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            y: paralax1
                        }}
                    />
                </div>
            </div>
        </motion.div >
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