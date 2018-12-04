import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ link, name, onClick }) => {
  return (
    <li className='nav-item'>
      <Link onClick={onClick} className='nav-link' to={link}>{name}</Link>
    </li>
  )
}

export default NavLink
