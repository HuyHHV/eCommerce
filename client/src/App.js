import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='h-30vh'></div>
      {/* <Routes>
          <Route path="/cart" element = {<Cart/>} />
      </Routes> */}
    </>
  );
}

export default App;
