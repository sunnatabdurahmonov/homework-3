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
import { useContext } from 'react'
import { HeaderContext } from '../../context/Context'
import {languageData} from '../../Lang/Language'
export const Sidebar = () => {
  const {lang} = useContext(HeaderContext)
  return (
    <div className='sidebar'>
        <div className="sidebar-menu">
            <img src={logo} alt="logo" />
            <h1>{languageData[lang].sidebar.dashboard}</h1>
        </div>

        <div className="ul-menu">
            
        <ul className='link-list'>
          <SidebarLink
                imglink={logo1}
                title={languageData[lang].sidebar.overview}
                link='/'
            />
               <SidebarLink
                imglink={logo2}
                title={languageData[lang].sidebar.tickets}
                link='/tickets'
            />
               <SidebarLink
                imglink={logo3}
                title={languageData[lang].sidebar.posts}
                link='/posts'
            />
              <SidebarLink
                imglink={logo4}
                title={languageData[lang].sidebar.comments}
                link='/comments'
            />
               <SidebarLink
                imglink={logo4}
                title={languageData[lang].sidebar.contacts}
                link='/contact'
            />
             
               <SidebarLink
                imglink={logo5}
                title={languageData[lang].sidebar.agents}
                link='/agents'
            />
               <SidebarLink
                imglink={logo6}
                title={languageData[lang].sidebar.articles}
                link='/articles'
            />
          </ul>

          <div className="div"></div>

          <ul className='link-list2'>
          <SidebarLink
                imglink={logo7}
                title={languageData[lang].sidebar.settings}
                link='/setting'
            />
              <SidebarLink
                imglink={logo8}
                title={languageData[lang].sidebar.subscriptions}
                link='/subscription'
            />

          </ul>
        </div>
    </div>
  )
}
