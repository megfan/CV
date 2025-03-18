import React from 'react';
import '../../../styles/MainPage.css'

export const Skills: React.FC = () => {

    return (
    <div className='bg-primary grid w-full relative h-[130vh]'>
    
        <div className='z-10 flex flex-col text-white -ml-20 mt-24 mr-20 col-start-2 col-end-7 row-start-1 text-sm '>
            <span className='text-gray-400'>Intellectual growth should commence at birth <br/> and cease only at death – Albert Einstein</span>
            <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>How it 
                <span className='text-primary text-4xl font-[Titillium] lowercase italic'> XX </span></h1>
            <div className='flex mt-12'>
                <div className='educationSection'>
                    <p>2017 - 2018</p>
                    <h2>React, JS, Redux Course</h2>
                    <p>CodersLab</p>
                </div>
                <div className='educationSection'>
                    <p>2009 - 2013</p>
                    <h2>MASTER OF ARTS</h2>
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
                    <h2>BACHELOR OF PARAMEDICINE</h2>
                    <p>Medical University of Warsaw</p>
                </div>
            </div>
        </div>

        <div className='bg-darkPrimary h-full w-full col-start-1 col-end-4 row-start-1 row-end-5'/>
        <div className="educationImg -ml-1 col-start-4 col-end-7 row-start-1 row-end-4 bg-center">
            <img src={'assets/skills.jpg'} alt="skills" />
        </div>
        <p className='text-[12rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black z-10'>Skills</p>
    </div>
    )
}