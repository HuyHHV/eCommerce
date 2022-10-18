import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Navbar/>
      <div className='md:h-[15vh] none'></div>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/products/:id" element = {<Product/>} />
      </Routes>
    </>
  );
}

export default App;
