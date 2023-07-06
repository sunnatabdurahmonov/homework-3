import React from 'react'
import '../SidebarLink/SidebarLink.scss'
import { NavLink } from 'react-router-dom'


export const SidebarLink = ({imglink, title, link}) => {
  return (
    <div>
      <NavLink className='navlink' to={link}>
        <img src={imglink} alt={title} />
        <h3>{title}</h3>
      </NavLink>
    </div>
  )
}

export default SidebarLink
