import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'

const Agents = () => {
  const {setHeaderTitle} = useContext(HeaderContext)
  useEffect(() => {
    setHeaderTitle('Agents')
  })
  return (
    <div className='agents'>
      <h1>Agents</h1>
    </div>
  )
}

export default Agents
