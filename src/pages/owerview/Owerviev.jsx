import React from 'react'
import Cards from './card/Cards'
import '../owerview/owerview.scss'
import Card2 from './Card2/Card2'
import Unresolved from './Unresolved/Unresolved'
import Task from './Tasks/Task'
import { useContext } from 'react'
import { HeaderContext } from '../../context/Context'
import { useEffect } from 'react'
import {languageData} from '../../Lang/Language'




const Owerviev = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)
  const {lang} = useContext(HeaderContext)

  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.overview)
  })
  return (
    <div className='footer'>
      <div className="container">
      <div className="box-menu">
        <Cards
        title2={languageData[lang].overview.title2}
        title3='60'
        />
           <Cards
        title2={languageData[lang].overview.title3}
        title3='16'
        />
           <Cards
        title2={languageData[lang].overview.title4}
        title3='43'
        />
           <Cards
        title2={languageData[lang].overview.title5}
        title3='64'
        />
      </div>

      <div className="today-menu">
      <div className="today">
        <div className="today-list">
        <div className="trends">
       <h3>{languageData[lang].overview.today}</h3>
        <p>as of 25 May 2019, 09:41 PM</p>
       </div>
       <div className="yesterday">
        <div className="yes-1">
          <div className="div-1"></div>
          <p>{languageData[lang].overview.today1}</p>
        </div>  <div className="yes-1">
          <div className="div-2"></div>
          <p>{languageData[lang].overview.yesterday}</p>
        </div>
       </div>
        </div>
      </div>

      <div className="card-menu">
      <Card2
       title4={languageData[lang].overview.resolved}
       title5='449'
       />
         <Card2
       title4={languageData[lang].overview.received}
       title5='426'
       />
         <Card2
       title4={languageData[lang].overview.average}
       title5='33m'
       />
         <Card2
       title4={languageData[lang].overview.average2}
       title5='3h 8m'
       />
          <Card2
       title4={languageData[lang].overview.resolution}
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
