import React from 'react'
import '../HeaderTickets/HeaderTickets.scss'
import sort from '../../../assest/sort.svg'
import filter from '../../../assest/filter.svg'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'
import { languageData } from '../../../Lang/Language'

const HeaderTickets = () => {
  const {theme} = useContext(HeaderContext)
  const {lang} = useContext(HeaderContext)
  return (
    <div className={`headerTickets ${theme === false ? 'header__light' : 'header__dark'}`}>
      <h2>{languageData[lang].sidebar.allTickets}</h2>
      <ul className='tickets-list'>
        <li className='tickets-item'>
          <img src={sort} alt="logo" />
          <p>{languageData[lang].sidebar.sort}</p>
        </li>
        <li className='tickets-item'>
          <img src={filter} alt="logo" />
          <p>{languageData[lang].sidebar.filter}</p>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTickets
