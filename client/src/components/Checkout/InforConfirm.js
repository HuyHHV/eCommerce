import React, { useEffect, useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {AiOutlineClose} from 'react-icons/ai'
import {useForm} from 'react-hook-form';
import axios from 'axios';
function InforConfirm({setPaymentIntent,paymentIntent}) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit,reset } = useForm();
    const {userInfo} = useSelector((state) => state.persistedReducer.auth)
    const {totalPrice} = useSelector(state => state.persistedReducer.cart);
    const getPaymentIntent = async() => {
        try {
            const config = {
                header: {
                    "Content-Type" :"application/json"
                }
            };
            const request = {
                amount:totalPrice*100,
                userEmail:userInfo.email
            }
            const {data} = await axios.post('/api/checkout/secret',request,config)
            setPaymentIntent(data)
        } catch (error) {
            console.log(error)
        }
    }
    const submitForm = async(formInput) => {
        setLoading(true)
        getPaymentIntent()
    }
      

    //   prefill user infor from database to the form
    useEffect(()=> {
        reset(userInfo)
    },[userInfo]);
    
    useEffect(()=>{
        setLoading(false)
        setPaymentIntent(null)
    },[])
    useEffect(()=> {
        if(paymentIntent)
        {dispatch(toggleSideBar({form:'checkout',open:true}))  }  ;    
    },[paymentIntent,dispatch])
  return (
    <div
        className="w-full max-w-sm bg-white p-5">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
                <AiOutlineClose/> 
            </button>
        </div>
        <form onSubmit={handleSubmit(submitForm)} >
            <div className='w-full flex items-center justify-center my-2 pb-6'>
                <h1 className='text-2xl font-bold'>Billing details</h1>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">
                        First Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                    {...register('firstName')}
                    className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="firstName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">
                    Last Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                {...register('lastName')} 
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="lastName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                disabled
                value={userInfo.email}
                className="bg-white" id="email" type="email"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 " htmlFor="address">
                    Shipping Address
                </label>
                </div>
                <div className="md:w-2/3">
                <textarea 
                {...register('address')}
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="address" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-2/3 m-auto ">
                    <button
                    type="submit" 
                    disabled={loading}
                    className="w-full shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:opacity-50" >
                      Confirm
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InforConfirm