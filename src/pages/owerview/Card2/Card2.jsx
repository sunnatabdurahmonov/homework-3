import React from 'react'
import '../Card2/Card2.scss'

const Card2 = ({title4,title5}) => {
  return (
    <div>
      <div className="box2">
        <h2>{title4}</h2>
        <p>{title5}</p>
      </div>
    </div>
  )
}

export default Card2
