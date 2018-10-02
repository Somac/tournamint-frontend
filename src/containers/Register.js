import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm'
import { connect } from 'react-redux'
import ErrorNotification from '../components/ErrorNotification'
import { addUser } from '../reducers/userReducer'
import { Redirect } from 'react-router'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            redirect: false
        }
    }

    register = async (values) => {
        console.log(values)
        if (values.password === values.password2) {
            delete values.password2
            await this.props.addUser(values)
            this.setState({ error: false, redirect: true })
        } else {
            this.setState({ error: 'Passwords don\'t match' })
        }
    }

    render() {
        const { error, redirect } = this.state
        if (redirect) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <React.Fragment>
                <h2 className='text-center my-5'>Rekisteröidy</h2>
                <ErrorNotification error={error} />
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-6 box'>
                        <RegisterForm onSubmit={this.register} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    { addUser }
)(Register)
