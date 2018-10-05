import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm'
import { connect } from 'react-redux'
import ErrorNotification from '../components/ErrorNotification'
import { addUser } from '../reducers/userReducer'
import { Redirect } from 'react-router'
import Loading from '../components/Loading'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            redirect: false,
            loading: false
        }
    }

    register = async (values) => {
        this.setState({ loading: true })
        if (values.password === values.password2) {
            delete values.password2
            await this.props.addUser(values)
            this.setState({ error: false, redirect: true })
        } else {
            this.setState({ error: 'Passwords don\'t match' })
            this.setState({ loading: false })
        }
    }

    render() {
        const { error, redirect, loading } = this.state
        if (redirect) {
            return (
                <Redirect to='/' />
            )
        }
        if (loading) {
            return <Loading />
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
