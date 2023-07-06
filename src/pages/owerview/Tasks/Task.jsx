import React from 'react'
import '../Tasks/Task.scss'
import plus from '../../../assest/plus.png'

const Task = () => {
  return (
    <div>
          <div className="box3">
       <div className="group-menu">
       <div className="group">
            <h4>Tasks</h4>
            <p>Today</p>
        </div>
        <div className="view">
            <p>View details</p>
        </div>
       </div>

       <div className="waiting">
        <h4 id='w-h4'>Create new task</h4>
        <img src={plus} alt="logo" />
       </div>
       <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>Finish ticket update</p>
        </div>
      <div className="btn">
        <button className='yellow'>Urgent</button>
      </div>
      </div>
      <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>Finish ticket update</p>
        </div>
      <div className="btn">
        <button className='green'>NEW</button>
      </div>
      </div>
      <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>Finish ticket update</p>
        </div>
      <div className="btn">
        <button className='default'>Default</button>
      </div>
      </div>

      </div>
      
    </div>
  )
}

export default Task
