import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
function Product({productDetails}) {
    
  return (
    
    <li  className="max-w-sm rounded-lg md:w-1/4 w-full hover:scale-105 ease-in-out duration-200  flex flex-wrap">
        <Link to={`/products/${productDetails._id}`} className='w-full'>
            <div className='max-w-sm mx-auto relative'>
                <img className="rounded-t-lg h-80 w-full object-fit px-2" src={productDetails.imgSrc} alt={productDetails.name}/>
                <button className='absolute bottom-0 right-0 my-3 mx-5 hover:text-red-500'>
                    <AiOutlineHeart className='text-2xl font-bold'/>
                </button>
            </div>
            <div className="p-3">
                <div>
                    <h1 className="mb-1 text-xl font-bold tracking-tight text-gray-900 ">{productDetails.brand}</h1>
                    <h1 className="mb-1 text-xl tracking-tight text-gray-900 ">{productDetails.name}</h1>
                    <h2>{productDetails.price}</h2>
                </div>
            </div>
        </Link>
    </li>

  )
}

export default Product