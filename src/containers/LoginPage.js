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
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-6 box'>
                        <LoginForm onSubmit={this.login} />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
