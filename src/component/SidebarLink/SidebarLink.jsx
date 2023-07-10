import React from 'react'
import '../SidebarLink/SidebarLink.scss'
import { NavLink } from 'react-router-dom'


export const SidebarLink = ({imglink, title, link}) => {
  return (
    <div className='navlik-class'>
      <NavLink className={({isActive}) => `navlink ${isActive ? 'active' : ''}` } to={link}>
        <img src={imglink} alt={title} />
        <h3>{title}</h3>
      </NavLink>
    </div>
  )
}

export default SidebarLink
