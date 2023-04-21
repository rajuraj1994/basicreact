import React from 'react'

export const Third = () => {
  return (
    <>
    <h1>This is not a default export component</h1>
    </>
  )
}

export const Test=()=>(
    <h1>This is a single statement</h1>
)

export const LoginForm=()=>{
  return(
    <form>
      <label htmlFor='email'>Email</label>
      <br/>
      <input type='email' id='email' placeholder='your email'/>
      <br/>
      <label htmlFor='pwd'>Password</label>
      <br/>
      <input type='password' id='password' placeholder='*********'/>
      <br/>  
      <button>Login</button>
    </form>
  )
}