import React, { useRef } from 'react';
import { MenuGallery } from './MenuGallery';
import manJumping from '../../assets/gallery/manJumping.avif';
import { StartGallery } from './StartGallery';
import { motion, useScroll, useTransform } from "motion/react";
import ela from '../../assets/gallery/portrait/ewa.jpg';
import prince from '../../assets/gallery/portrait/prince.jpg';
import gr from '../../assets/gallery/portrait/gr.png';
import { ParallaxPicFrame } from '../../components/parallaxPicFrame';

export const PhotoGallery: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const paralax1 = useTransform(scrollYProgress, [0,1], [0, 250]);

    return (
        <div className="flex w-full h-full flex-col m-0 p-10 relative bg-darkVery">
            <div className='w-full h-auto mb-44 flex items-start justify-center text-left'>
                <motion.h1 className='text-white text-6xl font-[Poppins] '
                    initial={{ y: 0, opacity: 0, filter: 'blur(40px)' }}
                    whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1 }}
                >Photography has been my passion since I was young<br /> - a way to observe, connect, and express.
                    <br />I developed this passion into a profession through years of practice and academic study,
                    earning a Master's degree in photography from the Academy of Fine Arts. <br />My work blends artistic
                    sensitivity with technical precision, whether I'm shooting portraits, products, or visual stories
                    that bring brands to life.</motion.h1>
            </div>
            <div className='w-full h-[90vh] flex sticky top-0 bg-yellow-300' ref={container}>
                <img src={ela} alt='womanPortait' className='w-auto h-full ml-30' />
                <div className='w-1/3 h-[90vh] ml-30 bg-red-300 overflow-hidden'>
                    <div ref={container} className=''
                        style={{
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}>
                        <motion.div className="object-cover top-0 h-full bg-center absolute" 
                          initial={{ y: 100, opacity: 0, filter: 'blur(40px)' }}
                    whileInView={{ y: -100, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1 }}
                        >
                            <img src={gr} alt='womanPortait' className='w-full h-auto' />
                            <img src={prince} alt='womanPortait' className='w-full h-auto' />
                            <img src={gr} alt='womanPortait' className='w-full h-auto' />
                            <img src={prince} alt='womanPortait' className='w-full h-auto' />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}