import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../../axiosConfig' 
import {AiOutlineHeart} from 'react-icons/ai'
import {addProduct} from '../../features/cart/cartSlice'
import {toggleSideBar} from '../../features/sidebar/sidebarSlice'
import {useDispatch,useSelector} from 'react-redux'
function ProductInfo() {
    const {id} = useParams()
    const [productData, setProduct] = useState(null);
    const [selectedSize, setSize] = useState("");
    const userInfor = useSelector(state => state.persistedReducer.userInfor)
    const sizes =[4,5,6,7,8,9,10,11,12];
    const dispatch = useDispatch()
    const getSingleProduct = async() =>{
        try {
            const config = {
                header: {
                    'Content-Type': 'application/json',
                }
            }
            const {data} = await publicRequest.get(`products/${id}`, config);
            // console.log(data)
            setProduct(data);
            
        } catch (error) {
            console.log(error)
        }
    };
    
    const addProductToCartDb = async() =>{ 
        try {
            const config = {
                "Content-type" : "application/json"
            }
            const request = {
                productId:id,
                userId: userInfor._id,
                size:selectedSize
            }
            await axios.post('/api/cart', config, request)
        } catch (error) {
            console.log(error)
        }
    } 

    const handleSubmit = async(event) => {
        event.preventDefault();
        dispatch(addProduct({...productData,size:selectedSize}));
        dispatch(toggleSideBar({form:"cart",open:true}));
        // add product to cart in database
        if (userInfor) {await addProductToCartDb();}
    }
    const handleChange =  (event) => {
        setSize(event.target.value)
    }

    // 
    useEffect(() => {
        getSingleProduct()
        // console.log(productData)
    },[])

  return (
    productData && 
    <div className='flex md:flex-row flex-col  justify-center overflow-hidden'>
        <section className='md:w-1/2 w-full md:h-[80vh] md:relative '>
            <img src={productData.imgSrc} alt={productData.name} 
            className='block h-auto md:absolute md:bottom-0 object-fit'
            />
        </section>
        <section className='md:w-1/2 w-full md:ml-8'>
            <header>
                <h1 className='font-bold text-2xl'>{productData.brand}</h1>
                <h2 className='text-2xl'>{productData.name}</h2>
                <p className='text-xl'>{productData.price}</p>
            </header>
            <form 
            onSubmit={handleSubmit}
            className='w-full py-5'>
                <fieldset>
                    <select 
                    onChange={handleChange}
                    value={selectedSize}
                    className='border border-gray-500 rounded-md w-1/3'
                    name="size" id="size" 
                    required>
                        <option value="" disabled selected>Choose size...</option>
                        {sizes.map(size=> 
                            <option key={size} value={size} >{size}</option>
                            )}
                    </select>
                    <div className='flex items-center justify-between w-4/6 mx-1 py-5 gap-4'>
                        <button
                        className='bg-black text-gray-200 p-4 hover:bg-gray-700 w-full'
                        type='submit'>
                            ADD TO CART
                        </button>
                        <button 
                        className='hover:text-red-500 px-2'
                        type='button'>
                            <AiOutlineHeart className='text-4xl font-bold'/>
                        </button>
                    </div>
                </fieldset>
            </form>
            <div>
                <h3 className='font-bold text-md'>Material</h3>
                {productData.material.map((p,index) => 
                    <p key={index}>{p}</p>
                    )}
            </div>
            <div className='my-4'>
                <h3 className='font-bold text-md my-2'>Product details</h3>
                <div className='h-96 overflow-auto text-sm'>
                    {productData.description.map((p,index) => 
                        <p key={index}>{p}</p>
                        )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductInfo