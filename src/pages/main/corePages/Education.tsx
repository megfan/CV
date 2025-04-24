import React, { useRef } from 'react';
import { ParallaxPicFrame } from '../../../components/parallaxPicFrame';
import "../../../styles/educationPage.css";
import education from '../../../assets/skills.jpg';

export const Education: React.FC = () => {
    const ref = useRef(null);

    return (
        <div className='bg-darkPrimary lg:h-[100vh] h-[140vh] w-full flex flex-col justify-between'
            id="education" ref={ref}>
            <div className='h-2/3 w-full flex lg:flex-row flex-col lg:p-20 p-12 justify-start items-center '>
                <header className='lg:w-1/4 w-full lg:mx-[10%]'>
                    <h1 className='lg:text-4xl text-2xl font-bold mb-12 relative tittle text-white'>How it
                        <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> started </span></h1>
                    <p className='text-gray-400 text-sm lg:w-2/3'>Intellectual growth should commence at birth and cease only at death – Albert Einstein</p>
                </header>
                <main className='z-10 lg:w-3/4 w-full flex flex-col text-white lg:ml-5 text-sm justify-between'>
                    <div className='educationSection'>
                        <p>2017-2018</p>
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
                </main>
            </div>
            <div className='h-1/3 w-full flex relative items-end justify-end overflow-hidden'>
                <ParallaxPicFrame
                    styles={'educationImg bottom-0 right-0 w-full h-2/3 bg-bottom absolute'}
                    src={education} />
            </div>
        </div>
    )
}