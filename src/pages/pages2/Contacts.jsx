import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'

const Contacts = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle('Contacts')
  })
  return (
    <div className='contact'>
      <h1>Contacts</h1>
    </div>
  )
}

export default Contacts
