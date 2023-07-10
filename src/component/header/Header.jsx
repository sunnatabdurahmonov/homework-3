import React from 'react'
import '../header/Header.scss'
import search from '../../assest/search.svg'
import logo2 from '../../assest/new.svg'
import jones from '../../assest/jones.svg'
import { useContext } from 'react'
import { HeaderContext } from '../../context/Context'
import SwitchExample from './Switch/SwitchExample'

export const Header = () => {

  const {headerTitle} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)
  console.log(theme);

  return (
    <div>
        <header className='header'>
        <div className="container">

        <div className="nav">
            <div className="title">
                <h2>{headerTitle}</h2>
            </div>

         <ul className="nav-list">

         <li className="logo">
            <img src={search} alt="logo" />
            <img src={logo2} alt="logo" />
         </li>

         <li className="jones">
            <h2>Jones Ferdinand</h2>
            <img src={jones} alt="logo" />
            <SwitchExample/>
         </li>

         </ul>

            </div>


        </div>
        </header>
    </div>
  )
}
