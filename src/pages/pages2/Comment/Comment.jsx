import React from 'react'
import '../Comment/Comment.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Url } from '../../../Url'
import { useContext } from 'react'
import { languageData } from '../../../Lang/Language'
import { HeaderContext } from '../../../context/Context'
import { useFetch } from '../../../hooks/useFetchData'

const Comment = () => {
    const {lang} = useContext(HeaderContext)


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
                    <h2><span>{languageData[lang].sidebar.nameIs}: </span>  {user.name}</h2>
                    <h4> <span>{languageData[lang].sidebar.email}:</span> {user.email}</h4>
                    <p> <span className='span-c'>{languageData[lang].sidebar.comments}:</span>  {user.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comment
