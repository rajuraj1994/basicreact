import React,{useState,useEffect} from 'react'

const Effect = () => {
    const[count,setCount]=useState(1)
    const[num,setNum]=useState(5)

    useEffect(()=>{
        alert('this is a page effect')
    },[count])
  return (
    <>
    <h2>{count}</h2>
    <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increase by 1</button>
    <hr/>
    <h2>{num}</h2>
    <button className='btn btn-success' onClick={()=>setNum(num+3)}>Increase by 3</button>
    </>
  )
}

export default Effect