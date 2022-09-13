import React, { useState,useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {logout} from '../../features/auth/authSlice'

function Dropdown({userInfo}) {
    const [dropdown, setDropdown] = useState('hidden');
    const dropdownMenu = useRef();
    const handleDropdown = () => {
        if (dropdown !== 'hidden') setDropdown('hidden')
        else setDropdown('block')
    }
    const dispatch = useDispatch();

    useEffect(()=>{
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!dropdownMenu.current || dropdownMenu.current.contains(event.target)) {
              return;
            }
            setDropdown('hidden');
          };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
            return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
      };
    },[dropdownMenu,dropdown])
  return (
    <>
    {/* md screent size */}
        <div className="relative md:inline-block hidden text-left">
            <div>
                <button 
                type="button" 
                className="flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:bg-gray-50" 
                id="menu-button"
                onClick={handleDropdown}
                >
                {'Hi ' + userInfo.firstName + '!'}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div 
            ref={dropdownMenu}
            className={`${dropdown} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} 
            role="menubar" 
            aria-orientation="vertical" 
            aria-labelledby="menu-button" 
            tabIndex="-1">
                <div className="py-1" role="none">
                    <Link 
                        to={"/"}
                        className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                            Account details 
                    </Link>
                    <button 
                    onClick={()=> dispatch(logout())}
                    type="button" 
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    {/* phone screen */}
        <div className='md:hidden flex flex-col w-full'>
        <Link 
            to={"/"}
            className="w-full text-gray-700 block py-2 text-sm font-medium" role="menuitem" tabIndex="-1" id="menu-item-0">
                Account details 
        </Link>
        <button 
        type="button" 
        onClick={()=> dispatch(logout())}
        className="text-gray-700 block py-2 text-left text-sm font-medium border border-gray-200 rounded-md px-4 w-max" role="menuitem" tabIndex="-1" id="menu-item-3">
            Sign out
        </button> 
        </div>
    </>
  )
}

export default Dropdown