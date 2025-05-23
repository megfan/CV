import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { GalleryImages } from '../../helpers/galleryImages';

export const StartGallery: React.FC = () => {

    const container = useRef(null);


    return (
        <div className="h-[200vh] relative bg-darkVery mt-44"
            ref={container}>
            <div className='sticky top-0 h-[100vh] overflow-hidden'>
                {GalleryImages(container).map(({ src, scale }, index) => {
                    return <motion.div key={index} style={{ scale }} className='el'>
                        <div className='imageContainer'>
                            <img
                                src={src}
                                className='object-cover'
                                alt="image"
                            />
                        </div>
                    </motion.div>
                })
                }
                {/* <motion.div style={{scale}} className='w-full h-full absolute top-0 flex items-center justify-center'>
                    <div className='imageContainer'>
                        <img
                            src={mountain}
                            className='object-cover'
                            alt="image"
                        />
                    </div>

                </motion.div> */}
                {/* <img src={manJumping} alt='manJumping' className='h-screen object-cover bg-left ' />
                <img src={ela} alt='woman' className='h-screen object-cover bg-left ' />
                <img src={john} alt='manJumping' className='h-screen object-cover bg-left ' /> */}
            </div>
        </div>
    )
}