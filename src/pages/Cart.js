import React,{useState,useEffect, Fragment} from 'react'
import { FaTrash} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const[products,setProducts]=useState([])

    useEffect(()=>{
        const cartData=localStorage.getItem('cartItems')
        const data=JSON.parse(cartData)
        setProducts(data)
    },[])

    // remove item from cart 
    const removeCartHandler=(id,name)=>{
        const cartItems=JSON.parse(localStorage.getItem('cartItems'))
        const filterCart=cartItems.filter(item=>item.id !== id)
        localStorage.setItem('cartItems',JSON.stringify(filterCart))
        setProducts(filterCart)
        toast.success(`${name} is remove from the cart`)
    }
    //decrease quantity
    const decreaseQty=(id)=>{
        const updateProducts=products.map(item=>{
            if(item.id===id && item.quantity>1){
                return {...item,quantity:item.quantity-1}
            }
            return item
        })
        setProducts(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))

    }

    //increase quantity
    const increaseQty=(id)=>{
        const updateProducts=products.map(item=>{
            if(item.id===id){
                return {...item,quantity:item.quantity+1}
            }
            return item
        })
        setProducts(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }

  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className='container'>
        <div className='row d-flex justify-content-between my-4'>
            {products.length==0 ? 
            <h2 className='mt-5 text-danger text-center'>
                Your Cart is Empty
            </h2>
            :(
                <>
               
            <h2 className='text-center'>Your Cart Items</h2>
            <div className='col-md-8 shadow'>
                {products.map((item,i)=>(
                    <Fragment key={i}>
                        <hr/>
                        <div className='row d-flex align-items-center'>
                            <div className='col-2'>
                                <img src={item.image} alt={item.title} width='50'/>
                            </div>
                            <div className='col-3'>
                                <b><span>{item.title}</span></b>
                            </div>
                            <div className='col-2 text-warning'>
                                ${item.price}
                            </div>
                            <div className='col-3'>
                                <div className='d-flex'>
                                    <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)}>-</button>
                                    &nbsp;
                                    <input type='number' value={item.quantity} readOnly className='form-control border-0 text-center'/>
                                    &nbsp;
                                    <button className='btn btn-primary' onClick={()=>increaseQty(item.id)}>+</button>
                                </div>
                            </div>
                            <div className='col-1'>
                                <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id,item.title)}><FaTrash/></button>
                            </div>
                        </div>
                        <hr/>
                    </Fragment>
                ))}
            </div>
            <div className='col-md-3'>
                <div className='shadow p-2'>
                    <h5>Cart Summary</h5>
                    <hr/>
                    <span><b>Units:</b> {products.reduce((ac,item)=>(ac+Number(item.quantity)),0)} (Units)</span>
                    <br/>
                    <span><b>Total:</b> ${products.reduce((ac,item)=>(ac+item.quantity*item.price),0)}</span>
                    <hr/>
                    <button className='btn btn-warning'>Check Out</button>
                </div>
            </div>
            </>
            )
            }
        </div>
    </div>

    </>
  )
}

export default Cart