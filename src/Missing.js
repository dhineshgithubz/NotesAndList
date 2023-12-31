import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div>
      <div className='row'>
        <div className='col col-md-12 display-3 text-center'>
          Sorry,the page you requested was not found &#128531;
        </div>
        <div className='row'>
          <div className='col col-md-4 col-xs-12 fs-3 text-center'>
            <Link to="/">Click here to goto  Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Missing
