import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';


function App() {
  return (
    <>
      <Navbar/>
      <div className='h-30vh'></div>
      <Carousel/>
      <ProductGrid/>
    </>
  );
}

export default App;
