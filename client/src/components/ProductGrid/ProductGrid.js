import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ProductCard from './ProductCard'

function ProductGrid() {
    const [products, setProduct] = useState([]);
    const [nextPage,setNextPage] = useState(0);
    const [loading,setLoading] = useState(false)
    const getProducts = async() =>{
        console.log(nextPage)
        const config = {
            header: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.get(`api/products/?limit=8&skip=${nextPage}`, config);
        console.log(data)
        setProduct(prev => [...prev, ...data]);
        setLoading(false);
    }
    useEffect( ()=>{
        setLoading(true)
        getProducts();
        console.log(products);
    },[nextPage]);

    const loadMoreProducts = () =>{
        setNextPage(nextPage+8)
    }
    

  return (
    
    <div className='mx-8 my-4 '>
        <ul className='w-full flex flex-wrap md:flex-row flex-col mx-auto p-2 justify-center'>
            {products.length && products.map(product => (
                <ProductCard key = {product._id} productDetails = {product}/>
            ))}
            
        </ul>
        <div className='w-full flex justify-center'>
            <button 
            disabled={loading}
            onClick={loadMoreProducts}
            className=' rounded-md bg-black text-white font-bold text-xl p-4 mx-auto inline-flex items-center gap-1'>
                {loading?
                    <>
                    <svg className="border-t-transparent border-solid animate-spin  rounded-full border-gray-200 border-4 h-5 w-5"></svg>
                    Loading...
                    </>
                    : 'Load More Products'
                }
                
            </button>
        </div>
    </div>
)
}

export default ProductGrid