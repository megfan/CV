import React from 'react';
import work1 from '../../../assets/work1.jpg';
import '../../../styles/MainPage.css'

export const Experience: React.FC = () => {

    return (
    <div className='bg-white mainPage w-full relative'>
       <div className='h-auto w-1/4 flex items-start col-start-2 col-end-6 row-start-2 row-end-6 relative'>
            <img src={work1} className="z-10" alt="aboutMe" />
            <div className='bg-primary h-96 w-24 p-12 col-start-1 absolute top-0 left-0 -ml-10 mt-4'/>
        </div>
        <div className='z-10 flex flex-col text-darkPrimary -ml-20 mt-10 col-start-4 col-end-6 row-start-2 text-sm '>
            <span className='text-gray-400'>The most difficult thing is the decision to act, <br/> the rest is merely tenacity - Amelia Earhart</span>
            <h1 className='text-2xl font-bold mb-12 mt-2 relative tittle'>how it
                <span className='text-primary text-4xl font-[Titillium] lowercase italic'> develops </span></h1>
        </div>

        <section className='relative z-10 col-start-3 col-end-7 row-start-3 row-end-6 bg-red-300 flex flex-col'>
            {/* <span className='relative h-full w-1 bg-primary'/> */}
            <div className='flex text-gray-600 w-1/4 ml-20 text-2xl bg-gray-600'>
            Alubrados Varios S. A.
www.aluvisagrupo.com
04-12.2024
REACT / TYPESCRIPT /TAILWIND CSS / PRIME REACT /REDUX / NEXT.JS
            </div>
        </section>
        <p className='text-[12rem] col-start-2 -ml-32 col-end-8 row-start-2 text-[#acacac1f] font-black '>Working & envolve</p>
    </div>
    )
}