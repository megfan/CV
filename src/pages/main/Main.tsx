import { motion } from 'framer-motion';
import { SideBar } from './SideMenu/SideBar';
import { MenuBar } from './MenuBar';
import { StartPage } from './StartPage';
import { AboutPage } from './AboutPage';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import { ContactPage } from './Contact/Contact';
import { Skills } from './Skills/Skills';
import { Slider } from './Slider/Slider';
import { Process } from './Process';



export const Main: React.FC = () => {

  return (
    <>
      {/* <motion.section id='loader_sec'
        initial={{ y: 0, backgroundColor: '#2a2a2e' }}
        animate={{ backgroundColor: ['#f60797', '#2a2a2e', '#2a2a2e', '#2a2a2e', '#f60797'] }}
        whileInView={{ y: [0, 0, 0, 0, '-100vh'] }}
        transition={{ duration: 2, times: [0, 0.25, 0.5, 0.8, 1] }}>
        <div className="pre-container">
          <div id="loader"></div>
        </div>
        <h4 className='text-primary text-xl tracking-wider mt-10 uppercase'>Loading</h4>
      </motion.section> */}
      <div className="flex w-full h-full">
        <SideBar />
        <div className='w-full flex flex-col m-0 p-0 relative'>
          <StartPage />
          <MenuBar />
          <AboutPage />
          <Education />
          <Experience />
          <Skills />
          <Slider />
          <Process />
          <ContactPage />
        </div>
      </div>
    </>
  );
}

