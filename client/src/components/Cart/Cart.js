import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import CartCard from './CartCard'
function Cart({toggleSideBar}) {
  return (
    <div className="md:w-30vw w-full bg-white ">
        <div className='w-full h-20 flex justify-between items-center px-10 bg-gray-50'>
            <h1 className='text-xl font-bold'>Shopping Cart</h1>
            <button 
              onClick={() => toggleSideBar()}
              className='text-xl'> 
                <AiOutlineClose/> 
            </button>
        </div>
        <div className='py-5 h-80 overflow-y-auto snap-y'>
            <ul className='flex flex-col divide-y'>
              <CartCard/>
              <CartCard/>
              <CartCard/>
              <CartCard/>
              <CartCard/>
            </ul>
        </div>
        <div className='flex w-full justify-end p-5'>
          <button className='text-orange-900'>CLEAR CART</button>
        </div>
        <div className='w-full flex items-center justify-between py-5 px-10 text-xl font-bold'>
            <h3>Total:</h3>
            <h3>$999999</h3>
        </div>
        <div className='w-full flex items-center justify-center'>
            <button className='bg-black text-white font-bold text-md py-4 px-28'>
                CHECK OUT
            </button>
        </div>
    </div>
  )
}

export default Cart