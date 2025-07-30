import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {

    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className='top-0 z-20 lg:px-40 px-10 py-20 text-sm bg-white flex flex-col items-start justify-center w-full lg:h-[110vh]'
            id="process">
            <header className='lg:w-1/2 w-full mb-20'>
                <motion.h1 className='lg:text-4xl text-2xl font-bold mb-12 mt-6 relative tittle text-darkPrimary'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .2 }}
                >How it
                    <span className='text-primary lg:text-5xl text-4xl font-[Titillium] lowercase italic'> works </span></motion.h1>
                <motion.p
                    className='text-justify text-gray-400 text-sm'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .1 }}
                >If you can’t explain something simply, you don’t understand it well enough. - Albert Einstein
                </motion.p>
                <motion.p
                    className='leading-loose text-justify'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .3 }}
                >Every successful project starts with understanding. I work closely with clients from first
                    contact to final deployment to deliver results that match their vision.</motion.p>
            </header>
            <main className='w-full mb-20 flex lg:flex-row flex-col justify-between text-sm text-darkPrimary'>
                <motion.div className='stageBox'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .3 }}>
                    <h1 className='stageBoxTitle'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="size-6 mr-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                        Discuss the Project</h1>
                    <div className='stageBoxContent'>
                        <h2 className='italic mb-4 text-gray-500 lg:text-lg text-sm'>Clear goals, defined scope.</h2>
                        <p>I start by talking with the client to fully understand their goals, features they need, and any technical requirements.
                            This helps set clear expectations and define the project scope from the beginning.</p>
                    </div>
                    <span className='stageBoxContentNumber'>1.</span>
                </motion.div>
                <motion.div className='stageBox'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .4 }}>
                    <h1 className='stageBoxTitle'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="size-6 mr-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>

                        Develop</h1>
                    <div className='stageBoxContent'>
                        <h2 className='italic mb-4 text-gray-500 lg:text-lg text-sm'>Engineering your vision.</h2>
                        <p>I handle both the frontend and backend development, keeping the client updated with progress and demos.
                            Feedback during this stage ensures everything stays on track and fits the client's vision.</p>
                    </div>
                    <span className='stageBoxContentNumber'>2.</span>
                </motion.div>
                <motion.div className='stageBox'
                    initial={{ y: 40, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: .5, delay: .5 }}>
                    <h1 className='stageBoxTitle'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="size-6 mr-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>

                        Final Approvement</h1>
                    <div className='stageBoxContent'>
                        <h2 className='italic mb-4 text-gray-500 lg:text-lg text-sm'>Review, approve, launch.</h2>
                        <p>Once the app is complete and tested, I share the final version for review. After the client approves,
                            I deploy it and provide any needed support or documentation.</p>
                    </div>
                    <span className='stageBoxContentNumber'>3.</span>
                </motion.div>
            </main>
        </div>
    )
}