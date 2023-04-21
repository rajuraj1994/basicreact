import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'
import DataFetch from '../hooks/DataFetch'
import Effect from '../hooks/Effect'
import IncrementDecrement from '../hooks/IncrementDecrement'
import axios from 'axios'
import Show from '../context/Show'

const Home = () => {
  const [products, setProducts] = useState([])
  // const[limit,setLimit]=useState(8)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        // console.log(res)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Slider />
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products && products.slice(0,8).map((product,index)=>(
             <Card key={index} productName={product.title} price={product.price} image={product.image} id={product.id} />
          ))} 
        </div>
      </div>
      <IncrementDecrement />
      <Effect />
      <DataFetch />
      <Show/>
    </>
  )
}

export default Home