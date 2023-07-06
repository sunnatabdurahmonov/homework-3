import React from 'react'
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
import Button1 from './Ticketsuser/Button1/Button1'
import Button2 from './Ticketsuser/Button2/Button2'
import Button3 from './Ticketsuser/Button3/Button3'

const Tickets = () => {
  return (
    <div>
      <div className="container">
      <div className="ticketsBox tr">
        <HeaderTickets/> 
        <table id="user_list">
            <thead>
                <tr className='tr2'>
                    <th>Ticket details</th>
                    <th>Customer name</th>
                    <th>Date</th>
                    <th>Priority</th>
                </tr>
            </thead>

            <tbody id="tbody">
            <tr className='tr'>
            <TicketsUser
            imglink={user1}
            title='Contact Email not Linked'
            text='Updated 1 day ago'
            title1='Tom Cruise'
            text1='on 24.05.2019'
            title2='May 26, 2019'
            text2='6:30 PM'
            btn={<Button1/>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user2}
            title='Adding Images to Featured Posts'
            text='Updated 1 day ago'
            title1='Matt Damone'
            text1='on 24.05.2019'
            title2='May 26, 2019'
            text2='8:00 AM'
            btn={<Button2/>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user3}
            title='When will I be charged this month?'
            text='Updated 1 day ago'
            title1='Robert Downey'
            text1='on 24.05.2019'
            title2='May 26, 2019'
            text2='7:30 PM'
            btn={<Button1/>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user4}
            title='Payment not going through'
            text='UUpdated 2 days ago'
            title1='Christian Bale'
            text1='on 24.05.2019'
            title2='May 25, 2019'
            text2='5:00 PM'
            btn={<Button3/>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user5}
            title='Unable to add replies'
            text='Updated 2 day ago'
            title1='Henry Cavil'
            text1='on 24.05.2019'
            title2='May 25, 2019'
            text2='4:00 PM'
            btn={<Button1/>}
            />
            </tr>
            <tr className='tr'>
            <TicketsUser
            imglink={user6}
            title='Downtime since last week'
            text='Updated 3 day ago'
            title1='Chris Evans'
            text1='on 23.05.2019'
            title2='May 25, 2019'
            text2='2:00 PM'
            btn={<Button3/>}
            />
            </tr>
       
            <tr className='tr'>
            <TicketsUser
            imglink={user7}
            title='Referral Bonus'
            text='Updated 4 day ago'
            title1='Sam Smith'
            text1='on 22.05.2019'
            title2='May 25, 2019'
            text2='11:30 AM'
            btn={<Button2/>}
            />
            </tr>
       
            <tr className='tr'>
            <TicketsUser
            imglink={user8}
            title='How do I change my password?'
            text='Updated 6 day ago'
            title1='Steve Rogers'
            text1='on 21.05.2019'
            title2='May 24, 2019'
            text2='1:00 PM'
            btn={<Button3/>}
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
