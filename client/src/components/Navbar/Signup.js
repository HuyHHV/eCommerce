import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import {useForm} from 'react-hook-form'
import { signup } from '../../features/auth/authAction'
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import Error from '../Error'

function Signup() {
    const { loading, userToken, error, success } = useSelector(
        (state) => state.persistedReducer.auth
      );
    const [errorState, setErrorState] = useState(null)
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        // transform email string to lowercase to avoid case sensitivity issues during login
        data.email = data.email.toLowerCase();
        dispatch(signup(data))
        if(error) {
            setErrorState(error)
        }
        
      }
      useEffect(() => {
        // refresh if registration was successful
        if (success) {
            window.location.reload()
        }
      }, [loading, userToken, success])

      
  return (
    <div className="w-full max-w-sm bg-white p-5">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
                <AiOutlineClose/> 
            </button>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='w-full flex items-center justify-center my-2'>
                <h1 className='text-4xl font-bold'>Sign up</h1>
            </div>
            {errorState && <Error>{errorState}</Error>}
            <div className='flex gap-1 my-4'>
                <p>Already have an account?</p>
                <button 
                type='button'
                onClick={() => dispatch(toggleSideBar({open:true, form:'signin'}))}
                className='font-bold hover:underline underline-offset-1'>
                    Sign in
                </button>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">
                    First Name*
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                required 
                {...register('firstName')}
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="firstName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">
                    Last Name*
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                required
                {...register('lastName')} 
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="lastName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Email*
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                required
                {...register('email')}
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="email" type="email"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                    Password*
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                required
                type="password"
                minLength='5'
                {...register('password')}
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="password" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="address">
                    Address
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
                    disabled = {loading}
                    type="submit" 
                    className="w-full shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                       {loading? '...':'Sign Up'} 
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Signup