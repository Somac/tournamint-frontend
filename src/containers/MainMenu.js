import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href='/'>tournamint</a>
                    <button className='navbar-toggler' type='button'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/tournaments'>Tournaments</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MainMenu