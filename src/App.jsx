import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Aquarius from './pages/Aquarius';
import Aries from './pages/Aries';
import Cancer from './pages/Cancer';
import Capricorn from './pages/Capricorn';
import Gemini from './pages/Gemini';
import Home from './pages/Home';
import Leo from './pages/Leo';
import Libra from './pages/Libra';
import Pisces from './pages/Pisces';
import Sagittarius from './pages/Sagittarius';
import Scorpio from './pages/Scorpio';
import Taurus from './pages/Taurus';
import Virgo from './pages/Virgo';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/aquarius" element={<Aquarius />} />
        <Route path="/aries" element={<Aries />} />
        <Route path="/cancer" element={<Cancer />} />
        <Route path="/capricorn" element={<Capricorn />} />
        <Route path="/gemini" element={<Gemini />} />
        <Route path="/leo" element={<Leo />} />
        <Route path="/libra" element={<Libra />} />
        <Route path="/pisces" element={<Pisces />} />
        <Route path="/sagittarius" element={<Sagittarius />} />
        <Route path="/scorpio" element={<Scorpio />} />
        <Route path="/taurus" element={<Taurus />} />
        <Route path="/virgo" element={<Virgo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
