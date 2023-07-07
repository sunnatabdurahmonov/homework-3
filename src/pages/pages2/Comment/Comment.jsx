import React from 'react'
import '../Comment/Comment.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Url } from '../../../Url'
// import axios from 'axios'
const page = 1

const Comment = () => {


    const [comment, setComment]  = useState({
        isFetched: false,
        error:null,
        data:[]
    })
      const {postId} = useParams()
    
    
      useEffect(() => {
     fetch(`${Url}/comments?postId=${postId}`)
       .then((response) => response.json())
        .then(data => {
            // console.log(data);
            setComment({
                isFetched:true,
                error:false,
                data
            })
        })
        .catch(err => {
            setComment({
                isFetched:false,
                error:err,
                data:[]
            })
        })
    },[])
  return (
    <div>
        {
            comment.data.map((user) => (
                <div className="user-card comment">
                    <h2><span>Name: </span>  {user.name}</h2>
                    <h4> <span>Email: </span> {user.email}</h4>
                    <p> <span className='span-c'>Comments:</span>  {user.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comment
