import './styles/App.css';
import { motion } from 'framer-motion';
import { SideBar } from './pages/main/SideMenu/SideBar';
import { MenuBar } from './pages/main/MenuBar';
import { StartPage } from './pages/main/StartPage';
import { AboutPage } from './pages/main/AboutPage';
import { Education } from './pages/main/Education/Education';
import { Experience } from './pages/main/Experience/Experience';
import { ContactPage } from './pages/main/Contact/Contact';
import { Skills } from './pages/main/Skills/Skills';
import { Slider } from './pages/main/Slider/Slider';
import { Process } from './pages/main/Process';
import { BrowserRouter } from 'react-router';



function App() {

  return (
    <BrowserRouter>
      <motion.section id='loader_sec'
        initial={{ y: 0, backgroundColor: '#f60797' }}
        animate={{ backgroundColor: ['#f60797', '#2a2a2e', '#2a2a2e', '#2a2a2e', '#f60797'] }}
        whileInView={{ y: [0, 0, 0, 0, '-100vh'] }}
        transition={{ duration: 3, delay: .1, times: [0, 0.25, 0.5, 0.8, 1] }}>
        <div className="pre-container">
          <div id="loader"></div>
        </div>
        <h4 className='text-primary text-xl tracking-wider mt-10 uppercase'>Loading</h4>
      </motion.section>
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
    </BrowserRouter>
  );
}

export default App;
