import React from 'react'
import { Link } from 'react-router-dom'

const Tournament = ({ link, name, text }) => {
    return (
        <div className='col-12 col-md-4 my-3'>
            <div className='box'>
                <Link to={link}>{name}</Link>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Tournament
