import React, { useState } from 'react'
import './CommentsModal.scss'

const CommentsModal = ({modalState,setModalState }) => {


    const handleClose = () => {
        setModalState(false)
    }
  return (
    <div onClick={handleClose} className={`modal ${modalState ? 'open' :'' }`}>
        <div className="modal-menu">
            </div>      
    </div>
  )
}

export default CommentsModal
