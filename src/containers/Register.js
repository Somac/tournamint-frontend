import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm'

class Register extends Component {
    register = (values) => {
        console.log(values)
    }
    render() {
        return (
            <div>
                <h2 className='text-center my-5'>Rekisteröidy</h2>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-6 box'>
                        <RegisterForm onSubmit={this.register} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register