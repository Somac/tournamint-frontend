import React from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config'

const SmallCardBox = ({ link, shortHand, logo, gamerName }) => {
  return (
    <div className='col-6 col-md-2 my-3'>
      <Link to={link}>
        <div className='card box box-hover'>
          {logo ?
            <img className="card-img-top mx-auto" src={`${apiUrl}/${logo}`} alt={shortHand}></img>
            : ''
          }
          <div className='card-body'>
            <h5 className='card-title text-center'>{shortHand}</h5>
            <p className='text-center'>{gamerName}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SmallCardBox
