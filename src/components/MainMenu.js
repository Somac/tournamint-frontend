import React, { Component } from 'react'
import NavLink from './NavLink'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RightNav = ({ user }) => {
    if(user === null) {
        return (
            <React.Fragment>
                <NavLink link='/register' name='Register' />
                <NavLink link='/login' name='Login' />
            </React.Fragment>
        )
    }
    return (
        <NavLink link='/logout' name='Logout' />
    )
}


class MainMenu extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-tournamint'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>tournamint</Link>
                    <button className='navbar-toggler' type='button'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <NavLink link='/tournaments' name='Tournaments' />
                            <NavLink link='/teams' name='Teams' />
                            <NavLink link='/leagues' name='Leagues' />
                            <NavLink link='/games' name='Games' />
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <RightNav user={this.props.user} />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps
)(MainMenu)
