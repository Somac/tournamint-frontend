import React from 'react'
import { Link } from 'react-router-dom'

const CardBox = ({ link, name, text, logo }) => {
    return (
        <div className='col-12 col-md-4 my-3'>
            <div className='card box'>
                {logo ?
                    <img className="card-img-top mx-auto" src={`http://localhost:3001/${logo}`} alt={name}></img>
                    : <div></div>
                }
                <div className='card-body'>
                    <h5 className='card-title text-center'>{name}</h5>
                    <p className='card-text text-center'>{text}</p>
                    <Link className='btn btn-primary mx-auto d-flex' to={link}>Lue lisää</Link>
                </div>
            </div>
        </div>
    )
}

export default CardBox
