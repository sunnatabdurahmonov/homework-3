import React from 'react'
import '../Sidebar/Sidebar.scss'
import logo from '../../assest/logo.svg'
import SidebarLink from '../SidebarLink/SidebarLink'
import logo1 from '../../assest/logo1.svg'
import logo2 from '../../assest/logo2.svg'
import logo3 from '../../assest/logo3.svg'
import logo4 from '../../assest/logo4.svg'
import logo5 from '../../assest/logo5.svg'
import logo6 from '../../assest/logo6.svg'
import logo7 from '../../assest/logo7.svg'
import logo8 from '../../assest/logo8.svg'
import Tickets from '../../pages/tickets/Tickets'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-menu">
            <img src={logo} alt="logo" />
            <h1>Dashboard Kit</h1>
        </div>

        <div className="ul-menu">
            
        <ul className='link-list'>
          <SidebarLink
                imglink={logo1}
                title='Overview'
                link='/'
            />
               <SidebarLink
                imglink={logo2}
                title='Tickets'
                link='/tickets'
            />
               <SidebarLink
                imglink={logo3}
                title='Posts'
                link='/posts'
            />
               <SidebarLink
                imglink={logo4}
                title='Contacts'
                link='contact'
            />
               <SidebarLink
                imglink={logo5}
                title='Agents'
                link='agents'
            />
               <SidebarLink
                imglink={logo6}
                title='Articles'
                link='articles'
            />
          </ul>

          <div className="div"></div>

          <ul className='link-list2'>
          <SidebarLink
                imglink={logo7}
                title='Settings'
                link='setting'
            />
              <SidebarLink
                imglink={logo8}
                title='Subscription'
                link='subscription'
            />

          </ul>
        </div>
    </div>
  )
}
