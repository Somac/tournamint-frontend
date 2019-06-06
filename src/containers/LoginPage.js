import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../reducers/userReducer'
import { Redirect } from 'react-router'

class LoginPage extends Component {
  login = async (values) => {
    await this.props.login(values)
  }

  componentDidMount() {
    document.title = 'tournamint - Login'
  }


  render() {
    if (this.props.user !== null) {
      return (<Redirect to='/me' />)
    }
    return (
      <div>
        <h2 className='text-center my-5'>Login</h2>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-6 box'>
            <LoginForm onSubmit={this.login} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginPage)
