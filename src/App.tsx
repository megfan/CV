import './styles/App.css';
import { Main } from './pages/main/Main';
import { Gallery } from './pages/gallery/Gallery';
import { BrowserRouter, Routes, Route } from 'react-router';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
