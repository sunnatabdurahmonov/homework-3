import '../tickets/tickets.scss'
import HeaderTickets from './HeaderTickets/HeaderTickets'
import TicketsUser from './Ticketsuser/TicketsUser'
import user1 from '../../assest/user1.png'
import user2 from '../../assest/user2.png'
import user3 from '../../assest/user3.png'
import user4 from '../../assest/user4.png'
import user5 from '../../assest/user5.png'
import user6 from '../../assest/user6.png'
import user7 from '../../assest/user7.png'
import user8 from '../../assest/user8.png'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'
import { languageData } from '../../Lang/Language'
import Button from './Ticketsuser/button/Button'



const Tickets = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)
  const {lang} = useContext(HeaderContext)

  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.tickets)
  })

  return (
    <div>
      <div className="container">
      <div className="ticketsBox tr">
        <HeaderTickets/> 
        <table id='user_list'>
            <thead className={` ${theme === false ? 'header__light' : 'header__dark'}`}>
                <tr className='tr2'>
                    <th>{languageData[lang].sidebar.ticketsDetl}</th>
                    <th>{languageData[lang].sidebar.costumerName}</th>
                    <th>{languageData[lang].sidebar.date}</th>
                    <th>{languageData[lang].sidebar.priority}</th>
                </tr>
            </thead>

            <tbody id="tbody">
            <tr className='tr'>
            <TicketsUser
            imglink={user1}
            title={languageData[lang].sidebar.title}
            text={languageData[lang].sidebar.text}
            title1={languageData[lang].sidebar.name}
            text1='24.05.2019'
            title2='May 26, 2019'
            text2='6:30 PM'
            btn={<Button type='danger'>
              {languageData[lang].sidebar.button}
            </Button>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user2}
            title={languageData[lang].sidebar.title1}
            text={languageData[lang].sidebar.text}
            title1={languageData[lang].sidebar.name1}
            text1='24.05.2019'
            title2='May 26, 2019'
            text2='8:00 AM'
            btn={<Button type='warning'>
              {languageData[lang].sidebar.button2}
            </Button>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user3}
            title={languageData[lang].sidebar.title2}
            text={languageData[lang].sidebar.text}
            title1={languageData[lang].sidebar.name2}
            text1=' 24.05.2019'
            title2='May 26, 2019'
            text2='7:30 PM'
            btn={<Button type='danger'>
              {languageData[lang].sidebar.button}
            </Button>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user4}
            title={languageData[lang].sidebar.title3}
            text={languageData[lang].sidebar.text1}
            title1={languageData[lang].sidebar.name3}
            text1='24.05.2019'
            title2='May 25, 2019'
            text2='5:00 PM'
            btn={<Button type='success'>
              {languageData[lang].sidebar.button3}
            </Button>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user5}
            title={languageData[lang].sidebar.title4}
            text={languageData[lang].sidebar.text1}
            title1={languageData[lang].sidebar.name4}
            text1='24.05.2019'
            title2='May 25, 2019'
            text2='4:00 PM'
            btn={<Button type='danger'>
              {languageData[lang].sidebar.button}
            </Button>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user6}
            title={languageData[lang].sidebar.title5}
            text={languageData[lang].sidebar.text2}
            title1={languageData[lang].sidebar.name5}
            text1='23.05.2019'
            title2='May 25, 2019'
            text2='2:00 PM'
            btn={<Button type='danger'>
              {languageData[lang].sidebar.button}
            </Button>}
            />
            </tr>
       
            <tr className='tr'>
            <TicketsUser
            imglink={user7}
            title={languageData[lang].sidebar.title6}
            text={languageData[lang].sidebar.text3}
            title1={languageData[lang].sidebar.name6}
            text1='22.05.2019'
            title2='May 25, 2019'
            text2='11:30 AM'
            btn={<Button type='warning'>
            {languageData[lang].sidebar.button2}
          </Button>}
            />
            </tr>
       
            <tr className='tr'>
            <TicketsUser
            imglink={user8}
            title={languageData[lang].sidebar.title7}
            text={languageData[lang].sidebar.text4}
            title1={languageData[lang].sidebar.name7}
            text1='21.05.2019'
            title2='May 24, 2019'
            text2='1:00 PM'
            btn={<Button type='success'>
            {languageData[lang].sidebar.button3}
          </Button>}
            />
            </tr>

            </tbody>

        </table>  
      </div>
      </div>
    </div>
  )
}

export default Tickets
