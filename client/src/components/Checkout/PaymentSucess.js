import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {useDispatch} from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
function PaymentSucess() {
    const dispatch = useDispatch()
  return (
   <div className="w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        <div>
            <h1>Payment Success</h1>
        </div>
    </div>
  )
}

export default PaymentSucess