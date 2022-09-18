import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
function Checkout({clientSecret}) {
    
    const dispatch = useDispatch();
    const {email} = useSelector(state => state.persistedReducer.auth.userInfo);
    console.log(email)
    const {totalPrice} = useSelector(state => state.persistedReducer.cart);

    const stripePromise = loadStripe("pk_test_51LdCUdAHjmMKlxEMcDUPpJEb5KqSUWxS9MDVMaj1kH19rs8G33kv7CJduHNa0EgBj9m0l9oejBrqbma3HoUl1iwF0018BGle71");
    
    
    const appearance = {
        theme: 'stripe',
        variables: {
          colorPrimary: '#000000',
        },
      };
    const options ={
        clientSecret,
        appearance
    }

    useEffect(()=>{
        console.log(clientSecret)
    },[clientSecret])
  
  return (
    <div className="w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-end'>
            <button 
            onClick={() => dispatch(toggleSideBar({open:false}))}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        {clientSecret && 
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm/>
        </Elements>
        }
    </div>
  )
}

export default Checkout