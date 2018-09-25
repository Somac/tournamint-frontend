import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm } from 'redux-form';

let RegisterForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='name'
                label='Nimi *'
                type='text'
                component='input'
            />
            <FormGroup
                name='username'
                label='Käyttäjätunnus *'
                type='text'
                component='input'
            />
            <FormGroup
                name='password'
                label='Salasana *'
                type='password'
                component='input'
            />
            <FormGroup
                name='password'
                label='Salasana uudestaan *'
                type='password2'
                component='input'
            />
            <button className='btn btn-primary'>Register</button>
        </form>
    )
}

export default RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)