import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Header } from '../header/Header'
import { Outlet } from 'react-router-dom'
import '../Layout/Layout.scss'

export const Layout = () => {
  return (
    <div className='layout'>
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
