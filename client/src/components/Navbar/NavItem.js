import React from 'react'
import {Link} from 'react-router-dom'
function NavItem(props) {
  return (
    <>
        <Link className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" 
        to={props.link}>
          {props.NavItem}
        </Link>
    </>
  )
}

export default NavItem