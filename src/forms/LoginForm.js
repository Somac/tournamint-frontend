import React from 'react'
import FormGroup from './FormGroup'
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup
                name='username'
                label='Käyttäjätunnus'
                type='text'
                component='input'
            />
            <FormGroup
                name='password'
                label='Salasana'
                type='password'
                component='input'
            />
            <button className='btn btn-primary'>Login</button>
        </form>
    )
}

export default LoginForm = reduxForm({
    form: 'login'
})(LoginForm)