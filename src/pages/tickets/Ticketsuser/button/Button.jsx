import React from 'react'
import '../button/button.scss'

const Button = ({children, type}) => {
  return (
    <div>
      <button className={`btn ${type}`}>
        {children}
      </button>
    </div>
  )
}

export default Button
