import React, { Component } from 'react'
import NavLink from './NavLink'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RightNav = ({ user }) => {
    if (user === null) {
        return (
            <React.Fragment>
                <NavLink link='/register' name='Register' />
                <NavLink link='/login' name='Login' />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <NavLink link='/me' name='My profile' />
            <NavLink link='/logout' name='Logout' />
        </React.Fragment>
    )
}


class MainMenu extends Component {
    state = {
        visible: false
    }

    openNavBar = () => {
        this.setState({ visible: !this.state.visible })
        console.log(this.state.visible)
    }

    render() {
        const showWhenVisible = { display: this.state.visible ? 'block' : 'none' }
        const changed = this.state.visible ? 'change' : ''
        return (
            <nav className='navbar navbar-expand-lg navbar-tournamint'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>tournamint</Link>
                    <button className={`navbar-toggler ${changed}`} type='button' onClick={this.openNavBar}>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>
                    </button>
                    <div className='collapse navbar-collapse' style={showWhenVisible}>
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
