import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Data from './Data'

const DataFetch = () => {
  const [posts, setPost] = useState([])
  const [limit,setLimit] = useState(8)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container-fluid'>
      <div className='row'>
        {
          posts.slice(0,limit).map((post,index) => (
            <Data key={index} myTitle={post.title} myBody={post.body} />
          ))
        }
        <center>
          {limit < posts.length && 
          <button className='btn btn-warning mb-3' onClick={()=>setLimit(limit+8)}>Show more</button>
          }
          &nbsp;&nbsp;&nbsp;
          {limit>8 && 
          <button className='btn btn-danger' onClick={()=>setLimit(limit-8)}>Show less</button>
          }
        </center>
      </div>
    </div>
  )
}

export default DataFetch