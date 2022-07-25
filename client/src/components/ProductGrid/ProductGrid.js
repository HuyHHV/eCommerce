import React from 'react'
import Product from './Product'

function ProductGrid() {
  return (
    <div className='mx-auto my-4'>
        <ul className='w-full flex flex-wrap md:flex-row flex-col mx-auto p-2 items-center justify-center'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </ul>
        <div className='w-full flex items-center justify-center'>
            <button className='bg-black text-white font-bold text-xl p-4 mx-auto'>
                SHOW MORE PRODUCTS
            </button>
        </div>
    </div>
)
}

export default ProductGrid