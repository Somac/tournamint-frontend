import React, { Component } from 'react'
import NavLink from './NavLink'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RightNav = ({ user, clickHandler }) => {
  if (user === null) {
    return (
      <React.Fragment>
        <NavLink link='/register' name='Register' onClick={clickHandler} />
        <NavLink link='/login' name='Login' onClick={clickHandler} />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <NavLink link='/me' name='My profile' onClick={clickHandler} />
      <NavLink link='/logout' name='Logout' onClick={clickHandler} />
    </React.Fragment>
  )
}


class MainMenu extends Component {
  state = {
    visible: false
  }

  openNavBar = () => {
    this.setState({ visible: !this.state.visible })
  }

  closeNavBar = () => {
    this.setState({ visible: false })
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
              <NavLink link='/tournaments' name='Tournaments' onClick={this.closeNavBar} />
              <NavLink link='/teams' name='Teams' onClick={this.closeNavBar} />
              <NavLink link='/players' name='Players' onClick={this.closeNavBar} />
              {this.props.user === null ? '' :
                <React.Fragment>
                  <NavLink link='/leagues' name='Leagues' onClick={this.closeNavBar} />
                  <NavLink link='/games' name='Games' onClick={this.closeNavBar} />
                </React.Fragment>
              }
            </ul>
            <ul className='navbar-nav ml-auto'>
              <RightNav user={this.props.user} clickHandler={this.closeNavBar} />
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
