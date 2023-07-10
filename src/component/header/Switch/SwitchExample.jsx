import React from 'react'
import '../Switch/switch.scss'
import { useContext } from 'react'
import { HeaderContext } from '../../../context/Context'

const SwitchExample = () => {

  const {theme,setTheme} = useContext(HeaderContext)

  


  return (
    <div>
<label class="switch">
  <input onClick={() => setTheme(!theme)} type="checkbox"/>
  <span class="slider round"></span>
</label>
      
    </div>
  )
}

export default SwitchExample
