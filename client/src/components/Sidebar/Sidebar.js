import React, { useRef,useState } from 'react'
import useOnClickOutside from '../../customHooks/useOnClickOutside'
import { useDispatch, useSelector } from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import Signin from '../Signin';
import Signup from '../Signup';
import {Checkout,PaymentSucess,InforConfirm} from '../Checkout'
import Cart from '../Cart'

function Sidebar() {
    const [clientSecret, setClientSecret] = useState(null);
    const sidebar = useRef()
    const dispatch = useDispatch()
    const sideBarState = useSelector((state) => state.sidebarReducer);
    useOnClickOutside(sidebar,() => dispatch(toggleSideBar({open:false})))
  return (
    <>
        {sideBarState.open && 
                  <aside
                  ref={sidebar}
                   className='bg-white fixed inset-y-0 right-0  md:w-max w-screen z-5 h-screen shadow-md overflow-y-auto'>
                    {sideBarState.form === 'signin'&&
                    <Signin/>}
                    {sideBarState.form === 'signup'&&
                    <Signup/>
                    } 
                    {sideBarState.form === 'cart'&&
                    <Cart/>
                    }
                    {sideBarState.form === 'inforconfirm'&&
                    <InforConfirm setClientSecret= {setClientSecret}/>
                    }  
                    {sideBarState.form === 'checkout'&&
                    <Checkout clientSecret={clientSecret}/>
                    }
                    {sideBarState.form === 'paymentSucces'&&
                    <PaymentSucess/>
                    }
                  </aside>}
    </>
  )
}

export default Sidebar