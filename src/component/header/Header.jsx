import React from 'react'
import '../header/Header.scss'
import search from '../../assest/search.svg'
import logo2 from '../../assest/new.svg'
import jones from '../../assest/jones.svg'

export const Header = () => {
  return (
    <div>
        <header>
        <div className="container">

        <div className="nav">
            <div className="title">
                <h2>Overview</h2>
            </div>

         <ul className="nav-list">

         <li className="logo">
            <img src={search} alt="logo" />
            <img src={logo2} alt="logo" />
         </li>

         <li className="jones">
            <h2>Jones Ferdinand</h2>
            <img src={jones} alt="logo" />
         </li>

         </ul>

            </div>


        </div>
        </header>
    </div>
  )
}
