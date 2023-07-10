import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'

const Articles = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle('Articles')
  })
  return (
    <div className='articles'>
      <h1>Articles</h1>
    </div>
  )
}

export default Articles
