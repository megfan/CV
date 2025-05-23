import React, { useEffect } from 'react';
import './styles/App.css';
import { Main } from './pages/main/Main';
import { Gallery } from './pages/gallery/Gallery';
import { BrowserRouter, Routes, Route } from 'react-router';
import Lenis from 'lenis'


function App() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CV" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
