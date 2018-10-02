import React from 'react'
import FormGroup from '../components/FormGroup'
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='username' label='Käyttäjätunnus' type='text' component={FormGroup} />
            <Field name='password' label='Salasana' type='password' component={FormGroup} />
            <button className='btn btn-primary'>Login</button>
        </form>
    )
}

export default LoginForm = reduxForm({
    form: 'login'
})(LoginForm)