import React from 'react'
import { HeaderContext } from '../../context/Context'
import { useContext } from 'react'
import { useEffect } from 'react'

const Settings = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle('Settings')
  })
  return (
    <div className='settings'>
      <h1>Settings</h1>
    </div>
  )
}

export default Settings
