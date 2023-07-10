import React from 'react'
import '../Post/Posts.scss'
import { useState } from 'react'
import { Url } from '../../Url'
import axios from 'axios'
import { UsersCard } from './UsersCard'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'


 const Posts = () => {
    const {setHeaderTitle} = useContext(HeaderContext)
    const [post, setPost]  = useState({
        isFetched: false,
        error:null,
        data:[]
    })


    useEffect(() => {
        setHeaderTitle('Posts')
       axios.get(`${Url}/posts`)
        .then(data => {
            setPost({
                isFetched:true,
                error:false,
                data:data.data
            })
        })
        .catch(err => {
            setPost({
                isFetched:false,
                error:err,
                data:[]
            })
        })
    })
  return (
    <div>
    <h2 className='h1'>Posts</h2>
 
    <div className='user-menu'>
      {
       (post.isFetched && post.data.length) ?  (
        post.data.map((info) => (
            <UsersCard
            title={info.title}
            body={info.body}
            key={info.id}
            id={info.id}
            />
        ))
       ):<div className='loader'></div>
      }
    </div>
        </div>
  )
}

export default Posts
