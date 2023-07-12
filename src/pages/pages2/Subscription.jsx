import React from 'react'
import { HeaderContext } from '../../context/Context'
import { useEffect } from 'react'
import { languageData } from '../../Lang/Language'
import { useContext } from 'react'
const Subscription = () => {
  const {lang} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.subscriptions)
  })
  return (
    <div className='subsription '>
      <h1>{languageData[lang].sidebar.subscriptions}</h1>
    </div>
  )
}

export default Subscription
