import React from 'react'

function CartCard() {
  return (
        <li className="max-w-sm rounded-lg w-full snap-start touch-pan-y">
            <div className='w-full flex flex-row justify-between items-center px-5'>
                <div className="p-5 text-md">
                    <div>
                        <h1 className="font-bold tracking-tight text-gray-900 ">Brand</h1>
                        <h1 className="font-bold  tracking-tight text-gray-900 ">Shoe name</h1>
                        <h2 className='text-sm'>Price</h2>
                        <h2 className='text-sm'>Quantity:</h2>
                        <button className='text-orange-900 pt-2'>REMOVE</button>
                    </div>
                </div>
                <div className='max-w-sm h-full flex items-end'>
                    <img className="rounded-t-lg h-28 w-full object-cover px-2" src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" alt="shoes"/>
                </div>
            </div>
        </li>
  )
}

export default CartCard