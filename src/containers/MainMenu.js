import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import { Link } from 'react-router-dom'

class MainMenu extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>tournamint</Link>
                    <button className='navbar-toggler' type='button'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <NavLink link='/tournaments' name='Tournaments' />
                            <NavLink link='/leagues' name='Leagues' />
                            <NavLink link='/games' name='Games' />
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <NavLink link='/login' name='Login' />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MainMenu
