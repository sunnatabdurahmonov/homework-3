import React from 'react'
import '../HeaderTickets/HeaderTickets.scss'
import sort from '../../../assest/sort.svg'
import filter from '../../../assest/filter.svg'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'

const HeaderTickets = () => {
  const {theme} = useContext(HeaderContext)
  return (
    <div className={`headerTickets ${theme === true ? 'header__light' : 'header__dark'}`}>
      <h2>All tickets</h2>
      <ul className='tickets-list'>
        <li className='tickets-item'>
          <img src={sort} alt="logo" />
          <p>Sort</p>
        </li>
        <li className='tickets-item'>
          <img src={filter} alt="logo" />
          <p>Filter</p>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTickets
