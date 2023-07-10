import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Header } from '../header/Header'
import { Outlet } from 'react-router-dom'
import '../Layout/Layout.scss'
import { useContext } from 'react'
import { HeaderContext } from '../../context/Context'

export const Layout = () => {
  const {theme} =  useContext(HeaderContext)
  return (
    <div className={`layout ${theme === false ? 'header__light' : 'header__dark'}`}>
        <Sidebar/>
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
