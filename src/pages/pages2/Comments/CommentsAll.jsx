import React from 'react'
import '../Comments/CommentAll.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Url } from '../../../Url'
import { Link } from 'react-router-dom'
import CommentsModal from '../../../CommentModal/CommentsModal'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'

const CommentsAll = () => {
    const {setHeaderTitle} = useContext(HeaderContext)
    const [modalState,setModalState] = useState(false)
    const {setCommentId} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)

    const HandleOpen = (comments) => {
        setModalState(true)
        setCommentId(comments)
    } 


    const [comments, setComments]  = useState({
        isFetched: false,
        error:null,
        data:[]
    })
    
    
      useEffect(() => {

        setHeaderTitle('Comments')

     axios.get(`${Url}/comments`)
        .then(data => {
            setComments({
                isFetched:true,
                error:false,
                data:data.data
            })
        })
        .catch(err => {
            setComments({
                isFetched:false,
                error:err,
                data:[]
            })
        })
    },[])
  return (
      
      <>
    <div className={`modal-list ${theme === false ? 'header__light' : 'header__dark'}`}>
    <CommentsModal modalState={modalState} setModalState={setModalState}/>
    </div>

    <div className='comments-all'>
        {
            (comments.isFetched && Object.values(comments.data).length) ? (
                comments.data.map((user) => (
                    <div className="user-card comment ">
                      <Link onClick={() => HandleOpen(user)} className='comments-link'><p> <span className='span-c'>Comments:</span>  {user.body}</p></Link>
                   </div>
                  
                  ))
                  ): <div className="loader"></div>
                  
                }
    </div>
                </>
  )
}

export default CommentsAll



