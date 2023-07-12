import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'
import { languageData } from '../../Lang/Language'

const Contacts = () => {
  const {lang} = useContext(HeaderContext)
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.contacts)
  })
  return (
    <div className='contact'>
      <h1>{languageData[lang].sidebar.contacts}</h1>
    </div>
  )
}

export default Contacts
