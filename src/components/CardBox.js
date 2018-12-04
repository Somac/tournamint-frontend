import React from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config'

const CardBox = ({ link, name, text, logo, table, size }) => {
  if (size === undefined) {
    size = 4
  }
  return (
    <div className={`col-12 col-md-${size} my-3`}>
      <div className='card box'>
        {logo ?
          <img className="card-img-top mx-auto" src={`${apiUrl}/${logo}`} alt={name}></img>
          : <div></div>
        }
        <div className='card-body'>
          <h5 className='card-title text-center'>{name}</h5>
          <p className='card-text text-center'><em>{text}</em></p>
          {table ? table : ''}
          <Link className='btn btn-primary mx-auto d-flex' to={link}>Lue lisää</Link>
        </div>
      </div>
    </div>
  )
}

export default CardBox
