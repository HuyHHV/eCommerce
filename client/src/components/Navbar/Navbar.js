import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa';
import {AiOutlineClose,AiOutlineShoppingCart} from 'react-icons/ai'
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import Signin from './Signin';
import Signup from './Signup';
import Cart from '../Cart';
import { useDispatch, useSelector } from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import Checkout from '../Checkout';
const categories = [
  {
    category: "Sneakers",
    link: '/sneaker'
  },
  {
    category: "Clothing",
    link: '/clothing'
  },
  {
    category: "Assessories",
    link: '/assesories'
  },
  {
    category: "Sale",
    link: '/sale'
  }
]

function Navbar() {
  // hamburger menu
  const [menuOpen, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState(!menuOpen);
  // sidebar states to toggle sidebar 
  const dispatch = useDispatch();
  const sideBarState = useSelector((state) => state.sidebarReducer);
  return (
    <>
      <nav className="bg-white md:shadow fixed w-full z-50">
        <div className='
            my-6
            px-8
            flex
            md:justify-center
            justify-between
            items-center
            md:static
            '>           
          <Link className="text-gray-800 font-bold text-5xl hover:text-gray-800" to="/">Oh! </Link>
          <div className="md:hidden">
                <div className="flex">
                  <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu"
                  onClick={toggleMenu}
                  >
                    {!menuOpen?<FiMenu className='text-2xl'/>
                      :<AiOutlineClose className='text-2xl'/>
                    }
                  </button>
                </div>
          </div>
        </div>
        <div className={!menuOpen?'hidden md:block':''}>
          <div className=" 
              container 
              mx-auto 
              px-6 
              py-6 
              md:flex md:justify-between md:items-center">

                <div className="flex flex-col md:flex-row md:mx-6">
                  {categories.map((category,index) => (
                    <NavItem key={index} link={category.link} NavItem={category.category} />
                  ))}
                </div>

                <SearchBar/>
                <div className="flex justify-center gap-1">
                    {/* signin&signup button */}
                    <button 
                      onClick={() => dispatch(toggleSideBar({form:'signin'}))}
                      className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      <FaRegUser className='text-2xl'/>
                    </button>
                    {/* cart button */}
                    <button 
                      onClick={() => dispatch(toggleSideBar({form:'cart'}))}
                      className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                        <div className='relative'>
                        <AiOutlineShoppingCart className='text-3xl'/>
                        <span className="absolute top-2 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs">{}</span>
                      </div>
                    </button>
                </div>
                {
                  sideBarState.open && 
                  <aside className='bg-white fixed inset-y-0 right-0  md:w-max w-screen z-5 h-screen shadow-md overflow-y-auto'>
                    {sideBarState.form === 'signin'&&
                    <Signin/>}
                    {sideBarState.form === 'signup'&&
                    <Signup/>
                    } 
                    {sideBarState.form === 'cart'&&
                    <Cart/>
                    }
                    {sideBarState.form === 'checkout'&&
                    <Checkout/>
                    }  
                  </aside>
                }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar