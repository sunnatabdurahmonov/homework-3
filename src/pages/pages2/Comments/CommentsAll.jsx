import React from 'react'
import '../Comments/CommentAll.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Url } from '../../../Url'
import { Link } from 'react-router-dom'
import CommentsModal from '../../../CommentModal/CommentsModal'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'
import { languageData } from '../../../Lang/Language'
import { useFetch } from '../../../hooks/useFetchData'

const CommentsAll = () => {
    const {setHeaderTitle} = useContext(HeaderContext)
    const [modalState,setModalState] = useState(false)
    const {setCommentId} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)
    const {lang} = useContext(HeaderContext)
    const {data:comments} = useFetch({endpoint:'comments'})

    const HandleOpen = (comments) => {
        setModalState(true)
        setCommentId(comments)
    } 


    useEffect(() => {
        setHeaderTitle(languageData[lang].sidebar.comments)
    },)
    
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
                      <Link onClick={() => HandleOpen(user)} className='comments-link'><p> <span className='span-c'>{languageData[lang].sidebar.comments}:</span>  {user.body}</p></Link>
                   </div>
                  
                  ))
                  ): <div className="loader"></div>
                  
                }
    </div>
                </>
  )
}

export default CommentsAll



