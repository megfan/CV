import React, { useRef } from 'react';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import "../../../styles/education.css";

export const Education: React.FC = () => {
    const ref = useRef(null);

    return (
        <div className='bg-darkPrimary h-screen w-full relative px-10 pt-30 flex'
            id="education"
            ref={ref}>

            <header className='w-1/3 pl-20'>
                <h1 className='text-4xl font-bold mb-12 relative tittle text-white'>How it
                    <span className='text-primary text-5xl font-[Titillium] lowercase italic'> started </span></h1>
                <span className='text-gray-400 text-sm'>Intellectual growth should commence at birth <br /> and cease only at death – Albert Einstein</span>
            </header>
            <main className='z-10 flex flex-col text-white ml-10 w-2/3 h-1/3 text-sm justify-between'>
                <div className='educationSection'>
                    <p>2017 - 2018</p>
                    <h2>Next.JS, Advanced React, Bootstrap, .Net</h2>
                    <p>Udemy</p>
                </div>
                <div className='educationSection'>
                    <p>2017 - 2018</p>
                    <h2>React, JS, Redux Course</h2>
                    <p>CodersLab</p>
                </div>
                <div className='educationSection'>
                    <p>2009 - 2013</p>
                    <h2 className='text-primary'>MASTER OF ARTS</h2>
                    <p>Academy of Fine Arts in Warsaw / Media Arts Department</p>
                </div>
                <div className='educationSection'>
                    <p>2008</p>
                    <h2>Advanced Adobe Photoshop Course</h2>
                    <p>Academy of Photography in Warsaw</p>
                </div>
                <div className='educationSection'>
                    <p>2007 - 2008</p>
                    <h2>Professional Photography Course</h2>
                    <p>Academy of Photography in Warsaw</p>
                </div>
                <div className='educationSection'>
                    <p>2003 - 2006</p>
                    <h2 className='text-primary'>BACHELOR OF PARAMEDICINE</h2>
                    <p>Medical University of Warsaw</p>
                </div>
                <ParallaxPicFrame
                    styles={'educationImg bottom-0 right-0 w-full h-[23rem] bg-center absolute overflow-hidden'}
                    src={'assets/education.jpg'} />
            </main>
        </div>
    )
}