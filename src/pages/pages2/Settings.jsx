import React from 'react'
import { HeaderContext } from '../../context/Context'
import { useContext } from 'react'
import { useEffect } from 'react'
import { languageData } from '../../Lang/Language'

const Settings = () => {
  const {lang} =  useContext(HeaderContext)
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.settings)
  })
  return (
    <div className='settings'>
      <h1>{languageData[lang].sidebar.settings}</h1>
    </div>
  )
}

export default Settings
