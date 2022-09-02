import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../../features/auth/authAction';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {useForm} from 'react-hook-form';
import Error from '../Error';
function Signin() {
    const { loading, userToken,userInfo, error, success } = useSelector(
        (state) => state.persistedReducer.auth
      )
    console.log(loading)
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        // transform email string to lowercase to avoid case sensitivity issues during login
        data.email = data.email.toLowerCase();
        console.log('????')
        dispatch(signin(data))
        
        
      }
      useEffect(() => {
        // refresh if registration was successful
        if (success) {
            window.location.reload()
        }
      }, [loading, userToken, success])

  return (
    <div className="w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='w-full flex items-center justify-center my-10'>
                <h1 className='text-4xl font-bold'>Sign in</h1>
            </div>
            {error && <Error>{error}</Error>}
            <div className='flex gap-1 my-4'>
                <p>Don't have an account yet?</p>
                <button 
                type='button'
                onClick={() => dispatch(toggleSideBar({open:true, form:'signup'}))}
                className='font-bold hover:underline underline-offset-1'>
                    Sign up
                </button>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                        email
                    </label>
                </div>
                <div className="md:w-2/3">
                <input 
                {...register('email')}
                required
                id="email" type="email"
                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                    {...register('password')}
                    required
                    id="inline-password" type="password"
                    className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button 
                    disabled={loading}
                    type="submit"
                    className="shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                        {
                            loading?"...":"Sign in"
                        }
                    </button>
                </div>
            </div>
        </form>
    </div>
    
  )
}

export default Signin