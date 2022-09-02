import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import Error from '../Error';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js'
import axios from 'axios';
function Checkout() {
    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.persistedReducer.userInfor)?.email;
    // total price in cent
    const total = useSelector(state => state.persistedReducer.cart.totalPrice)*100;

    const stripePromise = loadStripe("pk_test_51LdCUdAHjmMKlxEMcDUPpJEb5KqSUWxS9MDVMaj1kH19rs8G33kv7CJduHNa0EgBj9m0l9oejBrqbma3HoUl1iwF0018BGle71");

    const getClientSecret = async() => {
        try {
            const config = {
                header: {
                    "Content-Type" :"Application/json"
                }
            };
            const request = {

            }
            const {data} = axios.get('/api/checkout/secret',config,request)
        } catch (error) {
            
        }
    }

    useEffect(() =>{
       console.log(userEmail,total,typeof total)
    })
  return (
    <div className="w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        <Elements stripe={stripePromise}>
            <form >
                <PaymentElement/>
                <button>submit</button>
            </form>
        </Elements>
    </div>
  )
}

export default Checkout