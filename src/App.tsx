import React from 'react';
import './styles/App.css';
import { SideBar } from './pages/main/SideBar';
import { MenuBar } from './pages/main/MenuBar';
import {StartPage} from './pages/main/corePages/StartPage'
import {AboutPage} from './pages/main/corePages/AboutPage'
import {Education} from './pages/main/corePages/Education'
import {Experience} from './pages/main/corePages/Experience/Experience'
import {Skills} from './pages/main/corePages/Skills'
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <div className="flex w-full">
      <SideBar/>
      <div className='w-full flex flex-col m-0 p-0'>
        <BrowserRouter>
          <MenuBar/>
          <StartPage/>
          <AboutPage/>
          <Education/>
          <Experience/>
          <Skills/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
