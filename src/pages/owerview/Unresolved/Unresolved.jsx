import React from 'react'
import '../Unresolved/Unresolved.scss'

const Unresolved = () => {
  return (
    <div>
      <div className="box3">
       <div className="group-menu">
       <div className="group">
            <h4>Unresolved tickets</h4>
            <p>Group: Support</p>
        </div>
        <div className="view">
            <p>View details</p>
        </div>
       </div>

       <div className="waiting">
        <h4>Waiting on Feature Request</h4>
        <p>4238</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>Awaiting Customer Response</h4>
        <p>1005</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>Awaiting Developer Fix</h4>
        <p>914</p>
       </div>
       <div className="div-4"></div>
       <div className="waiting">
        <h4>Pending</h4>
        <p>281</p>
       </div>
      </div>
    </div>
  )
}

export default Unresolved
