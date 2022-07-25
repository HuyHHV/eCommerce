import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function Signup({toggleSideBar,setSideBarState}) {
  return (
    <div className="w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-end'>
                <button 
                onClick={() => toggleSideBar('signup')}
                className='text-xl'> 
                <AiOutlineClose/> 
                </button>
        </div>
        <form >
            <div className='w-full flex items-center justify-center my-10'>
                <h1 className='text-4xl font-bold'>Sign up</h1>
            </div>
            <div className='flex gap-1 my-4'>
                <p>Already have an account yet?</p>
                <button 
                type='button'
                onClick={() => setSideBarState({open:true, form:'signin'})}
                className='font-bold hover:underline underline-offset-1'>
                    Sign in
                </button>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="firstName">
                    First Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="firstName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="lastName">
                    Last Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="lastName" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="email" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="address">
                    Address
                </label>
                </div>
                <div className="md:w-2/3">
                <textarea className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white forcus:border-gray-800" id="address" type="text"/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Signup