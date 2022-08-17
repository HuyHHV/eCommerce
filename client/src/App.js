import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <div className='md:h-30vh none'></div>
      <Routes>
          <Route path="/" element = {<Home/>} />
      </Routes>
    </>
  );
}

export default App;
