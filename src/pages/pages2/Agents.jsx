import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'
import { languageData } from '../../Lang/Language'

const Agents = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  const {lang} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.agents)
  })
  return (
    <div className='agents'>
      <h1>{languageData[lang].sidebar.agents}</h1>
    </div>
  )
}

export default Agents
