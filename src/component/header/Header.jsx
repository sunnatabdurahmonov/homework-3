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
  const {lang, setLang } = useContext(HeaderContext)

  const handleChangeLang = (e) => {
    setLang(e.target.value)
  }
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
          <select defaultValue={lang } onChange={handleChangeLang} className='select'>
            <option value="en">en</option>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
          </select>
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
