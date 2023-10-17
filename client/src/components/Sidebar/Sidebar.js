import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Signin from '../Signin'
import Signup from '../Signup'
import { Checkout, PaymentSucess, InforConfirm } from '../Checkout'
import useOnClickOutside from '../../customHooks/useOnClickOutside'
import { toggleSideBar } from '../../features/sidebar/sidebarSlice'
import Cart from '../Cart'

function Sidebar() {
  const [paymentIntent, setPaymentIntent] = useState(null)
  const sideBarState = useSelector((state) => state.sidebarReducer)

  const sidebar = useRef()
  const dispatch = useDispatch()
  useOnClickOutside(sidebar, () => dispatch(toggleSideBar({ open: false })))
  return (
    <aside
      ref={sidebar}
      className={`bg-white fixed inset-y-0 right-0  md:w-max w-screen z-99 h-screen shadow-md overflow-y-auto ease-in-out duration-300 ${
        sideBarState.open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {sideBarState.form === 'signin' && <Signin />}
      {sideBarState.form === 'signup' && <Signup />}
      {sideBarState.form === 'cart' && <Cart />}
      {sideBarState.form === 'inforconfirm' && (
        <InforConfirm
          setPaymentIntent={setPaymentIntent}
          paymentIntent={paymentIntent}
        />
      )}
      {sideBarState.form === 'checkout' && (
        <Checkout
          setPaymentIntent={setPaymentIntent}
          paymentIntent={paymentIntent}
        />
      )}
      {sideBarState.form === 'paymentSucces' && <PaymentSucess />}
    </aside>
  )
}

export default Sidebar
