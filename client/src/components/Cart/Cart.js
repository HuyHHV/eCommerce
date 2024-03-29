import React, { useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CartCard from './CartCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../../features/sidebar/sidebarSlice'
import { clearCart } from '../../features/cart/cartSlice'
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.persistedReducer.cart)
  const { userInfo } = useSelector((state) => state.persistedReducer.auth)

  // close sidebar when clicking outside of sidebar
  return (
    <div className="md:w-30vw w-full bg-white ">
      <div className="w-full h-20 flex justify-between items-center px-10 bg-gray-50">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <button
          onClick={() => dispatch(toggleSideBar({ open: false }))}
          className="text-xl"
        >
          <AiOutlineClose />
        </button>
      </div>
      {cart.products.length > 0 ? (
        <div className="py-5 h-80 overflow-y-auto snap-y">
          <ul className="flex flex-col divide-y">
            {cart.products.map((product, index) => (
              <CartCard
                key={index}
                productInfo={product}
                index={index}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full flex flex-wrap px-11 py-4">
          <p className="text-center">
            Your cart is empty,&nbsp;
            <button
              className="text-orange-900 font-bold"
              onClick={() => dispatch(toggleSideBar({ open: false }))}
            >
              continue to shopping
            </button>
          </p>
        </div>
      )}
      <div className="flex w-full justify-end p-5">
        <button
          onClick={() => dispatch(clearCart())}
          className="text-orange-900"
        >
          CLEAR CART
        </button>
      </div>
      <div className="w-full flex items-center justify-between py-5 px-10 text-xl font-bold">
        <h3>Total: $</h3>
        <h3>{cart.totalPrice}</h3>
      </div>
      <div className="w-full flex items-center justify-center">
        {!userInfo ? (
          <p>
            Please&nbsp;
            <button
              className="text-orange-900 font-bold"
              onClick={() =>
                dispatch(toggleSideBar({ open: true, form: 'signin' }))
              }
            >
              sign in
            </button>
            &nbsp; to checkout
          </p>
        ) : (
          <button
            disabled={cart.quantity === 0}
            onClick={() =>
              dispatch(toggleSideBar({ open: true, form: 'inforconfirm' }))
            }
            className="bg-black text-white font-bold text-md py-4 px-28  disabled:opacity-50"
          >
            CHECK OUT
          </button>
        )}
      </div>
    </div>
  )
}

export default Cart
