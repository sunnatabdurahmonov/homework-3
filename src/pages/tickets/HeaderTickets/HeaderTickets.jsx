import React from 'react'
import '../HeaderTickets/HeaderTickets.scss'
import sort from '../../../assest/sort.svg'
import filter from '../../../assest/filter.svg'

const HeaderTickets = () => {
  return (
    <div className='headerTickets'>
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
