import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import images from './images';
import { ReactComponent as Arrow } from '../../../assets/arrow-left.svg';
import useMeasure from 'react-use-measure';


const DURATION = 35;

export const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(2);

    const ref = useRef<HTMLDivElement>(null);

    const imagesArray = [...images, ... images, ...images];
    console.log(imagesArray.length)
    const handleActiveIndexChange = (value: number) => {
        const maxVal = imagesArray.length;
        const index = activeIndex + value;
        if (index > maxVal) setActiveIndex(0);
        if (index < 0) setActiveIndex(maxVal);
        if (index <= maxVal && index >= 0) setActiveIndex(index)
    }

    let [refSlider, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 -8

        controls = animate(xTranslation, [200, finalPosition], {
            ease: "linear",
            duration: DURATION,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    },[xTranslation, width]);

useEffect(() => {
    const interval = setInterval(() => {
        handleActiveIndexChange(1);
    }, 1700);
    return () => clearInterval(interval);
}, [activeIndex]);

    return (
        <div className='z-30 bg-darkPrimary w-full h-[100vh] m-0 p-0 relative overflow-hidden' id='gallery'>
            <header className='w-full flex flex-col items-start justify-start absolute z-20 top-[15%] left-40'>
                <div className='w-full flex-col text-white text-sm'>
                    <h1 className='text-3xl font-bold mb-12 mt-2 relative tittle'>Sample of my
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> graphic design </span>portfolio</h1>
                </div>
            </header>
            <main className='w-full mx-4 mt-10 max-w-[90vw] h-full flex items-center justify-center'>
                <motion.div className='carousel flex items-center justify-start h-full' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag='x'
                        className='innerCarousel'
                        ref={refSlider}
                        // dragConstraints={{ right: 0, left: 0 }}
                        // animate={{
                        //     translateX: `-${activeIndex * 11}%`,
                        // }}
                        // transition={{
                        //     duration: 0.45,
                        // }}
                        style={{x: xTranslation}}
                    >
                        {imagesArray.map((image, index) => {
                            return (
                                <motion.div className={'item' + (activeIndex === index ? ' active' : '')}>
                                    <img src={image.imgSrc} alt={image.title} />
                                    <div className='imageDescription'>{image.title}</div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
                {/* <button className='arrow left-10' onClick={() => handleActiveIndexChange(- 1)}>
                    <Arrow className='text-primary h-6 w-6 stroke-2' />
                </button>
                <button className='arrow right-10' onClick={() => handleActiveIndexChange(1)}>
                    <Arrow className='text-primary h-6 w-6 scale-x-[-1] stroke-2' />
                </button> */}
            </main>
        </div>
    )
}