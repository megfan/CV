import React from 'react';
import '../../../styles/MainPage.css'

export const Skills: React.FC = () => {

    return (
    <div className='w-full relative h-[130vh] flex flex-col items-start justify-start'>

        <header className=' w-full flex items-start justify-between'>
            <div className=" w-full bg-center m-0 brightness-90">
                <img src={'assets/skill.jpg'} alt="skills" />
            </div>
            <div className='z-10 p-30 w-full bg-darkPrimary h-[120%] flex-col text-white items-start text-sm'>
                <span className='text-gray-400'>The only source of knowledge is experience - Albert Einstein</span>
                <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>My 
                    <span className='text-primary text-4xl font-[Titillium] lowercase italic'> developer's </span>and design skills</h1>
                <p className='text-[12rem] ml-32 text-[#acacac1f] font-black z-10 top-50 absolute rotate-90'>Skills</p>
            </div>
        </header>
        <main className='grid'>
            <section>
                <h1>Developer skills</h1>
            </section>
        <div className='flex mt-12'>
                <div className='educationSection'>
                    <p>2017 - 2018</p>
                    <h2>React, JS, Redux Course</h2>
                    <p>CodersLab</p>
                </div>
                
            </div>
        </main>
    </div>
    )
}