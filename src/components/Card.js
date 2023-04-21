import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
    const {productName,price,image,id}=props 
    //const productName=props.productName
    //const price=props.price
    return (
        <>
           
                    <div className="col">
                        <div className="card shadow p-1">
                            <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{productName.slice(0,20)}</h5>
                                    <h5>${price}</h5>
                                    <Link to={`/productdetails/${id}`} className='btn btn-primary'>View Details</Link>
                                </div>
                        </div>
                    </div>
                
        </>
    )
}

export default Card