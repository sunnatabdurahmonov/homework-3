import React from 'react'
import '../Tasks/Task.scss'
import plus from '../../../assest/plus.png'
import { useContext } from 'react'
import { languageData } from '../../../Lang/Language'
import { HeaderContext } from '../../../context/Context'

const Task = () => {
  const {lang} = useContext(HeaderContext)
  return (
    <div>
          <div className="box3">
       <div className="group-menu">
       <div className="group">
            <h4>{languageData[lang].overview.task}</h4>
            <p>{languageData[lang].overview.today1}</p>
        </div>
        <div className="view">
            <p>{languageData[lang].overview.view}</p>
        </div>
       </div>

       <div className="waiting">
        <h4 id='w-h4'>{languageData[lang].overview.create}</h4>
        <img src={plus} alt="logo" />
       </div>
       <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>{languageData[lang].overview.finish}</p>
        </div>
      <div className="btn">
        <button className='yellow'>{languageData[lang].overview.urget}</button>
      </div>
      </div>
      <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>{languageData[lang].overview.update}</p>
        </div>
      <div className="btn">
        <button className='green'>{languageData[lang].overview.new}</button>
      </div>
      </div>
      <div className="div-4"></div>

      <div className="waiting2">
        <div className="input">
        <input type="checkbox"/>
      <p>{languageData[lang].overview.update}</p>
        </div>
      <div className="btn">
        <button className='default'>{languageData[lang].overview.default}</button>
      </div>
      </div>

      </div>
      
    </div>
  )
}

export default Task
