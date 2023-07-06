import React from 'react'
import '../card/card.scss'

const Cards = ({title2,title3}) => {
  return (
    <div>
      <div className="box">
        <h2>{title2}</h2>
        <p>{title3}</p>
      </div>
    </div>
  )
}

export default Cards
