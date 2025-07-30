import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import images from './images';


const DURATION = 35;

export const Slider = () => {

    const imagesArray = [...images, ...images, ...images];

    let [refSlider, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8

        controls = animate(xTranslation, [200, finalPosition], {
            ease: "linear",
            duration: DURATION,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);


    return (
        <div className='z-30 bg-darkPrimary w-full h-[100vh] m-0 p-0 relative overflow-hidden' id='gallery'>
            <header className='w-full flex flex-col items-start justify-start absolute z-20 top-[15%] lg:px-40 px-10'>
                <div className='w-full flex-col text-white text-sm'>
                    <motion.h1 className='lg:text-3xl text-base font-bold mb-12 mt-2 relative tittle'
                        initial={{ x: -80, filter: "blur(20px)" }}
                        whileInView={{ x: 0, filter: "blur(0px)" }}
                        transition={{ duration: .7 }}
                    >Sample of my
                        <span className='text-primary lg:text-4xl text-xl font-[Titillium] lowercase italic'> graphic design </span>portfolio</motion.h1>
                </div>
            </header>
            <main className='w-full mx-4 mt-10 max-w-[90vw] h-full flex items-center justify-center'>
                <motion.div className='carousel flex items-center justify-start h-full' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag='x'
                        className='innerCarousel'
                        ref={refSlider}
                        style={{ x: xTranslation }}
                    >
                        {imagesArray.map((image) => {
                            return (
                                <motion.div className={'item'}>
                                    <img src={image.imgSrc} alt={image.title} />
                                    <div className='imageDescription'>{image.title}</div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}