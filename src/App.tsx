import './styles/App.css';
import { SideBar } from './pages/main/SideMenu/SideBar';
import { MenuBar } from './pages/main/MenuBar';
import {StartPage} from './pages/main/StartPage';
import {AboutPage} from './pages/main/AboutPage';
import {Education} from './pages/main/Education/Education';
import {Experience} from './pages/main/Experience/Experience';
import {ContactPage} from './pages/main/Contact/Contact';
import {Skills} from './pages/main/Skills/Skills';
import {Slider} from './pages/main/Slider/Slider';
import { BrowserRouter } from 'react-router';


function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full h-full">
        <SideBar />
        <div className='w-full flex flex-col m-0 p-0 relative'>
          <StartPage />
          <MenuBar />
          <AboutPage />
          <Education />
          <Experience />
          <Skills />
          <Slider/>
          <ContactPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
