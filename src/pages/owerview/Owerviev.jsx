import React from 'react'
import Cards from './card/Cards'
import '../owerview/owerview.scss'
import Card2 from './Card2/Card2'
import Unresolved from './Unresolved/Unresolved'
import Task from './Tasks/Task'
import { useContext } from 'react'
import { HeaderContext } from '../../context/Context'
import { useEffect } from 'react'




const Owerviev = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)

  useEffect(() => {
    setHeaderTitle('Overview')
  })
  return (
    <div className='footer'>
      <div className="container">
      <div className="box-menu">
        <Cards
        title2='Unresolved'
        title3='60'
        />
           <Cards
        title2='Overdue'
        title3='16'
        />
           <Cards
        title2='Open'
        title3='43'
        />
           <Cards
        title2='On hold'
        title3='64'
        />
      </div>

      <div className="today-menu">
      <div className="today">
        <div className="today-list">
        <div className="trends">
       <h3>Today’s trends</h3>
        <p>as of 25 May 2019, 09:41 PM</p>
       </div>
       <div className="yesterday">
        <div className="yes-1">
          <div className="div-1"></div>
          <p>Today</p>
        </div>  <div className="yes-1">
          <div className="div-2"></div>
          <p>Yesterday</p>
        </div>
       </div>
        </div>
      </div>

      <div className="card-menu">
      <Card2
       title4='Resolved'
       title5='449'
       />
         <Card2
       title4='Received'
       title5='426'
       />
         <Card2
       title4='Average first response time'
       title5='33m'
       />
         <Card2
       title4='Average response time'
       title5='3h 8m'
       />
          <Card2
       title4='Resolution within SLA'
       title5='94%'
       />
      </div>
      </div>

    <div className="footer">
    <Unresolved/>
    <Task/>
    </div>
      </div>
    </div>
  )
}

export default Owerviev
