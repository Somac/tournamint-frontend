import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm'

class LoginPage extends Component {

    login = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h2 className='text-center my-5'>Kirjaudu sisään</h2>
                <LoginForm onSubmit={this.login} />
            </div>
        )
    }
}

export default LoginPage
