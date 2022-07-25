import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
function Signin({toggleSideBar,setSideBarState}) {
  return (
    <div>
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => toggleSideBar('signin')}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        <form className="w-full max-w-sm bg-white p-10">
        
        <div className='w-full flex items-center justify-center my-10'>
            <h1 className='text-4xl font-bold'>Sign in</h1>
        </div>
        <div className='flex gap-1 my-4'>
            <p>Don't have an account yet?</p>
            <button 
            type='button'
            onClick={() => setSideBarState({open:true, form:'signup'})}
            className='font-bold hover:underline underline-offset-1'>
                Sign up
            </button>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                    email
                </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="email" type="email"/>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Password
                </label>
            </div>
            <div className="md:w-2/3">
                <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="inline-password" type="password"/>
            </div>
        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
                <button className="shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Sign in
                </button>
            </div>
        </div>
        </form>
    </div>
    
  )
}

export default Signin