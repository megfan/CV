import Lenis from 'lenis';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Gallery } from './pages/gallery/Gallery';
import { Main } from './pages/main/Main';
import './output.css';


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
