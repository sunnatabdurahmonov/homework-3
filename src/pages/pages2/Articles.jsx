import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'
import { languageData } from '../../Lang/Language'

const Articles = () => {
  const {lang} = useContext(HeaderContext) 
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle(languageData[lang].sidebar.articles)
  })
  return (
    <div className='articles'>
      <h1>{languageData[lang].sidebar.articles}</h1>
    </div>
  )
}

export default Articles
