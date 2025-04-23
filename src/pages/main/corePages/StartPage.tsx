import React, { useRef } from 'react';
import '../../../styles/mainPage.css';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { cubicBezier } from 'motion';
import { useSpring } from 'motion/react';
import statue from '../../../assets/statue.png';
import cloud from '../../../assets/cloud.png';
import paintBrush from '../../../assets/paintBrush.png';
import brushes from '../../../assets/brushes.png';
import car from '../../../assets/car.png';

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = 30 / 2;

export const StartPage: React.FC = () => {

    const ref = useRef(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY, scrollXProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const paralaxCloud = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
    const paralaxCar = useTransform(scrollYProgress, [1, 0], ["-100%", "0"]);
    const paralaxPaintBrush = useTransform(scrollY,
        [0, 1],
        [0, 2],
        { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) });
    const paralaxBrushes = useTransform(scrollY,
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
        <div className='mainPage gridPage bg-darkPrimary w-full m-0 p-0 relative overflow-hidden'>
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
                    className="relative h-[80%] w-[80%] rounded-xl bg-transparent m-auto flex justify-between"
                >
                    <div className='flex w-full items-center lg:flex-row flex-col'>
                        <div className='lg:w-1/2 w-full lg:ml-12 p-8'>
                            <h1 className='break-words font-semibold lg:text-5xl text-3xl font-[Poppins] lg:leading-[5rem] drop-shadow-[(-18px 17px 20px 0px rgba(0,0,0, 1))]'>
                                Hi there! <br />
                                I'm Meg Staszewska <br />
                                <span className='text-primary lg:whitespace-nowrap'>Developer and Designer</span>
                            </h1>
                            <div className='buttonMovingRight py-4 px-6 mt-4 bg-[#ffffff21] w-fit uppercase text-sm tracking-widest' >
                                I create web and graphic design
                            </div>
                        </div>
                        <div className='relative flex h-full lg:w-1/2 w-full items-center justify-center '>
                            <motion.img className="w-[20%] h-[40%] object-contain z-30 absolute top-10 right-[35%] left-auto -rotate-5"
                                src={statue}
                                style={{ x: paralaxCar }}
                            />
                            <motion.img
                                className="w-[60%] h-[60%] object-contain z-30 absolute top-[10%] -left-[10%] rotate-20"
                                src={car}
                                style={{ x: paralaxCar }}
                            />
                            <motion.img
                                className="w-[35%] h-[8%] z-30 absolute top-[47%] left-auto right-[-0%] -rotate-40"
                                src={brushes}
                                style={{ y: paralaxBrushes }}
                            />
                            <motion.img
                                className="w-[40%] h-[40%] object-contain z-10 absolute top-[10%] right-[5%] rotate-20 left-auto"
                                src={paintBrush}
                                style={{ y: paralaxPaintBrush }}
                            />
                            <motion.img
                                src={cloud}
                                className="w-full h-full z-20 object-contain"
                                style={{ y: paralaxCloud }}
                            />
                        </div>
                    </div>
                </motion.div >
            </motion.div>
            <span className='gridVisibileItem col-start-1' />
            <span className='gridVisibileItem col-start-2' />
            <span className='gridVisibileItem col-start-3' />
            <span className='gridVisibileItem col-start-4' />
            <span className='gridVisibileItem col-start-5' />
            <span className='gridVisibileItem col-start-6' />
        </div>
    )
}