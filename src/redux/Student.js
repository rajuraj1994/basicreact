import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const name=useSelector(store=>store.student)
  return (
    <>
    <h1 className='text-secondary'>
        The student name is {name.student_name}
    </h1>
    </>
  )
}

export default Student