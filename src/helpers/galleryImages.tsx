
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import manJumping from '../assets/gallery/manJumping.webp';
import Lon from '../assets/gallery/Lon.webp';
import john from '../assets/gallery/john.webp';
import ny from '../assets/gallery/ny.webp';
import x from '../assets/gallery/x.webp';
import sss from '../assets/gallery/ssss.webp';
import mountain from '../assets/gallery/mountain.avif';
import dance from '../assets/gallery/dance.jpg';
import book from '../assets/gallery/book.jpg';
import tree from '../assets/gallery/tree.jpg';
import mask from '../assets/gallery/mask.jpg';

export function GalleryImages(container: React.RefObject<null>) {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: mountain,
            scale: scale4
        },
        {
            src: tree,
            scale: scale5
        },
        {
            src: dance,
            scale: scale8
        },
        {
            src: x,
            scale: scale8
        },
        {
            src: manJumping,
            scale: scale9
        },
        {
            src: Lon,
            scale: scale8
        },
        {
            src: ny,
            scale: scale9
        },
        {
            src: mask,
            scale: scale8
        }
    ]


    return pictures;
}