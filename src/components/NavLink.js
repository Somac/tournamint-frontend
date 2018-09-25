import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ link, name }) => {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to={link}>{name}</Link>
        </li>
    )
}

export default NavLink
