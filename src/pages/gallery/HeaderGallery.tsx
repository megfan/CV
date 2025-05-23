import React, { useRef } from 'react';
import { MenuGallery } from './MenuGallery';
import manJumping from '../../assets/gallery/manJumping.avif';
import { StartGallery } from './StartGallery';
import { motion, useScroll, useTransform } from "motion/react";

export const HeaderGallery: React.FC = () => {


  return (
    <div className="flex w-full h-screen flex-col items-center justify-center m-0 p-0 relative bg-darkVery">
        <div className='w-full h-4/5 flex items-center justify-center text-center'>
        <motion.h1 className='text-white text-6xl font-[Poppins] '
         initial={{ y: 0, opacity: 0, filter: 'blur(40px)'}}
                    whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1 }} 
        >Welcome to my <span className='text-primary text-7xl font-[Titilium]'>creative </span> space</motion.h1>
      {/* <h1 className='text-white text-6xl'>I'm Meg – a graphic designer and photographer with over 15 years of experience crafting visual identities and telling stories through images and design. I specialize in branding, editorial design, digital content, and creative photography for projects that need to stand out and speak with clarity. Whether it's a logo, a layout, or a lens – I bring ideas to life with purpose and personality.</h1> */}
        </div>
        <motion.span className='h-64 w-1 bg-primary' 
         initial={{ y: 300, scaleY: 0 }}
                    whileInView={{ y: 0, scaleY: 1 }}
                    transition={{ duration: 1 }} 
        />
    </div>
  )
}