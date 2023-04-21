import React from 'react'
import './first.css';
import Nav from './Nav';
import { LoginForm } from './Third';
const First = () => {
  return (
    <>
    <Nav/>
    <h1 className='title'>Hello</h1>
    <h2 className='mini-title'>React Class</h2>
    <img src='/images/a.jpg' alt='test image' width={'400'}/>
    <LoginForm/>
    </>
  )
}

export default First