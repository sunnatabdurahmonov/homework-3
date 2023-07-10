import React, {  useState } from 'react'
import './CommentsModal.scss'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Url } from '../Url'
import axios from 'axios'
import { HeaderContext } from '../context/Context'
const CommentsModal = ({modalState,setModalState }) => {
  const {commentId} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)


  const [commentsState, setCommentsState]  = useState({
    isFetched: false,
    error:null,
    data:[]
})

  useEffect(() => {
     axios.get(`${Url}/comments`)
    .then(data => {
        setCommentsState({
            isFetched:true,
            error:false,
            data:data.data
        })
    })
    .catch(err => {
      setCommentsState({
            isFetched:false,
            error:err,
            data:[]
        })
    })
},[])


    const handleClose = () => {
        setModalState(false)
    }
  return (
    <div className={`modal ${modalState ? 'open' : ''}`}>
        <div className={`modal-menu ${theme === true ? 'header__light' : 'header__dark'}`}>
         <i onClick={handleClose}  class="fa-solid fa-xmark icon-1"></i>

         {
          <div className='comment'>
               <h2>{commentId?.name}</h2>
               <h5>{commentId?.email}</h5>
                <p>{commentId?.body}</p>
            </div>
         }
            </div>      
    </div>
  )
}

export default CommentsModal
