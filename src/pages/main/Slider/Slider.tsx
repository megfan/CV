import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import images from './images';
import {ReactComponent as Arrow} from '../../../assets/arrow-left.svg';


export const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollXProgress } = useScroll()

    const ref = useRef<HTMLDivElement>(null);

    const handleActiveIndexChange = (value: number) => {
        const maxVal = images.length -1;
        const index = activeIndex + value;
        if(index > maxVal) setActiveIndex(0);
        if(index < 0) setActiveIndex(maxVal);
        if(index <= maxVal && index >= 0) setActiveIndex(index)
    }


    console.log(`${activeIndex * 2}`)
    return (
        <div className=' bg-darkPrimary w-full h-[80vh] m-0 p-0 relative overflow-hidden'>
            <header className='w-full flex flex-col items-start justify-start absolute z-20 top-[15%] left-40'>
                <div className='w-full flex-col text-white text-sm'>
                    {/* <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span> */}
                    <h1 className='text-3xl font-bold mb-12 mt-2 relative tittle'>Sample of my 
                        <span className='text-primary text-4xl font-[Titillium] lowercase italic'> design portfolio </span></h1>
                </div>
                <button className='w-40 py-4 px-6 uppercase font-bold text-white tracking-wider text-xs bg-primary'>
                        <a
                            href={"https://megfoto.wixsite.com/mfantom"}
                            target="_blank"
                            rel="noreferrer"
                        >portfolio</a>
                    </button>
            </header>
            <main className='w-full mx-4 max-w-[90vw] h-full flex items-center justify-center'>
                <motion.div className='carousel flex items-center justify-start h-full' whileTap={{cursor: "grabbing"}}>
                    <motion.div drag='x' 
                        className='innerCarousel' 
                        ref={ref}
                        dragConstraints={{right: 0, left: 0}} 
                        animate={{
                            translateX: `-${activeIndex * 11}%`,
                        }}
                        transition={{
                            duration: 0.45,
                          }}
                        >
                        {images.map((image, index) => {
                            return(
                                <motion.div className={'item' + (activeIndex === index ? ' active' : '')}>
                                    <img src={image.imgSrc} alt={image.title}/>
                                    <div className='imageDescription'>{image.title}</div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
                <button className='arrow left-10' onClick={() => handleActiveIndexChange(- 1)}>
                    <Arrow className='text-primary h-6 w-6 stroke-2'/>
                </button>
                <button className='arrow right-10' onClick={() => handleActiveIndexChange(1)}>
                    <Arrow className='text-primary h-6 w-6 scale-x-[-1] stroke-2'/>
                </button>
            </main>
        </div>
    )
}