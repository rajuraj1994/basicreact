import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
    const[name,setName]=useState('')
    const dispatch=useDispatch()

    const change=()=>{
        dispatch({type:'CHANGE_NAME',payload:name})
    }
  return (
    <>
    <input type='text' placeholder='Type Student Name' onChange={(e)=>setName(e.target.value)}/>
    &nbsp;
    <button className='btn btn-primary' onClick={change}>Change Student</button>
    </>
  )
}

export default StudentForm