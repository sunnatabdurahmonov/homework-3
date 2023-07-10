import React from 'react'
import { HeaderContext } from '../../context/Context'
import { useContext } from 'react'
import { useEffect } from 'react'

const Subscription = () => {
  const {theme} = useContext(HeaderContext)
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle('Subscriptions')
  })
  return (
    <div className='subsription '>
      <h1>Subscription</h1>
    </div>
  )
}

export default Subscription
