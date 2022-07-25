import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
function Product() {
  return (
    
    <li className="max-w-sm rounded-lg md:w-1/4 w-full hover:scale-105 ease-in-out duration-200">
        <Link to="/" className='w-full'>
            <div className='max-w-sm mx-auto relative'>
                <img className="rounded-t-lg h-48 w-full object-cover px-2" src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" alt="shoes"/>
                <button className='absolute bottom-0 right-0 my-3 mx-5 hover:text-red-500'>
                    <AiOutlineHeart className='text-2xl font-bold'/>
                </button>
            </div>
            <div className="p-5">
                <div>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Brand</h1>
                    <h1 className="mb-2 text-2xl tracking-tight text-gray-900 ">Shoe name</h1>
                    <h2>Price</h2>
                </div>
            </div>
        </Link>
    </li>

  )
}

export default Product