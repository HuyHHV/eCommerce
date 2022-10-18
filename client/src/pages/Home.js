import React from 'react'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'
function Home() {
  const {id} = useParams()
   console.log(id)
  return (
    <>
    <Carousel/>
    <ProductGrid/>
    </>
  )
}

export default Home