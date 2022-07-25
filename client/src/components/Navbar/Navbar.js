import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose,AiOutlineShoppingCart} from 'react-icons/ai'
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import Signin from './Signin';
import Signup from './Signup';
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

  const [menuOpen, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState(!menuOpen);

  const [sideBarState, setSideBarState] = useState({open:false, form:null });
  const toggleSideBar =  (button) => {
    console.log(button)
    setSideBarState({open:!sideBarState.open, form:button});
  }

  
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

                <div className="flex justify-center gap-5">
                    <button 
                    onClick={() => toggleSideBar('signup')}
                    className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      Sign up
                    </button>
                    <button 
                    onClick={() => toggleSideBar('signin')}
                    className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                      Sign in
                    </button>
                    <NavItem link='/cart' NavItem={
                      <div className='relative'>
                        <AiOutlineShoppingCart className='text-3xl hover:text-indigo-500'/>
                        <span className="absolute top-2 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs">{}</span>
                      </div>
                    }/>
                </div>
                {
                  sideBarState.open && 
                  <div className='bg-white absolute inset-y-0 right-0  w-max z-5 h-screen'>
                    {sideBarState.form === 'signin'? 
                    <Signin toggleSideBar= {toggleSideBar} setSideBarState={setSideBarState} /> : 
                    <Signup toggleSideBar= {toggleSideBar} setSideBarState={setSideBarState}/>}
                  </div>
                }
          </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar