import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose,AiOutlineShoppingCart} from 'react-icons/ai'
import NavItem from './NavItem';
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
  const [click, setClick] = useState(false);
    
    const toggleMenu = () => setClick(!click);
  return (
    <>
      <nav className="bg-white md:shadow">
        <div className='
            py-3
            px-8
            flex
            md:justify-center
            justify-between
            items-center'>           
          <Link className="text-gray-800 font-bold text-4xl hover:text-gray-700" to="/">Brand </Link>
          <div className="md:hidden">
                <div className="flex">
                  <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu"
                  onClick={toggleMenu}
                  >
                    {!click?<FiMenu className='text-2xl'/>
                      :<AiOutlineClose className='text-2xl'/>
                    }
                  </button>
                </div>
          </div>
        </div>
        <div className={!click?'hidden md:block':''}>
          <div className=" 
              container 
              mx-auto 
              px-6 
              py-3 
              md:flex md:justify-between md:items-center">

                <div className="flex flex-col md:flex-row md:mx-6">
                  {categories.map((category,index) => (
                    <NavItem key={index} link={category.link} NavItem={category.category} />
                  ))}
                </div>

                <div className="flex justify-center ">
                    <NavItem link='/signup' NavItem='Sign up'/>
                    <NavItem link='/signup' NavItem='Sign in'/>
                    <NavItem link='/cart' NavItem={
                      <div className='relative'>
                        <AiOutlineShoppingCart className='text-3xl hover:text-indigo-500'/>
                        <span className="absolute top-2 left-6 rounded-full bg-indigo-500 text-white p-1 text-xs">{}</span>
                      </div>
                    }/>
                </div>
      
          </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar