import React from 'react'
import './UsersCard.scss'
import { Link } from 'react-router-dom'

 export const UsersCard = ({title,body,id}) => {
  return (
    <Link to={`/posts/${id}`} className='user-card'>
      <h2>{title}</h2>
      <p>{body}</p>
    </Link>
  )
}

export default UsersCard
