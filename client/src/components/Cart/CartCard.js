import React from 'react'
import {removeProduct} from '../../features/cart/cartSlice'
import {useDispatch} from 'react-redux'
function CartCard({productInfo,index}) {
    const dispatch = useDispatch();
  return (
        <li className="max-w-sm rounded-lg w-full snap-start touch-pan-y">
            <div className='w-full flex flex-row justify-between items-center px-5'>
                <div className="p-5 text-md">
                    <div>
                        <h1 className="font-bold tracking-tight text-gray-900 ">{productInfo.brand}</h1>
                        <h1 className="font-bold  tracking-tight text-gray-900 ">{productInfo.name}</h1>
                        <h2 className='text-sm'>{productInfo.price}</h2>
                        <h2 className='text-sm'>size: {productInfo.size}</h2>
                        <button
                        onClick={()=> dispatch(removeProduct(index))}
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