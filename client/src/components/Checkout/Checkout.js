import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js'
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
function Checkout() {
    const [clientSecret, setClientSecret] = useState(null)
    const dispatch = useDispatch();
    const {email} = useSelector(state => state.persistedReducer.auth.userInfo);
    console.log(email)
    const {totalPrice} = useSelector(state => state.persistedReducer.cart);

    const stripePromise = loadStripe("pk_test_51LdCUdAHjmMKlxEMcDUPpJEb5KqSUWxS9MDVMaj1kH19rs8G33kv7CJduHNa0EgBj9m0l9oejBrqbma3HoUl1iwF0018BGle71");
    
    const getClientSecret = async() => {
        try {
            const config = {
                header: {
                    "Content-Type" :"application/json"
                }
            };
            const request = {
                amount:totalPrice*100,
                userEmail:email
            }
            const {data} = await axios.post('/api/checkout/secret',request,config)
            setClientSecret(data.clientSecret)
        } catch (error) {
            console.log(error)
        }
    }
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
    useEffect(() =>{
       getClientSecret() 
    }, [])
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