import React from 'react'
import '../Ticketsuser/TicketsUser.scss'
import { Link } from 'react-router-dom'
import Button1 from './Button1/Button1'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'
const TicketsUser = ({imglink,title,text,title1,title2,text1,text2,btn}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <>
     <td className={`td-list ${theme === false ? 'header__light' : 'header__dark'}`}>
      <td className='user'>
      <img src={imglink} alt={title} />
      <td className="user-text">
        <h3 className='user-title'>{title}</h3>
        <p className='user-text-disc'>{text}</p>
      </td>
      </td>
      </td>

      
      <td className={`user-td ${theme === false ? 'header__light' : 'header__dark'}`}>
        <h5 className='user-title'>{title1}</h5>
        <p className='user-text-disc'>{text1}</p>
      </td>

      <td className={`user-td ${theme === false ? 'header__light' : 'header__dark'}`}>
        <h5 className='user-title'>{title2}</h5>
        <p className='user-text-disc'>{text2}</p>
      </td>
      <td className={` ${theme === false ? 'header__light' : 'header__dark'}`}>
        {btn}
      </td>
    </>
  )
}

export default TicketsUser
