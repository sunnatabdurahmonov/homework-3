import React from 'react'
import '../Unresolved/Unresolved.scss'
import { useContext } from 'react'
import { languageData } from '../../../Lang/Language'
import { HeaderContext } from '../../../context/Context'

const Unresolved = () => {
  const {lang} = useContext(HeaderContext)
  return (
    <div>
      <div className="box3">
       <div className="group-menu">
       <div className="group">
            <h4>{languageData[lang].overview.unresolved}</h4>
            <p>{languageData[lang].sidebar.group}</p>
        </div>
        <div className="view">
            <p>{languageData[lang].overview.view}</p>
        </div>
       </div>

       <div className="waiting">
        <h4>{languageData[lang].overview.waiting}</h4>
        <p>4238</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>{languageData[lang].overview.awaiting}</h4>
        <p>1005</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>{languageData[lang].overview.fix}</h4>
        <p>914</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>{languageData[lang].overview.pending}</h4>
        <p>281</p>
       </div>
      </div>
    </div>
  )
}

export default Unresolved
