import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Url } from '../../../Url'
import '../PostSingle/PostSingle.scss'
import Comment from '../Comment/Comment'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostSingle = () => {
  const navigate = useNavigate()
  const [state, setState]  = useState({
    isFetched: false,
    error:null,
    data:{}
})
  const {postId} = useParams()


  useEffect(() => {
    axios.get(`${Url}/posts/${postId}`)
    .then(data => {
        setState({
            isFetched:true,
            error:false,
            data :data.data
        })
    })
    .catch(err => {
        setState({
            isFetched:false,
            error:err,
            data:{}
        })
    })
})

const handleClose = () => {
  navigate(-1)
}
  return (
    <div>
      <div>
    {
      (state.isFetched && Object.values(state.data).length) ? (
        <div>
            <i id='icons' onClick={handleClose} class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
           <h2 className='h1'>Post</h2>
          <div className="user-card ">
          <h1>{state.data?.title}</h1>
          <p>{state.data?.body}</p>
          </div>
          <h2 className='h1 comment-title'>Comments:</h2>
         <div className="comment-menu">
         <Comment/>
         </div>
        </div>
      ): <div className="loader loading"></div>
    }
      </div>
    </div>
  )
}

export default PostSingle
