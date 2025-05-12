import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {

    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className='sticky top-0 z-20 p-40 text-sm bg-white mainPage w-full h-full'
            id="process">
            <header className='w-full mb-20'>
                <motion.h1 className='lg:text-4xl text-2xl font-bold mb-12 mt-6 relative tittle text-darkPrimary'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .3 }}
                >How it
                    <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> works </span></motion.h1>
                <motion.p
                    className='text-justify text-gray-400 text-sm'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .4 }}
                >If you can’t explain something simply, you don’t understand it well enough. - Albert Einstein
                </motion.p>
            </header>
            <main className='w-full mb-20 flex text-sm text-darkPrimary'>
                <div className='stageBox'>
                    <h1 className='stageBoxTitle'>1. Discuss the Project</h1>
                    <div className='stageBoxContent'>
                        <p>I start by talking with the client to fully understand their goals, features they need, and any technical requirements.
                            This helps set clear expectations and define the project scope from the beginning.</p>
                    </div>
                    <span className='stageBoxContentNumber'>1.</span>
                </div>
                <div className='bg-lightGray lg:p-12 p-4 flex flex-col mr-4'>
                    <h1 className=''>
                        2. Develop
                    </h1>
                    <div className=''>
                        <p>I handle both the frontend and backend development, keeping the client updated with progress and demos.
                            Feedback during this stage ensures everything stays on track and fits the client's vision.</p>
                    </div>
                </div>
                <div className='bg-lightGray lg:p-12 p-4 flex flex-col'>
                    <h1 className=''>
                        3. Final Approvement
                    </h1>
                    <div className=''>
                        <p>Once the app is complete and tested, I share the final version for review. After the client approves,
                            I deploy it and provide any needed support or documentation.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}