import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa';
import {AiOutlineClose,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import Dropdown from './Dropdown';
import Sidebar from '../Sidebar'
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
  const {userInfo} = useSelector(state => state.persistedReducer.auth)
  const [menuOpen, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState(!menuOpen);
  // sidebar states to toggle sidebar 
  const dispatch = useDispatch();
   // custom hook to close sidebar
  return (
    <nav className="bg-white md:shadow fixed top-0 w-full z-10">
      {/* mobile display */}
      <div className='md:hidden my-6 px-8 flex md:justify-center justify-between items-center md:static'>           
        {/* logo */}
        <Link className="text-gray-800 font-bold text-5xl hover:text-gray-800" to="/">Oh! </Link>
        {/* hamburger menu */}
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

      {/* desktop */}
      <div className={!menuOpen?'hidden md:block':''}>
        <div className=" 
            container 
            py-6
            gap-2 
            md:flex md:justify-between md:items-center">
              {/* navagation buttons */}
              <div className="flex flex-col md:flex-row md:mx-6">
                {categories.map((category,index) => (
                  <NavItem key={index} link={category.link} NavItem={category.category} />
                ))}
              </div>
              {/* logo */}
              <Link className="text-gray-800 font-bold text-5xl hover:text-gray-800" to="/">Oh! </Link>

              <SearchBar/>
              
              <div className="flex justify-center md:flex-row flex-col my-2 gap-1">
                  {/* signin&signup button */}
                  {
                    userInfo?
                    <Dropdown userInfo={userInfo}/>:
                    <button 
                      onClick={() => dispatch(toggleSideBar({form:'signin'}))}
                      className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      <FaRegUser className='text-2xl'/>
                    </button>
                  }
                  {/* cart button */}
                  <button 
                    onClick={() => dispatch(toggleSideBar({form:'cart'}))}
                    className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      <div className='relative'>
                      <AiOutlineShoppingCart className='text-3xl'/>
                      <span className="absolute top-2 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs">{}</span>
                    </div>
                  </button>
                  <button 
                    className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      <div className='relative'>
                      <AiOutlineHeart className='text-2xl font-bold'/>
                      <span className="absolute top-2 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs">{}</span>
                    </div>
                  </button>
              </div>
              {/* Sidebar contain signup, signin, cart and checkout */}
              <Sidebar/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar