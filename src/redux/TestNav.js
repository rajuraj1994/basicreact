import React from 'react'
import Items from './Items'
import { useSelector } from 'react-redux'
import Student from './Student'
import StudentForm from './StudentForm'
const TestNav = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <h2 className='text-primary'>
        The number of item in the cart is {data.cartcount}
    </h2>
    <Items/>
    <Student/>
    <StudentForm/>
    </>
  )
}

export default TestNav