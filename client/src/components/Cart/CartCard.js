import React from 'react'
import {removeProduct} from '../../features/cart/cartSlice'
import {useDispatch} from 'react-redux'
function CartCard({productInfo,index}) {
    const dispatch = useDispatch();
  return (
        <li key={index} className="max-w-sm rounded-lg w-full snap-start touch-pan-y">
            <div className='w-full flex flex-row justify-between items-center px-5'>
                <div className="p-5 text-md">
                    <div>
                        <h1 className="font-bold tracking-tight text-gray-900 ">{productInfo.brand}</h1>
                        <h2 className="font-bold  tracking-tight text-gray-900 ">{productInfo.name}</h2>
                        <h3 className='text-sm'>{productInfo.price}</h3>
                        <h4 className='text-sm'>size: {productInfo.size}</h4>
                        <button
                        onClick={()=> dispatch(removeProduct({index,price:productInfo.price}))}
                        className='text-orange-900 pt-2'>
                            REMOVE
                        </button>
                    </div>
                </div>
                <div className='max-w-sm h-full flex items-end'>
                    <img className="rounded-t-lg h-28 w-full object-cover px-2" src={productInfo.imgSrc} alt="shoes"/>
                </div>
            </div>
        </li>
  )
}

export default CartCard