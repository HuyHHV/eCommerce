import {AiOutlineClose} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
function Checkout({setPaymentIntent,paymentIntent}) {
    // disable click outside to close sidebar
    const dispatch = useDispatch();
    
    const stripePromise = loadStripe("pk_test_51LdCUdAHjmMKlxEMcDUPpJEb5KqSUWxS9MDVMaj1kH19rs8G33kv7CJduHNa0EgBj9m0l9oejBrqbma3HoUl1iwF0018BGle71");
    
    const appearance = {
        theme: 'stripe',
        variables: {
          colorPrimary: '#000000',
        },
      };
    const options ={
        clientSecret:paymentIntent.client_secret,
        appearance
    }

    const cancelPaymentIntent = async () => {
      try {
        const config = {
          header: {
              "Content-Type" :"application/json"
          }
        };
        console.log(paymentIntent)
        const {data} = await axios.post('/api/checkout/cancel',{id:paymentIntent.id},config)
        data && dispatch(toggleSideBar({open:false}))
      } catch (error) {
        console.log(error.response.data.error)
      }
    }

  return (
    <div className="checkout w-full max-w-sm bg-white p-10">
        <div className='w-full flex justify-between'>
            {/* return to confirm information */}
            <button 
            onClick={() => dispatch(toggleSideBar({open:true,form:'inforconfirm'}))}
            className='text-xl'> 
            Back 
            </button>
            <button 
            onClick={cancelPaymentIntent}
            className='text-xl'> 
            <AiOutlineClose/> 
            </button>
        </div>
        {paymentIntent && 
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm/>
        </Elements>
        }
    </div>
  )
}

export default Checkout