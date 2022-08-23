import React from 'react'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import { useParams } from 'react-router-dom'
function Home() {
  const {id} = useParams()
   console.log(id)
  return (
    <ProductGrid/>
  )
}

export default Home