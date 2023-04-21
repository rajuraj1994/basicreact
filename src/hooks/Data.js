import React from 'react'

const Data = (props) => {
  return (
    <>
    <div className='col-md-3'>
        <h1 className='text-muted'>{props.myTitle}</h1>
        <p>{props.myBody}</p>
    </div>
    </>
  )
}

export default Data