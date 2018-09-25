import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ link, text }) => {
    return (
        <p className='text-center'>
            <Link className='btn btn-light' to={link}>{text}</Link>
        </p>
    )
}

export default LinkButton