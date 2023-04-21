import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RatingStar from '../components/RatingStar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    useEffect(() => {
        const productId = params.productId
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [params.productId])

    // handling addTocart button 
    const addToCart=()=>{
        const cartItems=JSON.parse(localStorage.getItem('cartItems')) || [] 
        const productItem={
            id:product.id,
            title:product.title,
            price:product.price,
            image:product.image,
            category:product.category,
            rating:product.rating,
            quantity:1
        }
        const existingItem=cartItems.find((item)=>item.id===product.id)
        if(existingItem){
            toast.error('Product already in the cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to cart`)
        }
    }
    return (
        <>
        <ToastContainer theme='colored' position='top-center'/>
            <div className='card shadow-lg my-4 offset-md-2' style={{ maxWidth: '800px' }}>
                <div className='row'>
                    <div className='col-md-6 my-3 p-3'>
                        <img src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className='col-md-6 my-3'>
                        <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
                            <h5 className='card-text'>${product.price}</h5>
                            <p className='card-text'>{product.description}</p>
                            {product.rating &&
                                <RatingStar rating={product.rating.rate} />
                            }
                            {product.rating && <span>({product.rating.count})</span>}
                            <br/>
                            <br/>
                            <button className='btn btn-success' onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails