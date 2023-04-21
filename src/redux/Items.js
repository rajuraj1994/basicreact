import React from 'react'
import { useDispatch } from 'react-redux'

const Items = () => {
    const dispatch=useDispatch()

    const add=()=>(
        dispatch({type:'ADD_TO_CART'})
    )

    const remove=()=>(
        dispatch({type:'REMOVE_FROM_CART'})
    )
  return (
    <>
    <button className='btn btn-primary' onClick={add}>Add to Cart</button>
    &nbsp;&nbsp;
    <button className='btn btn-danger' onClick={remove}>Remove from Cart</button>
    </>
  )
}

export default Items